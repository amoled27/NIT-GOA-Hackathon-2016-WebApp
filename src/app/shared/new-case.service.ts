import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";

@Injectable()
export class NewCaseService {


  private userid: FirebaseListObservable<any>;

  constructor(private af: AngularFire) { }

  makePost(adhardid :string){

    const path = `/aadhar_no/` + adhardid;

    this.userid = this.af.database.list(path);


    this.userid.first().subscribe(x => console.log(x.uid));


    this.userid.first().subscribe(res => this.userid = res.json());


  }

}
