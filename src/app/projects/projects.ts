import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  @Input() isVisible: boolean;
  images = [
  // Project 0: AlQuranEdu
  [
    { itemImageSrc: 'img/AlQuran/alquran.png', thumbnailImageSrc: 'img/AlQuran/alquran.png' },
    { itemImageSrc: 'img/AlQuran/alquran.png', thumbnailImageSrc: 'img/AlQuran/alquran.png' },
    { itemImageSrc: 'img/AlQuran/alquran.png', thumbnailImageSrc: 'img/AlQuran/alquran.png' }
  ],

  // Project 1: Bablify
  [
    { itemImageSrc: 'img/Bablify/bablify.png', thumbnailImageSrc: 'img/Bablify/bablify.png' },
    { itemImageSrc: 'img/Bablify/bablify1.png', thumbnailImageSrc: 'img/Bablify/bablify1.png' },
    { itemImageSrc: 'img/Bablify/bablify2.png', thumbnailImageSrc: 'img/Bablify/bablify2.png' }
  ],

  // Project 2: HMIS
  [
    { itemImageSrc: 'img/HMIS/hmis.png', thumbnailImageSrc: 'img/HMIS/hmis.png' },
    { itemImageSrc: 'img/HMIS/hmis1.jpg', thumbnailImageSrc: 'img/HMIS/hmis1.jpg' },
    { itemImageSrc: 'img/HMIS/hmis2.jpg', thumbnailImageSrc: 'img/HMIS/hmis2.jpg' },
    { itemImageSrc: 'img/HMIS/hmis3.jpg', thumbnailImageSrc: 'img/HMIS/hmis3.jpg' }
  ],

  // Project 3: Spiders
  [
    { itemImageSrc: 'img/Spiders/spiders.png', thumbnailImageSrc: 'img/Spiders/Spiders.png' },
    { itemImageSrc: 'img/Spiders/spiders1.png', thumbnailImageSrc: 'img/Spiders/spiders1.png' },
    { itemImageSrc: 'img/Spiders/spiders2.png', thumbnailImageSrc: 'img/Spiders/spiders2.png' }
  ],

  // Project 4: HRM
  [
    { itemImageSrc: 'img/Hrm/hrm.png', thumbnailImageSrc: 'img/Hrm/hrm.png' },
    { itemImageSrc: 'img/Hrm/hrm1.png', thumbnailImageSrc: 'img/Hrm/hrm1.png' },
    { itemImageSrc: 'img/Hrm/hrm2.png', thumbnailImageSrc: 'img/Hrm/hrm2.png' },
    { itemImageSrc: 'img/Hrm/hrm3.png', thumbnailImageSrc: 'img/Hrm/hrm3.png' },
    { itemImageSrc: 'img/Hrm/hrm4.png', thumbnailImageSrc: 'img/Hrm/hrm4.png' },
    { itemImageSrc: 'img/Hrm/hrm5.png', thumbnailImageSrc: 'img/Hrm/hrm5.png' }
  ],

  // Project 5: Co-Space
  [
    { itemImageSrc: 'img/Cospace/cospace.png', thumbnailImageSrc: 'img/Cospace/cospace.png' },
    { itemImageSrc: 'img/Cospace/cospace1.png', thumbnailImageSrc: 'img/Cospace/cospace1.png' },
    { itemImageSrc: 'img/Cospace/cospace2.png', thumbnailImageSrc: 'img/Cospace/cospace2.png' },
    { itemImageSrc: 'img/Cospace/cospace3.png', thumbnailImageSrc: 'img/Cospace/cospace3.png' }
  ]
];

  responsiveOptions: any[] = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

  get showNavbarHome() {
    console.log(this.isVisible)
    return (this.isVisible == true || this.isVisible == null);
  }
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
        let mostVisible = null;
        let maxRatio = 0;

        entries.forEach(entry => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisible = entry;
          }
      });

      if (mostVisible && mostVisible.isIntersecting) {
        const section = this.sections.find(s => s.id === mostVisible.target.id);
        if (section) {
          this.navVisible = false;
          setTimeout(() => {
            this.activeSectionId = section.id;
            this.navVisible = true;
          }, 100);
        }
        this.showNavbar = true;
      }
    },
    { threshold: 0.7 } // smoother detection
  );

  document.querySelectorAll('section').forEach(sec => observer.observe(sec));
}

}
