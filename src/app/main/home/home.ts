
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Projects } from "../../projects/projects";

@Component({
  selector: 'app-home',
  imports: [Projects],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 @ViewChild('projectsContainer') projectsContainer!: ElementRef;

  projectsVisible: boolean = false;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // true if at least 30% of container is visible
          this.projectsVisible = entry.isIntersecting;
        });
      },
      {
        root: null,
        threshold: 0.09
      }
    );

    observer.observe(this.projectsContainer.nativeElement);
  }
}
