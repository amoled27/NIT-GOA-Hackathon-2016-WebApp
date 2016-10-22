import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators, Form} from "@angular/forms";
import {AuthService} from "../shared/security/auth/auth.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

public myForm : FormGroup;
  constructor(private _fb: FormBuilder, private authService : AuthService, private router:Router) { }
  
  ngOnInit() {
  	this.myForm = this._fb.group({
  		register_email: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
  		register_name : ['', [<any>Validators.required]],
  		register_password: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
  		register_confirm_password: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
  		register_phone: ['', [<any>Validators.required, <any>Validators.minLength(10)]],
  		register_med_number: ['', [<any>Validators.required]]

  	})
  }

  isPasswordMatch () {
  	const val = this.myForm.value;
  	return val && val.register_password && val.register_confirm_password == val.register_password;

  }

  save (myForm:Form , isValid:boolean){
  	console.log(myForm, isValid);
  	const val = this.myForm.value;

  	this.authService.signUp(val.register_email, val.register_password).subscribe(
  		() => this.router.navigate(['/home']),
  		alert
  		);
  }

}
