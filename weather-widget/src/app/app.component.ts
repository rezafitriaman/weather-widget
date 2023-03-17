import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-widget';

  constructor(private weatherService: WeatherService) {
    this.weatherService.getGeoCoding('groningen');
    this.weatherService.getWeatherData(53.2190652, 6.5680077);
  }


}
