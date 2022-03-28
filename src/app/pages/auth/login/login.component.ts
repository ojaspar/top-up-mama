import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthDataService } from 'src/app/core/services/auth.data.service';
import { GeolocationService } from 'src/app/core/services/shared/geo-location.service';
import { NotificationsService } from 'src/app/core/services/shared/notifications.service';
import { StorageService } from 'src/app/core/services/shared/storage.service';
import { UserDataService } from 'src/app/core/services/user.data.service';
import {} from 'googlemaps';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private authDataService: AuthDataService,
    private notificationService: NotificationsService,
    private geolocation: GeolocationService,
    private storageService: StorageService,
    private router: Router,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.loginFormMethod();
    this.geolocation.getLocation().then((res) => {
      if (res) {
        // console.log(res);
        this.displayLocation(res.lat, res.lng);
      }
    });
  }

  displayLocation(latitude: any, longitude: any) {
    let newGeo = new google.maps.Geocoder();
    console.log(newGeo);
    var latlng = new google.maps.LatLng(latitude, longitude);
    // // console.log(latlng);
    // latlng.geocode({ location: latlng }, (res) => {
    //   console.log(res);
    // });
    newGeo.geocode({ location: latlng }, (res, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        if (res[0]) {
          console.log(res[0]);
        }
      }
    });
    // geocoder.geocode(
    //     {'latLng': latlng},
    //     function(results, status) {
    //         if (status == google.maps.GeocoderStatus.OK) {
    //             if (results[0]) {
    //                 var add= results[0].formatted_address ;
    //                 var  value=add.split(",");

    //                 count=value.length;
    //                 country=value[count-1];
    //                 state=value[count-2];
    //                 city=value[count-3];
    //                 x.innerHTML = "city name is: " + city;
    //             }
    //             else  {
    //                 x.innerHTML = "address not found";
    //             }
    //         }
    //         else {
    //             x.innerHTML = "Geocoder failed due to: " + status;
    //         }
    //     }
    // );
  }

  loginFormMethod(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            `^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@$%?#!_\`!^&*+={}|[\\]\\/\\\\';:,<.>~"?])[a-zA-Z0-9@$%?#!_\`!^&*()+={}|[\\]\\/\\\\\\';:,<.>~"?]{8,}$`
          ),
        ]),
      ],
    });
  }

  handleLogin(event: boolean) {
    if (event) {
      this.isLoading = true;
      this.authDataService.login(this.loginForm.value).subscribe(
        (res) => {
          if (res) {
            this.storageService.setItem('access_token', res?.token);
            this.isLoading = false;

            this.getSingleUser(4);
          }
        },
        (err) => {
          if (err) this.isLoading = false;
        }
      );
    }
  }

  getSingleUser(id: number) {
    this.userDataService.getSingleUser(id).subscribe((res) => {
      if (res) {
        this.storageService.setItem(
          'authenticatedUser',
          JSON.stringify(res.data)
        );
        this.router.navigate(['/users']);
        this.notificationService.publishMessages('login successful', 'success');
      }
    });
  }
}
