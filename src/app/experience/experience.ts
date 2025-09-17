import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  experiences = [
    {
      company: 'Freelancing',
      role: 'Software Developer',
      period: 'Currently',
      type: 'Remote',
      location: 'Worldwide',
      icon: 'pi pi-globe',
      description: [
        'Working on various freelance projects using .NET, Angular, and SQL databases.',
        'Building web applications, APIs, and custom solutions for clients.',
        'Managing full project lifecycle from development to deployment and support.'
      ]
    },
    {
      company: 'Indus Hospital and Health Network',
      role: 'Software Engineer',
      period: 'September 2024 - May 2025',
      type: 'On-site',
      location: 'Karachi, Pakistan',
      icon: 'pi pi-map-marker',
      description: [
        'Improved patient registration workflows, increasing registration speed by 25% and data accuracy.',
        'Enhanced clinical appointment management with cancellations, arrival tracking, and status updates.',
        'Developed and integrated the Medical Service Directory (MSD) module for service setup and facility configurations.',
        'Optimized patient management systems including investigation tables, care plans, and discharge workflows.',
        'Utilized server-side operations, real-time data sync, and pagination for efficient handling of large datasets.'
      ]
    },
    {
      company: 'Meezotech',
      role: 'Software Developer (.NET & Angular)',
      period: 'May 2023 - September 2024',
      type: 'On-site',
      location: 'Karachi, Pakistan',
      icon: 'pi pi-map-marker',
      description: [
        'Optimized vehicle offer configurations, reducing development time by 10%, improving system efficiency across 4 countries.',
        'Implemented ride restrictions based on zones and scooter battery levels to enhance ride efficiency.',
        'Enabled admin tracking of ride statistics on a monthly, yearly, or quarterly basis.',
        'Integrated wallet recharge functionality for seamless customer ride bookings.',
        'Developed smaller versions of systems and modules for specialized services.',
        'Managed admin panel development and dynamic pricing models for ticket types.'
      ]
    },
    {
      company: 'The Code IT Company',
      role: 'ASP.NET MVC Intern',
      period: 'July 2018 - August 2018',
      type: 'On-site',
      location: 'Karachi, Pakistan',
      icon: 'pi pi-map-marker',
      description: [
        'Developed an in-house space-sharing web application using ASP.NET MVC.',
        'Utilized SQL Server for database management and created stored procedures.',
        'Collaborated with development team and infrastructure specialists to ensure high availability for mission-critical applications.'
      ]
    }
  ];

  @ViewChildren('timelineItems') timelineItems!: QueryList<ElementRef>;
  iconPosition = 0;
  progressHeight = 0;

  private ticking = false;

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateTimeline();
  });
  }
@HostListener('window:scroll', [])
onScroll() {
  if (!this.ticking) {
    window.requestAnimationFrame(() => {
      this.updateTimeline();
      this.ticking = false;
    });
    this.ticking = true;
  }
}

updateTimeline() {
  if (!this.timelineItems || this.timelineItems.length === 0) return;

  const scrollMiddle = window.scrollY + window.innerHeight / 2;
  const itemsArray = this.timelineItems.toArray();

  // Find the closest item
  let closestIndex = 0;
  let minDistance = Infinity;
  itemsArray.forEach((item, i) => {
    const el = item.nativeElement;
    const elCenter = el.getBoundingClientRect().top + window.scrollY + el.offsetHeight / 2;
    const distance = Math.abs(elCenter - scrollMiddle);
    if (distance < minDistance) {
      minDistance = distance;
      closestIndex = i;
    }
  });

  const firstTop = itemsArray[0].nativeElement.getBoundingClientRect().top + window.scrollY;
  const lastBottom = itemsArray[itemsArray.length - 1].nativeElement.getBoundingClientRect().bottom + window.scrollY;
  const extra = 80; // 5rem

  const currentItem = itemsArray[closestIndex].nativeElement;
  const itemCenter = currentItem.getBoundingClientRect().top + window.scrollY + currentItem.offsetHeight / 2;

  // Smooth position with translateY
  const newPosition = Math.min(itemCenter - firstTop + extra, lastBottom - firstTop + extra);

  // Use Renderer2 to update transform for smooth GPU-accelerated movement
  const icon = document.querySelector('.scroll-icon') as HTMLElement;
  if (icon) {
    icon.style.transform = `translate(-50%, ${newPosition}px)`;
  }

  // Update progress line
  this.progressHeight = newPosition;
}




}