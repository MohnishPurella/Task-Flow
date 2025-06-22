import { Component, OnInit } from '@angular/core';
import bootstrap from '../../../../main.server';
import { ProjectFormComponent } from '../project-form/project-form.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectFormComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent{

  constructor( ){ }

  addProject(){ }
}
