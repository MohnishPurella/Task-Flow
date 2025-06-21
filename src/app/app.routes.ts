import { Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProjectListComponent } from './Components/Project/project-list/project-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component:DashboardComponent},
    { path: 'project', component:ProjectListComponent}
];
