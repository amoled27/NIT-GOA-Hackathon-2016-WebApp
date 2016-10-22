import {Route} from "@angular/router";
import {RegisterComponent} from "./register/register.component"
import {DashboardComponent} from "./dashboard/dashboard.component"

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
}

];