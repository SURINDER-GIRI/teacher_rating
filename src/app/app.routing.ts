import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {UserdetailComponent} from './userdetail/userdetail.component';
import { LoginComponent } from './login/login.component';
import {MainComponent} from './main/main.component';
const routes: Routes = [
		{path: '', pathMatch: 'full',redirectTo: 'signup'},
		{path: 'main', component: MainComponent},
		{path: 'signup', component: SignupComponent},
		{path: 'userdetail', component: UserdetailComponent},
		{path: 'login', component: LoginComponent}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
	})

export class AppRoutingModule{}
// export const routingComponents = [UserdetailComponent,LoginComponent]

