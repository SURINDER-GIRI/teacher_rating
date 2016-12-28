import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
     ReactiveFormsModule,
     FormsModule,
     MaterialModule
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
