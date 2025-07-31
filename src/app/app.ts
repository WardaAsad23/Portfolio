import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CursorEffectComponent } from './Shared/cursor-effect/cursor-effect';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CursorEffectComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
 
}
