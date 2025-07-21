import { Component } from '@angular/core';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
imports: [Header, RouterModule],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
