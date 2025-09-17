import { Component } from '@angular/core';
import { Experience } from "../../experience/experience";
import { Education } from "../../education/education";
import { GalleriaModule } from 'primeng/galleria';
@Component({
  selector: 'app-about',
  imports: [Experience, Education,GalleriaModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  responsiveOptions: any[] = [
    { breakpoint: '1024px', numVisible: 3 },
    { breakpoint: '768px', numVisible: 2 },
    { breakpoint: '560px', numVisible: 1 }
  ];


  skills = [
    { name: 'Angular', icon: 'pi pi-angular' },
    { name: '.NET 8', icon: 'pi pi-server' },
    { name: 'SQL Server', icon: 'pi pi-database' },
    { name: 'Oracle', icon: 'pi pi-database' },
    { name: 'MySQL', icon: 'pi pi-database' },
    { name: 'SignalR', icon: 'pi pi-bolt' },
    { name: 'JWT', icon: 'pi pi-lock' },
    { name: 'Bootstrap', icon: 'pi pi-desktop' },
    { name: 'REST API', icon: 'pi pi-external-link' },
    { name: 'Azure', icon: 'pi pi-cloud' },
  ];

  currentIndex = 0;


  galleryImages: any[] = 
  [
    { 
      itemImageSrc: 'img/image-1.png', 
      thumbnailImageSrc: 'img/image-1.png', 
      alt: '.Net Core & Angular', 
      description: 'Building scalable solutions with modern frameworks' 
    },
    { 
      itemImageSrc: 'img/learning.jpg', 
      thumbnailImageSrc: 'img/learning.jpg', 
      alt: 'Learning', 
      description: 'Always eager to explore and learn new skills' 
    },
    { 
      itemImageSrc: 'img/problem-solver.jpg', 
      thumbnailImageSrc: 'img/problem-solver.jpg', 
      alt: 'Problem Solving', 
      description: 'Finding effective solutions to complex technical challenges' 
    },
    { 
      itemImageSrc: 'img/teamwork.jpg', 
      thumbnailImageSrc: 'img/teamwork.jpg', 
      alt: 'Teamwork', 
      description: 'Collaborating effectively to achieve shared project goals' 
    },
    { 
      itemImageSrc: 'img/time-management.jpg', 
      thumbnailImageSrc: 'img/time-management.jpg', 
      alt: 'Time Management', 
      description: 'Balancing priorities efficiently to meet strict deadlines' 
    }
  ];


  // Navigate main image
  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.galleryImages.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
  }

  goToImage(index: number) {
    this.currentIndex = index;
  }

}
