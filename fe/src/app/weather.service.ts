import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DeviceInfoService } from './device-info.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly key = 'bc948f6f64a84b768fff73684d5483c8';
  private readonly geoInfo$ = this.getCurrentGeoInfo();

  constructor(private httpClient: HttpClient) {}

  getCurrentGeoInfo() {
    let info$ = new BehaviorSubject<any>({
      longitude: 104.07,
      latitude: 30.66,
    });
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        let info = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        };
        console.debug(info);
        info$.next(info);
      },
      undefined,
      { enableHighAccuracy: false }
    );
    return info$;
  }

  getWeatherInfo() {
    const weatherUrl = 'https://devapi.qweather.com/v7/weather/now';

    const params = {
      key: this.key,
      location: [
        this.geoInfo$.getValue().longitude,
        this.geoInfo$.getValue().latitude,
      ].join(','),
    };

    const url = [
      weatherUrl,
      Object.entries(params)
        .map(([a, b]) => [a, b].join('='))
        .join('&'),
    ].join('?');
    const res$ = this.httpClient.get(url);
    res$.subscribe((a) => console.debug(a));
    return res$;
  }
}
