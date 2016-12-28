import { Component, OnInit } from '@angular/core';
import {TeacherApiService} from '../teacherapi.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router  } from '@angular/router';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css'],
  providers : [TeacherApiService]
})
export class UserdetailComponent implements OnInit {
  public formData: any;
  public states;
  public cities;
  teacherDetail : FormGroup;  

  constructor(private _fb: FormBuilder,private _teacherapiservice : TeacherApiService,private _router : Router) { }
  
  ngOnInit() {
    this._teacherapiservice.getStates()
        .subscribe(
          data => {this.states=data;
                   console.log(this.states)},
          error => {console.log(JSON.stringify(error))},
          () => console.log("fetched")
          );

    this.teacherDetail = this._fb.group({
        'name' : [null],
        'college' : [null],
        'qualification' : [null],
        'master_subject' : [null],
        'id_proof' : [null],
        'photo' : [null],
        'professional_skills' : [null],
        'social_links' : [null],
        'experience' : [null],
        'address' : [null],
        'state' : [null],
        'city' : [null],
        'contact' : [null]
    })
  }

  onSelect(stateid) {
   this._teacherapiservice.getCitiesByStateId(stateid)
       .subscribe(
          data => {this.cities = data;
                   console.log(this.cities)},
          error => {console.log(JSON.stringify(error))},
          () => console.log("fetched")
          );
  }

  onChange(event: any) {
      let fileList: FileList = event.target.files;
      if(fileList.length > 0)
      {
          let file: File = fileList[0];
          console.log(file);
          // let formDataa:FormData = new FormData();
          // formDataa.append('photo', file, file.name);
          this.formData = file;
          console.log(this.formData);
      }

  }

  submitDetail(){
    // this._teacherapiservice.postTeacherDetail(Cookie.get('id'),this.teacherDetail.value.name,this.teacherDetail.value.college,this.teacherDetail.value.qualification,this.teacherDetail.value.master_subject,this.teacherDetail.value.id_proof,this.formData,this.teacherDetail.value.professional_skills,this.teacherDetail.value.social_links,this.teacherDetail.value.experience,this.teacherDetail.value.contact,this.teacherDetail.value.city,this.teacherDetail.value.state,this.teacherDetail.value.address)
    this._teacherapiservice.postTeacherDetail(this.formData)
    .subscribe(
      data => console.log(data),
      error => alert(JSON.stringify(error)),
      ()=>console.log("succesfully inserted")
      );
  }

  logout(){
  	this._teacherapiservice.logout(Cookie.get('id'),Cookie.get('token'))
  	    .subscribe(
  	    	data =>{
  	    		Cookie.deleteAll();
  	    		console.log("Succesfully logout"),
  	    		this._router.navigate(['/signup']) 
  	    	},
  	    	error =>{
  	    		alert(JSON.stringify(error))
  	    	},
  	    	()=>{
  	    		console.log(Cookie.get('id'))
  	    	}
  	    );
  }

}
