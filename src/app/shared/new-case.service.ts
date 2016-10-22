import {Injectable, Inject} from '@angular/core';
import {
  AngularFire, FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase,
  FirebaseRef
} from "angularfire2";
import {Case} from "./case";
import {Subject} from "rxjs";

@Injectable()
export class NewCaseService {
  sdkDb: any;
  path: string;

  private userid: FirebaseListObservable<any>;

  constructor(private af: AngularFire, private db: AngularFireDatabase, @Inject(FirebaseRef) fb,) {

    this.sdkDb = fb.database().ref();

  }


  makePost(adhardid: string, model: Case) {


    this.path = `case/` + adhardid;
    console.log(adhardid)

    this.userid = this.af.database.list(this.path);
    this.userid.push(model);


  }


}
