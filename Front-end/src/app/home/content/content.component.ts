import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutstandingProductsComponent } from '../outstanding-products/outstanding-products.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    OutstandingProductsComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
