import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class CookieService {
	
	setCookieData(data){
		for(let cookie in data)
		{
			Cookie.set(cookie,data[cookie]);
		}
	}
}