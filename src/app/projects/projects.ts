import { Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { Project } from '../Shared/project';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule
  ],
  standalone: true,
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})

export class Projects {
  sections = [
    { id: 'section1', label: 'Section 1' },
    { id: 'section2', label: 'Section 2' },
    { id: 'section3', label: 'Section 3' },
    { id: 'section4', label: 'Section 4' }
  ];

  activeSectionLabel = 'Section 1';
  navVisible = false; // controls fade animation

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = this.sections.find(s => s.id === entry.target.id);
            if (section) {
              // Animate navbar text fade
              this.navVisible = false; // fade out
              setTimeout(() => {
                this.activeSectionLabel = section.label;
                this.navVisible = true; // fade in
              }, 100);
            }
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section').forEach(sec => observer.observe(sec));

    // Show initial navbar text
    setTimeout(() => this.navVisible = true, 100);
  }
}
