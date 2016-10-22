import { Component, OnInit } from '@angular/core';
import { Form, Validators, FormGroup, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../shared/security/auth/auth.service"; 




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public loginForm : FormGroup;
  constructor(private _fb:FormBuilder, private authService:AuthService , private router:Router) { }

  ngOnInit() {
  	this.loginForm = this._fb.group({
  		login_email: ['',[<any>Validators.required]],
  		login_password: ['',[<any>Validators.required]]
  	});
  }

  save(loginForm:Form, isValid:boolean){
  	console.log(loginForm,isValid);
  	const val = this.loginForm.value;

  	this.authService.login(val.login_email,val.login_password).subscribe(
  		() => this.router.navigate(['/home']),
  		alert
  	);
  

}

}