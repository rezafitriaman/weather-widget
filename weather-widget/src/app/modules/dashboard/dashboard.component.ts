import { Component, Inject, OnInit } from '@angular/core';
import { EMPTY, Observable, catchError, map, tap } from 'rxjs';
import { DailyCardData, HourlyCardData, PrimaryCardData, SecondaryCardData } from 'src/app/model/cards-data';
import { DOCUMENT } from '@angular/common';


import { GeoCoding } from 'src/app/model/geo-coding';
import { WeatherData } from 'src/app/model/weather-data';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private window: Window | null;

  canNotFind: boolean = false;
  primaryCard$!: Observable<PrimaryCardData>;
  secondaryCard$!: Observable<SecondaryCardData[]>;
  hourlyCard$!: Observable<HourlyCardData[]>;
  dailyCard$!: Observable<DailyCardData[]>;

  getGeoAndWeatherData$!: Observable<WeatherData & GeoCoding>;
  isComplete: boolean = false;
  constructor(private weatherService: WeatherService, @Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
  }

  ngOnInit(): void {
    this.getPosition()
    .subscribe(position => {
      this.onSearchResult(null, position.coords.latitude, position.coords.longitude);
    })
  }

  onSearchResult(city?: string | null, lat?: number, lon?: number) {
    this.isComplete = false;
    this.getGeoAndWeatherData$ = this.weatherService.getGeoAndWeatherData({city, lat, lon})
    .pipe(
      catchError((_)=> {
        // if cannot find city
        this.canNotFind = true;
        return EMPTY
      }),
      tap(_ => {
        // if can find city
        this.canNotFind = false;
      })
    )

    this.primaryCard$ = this.getGeoAndWeatherData$
    .pipe(
      map((data: WeatherData & GeoCoding) => {
        return this.weatherService.getPrimaryCardData(data)
      }),
      tap(_ => {
        console.log('object');
        this.isComplete = true;
      })
    )
    
    this.secondaryCard$ = this.getGeoAndWeatherData$
    .pipe(
      map((data: WeatherData & GeoCoding) => {
        return this.weatherService.getSecondaryCardData(data)
      })
    )

    this.hourlyCard$ = this.getGeoAndWeatherData$
    .pipe(
      map((data: WeatherData & GeoCoding) => {
        return this.weatherService.getHourlyCardData(data)
      })
    )

    this.dailyCard$ = this.getGeoAndWeatherData$
    .pipe(
      map((data: WeatherData & GeoCoding) => {
        return this.weatherService.getDailyCardData(data)
      })
    )
  }

  getPosition(): Observable<any> {
    return Observable.create((observer: any) => {
      window.navigator.geolocation.getCurrentPosition(position => {
        observer.next(position);
        observer.complete();
      },
        error => observer.error(error));
    });
  }
}