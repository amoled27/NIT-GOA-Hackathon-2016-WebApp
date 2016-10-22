import { Component, OnInit } from '@angular/core';
import {NewCaseService} from "../shared/new-case.service";
import {Validators ,FormGroup, FormArray, FormBuilder} from '@angular/forms'

@Component({
	selector: 'app-issue-case',
	templateUrl: './issue-case.component.html',
	styleUrls: ['./issue-case.component.css']
})
export class IssueCaseComponent implements OnInit {
	public myForm :FormGroup;
	adhaarid:string;
	date:string;
	constructor(private newcaseService : NewCaseService, private _formBuilder: FormBuilder) { }

	ngOnInit() {
	}

	submitIssue(){
		this.date = String(new Date());
		console.log(this.date);
		console.log(this.adhaarid);

    this.newcaseService.makePost(this.adhaarid);


	}

}
