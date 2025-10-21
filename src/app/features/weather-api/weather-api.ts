import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


export interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  }
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class WeatherApi {
  private apiUrl = "https://api.weatherapi.com/v1/current.json"
  private apiKey = environment.apiKey

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<WeatherData> {
    const params = new HttpParams()
    .set('q', city)
    .set('key', this.apiKey);
    

    return this.http.get<WeatherData>(this.apiUrl, { params });
  }
}
