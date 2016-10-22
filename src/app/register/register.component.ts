import { Component, OnInit } from '@angular/core';
// import { FormBuilder,FormGroup, Validators, Form} from "@angular/forms";
import {AuthService} from "../shared/security/auth/auth.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

// public myForm : FormGroup;
  constructor(/*private _fb: FormBuilder,*/ private authService : AuthService, private router:Router) { }
  name:string;
  email:string;
  password:string;
  confirm_password:string;
  contact:string;
  medregistration:string;
  ngOnInit() {
  	// this.myForm = this._fb.group({
  	// 	register_email: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
  	// 	register_name : ['', [<any>Validators.required]],
  	// 	register_password: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
  	// 	register_confirm_password: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
  	// 	register_phone: ['', [<any>Validators.required, <any>Validators.minLength(10)]],
  	// 	register_med_number: ['', [<any>Validators.required]]

  	// })
  }

  isPasswordMatch () {
  	// const val = this.myForm.value;
  	// return val && val.register_password && val.register_confirm_password == val.register_password;
    return this.password == this.confirm_password;

  }

  signUp (){
  	// console.log(myForm, isValid);
  	// const val = this.myForm.value;
   //  console.log(val);

  	// this.authService.signUp(val.register_email, val.register_password).subscribe(
  	// 	res => this.router.navigate(['/home']){
   //      console.log(res)
   //    }, 
   //    error => {
   //      console.log(error);
   //    });

   this.authService.signUp(this.email, this.password).subscribe(
      res => {
        console.log(res)
      }, 
      error => {
        console.log(error);
      });
  }

}
