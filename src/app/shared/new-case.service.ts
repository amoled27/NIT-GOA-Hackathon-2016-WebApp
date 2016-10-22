import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import {Case} from "./case";

@Injectable()
export class NewCaseService {


  private userid: FirebaseListObservable<any>;

  constructor(private af: AngularFire) { }

  makePost(adhardid :string, model : Case){

    const path = `/aadhar_no/` + adhardid;
    this.userid = this.af.database.list(path);
    this.userid.push(model);


  }

}
