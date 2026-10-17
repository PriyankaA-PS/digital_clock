import { Component } from '@angular/core';
import { Clock } from './clock/clock';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Clock],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}