import { computed, effect, Injectable, signal } from '@angular/core';
import { Identity, nobody } from '../models/identity';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loggedIn: boolean = false;
  private _loggedInSignal = signal(false);
  loggedIn = this._loggedInSignal.asReadonly();
  
  private _whoami = signal<Identity>(nobody);
  whoami = this._whoami.asReadonly();

  constructor() { 
    effect(() => {
      this._loggedIn = this._loggedInSignal();
      console.log('auth effect: this._loggedIn =', this._loggedIn);
    });
  }

  login() {
    console.log('auth: login');
    this._loggedInSignal.set(true);
    this._whoami.set({ id: 5, name: 'bfv', email: 'dev@bfv.io' });	
  }

  logout() {
    console.log('auth: logout');
    this._loggedInSignal.set(false);
    this._whoami.set(nobody);
  }
}
