import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WeatherApi, WeatherData } from './features/weather-api/weather-api';
import { SearchBar } from './features/weather-search/search-bar/search-bar';
import { Header } from './features/header/header';
import { CurrentWeather } from './features/current-weather/current-weather';
import { Forecast } from './features/forecast/forecast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchBar, Header, CurrentWeather, Forecast, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('weather');
  private weatherApi = inject(WeatherApi);

  protected readonly showWeatherView = signal(false);
  protected readonly currentWeatherData = signal<WeatherData | null>(null);

  constructor() {
    this.testWeatherApi();
  }

  private testWeatherApi() {
    console.log('Testing weather API...');
    
    this.weatherApi.getCurrentWeather('Tampa').subscribe({
      next: (data) => {
        console.log('Weather data received:', data);
        console.log(`Temperature in ${data.location.name}: ${data.current.temp_f}°F`);
        console.log(`Condition: ${data.current.condition.text}`);
      },
      error: (error) => {
        console.error('Error fetching weather:', error);
      }
    });
  }

  protected onWeatherDataReceived(weatherData: WeatherData) {
    this.currentWeatherData.set(weatherData);
    this.showWeatherView.set(true);
  }

  protected goBackToSearch() {
    this.showWeatherView.set(false);
    this.currentWeatherData.set(null);
  }
}