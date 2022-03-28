import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  getLocation(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          resolve({ lng: res.coords.longitude, lat: res.coords.latitude });
        },
        (err) => reject(err)
      );
    });
  }
}
