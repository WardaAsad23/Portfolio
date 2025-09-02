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
    { id: 'section1', label: 'Al Quran Education Online', details: 'A comprehensive platform for learning Quran online with interactive features and resources.' },
    { id: 'section2', label: 'Babilfy', details: 'A platform for creating and sharing interactive stories.' },
    { id: 'section3', label: 'Health Management Information System', details: 'A comprehensive system for managing patient records, appointments, and billing.' },
    { id: 'section4', label: 'Spiders', details: 'A web scraping tool for extracting data from websites.' },
    { id: 'section5', label: 'Luxury Carts', details: 'An e-commerce platform for high-end products.' },
    { id: 'section6', label: 'Wayz', details: 'A navigation app for finding the best routes.' },
    { id: 'section7', label: 'Hustle', details: 'A productivity app for managing tasks and projects.' },
    { id: 'section8', label: 'Co-space', details: 'A collaborative workspace platform for remote teams.' },
    { id: 'section9', label: 'Homework', details: 'An app for managing and organizing homework assignments.' },
    { id: 'section10', label: 'Semester Projects and FYP', details: 'A platform for managing semester projects and final year presentations.' }
  ];

  activeSectionLabel = 'Al Quran Education Online';
  activeSectionDetails = 'A comprehensive platform for learning Quran online with interactive features and resources.';
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
                this.activeSectionDetails = section.details;
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
