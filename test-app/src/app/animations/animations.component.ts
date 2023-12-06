import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.sass'],
  animations: [
    // animation triggers go here
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s ease-in')
      ]),
      transition('closed => open', [
        animate('0.5s ease-out')
      ]),
      transition('on => off, off => void', [
        animate('0.5s ease-out')
      ])
    ])
  ]
})
export class AnimationsComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
