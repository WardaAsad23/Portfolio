import { Routes } from "@angular/router";
import { About } from "./about/about";
import { Home } from "./home/home";
import { Contact } from "./contact/contact";

export const mainRoutes: Routes = [
   { path: 'home', component: Home },
//   { path: 'about', component: About },
//   { path: 'contact', component: Contact },
   { path: '', redirectTo: '/home', pathMatch: 'full' }

];