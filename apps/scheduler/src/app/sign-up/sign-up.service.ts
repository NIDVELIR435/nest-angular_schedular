import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUserBody } from '@nest-angular/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private httpClient: HttpClient) {}

  public createUser(body: CreateUserBody) {
    this.httpClient.post();
  }
}
