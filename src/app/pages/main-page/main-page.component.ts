import { Component, effect } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  buttonText: string = 'Login';
  private loggedIn: boolean = false;

  constructor(private auth: AuthService) { 
    effect(() => {
      this.loggedIn = this.auth.loggedIn().valueOf();
      console.log('main effect: loggedIn = %s', this.auth.loggedIn().valueOf());
      this.buttonText = this.loggedIn ? 'Logout' : 'Login'; 
    });
  }

  changeLogin() {
    this.loggedIn ? this.logout() : this.login();
  }
  
  login() {
    console.log('main: login');
    this.auth.login();
  }

  logout() {
    console.log('main: logout');
    this.auth.logout();
  }
}
