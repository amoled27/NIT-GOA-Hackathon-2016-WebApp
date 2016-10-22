import {Route} from "@angular/router";
import {RegisterComponent} from "./register/register.component"
import {DashboardComponent} from "./dashboard/dashboard.component"
import {LoginComponent} from "./login/login.component";


export const routerConfig : Route[] = [
{
	path: 'register',
	component:RegisterComponent
},
{
	path: '',
	component:RegisterComponent
},
{

	path: 'dashboard',
	component: DashboardComponent
},
{

	path: 'home',
	component:RegisterComponent
},
{
	path: 'login',
	component:LoginComponent
}

];