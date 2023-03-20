import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Current, Daily, WeatherData } from '../model/weather-data';
import { GeoCoding, SearchGeoCoding } from '../model/geo-coding';
import { Observable, map, share, switchMap } from 'rxjs';
import { DailyCardData, HourlyCardData, PrimaryCardData, SecondaryCardData } from '../model/cards-data';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  getGeoCoding({city, lat, lon}: SearchGeoCoding): Observable<GeoCoding[]> {
    if(city) {
      return this.http.get<GeoCoding[]>(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1`);
    }
    // if no city is provided do de reverse mode
    return this.http.get<GeoCoding[]>(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1`);
  }

  getWeatherData(lat: number, lon: number): Observable<WeatherData> {
    return this.http.get<WeatherData>(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric`)
  }

  getGeoAndWeatherData({city, lat, lon}: SearchGeoCoding): Observable<WeatherData & GeoCoding> {
    // search geocoding it return array then we get the weather data
    return this.getGeoCoding({city, lat, lon})
    .pipe(
      map((geoCodingDatas: GeoCoding[]) => {
        return geoCodingDatas[0];
      }),
      switchMap(geoCodingData => {
        // get weather data with lat and lon
        return this.getWeatherData(geoCodingData.lat, geoCodingData.lon)
        .pipe(
          map((weatherData: WeatherData) => {
            // combine geoCodingData and weatherData
            return {
              ...geoCodingData,
              ...weatherData
            } ;
          }),
        )
      }),
      share()
    )
  }

  // Build only data that needed
  getPrimaryCardData(data: WeatherData & GeoCoding): PrimaryCardData {
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

  getSecondaryCardData(data: WeatherData & GeoCoding): SecondaryCardData[]{
    return [
      {
        values: [
          {value: data.current.sunrise, name: 'sunrise'},
          {value: data.current.sunset, name: 'sunset'}
        ]
      },
      {
        values: [
          {value: data.current.clouds, u: '%', name: 'cloudiness'},
          {value: data.current.wind_gust ? data.current.wind_gust : 0, u: 'm/sec', name: 'wind gust'}
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
          {value: data.current.wind_speed, u: 'm/sec', name: 'wind speed' }
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

  getHourlyCardData(data: WeatherData & GeoCoding): HourlyCardData[] {
    return data.hourly.map((data: Current) => {
      return {
        dt: data.dt,
        icon: data.weather,
        description: data.weather
      }
    });
  }
  
  getDailyCardData(data: WeatherData & GeoCoding): DailyCardData[] {
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