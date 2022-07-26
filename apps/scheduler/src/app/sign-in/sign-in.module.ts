import { NgModule } from '@angular/core';
import { SignInComponent } from '@nest-angular/frontend/src/app/sign-in/sign-in.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '@nest-angular/frontend/src/app/app-routing/app-routing.module';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
  ],
})
export class SignInModule {}
