import { Component } from '@angular/core';
import { TopBarComponent } from '../home/top-bar/top-bar.component';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    TopBarComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

}
