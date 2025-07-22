import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgxParticlesModule } from '@tsparticles/angular';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxParticlesModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'Portfolio';

 particlesOptions = {
    particles: {
      number: { value: 80 },
      size: { value: 3 },
      move: { enable: true, speed: 2 },
      shape: { type: 'circle' },
      links: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1,
      },
    },
    detectRetina: true,
  };
}
