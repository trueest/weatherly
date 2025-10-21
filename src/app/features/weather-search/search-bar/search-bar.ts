import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { WeatherApi, WeatherData } from '../../weather-api/weather-api';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  @Output() weatherData = new EventEmitter<WeatherData>();

  constructor(private weatherApi: WeatherApi) {}

  onSearch(): void {
    const searchValue = this.searchInput.nativeElement.value.trim();
    if (searchValue) {
      // TODO: Implement search logic here
      console.log('Searching for:', searchValue);

      this.weatherApi.getCurrentWeather(searchValue).subscribe({
        next: (data: WeatherData) => {
          console.log('Weather data received:', data);
          this.weatherData.emit(data);
        },
        error: (error) => {
          console.error('Error fetching weather:', error);
        }
      });
    }
  }
}
