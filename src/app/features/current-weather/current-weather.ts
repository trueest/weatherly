import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WeatherData } from '../weather-api/weather-api';
import { BackButton } from '../back-button/back-button';

@Component({
  selector: 'app-current-weather',
  imports: [BackButton],
  templateUrl: './current-weather.html',
  styleUrl: './current-weather.scss'
})
export class CurrentWeather {
  @Input() weatherData!: WeatherData;
  @Output() backToSearch = new EventEmitter<void>();

  onBackToSearch() {
    this.backToSearch.emit();
  }
}