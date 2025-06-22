import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactFormComponent } from '../../Shared/contact-form/contact-form.component';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ContactFormComponent],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'
})
export class ProjectFormComponent implements OnInit{
  projectFormGroup: FormGroup | undefined;
  statusArr = [
    {name:'Active', value:'active'},
    {name:'Paused', value:'paused'},
    {name:'Completed', value:'completed'},
    {name:'Archived', value:'archived'},
  ];
  projectRole = [
    {name:'Developer', value: 'developer'},
    {name:'Designer', value: 'designer'},
    {name:'QA', value: 'qa'},
    {name:'PM', value: 'pm'},
  ]
  constructor(
    private formBuilder:FormBuilder,
  ){ }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.projectFormGroup = this.formBuilder.group({
      projectName: ['',Validators.required],
      description: [],
      startDate: ['',Validators.required],
      endDate: [],
      status: [],
      projectTeam: this.formBuilder.array([])
    });
    this.addTeamMember();
  }

  createTeamMember(): FormGroup {
    return this.formBuilder.group({
      fullName: ['', Validators.required],
      role: [],
      email: ['', [Validators.required, Validators.email]],
      availability: []
    });
  }

  get team(): FormArray {
    return this.projectFormGroup?.get('projectTeam') as FormArray;
  }

  addTeamMember() {
    this.team.insert(0, this.createTeamMember());
  }

  removeTeamMember(index: number) {
    this.team.removeAt(index);
  }

  submitForm(){
    console.log(this.projectFormGroup?.value);
  }
}
