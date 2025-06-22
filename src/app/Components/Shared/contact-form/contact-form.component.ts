import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit{

  contactFormGroup: FormGroup | undefined;
  @Input() parentForm!: FormGroup;

  constructor(
    private formBuilder:FormBuilder
  ){ }

  ngOnInit(): void {
    this.buildForm();
    if (this.parentForm) {
      this.parentForm.addControl('contact', this.contactFormGroup!);
    }
  }

  buildForm() {
    this.contactFormGroup = this.formBuilder.group({
      contactName: ['',Validators.required],
      contactEmail: ['',[Validators.required, Validators.email]],
      contactPhone: ['',Validators.required],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipCode: ['', Validators.required],
      })
    });
  }

}
