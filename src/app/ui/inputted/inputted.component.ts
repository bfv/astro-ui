import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputted',
  standalone: true,
  imports: [],
  templateUrl: './inputted.component.html',
  styleUrl: './inputted.component.scss'
})
export class InputtedComponent {

  @Input() inputtedVal: string = 'default';

}
