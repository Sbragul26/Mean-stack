import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { HomepageComponent } from './homepage/homepage';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomepageComponent }
];
