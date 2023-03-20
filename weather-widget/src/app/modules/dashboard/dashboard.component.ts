import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Observable, Subject, catchError, map, takeUntil, tap } from 'rxjs';
import { DailyCardData, HourlyCardData, PrimaryCardData, SecondaryCardData } from 'src/app/model/cards-data';
import { DOCUMENT } from '@angular/common';

import { GeoCoding, SearchGeoCoding } from 'src/app/model/geo-coding';
import { WeatherData } from 'src/app/model/weather-data';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private window: Window | null;

  primaryCard$!: Observable<PrimaryCardData>;
  secondaryCard$!: Observable<SecondaryCardData[]>;
  hourlyCard$!: Observable<HourlyCardData[]>;
  dailyCard$!: Observable<DailyCardData[]>;
  getGeoAndWeatherData$!: Observable<WeatherData & GeoCoding>;
  componentDestroyed$: Subject<boolean> = new Subject();

  canNotFind: boolean = false;
  isComplete: boolean = false;
  
  constructor(private weatherService: WeatherService, @Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
  }

  ngOnInit(): void {
    //get geolocation from browser navigator
    this.getPosition()
    .pipe(
      takeUntil(this.componentDestroyed$)
    )
    .subscribe({
      next: (position) => this.onSearchResult({city:null, lat: position.coords.latitude, lon: position.coords.longitude}),
      error: (e) => console.error(e)
    });    
  }

  onSearchResult({city, lat, lon}: SearchGeoCoding) {
    this.isComplete = false;
    this.getGeoAndWeatherData$ = this.weatherService.getGeoAndWeatherData({city, lat, lon})
    .pipe(
      catchError((_)=> {
        // if cannot find city
        this.canNotFind = true;
        return EMPTY;
      }),
      tap(_ => {
        // if can find city
        this.canNotFind = false;
      })
    );

    this.primaryCard$ = this.getGeoAndWeatherData$
    .pipe(
      map((data: WeatherData & GeoCoding) => {
        return this.weatherService.getPrimaryCardData(data);
      }),
      tap(_ => {
        // show content
        this.isComplete = true;
      })
    );
    
    this.secondaryCard$ = this.getGeoAndWeatherData$
    .pipe(
      map((data: WeatherData & GeoCoding) => {
        return this.weatherService.getSecondaryCardData(data)
      })
    );

    this.hourlyCard$ = this.getGeoAndWeatherData$
    .pipe(
      map((data: WeatherData & GeoCoding) => {
        return this.weatherService.getHourlyCardData(data)
      })
    );

    this.dailyCard$ = this.getGeoAndWeatherData$
    .pipe(
      map((data: WeatherData & GeoCoding) => {
        return this.weatherService.getDailyCardData(data)
      })
    );
  }

  getPosition(): Observable<any> {
    // fix .create with the new one
    return Observable.create((observer: any) => {
      // if no window obj show modal/snackbar that geolocation cannot be loaded
      if(!this.window) return;

      this.window.navigator.geolocation.getCurrentPosition(position => {
        observer.next(position);
        observer.complete();
      },
        error => observer.error(error));
    });
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }
}