import { Component, OnInit } from '@angular/core';
import {NewCaseService} from "../shared/new-case.service";
import {Validators, FormGroup, FormArray, FormBuilder, Form} from '@angular/forms'
import {Case} from "../shared/case";

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
		this.myForm = this._formBuilder.group({
			adhaarid: ['', [Validators.required]],
			date: [String(new Date)],
			status: [false],
			examinations: this._formBuilder.array([
				this.initExamination(),
				]),
			prescriptionmeds: this._formBuilder.array([
				this.initPrescriptionmed()
				])
		});
	}

	initPrescriptionmed(){
		return this._formBuilder.group({
			medicinename: ['', Validators.required]
		});
	}

	addPrescriptionmed(){
		const control = <FormArray>this.myForm.controls['prescriptionmeds'];
		control.push(this.initPrescriptionmed());
	}

	removePrescriptionmed(i: number){
		const control = <FormArray>this.myForm.controls['prescriptionmeds'];
		control.removeAt(i);
	}


	initExamination(){


		return this._formBuilder.group({
			dr_name: ['', Validators.required],
			procedure: ['', Validators.required],
			specificsofprocedure: ['', Validators.required]
		});
	}

	addExaminations(){
		const control = <FormArray>this.myForm.controls['examinations'];
		control.push(this.initExamination());
	}

	removeExamination(i: number){
		const control = <FormArray>this.myForm.controls['examinations'];
		control.removeAt(i);
	}

	submitIssue(){
		this.date = String(new Date());
		console.log(this.date);
		console.log(this.adhaarid);



   // this.newcaseService.makePost(/*PASS ADHAR ID STRING HERE, AND PASS THE FULL JSON MODEL*/);


	}

  save(model : Case){

    const val=this.myForm.value;
    console.log(model);

    console.log(val.adhaarid);

  }


}
