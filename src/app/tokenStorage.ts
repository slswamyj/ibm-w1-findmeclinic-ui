import { Injectable } from '@angular/core';


const TOKEN_KEY = 'AuthToken';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class TokenStorage {

  constructor() { }

  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY,  token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public removeToken() {
    window.localStorage.removeItem(TOKEN_KEY);
   
  }
}
