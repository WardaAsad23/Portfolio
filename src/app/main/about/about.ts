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


  galleryImages: any[] = [
    { itemImageSrc: 'img/image-1.png', thumbnailImageSrc: 'img/image-1.png', alt: 'Coding', description: 'Coding and Development projects' },
    { itemImageSrc: 'img/image-2.png', thumbnailImageSrc: 'img/image-2.png', alt: 'Cooking', description: 'Personal passion for cooking' },
    { itemImageSrc: 'img/image-3.png', thumbnailImageSrc: 'img/image-3.png', alt: 'Learning', description: 'Continuous learning and growth' }
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
