import { Injectable } from '@angular/core';
// const NodeGeocoder = require('node-geocoder');
@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  getLocation(): Promise<any> {
    // let options = {
    //   provider: 'google',
    //   httpAdapter: 'https', // Default
    //   apiKey: 'AIzaSyD9AaUCC_KDt4MQUbvJWqZs9CFHDo3i0O0', // for Mapquest, OpenCage, Google Premier
    //   formatter: 'json', // 'gpx', 'string', ...
    // };
    return new Promise<any>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          console.log(res);
          // let geocoder = NodeGeocoder(options);
          // geocoder.reverse(
          //   { lat: res.coords.latitude, lon: res.coords.longitude },
          //   (res: any) => {
          //     console.log(res);
          //   }
          // );
          resolve({ lng: res.coords.longitude, lat: res.coords.latitude });
        },
        (err) => reject(err)
      );
    });
  }
}
