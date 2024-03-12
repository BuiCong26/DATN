import { Component } from '@angular/core';
import { TopBarComponent } from '../home/top-bar/top-bar.component';
import { FooterComponent } from '../home/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-products',
  standalone: true,
  imports: [
    TopBarComponent,
    FooterComponent,
    CommonModule,
    RouterModule
  ],
  templateUrl: './other-products.component.html',
  styleUrl: './other-products.component.scss'
})
export class OtherProductsComponent {
  constructor( public router: Router){}
}
