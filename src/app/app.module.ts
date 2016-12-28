import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app.routing';
import { AppComponent } from './app.component';
import {SignupModule} from './signup/signup.module';
import { MaterialModule } from '@angular/material';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    UserdetailComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SignupModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
