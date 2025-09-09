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
  {
    id: "0",
    title: 'Al Quran Education Online',
    content: 'A modern frontend platform for learning the Quran online. It provides responsive UI, interactive lessons, and easy navigation for students. This project focuses on creating a clean and engaging learning interface.',
    contentPoints: [
      'Responsive UI built with Angular and Bootstrap.',
      'Interactive lessons for students.',
      'Clean design for easy navigation.',
      'Frontend-only application without backend tracking.'
    ]
  },
  {
    id: "1",
    title: 'Babilfy',
    content: 'Babilfy is a simple real-time chat application. Users can send and receive messages instantly using a smooth and responsive interface. The app focuses on providing fast communication without extra features.',
    contentPoints: [
      'Real-time messaging using Angular and SignalR.',
      'Responsive and clean interface.',
      'Lightweight and simple chat application.'
    ]
  },
  {
    id: "2",
    title: 'Health Management Information System',
    content: 'A comprehensive system to manage patient registration, appointments, and visits. It streamlines hospital operations and provides easy access for staff. Built with modern technologies for responsive performance.',
    contentPoints: [
      'Manages patient registration, appointments, and visits.',
      'Streamlines hospital operations and billing.',
      'Responsive UI across devices.',
      'Built with Angular, .NET, SQL Server, and Bootstrap.'
    ]
  },
  {
    id: "3",
    title: 'Spiders',
    content: 'Spiders is a web scraping tool for ride-hailing services. It extracts operational data to optimize vehicle allocation and pricing. The tool supports data-driven decisions to improve efficiency.',
    contentPoints: [
      'Web scraping for ride-hailing service data.',
      'Optimizes vehicle allocation and pricing.',
      'Supports operational efficiency and analytics.'
    ]
  },
  {
    id: "4",
    title: 'Human Resource Management System',
    content: 'A system to manage employee records, attendance, and leaves. It simplifies HR workflows and approvals. Built to improve transparency and streamline HR processes.',
    contentPoints: [
      'Manages employee records, attendance, and leave requests.',
      'Supports hierarchical approvals.',
      'Streamlines HR workflows and improves transparency.',
      'Built with Angular, .NET, SQL Server, and Bootstrap.'
    ]
  },
  {
    id: "5",
    title: 'Co-space',
    content: 'Co-space is a collaborative workspace platform for startups and freelancers. It allows easy booking of office spaces and meeting rooms. The platform helps manage workspace resources efficiently.',
    contentPoints: [
      'Book office spaces and meeting rooms.',
      'Efficient workspace resource management.',
      'Facilitates collaboration for small businesses and teams.'
    ]
  }
];

//{ id: "6", label: 'Semester Projects and FYP', details: 'A platform for managing semester projects and final year presentations.' }

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
            const section = this.sections.find(s => s.id === entry.target.id);
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
