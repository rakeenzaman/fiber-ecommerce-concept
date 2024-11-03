import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('expandCollapse', [
      transition(':enter', [
        style({ height: '0px', opacity: 0, overflow: 'hidden' }),
        animate('300ms ease-in-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1, overflow: 'hidden' }),
        animate('300ms 200ms ease-in-out', style({ height: '0px', opacity: 0 }))
      ])
    ])
  ]
})
export class NavbarComponent {
  hovering = false;
  mouseJustLeft = false;

  submenuItems1 = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  onMouseEnter() {
    this.hovering = true;
  }

  onMouseLeave() {
    this.hovering = false;
  }

  getAnimationStyle(index: number) {
    return { animationDelay: `${index * 0.07}s`}
  }
}
