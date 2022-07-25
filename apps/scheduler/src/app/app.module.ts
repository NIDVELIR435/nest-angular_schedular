import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '@nest-angular/frontend/src/app/app.component';
import { SignInComponent } from '@nest-angular/frontend/src/app/sign-in/sign-in.component';
import { AppRoutingModule } from '@nest-angular/frontend/src/app/app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, RouterModule, BrowserAnimationsModule],
  declarations: [AppComponent, SignInComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
