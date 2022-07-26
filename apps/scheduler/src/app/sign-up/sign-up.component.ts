import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Role } from '@nest-angular/enums';
import { CreateUserBody } from '@nest-angular/api-interfaces';
import { OptionsFlags, ParticularRequired } from '@nest-angular/type-utils';

@Component({
  selector: 'nest-angular-sign-in',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  checkoutForm = this.formBuilder.group<
    ParticularRequired<OptionsFlags<CreateUserBody>, 'role'>
  >({
    firstName: null,
    email: null,
    lastName: null,
    password: null,
    role: Role.VISITOR,
    username: null,
  });

  constructor(private formBuilder: FormBuilder) {}

  public onSubmit(): void {
    console.log(this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
