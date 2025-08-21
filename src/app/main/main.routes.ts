import { Routes } from "@angular/router";
import { About } from "./about/about";
import { Home } from "./home/home";
import { Contact } from "./contact/contact";
import { Education } from "../education/education";
import { Projects } from "../projects/projects";
import { Experience } from "../experience/experience";

export const mainRoutes: Routes = [
   { path: 'home', component: Home },
   { path: 'about', component: About },
   { path: 'Education', component: Education },
   { path: 'projects', component: Projects },
   { path: 'experience', component: Experience },
   { path: 'contact', component: Contact },
   { path: '', redirectTo: '/home', pathMatch: 'full' }

];