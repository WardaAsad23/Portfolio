import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TimelineModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
  education = 
  [
    { 
      degree: 'Bachelor of Computer Science', 
      school: 'Bahria University, Karachi', 
      duration: '2015 - 2019', 
      grade: 'GPA 3.82',
      icon: 'pi-graduation-cap'
    },
    { 
      degree: 'Higher Secondary School', 
      school: 'Khatoon e Pakistan', 
      duration: '2012 - 2015', 
      grade: 'Grade A',
      icon: 'pi-book'
    },
    { 
      degree: 'Secondary School', 
      school: 'New Century School', 
      duration: '2010 - 2012', 
      grade: 'Grade A+',
      icon: 'pi-pencil'
    }
  ];
}
