import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from '../content/content.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    CommonModule,
    ContentComponent,
    RouterModule
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent{

}
