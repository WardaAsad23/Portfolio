import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [Navbar, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
