import { Routes } from '@angular/router';
import { SignInComponent } from '@nest-angular/frontend/src/app/sign-in/sign-in.component';

export const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: '**', component: SignInComponent },
];
