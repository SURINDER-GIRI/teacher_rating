import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import {TeacherApiService} from '../teacherapi.service';
import {CookieService} from '../cookies.service';
import { Router  } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [TeacherApiService,CookieService]
})
export class LoginComponent implements OnInit {

  userForm : FormGroup;	
  public data : string ;
  public cookiedata;
  constructor(private _fb: FormBuilder, private _teacherapiservice : TeacherApiService,private _cookieservice : CookieService, private _router : Router) { }

  ngOnInit() {
    this.userForm = this._fb.group({
    'email' : [null,Validators.required],
    'password' : [null,Validators.required] 
    })
  }

  submitUser()
  {
  	this._teacherapiservice.authenticateUser(this.userForm.value.email,this.userForm.value.password)
                      .subscribe(
                              data => {this.data = JSON.stringify(data);
                                        alert(this.data);
                                        this.cookiedata = {
                                          "email" : data.email,
                                          "token": data.token,
                                          "id" : data.id,
                                          "role": data.role
                                        };
                                        
                                        this._cookieservice.setCookieData(this.cookiedata);
                                        this._router.navigate(['/userdetail']) 
                                      },
                              error => {console.log(JSON.stringify(error));
                                        },
                              () => console.log(Cookie.get("id"),Cookie.get("email"),Cookie.get("token"),Cookie.get("role"))
                        );

}

}
