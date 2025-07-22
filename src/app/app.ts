import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgxParticlesModule } from '@tsparticles/angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxParticlesModule],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Portfolio';

 particlesOptions = {
  background: {
    color: {
      value: "#000000",
    },
  },
  particles: {
    number: {
      value: 80,
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: 3,
    },
    move: {
      enable: true,
      speed: 1,
    },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
  detectRetina: true,
};



  onParticlesLoaded(container: any): void {
  console.log('Particles loaded:', container);
}
}
