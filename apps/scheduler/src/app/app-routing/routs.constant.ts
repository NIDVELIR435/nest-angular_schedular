import { Routes } from '@angular/router';
import { SignInComponent } from '@nest-angular/frontend/src/app/sign-in/sign-in.component';
import { SignUpComponent } from '@nest-angular/frontend/src/app/sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', component: SignInComponent },
];
