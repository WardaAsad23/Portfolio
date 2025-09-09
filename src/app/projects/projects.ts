import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  sections = [
    { id: 0, label: 'Al Quran Education Online', details: 'A comprehensive platform for learning Quran online with interactive features and resources.' },
    { id: 1, label: 'Babilfy', details: 'A platform for creating and sharing interactive stories.' },
    { id: 2, label: 'Health Management Information System', details: 'A comprehensive system for managing patient records, appointments, and billing.' },
    { id: 3, label: 'Spiders', details: 'A web scraping tool for extracting data from websites.' },
    { id: 4, label: 'Luxury Carts', details: 'An e-commerce platform for high-end products.' },
    { id: 5, label: 'Wayz', details: 'A navigation app for finding the best routes.' },
    { id: 6, label: 'Hustle', details: 'A productivity app for managing tasks and projects.' },
    { id: 7, label: 'Co-space', details: 'A collaborative workspace platform for remote teams.' },
    { id: 8, label: 'Homework', details: 'An app for managing and organizing homework assignments.' },
    { id: 9, label: 'Semester Projects and FYP', details: 'A platform for managing semester projects and final year presentations.' }
  ];
  activeSectionId = null;
  navVisible = false; // controls fade animation
  showNavbar = false; // NEW: controls whether navbar renders at all

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => {
        let anyVisible = false;

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            anyVisible = true;
            const section = this.sections.find(s => s.id === Number(entry.target.id));
            if (section) {
              this.navVisible = false; // fade out
              setTimeout(() => {
                this.activeSectionId = section.id;
                this.navVisible = true; // fade in
              }, 100);
            }
            entry.target.classList.add('in-view');
          }
        });

        // Show/hide navbar depending on whether any section is in view
        this.showNavbar = anyVisible;
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section').forEach(sec => observer.observe(sec));
  }
}
