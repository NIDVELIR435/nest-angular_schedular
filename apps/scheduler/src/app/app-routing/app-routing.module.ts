import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '@nest-angular/frontend/src/app/app-routing/routs.constant';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
