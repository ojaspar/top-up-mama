import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/shared/storage.service';
import { UserDataService } from 'src/app/core/services/user.data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  timeLeft!: any;
  intervalTimer!: any;
  authenticatedUser: any;
  timeInSeconds: number = 120;
  constructor(private storageService: StorageService) {
    this.authenticatedUser = JSON.parse(
      this.storageService.getItem('authenticatedUser')
    );
  }

  ngOnInit(): void {
    // this.setTime(this.timeInSeconds);
    // this.timeLeft = `${Math.floor(this.timeInSeconds / 60)}:00`;
  }

  // setTime(seconds: any) {
  //   clearInterval(this.intervalTimer);
  //   this.timer(seconds);
  // }

  // timer(seconds: any) {
  //   const now = Date.now();
  //   const end = now + seconds * 1000;
  //   this.displayTimeLeft(seconds);

  //   this.countdown(end);
  // }

  // zeroPadded(num: any) {
  //   return num < 10 ? `0${num}` : num;
  // }

  // hourConvert(hour: any) {
  //   return hour % 12 || 12;
  // }

  // countdown(end: any) {
  //   this.intervalTimer = setInterval(() => {
  //     const secondsLeft = Math.round((end - Date.now()) / 1000);

  //     if (secondsLeft === 0) {
  //       // this.$emit('timerCompleted')
  //     }

  //     if (secondsLeft < 0) {
  //       clearInterval(this.intervalTimer);
  //       return;
  //     }
  //     this.displayTimeLeft(secondsLeft);
  //   }, 1000);
  // }

  // displayTimeLeft(secondsLeft: any) {
  //   const minutes = Math.floor((secondsLeft % 3600) / 60);
  //   const seconds = secondsLeft % 60;

  //   this.timeLeft = `${this.zeroPadded(minutes)}:${this.zeroPadded(seconds)}`;
  // }

  // countdown( elementName, minutes, seconds ) {
  //     var element, endTime, hours, mins, msLeft, time;

  //     function twoDigits( n )
  //     {
  //         return (n <= 9 ? "0" + n : n);
  //     }

  //     function updateTimer()
  //     {
  //         msLeft = endTime - (+new Date);
  //         if ( msLeft < 1000 ) {
  //             element.innerHTML = "Time is up!";
  //         } else {
  //             time = new Date( msLeft );
  //             hours = time.getUTCHours();
  //             mins = time.getUTCMinutes();
  //             element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
  //             setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
  //         }
  //     }

  //     element = document.getElementById( elementName );
  //     endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
  //     updateTimer();
  // }
}
