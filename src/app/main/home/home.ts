
import { Component } from '@angular/core';
import { Projects } from "../../projects/projects";

@Component({
  selector: 'app-home',
  imports: [Projects],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 
}
