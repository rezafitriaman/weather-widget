import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Current, Daily, Icon, Icon_map, WeatherData } from '../model/weather-data';
import { GeoCoding } from '../model/geo-coding';
import { EMPTY, Observable, catchError, map, of, share, switchMap, tap } from 'rxjs';
import { reverse } from 'dns';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  api: string = 'd8c1aa5be946a27019e8162f742ed5c2';

  constructor(private http: HttpClient) { }

  getGeoCoding({city, lat, lon}: {city?: string | null, lat?: number, lon?: number}) {
    if(city) {
      return this.http.get<GeoCoding[]>(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1`);
    }
    // if no city is provided get do de reverse mode
    return this.http.get<GeoCoding[]>(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1`);
  }

  getWeatherData(lat: number, lon: number) {
    return this.http.get<WeatherData>(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric`)
  }

  getGeoAndWeatherData({city, lat, lon}: {city?: string | null, lat?: number, lon?: number}): Observable<WeatherData & GeoCoding> {
    return this.getGeoCoding({city, lat, lon})
    .pipe(
      map((geoCodingDatas: GeoCoding[]) => {
        return geoCodingDatas[0];
      }),
      switchMap(geoCodingData => {
        return this.getWeatherData(geoCodingData.lat, geoCodingData.lon)
        .pipe(
          map((weatherData: WeatherData) => {
            // combine geoCodingData and weatherData
            return {
              ...geoCodingData,
              ...weatherData
            } ;
          }),
          tap(data => {
            console.log(data);
          })
        )
      }),
      share()
    )
  }

  getPrimaryCardData(data: WeatherData & GeoCoding) {
    return {
      name: data.name,
      timezone: data.timezone,
      temp: data.current.temp,
      feels_like: data.current.feels_like,
      description: data.current.weather,
      icon: data.current.weather,
      dt: data.current.dt
    };
  }

  getSecondaryCardData(data: WeatherData & GeoCoding) {
    return [
      {
        date: [
          {value: data.current.sunrise, name: 'sunrise'},
          {value: data.current.sunset, name: 'sunset'}
        ]
      },
      {
        values: [
          {value: data.current.clouds, u: '%', name: 'cloudiness'},
          {value: data.current.wind_gust ? data.current.wind_gust : 0, u: 'metre/sec', name: 'wind gust'}
        ]
      },
      {
        values: [
          {value:data.current.humidity, u: '%', name: 'humidity'},
          {value: data.current.pressure, u: 'hPa', name: 'pressure'}
        ]
      },
      {
        values: [
          {value :data.current.visibility / 1000, u: 'km', name: 'visibility'},
          {value: data.current.uvi, u: '', name: 'UV index'}
        ]
      },
      {
        values: [
          {value: data.current.wind_deg, u: 'degrees', name: 'wind direction'},
          {value: data.current.wind_speed, u: 'metre/sec', name: 'wind speed' }
        ]
      },
      {
        values: [
          {value: data.current.rain ? data.current.rain : 0, u: 'mm/h', name: 'rain'},
          {value: data.current.snow ? data.current.snow : 0, u: 'mm/h', name: 'snow'}
        ]
      },
    ];
  }

  getHourlyCardData(data: WeatherData & GeoCoding) {
    return data.hourly.map((data: Current) => {
      return {
        dt: data.dt,
        icon: data.weather,
        description: data.weather
      }
    });
  }
  
  getDailyCardData(data: WeatherData & GeoCoding) {
    return data.daily.map((data: Daily) => {
      return {
        dt: data.dt,
        icon: data.weather,
        day: data.temp.day,
        night: data.temp.night,
        wind_speed: data.wind_speed
      }
    });
  }
}