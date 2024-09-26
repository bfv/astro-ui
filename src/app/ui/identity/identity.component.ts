import { Component, effect } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';
import { Identity, nobody } from '../../models/identity';


@Component({
  selector: 'app-identity',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './identity.component.html',
  styleUrl: './identity.component.scss'
})
export class IdentityComponent {

  whoami: Identity = nobody;
  loginName = nobody.name;
  buttonType: string = '';
  private loggedIn: boolean = false;

  constructor(private auth: AuthService) {
    effect(() => { 
      this.loggedIn = this.auth.loggedIn().valueOf();
      console.log('identity effect: loggedIn = %s', this.loggedIn);
      this.buttonType = this.loggedIn ? 'person' : 'login'; 
    });
    effect(() => {
      this.whoami = <Identity>this.auth.whoami().valueOf();
      this.loginName = this.whoami.name ? this.whoami.name : 'Login';
      console.log('identity effect: whoami =', this.whoami.name);
    });
  }
}
