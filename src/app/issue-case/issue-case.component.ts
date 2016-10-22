import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-issue-case',
	templateUrl: './issue-case.component.html',
	styleUrls: ['./issue-case.component.css']
})
export class IssueCaseComponent implements OnInit {
	adhaarid:string;
	date:string;
	constructor() { }

	ngOnInit() {
	}

	submitIssue(){
		this.date = String(new Date());
		console.log(this.date);
		console.log(this.adhaarid);
	}

}
