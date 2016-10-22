export interface Case {


  aadharid: string; // required with minimum 5 chracters
  date: string; // required with minimum 5 chracters


  //Add multiple prescriexaminations

  examination: {

    dr_name: string;
    procedure: string;
    specificsofprocedure: string;

  }


  //Add multiple prescriptionmeds
  prescriptionmeds: {
    medicinename: string;
  }

}
