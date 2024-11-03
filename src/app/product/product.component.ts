import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'product',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
    @Input() name = '';
    @Input() price = 0;
    @Input() bulletPoints: string[] = [];
}
