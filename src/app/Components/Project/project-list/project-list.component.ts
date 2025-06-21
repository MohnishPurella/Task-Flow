import { Component, OnInit } from '@angular/core';
import bootstrap from '../../../../main.server';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit{

  constructor( ){ }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addProject(){
    
  }
}
