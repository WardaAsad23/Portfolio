import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-cursor-effect',
  template: `<canvas #cursorCanvas></canvas>`,
  styles: [`
    :host {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      pointer-events: none;
      z-index: -1; /* behind content */
    }
    canvas { width: 100%; height: 100%; display: block; }
  `]
})
export class CursorEffectComponent implements OnInit {
  @ViewChild('cursorCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private width = window.innerWidth;
  private height = window.innerHeight;
  private particles: any[] = [];
  private mouse = { x: this.width / 2, y: this.height / 2 };
  private animationFrame: number | null = null;
  private isMouseMoving = false;
  private stopTimeout: any;

  ngOnInit() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = this.width;
    canvas.height = this.height;
    this.ctx = canvas.getContext('2d')!;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
    this.isMouseMoving = true;

    // Create new particles while moving
    for (let i = 0; i < 4; i++) {
      this.particles.push(this.createParticle());
    }

    // Start animation if not running
    if (this.animationFrame === null) {
      this.animate();
    }

    clearTimeout(this.stopTimeout);
    this.stopTimeout = setTimeout(() => {
      this.isMouseMoving = false;
    }, 200);
  }

  @HostListener('window:resize')
  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    const canvas = this.canvasRef.nativeElement;
    canvas.width = this.width;
    canvas.height = this.height;
  }

  /** Single particle factory */
  createParticle() {
    return {
      x: this.mouse.x,
      y: this.mouse.y,
      vx: Math.random() * 2 - 1,
      vy: Math.random() * 2 - 1,
      size: Math.random() * 6 + 2,
      life: Math.random() * 50 + 30,
      color: 'rgba(57, 72, 103, 0.6)'
    };
  }

  /** Animation loop */
  animate = () => {
    this.animationFrame = requestAnimationFrame(this.animate);
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.particles.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 1;

      const fade = (p.life / 100).toFixed(2);
      this.ctx.beginPath();
      this.ctx.fillStyle = p.color.replace('0.6', fade);
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();

      if (p.life <= 0) {
        this.particles.splice(index, 1);
      }
    });

    if (!this.isMouseMoving && this.particles.length === 0) {
      cancelAnimationFrame(this.animationFrame!);
      this.animationFrame = null;
    }
  };
}
