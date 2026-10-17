import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { TimeService } from '../services/time';
import { form } from '@angular/forms/signals';


@Component({
  selector: 'app-clock',
  standalone: true,
  templateUrl: './clock.html',
  styleUrl: './clock.css'
})
export class Clock implements OnInit, OnDestroy {

  time = signal('--:--:--');
  showSeconds = signal(true);
  is24Hour = signal(true);
  theme = signal("blue"); 
  date = '';
  day = '';

  private subscription?: Subscription;

  constructor(private timeService: TimeService) { }

  ngOnInit(): void {
    this.getTime();

    this.subscription = interval(1000).subscribe(() => {
      this.getTime();
    });
  }

  getTime(): void {

    this.timeService.getCurrentTime().subscribe({
      next: (response) => {
        this.time.set(response.time);
        this.date = response.date;
        this.day = response.day;
      },
      error: (error) => {
        console.error('Error fetching time:', error);
      }
    });
  }

  toggleSeconds(): void {
    this.showSeconds.set(!this.showSeconds());
    console.log(this.showSeconds());
    //this.time().slice(0,5);
  }

  toggleHourFormat(): void {
    this.is24Hour.set(!this.is24Hour());
  }

  formatTime(): string {
    if (!this.is24Hour()) {
      const parts = this.time().split(":");
      const hour = Number(parts[0]);
      const hour12 = hour % 12 || 12;
      const formattedHour = hour12.toString().padStart(2, "0");
      console.log(formattedHour)
      const period = hour >= 12 ? "PM" : "AM";

      if (this.showSeconds()) {
        return `${formattedHour}:${parts[1]}:${parts[2]} ${period}`;
      }

      return `${formattedHour}:${parts[1]} ${period}`;

    }

    if (this.showSeconds()) {
      return this.time();
    }

    return this.time().slice(0, 5);
  }

  toggleTheme():void{
    if(this.theme() === "blue"){
      this.theme.set("dark");
    }
    else{
      this.theme.set("blue");
    }
  }

  copyTime():void{
    navigator.clipboard.writeText(this.formatTime());
  
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}