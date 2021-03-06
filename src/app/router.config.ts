import {Route} from "@angular/router";
import {RegisterComponent} from "./register/register.component"
import {DashboardComponent} from "./dashboard/dashboard.component"
import {LoginComponent} from "./login/login.component";
import {IssueCaseComponent} from './issue-case/issue-case.component'

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
	path: 'login',
	component:LoginComponent
},
{
	path: 'new_issue',
	component:IssueCaseComponent
}

];
