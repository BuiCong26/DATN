import { Component } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TopBarComponent,
    CommonModule,
    ContentComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
