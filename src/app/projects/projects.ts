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
    ['img/AlQuran/alquran.png', 'img/AlQuran/alquran1.png', 'img/AlQuran/alquran2.png'],
    ['img/Bablify/bablify.png', 'img/Bablify/bablify1.png', 'img/Bablify/bablify2.png'],
    ['img/HMIS/hmis.png', 'img/HMIS/hmis1.jpg', 'img/HMIS/hmis2.jpg', 'img/HMIS/hmis3.jpg'],
    ['img/Spiders/spiders.png', 'img/Spiders/spiders1.png', 'img/Spiders/spiders2.png'],
    ['img/Hrm/hrm.png','img/Hrm/hrm1.png','img/Hrm/hrm2.png','img/Hrm/hrm3.png','img/Hrm/hrm4.png','img/Hrm/hrm5.png'],
    ['img/Cospace/cospace.png','img/Cospace/cospace1.png','img/Cospace/cospace2.png', 'img/Cospace/cospace3.png']
  ];

  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide(this.activeSectionId);
    }, 3000); // 3s interval
  }

  nextSlide(i: number) {
  const slides = this.images[i];
  this.currentIndex = (this.currentIndex + 1) % slides.length;
  }

  prevSlide(i: number) {
    const slides = this.images[i];
    this.currentIndex = (this.currentIndex - 1 + slides.length) % slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.restartAutoSlide();
  }


  restartAutoSlide() {
    clearInterval(this.interval);
    this.startAutoSlide();
  }
    
  getTransform() {
  return `translateX(-${this.currentIndex * 100}%)`;
}


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
