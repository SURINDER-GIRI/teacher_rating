import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';

@Injectable()

export class TeacherApiService {
	private _url = "http://localhost:3000/v1/";
	constructor (private _http : Http){}
    
    // new user or signup
	postUserData(email,password,role){
		let user = JSON.stringify({"user":
				{
					"email" : email,
					"password" : password,
					"role" : role
				}}); 
		let p_url = this._url + "users";
		var headers = new Headers();
		headers.append('Content-Type','application/json');
		return this._http.post(p_url,user,{ headers : headers}) 
		.map(res => res.json())
	}

	// logout user
	logout(user_id,token){
		let user = JSON.stringify(
				{
					"user_id" : user_id,
					"token" : token
				}); 
		let p_url = this._url + "logout";
		var headers = new Headers();
		headers.append('Content-Type','application/json');
		return this._http.post(p_url,user,{ headers : headers}) 
		.map(res => res.json())
	}

	// authenticate or login user
	authenticateUser(email,password){
		let user = JSON.stringify({"user":
				{
					"email" : email,
					"password" : password
				}});
		let p_url = this._url + "authenticate";
		var headers = new Headers();
		headers.append('Content-Type','application/json');
		return this._http.post(p_url,user,{ headers : headers})
		.map(res => res.json())
		}

	// fetch states
	getStates(){
		let g_url = this._url + "states";
		return this._http.get(g_url).map(
				res => res.json()
			);
	}

	// fetch cities according to state
	getCitiesByStateId(stateid){
		let city = JSON.stringify({"city":
				{
					"state_id" : stateid
				}});
		let p_url = this._url + "getCitiesByStateId";
		var headers = new Headers();
		headers.append('Content-Type','application/json');
		return this._http.post(p_url,city,{ headers : headers}) 
		.map(res => res.json())	
	}

	// post teacher detail
	// postTeacherDetail(user_id,name,college,qualification,master_subject,id_proof,photo,professional_skills,experience,social_links,contact,state,city,address){
		postTeacherDetail(photo){
		console.log(photo);
		let teacherDetail = JSON.stringify({"teacherdetail":
				{
					// "user_id" : user_id,
					// "name" : name,
					// "college" : college,
					// "qualification" : qualification,
					// "master_subject" : master_subject,
					// "id_proof" : id_proof,
					"photo" : photo
					// "professional_skills" : professional_skills,
					// "social_links" : social_links,
					// "experience" : experience,
					// "contact" : contact,
					// "city_id" : city,
					// "state_id" : state,
					// "address" : address
				}});
		let p_url = this._url + "teacherdetails";
		var headers = new Headers();
		headers.append('Content-Type',undefined);
		return this._http.post(p_url,teacherDetail,{ headers : headers}) 
		.map(res => res.json())	
	}
	

	

}