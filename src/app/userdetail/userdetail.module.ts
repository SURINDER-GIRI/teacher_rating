import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailComponent } from './userdetail.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
     ReactiveFormsModule,
     FormsModule,
     MaterialModule
  ],
  declarations: [UserdetailComponent]
})
export class UserdetailModule { }
