import { Component } from '@angular/core';
import { TopBarComponent } from '../home/top-bar/top-bar.component';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [
    TopBarComponent
  ],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss'
})
export class ItemDetailsComponent {

}
