import { Component } from '@angular/core';
import { IdentityComponent } from '../identity/identity.component';

@Component({
  selector: 'app-headerbar',
  standalone: true,
  imports: [ IdentityComponent ],
  templateUrl: './headerbar.component.html',
  styleUrl: './headerbar.component.scss'
})
export class HeaderbarComponent {

}
