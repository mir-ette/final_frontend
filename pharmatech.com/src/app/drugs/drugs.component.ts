import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { ToastrService } from 'ngx-toastr';
import { Drug } from '../drug';
import { Router } from '@angular/router';
import {AbstractControl, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})
//  [function unique(): ValidatorFn {  
//   return (control: AbstractControl): { [key: string]: any } | null =>  
//       control.value?.toLowerCase() === 'unique' 
//           ? null : {wrongDrug: control.value};
// },
  export class DrugsComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  data:any;
  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/drugs/';
  drugs:any;
  drug= new Drug();
  
  p: number = 1;
  constructor( private formBuilder:FormBuilder,private dataService:DataService,private toastr:ToastrService,private router:Router) { } //ba3din 3ashan 3awza dema8
  // createForm(){
  //   this.form= this.formBuilder.group({
  //     trade_name_ar:['',Validators.required],
  //     trade_name_en:['',Validators.required],
      
  //    price:[null,Validators.required],
     
  //     description:[null,Validators.required], //ask '' or null
  //     image:[null,Validators.required],
  //     production_date:[null,Validators.required],
  //     expiry_date:[null,Validators.required],
  //   })
  // }

  ngOnInit(): void {
    // this.createForm();
    this.getDrugsData()
  }

  getDrugsData(){
    this.dataService.getData().subscribe(res=>{
      this.drugs=res;
     })
  
   }// hnshil el :any awel mal el api yet7at
  
   deleteData(id:any){
    this.dataService.deleteData(id).subscribe(res=>{
     this.getDrugsData();
    })
  
   }

insertData(){
  this.dataService.insertData(this.drug).subscribe(res=>{
    // this.getDrugsData
    console.log(res);
    this.router.navigate(['/drugs']);
    
  })
}
gotoDrugs(){
  this.router.navigate(['/drugs']);
}
// get f(){
//   return this.form.controls;
// }
//   submit(){
//     this.submitted= true;
//     if(this.form.invalid){
//       return;
//     }
//     this.dataService.insertData(this.form.value).subscribe(res=>{
//       this.data=res;
//       // console.log(res);
//       if(this.data.status===1){
//         this.toastr.success(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
//           timeOut:2000,
//           progressBar:true
//         });
      
//       }else{ 
//           this.toastr.error(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
//         timeOut:2000,
//         progressBar:true
//       });            

//       }

// this.submitted= false;
// this.form.get('trade_name_ar')?.reset();
// this.form.get('trade_name_en')?.reset();
// this.form.get('price')?.reset();
// this.form.get('description')?.reset();
// this.form.get(' image')?.reset();
// this.form.get('production_date')?.reset();
// this.form.get('expiry_date')?.reset();

//     });
    
//   }

 







}
