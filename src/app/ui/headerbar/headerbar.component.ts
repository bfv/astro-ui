import { Component, ViewEncapsulation } from '@angular/core';
import { IdentityComponent } from '../identity/identity.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-headerbar',
  standalone: true,
  imports: [ IdentityComponent, TitleComponent ],
  templateUrl: './headerbar.component.html',
  styleUrl: './headerbar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HeaderbarComponent {

}
