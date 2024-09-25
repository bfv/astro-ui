import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


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
  whoami: string = 'bronco';
}
