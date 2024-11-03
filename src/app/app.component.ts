import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, ProductComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce-concept';
  @ViewChild('options') options!: ElementRef;
  address = '';
  validAddress = false;

  option1 = {
    name: '1 Gbps',
    price: 65,
    bulletPoints: ['Up to 1 Gigabit per second', 'Perfect for small homes', 'Unlimited Data']
  };

  option2 = {
    name: '2 Gbps',
    price: 75,
    bulletPoints: ['Up to 2 Gigabits per second', 'Perfect for medium sized homes', 'Unlimited Data']
  };

  option3 = {
    name: '5 Gbps',
    price: 90,
    bulletPoints: ['Up to 5 Gigabits per second', 'Perfect for large homes', 'Unlimited Data']
  };

  triggerAnimation(event: Event) {
    const element = event.target as HTMLElement;
    element.classList.add('shake');

    // Remove the class after the animation ends to allow re-triggering
    element.addEventListener('animationend', () => {
      element.classList.remove('shake');
    }, { once: true });
  }

  checkAvailibilityClicked(event: Event) {
    if (this.address) {
      this.validAddress = true;
      this.options.nativeElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.validAddress = false;
      this.triggerAnimation(event);
    }
  }
}
