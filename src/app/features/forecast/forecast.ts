import { Component, Input } from '@angular/core';
import { WeatherData, } from '../weather-api/weather-api';

@Component({
  selector: 'app-forecast',
  imports: [],
  templateUrl: './forecast.html',
  styleUrl: './forecast.scss'
})
export class Forecast {
  @Input() weatherData!: WeatherData;
}
