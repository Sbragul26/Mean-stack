import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login';
import { Homepage } from './homepage/homepage';

@Component({
  selector: 'app-root',
  imports: [LoginComponent , Homepage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('WalletTracker');
}
