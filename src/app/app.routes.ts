import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ProjectsDetail } from './features/projects-detail/projects-detail';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'projects/:id', component: ProjectsDetail },

];

