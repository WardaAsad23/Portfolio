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
  galleryImages = [
  { source: 'img/about1.jpg', alt: 'Project Image 1' },
  { source: 'img/about2.jpg', alt: 'Project Image 2' },
  { source: 'img/about3.jpg', alt: 'Project Image 3' }
];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2
    },
    {
      breakpoint: '768px',
      numVisible: 1
    }
  ];

  // projects.component.ts or about.component.ts
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

}
