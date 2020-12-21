import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../../../../environments/environment';
import {ShareModule} from '../../shared.module';

@Injectable({
  providedIn: ShareModule
})
export class AuthService {

  private readonly authUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) { }

  signInAnonymously() {
    return this.http.post<any>(`${this.authUrl}/signup`, {});
  }

}
