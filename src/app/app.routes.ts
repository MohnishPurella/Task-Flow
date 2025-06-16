import { Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProjectComponent } from './Components/project/project.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component:DashboardComponent},
    { path: 'project', component:ProjectComponent}
];
