import { Injectable } from '@angular/core';
import  {FirebaseAuth, FirebaseAuthState} from "angularfire2";
import  {Observable , Subject} from "rxjs";




@Injectable()
export class AuthService {

  constructor(private auth: FirebaseAuth ) { }

  signUp(email:string , password: string): Observable<FirebaseAuthState>{
  	return this.fromFirebaseAuthPromise(this.auth.createUser({email,password}));

  }
  login(email:string , password: string): Observable<FirebaseAuthState>{
  	return this.fromFirebaseAuthPromise(this.auth.login({email,password}));

  }



fromFirebaseAuthPromise(promise): Observable<any>
{
	const subject = new Subject<any>();
	promise
	.then (res=>{
		subject.next(res);
		subject.complete();
	},err=>{
		subject.error(err);
		subject.complete();
	});
	return subject;
	}
}
