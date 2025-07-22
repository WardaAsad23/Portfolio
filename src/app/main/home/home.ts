
import { Component } from '@angular/core';
import { NgxParticlesModule } from '@tsparticles/angular';

@Component({
  selector: 'app-home',
  imports: [NgxParticlesModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  particlesOptions = {
    background: {
      color: { value: '#000' }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: 'push' },
        onHover: { enable: true, mode: 'repulse' },
        resize: { enable: true }
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 }
      }
    },
    particles: {
      color: { value: '#ffffff' },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        direction: 'none' as const,
        enable: true,
        outModes: { default: 'bounce' as const},
        random: false,
        speed: 2,
        straight: false
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80
      },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 5 } }
    },
    detectRetina: true
  };
  onParticlesLoaded(container: any): void {
  console.log('Particles loaded:', container);
}
}
