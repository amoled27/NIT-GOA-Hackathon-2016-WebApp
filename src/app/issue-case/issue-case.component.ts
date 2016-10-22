import { Component, OnInit } from '@angular/core';
import {NewCaseService} from "../shared/new-case.service";

@Component({
	selector: 'app-issue-case',
	templateUrl: './issue-case.component.html',
	styleUrls: ['./issue-case.component.css']
})
export class IssueCaseComponent implements OnInit {
	adhaarid:string;
	date:string;
	constructor(private newcaseService : NewCaseService) { }

	ngOnInit() {
	}

	submitIssue(){
		this.date = String(new Date());
		console.log(this.date);
		console.log(this.adhaarid);


    this.newcaseService.makePost(/*PASS ADHAR ID STRING HERE, AND PASS THE FULL JSON MODEL);


	}

}
