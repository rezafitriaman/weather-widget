import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  api: string = 'd8c1aa5be946a27019e8162f742ed5c2';
  constructor(private http: HttpClient) { }

  getGeoCoding(city: string) {
    return this.http.get<any>(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/geo/1.0/direct?q=${city}`)
    .subscribe(data => {
      console.log(data);
    })
  }

  getWeatherData(lat: number, lon: number) {
    return this.http.get<any>(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric`)
    .subscribe(data => {
      console.log(data);
    })
  }
}