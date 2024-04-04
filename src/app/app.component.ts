import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './models/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  employeeArray: Employee[] = [
    { id: 1, name: 'John', country: 'United States' },
    { id: 2, name: 'Matias', country: 'United States' },
    { id: 3, name: 'Mohn', country: 'United States' },
  ];
}
