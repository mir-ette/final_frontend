import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Drug } from '../drug';
import { Router } from '@angular/router';
@Component({
  selector: 'app-drug-add',
  templateUrl: './drug-add.component.html',
  styleUrls: ['./drug-add.component.css']
})
export class DrugAddComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  data:any;
  categories: any;
  drugs:any;
  file: any;
  image: any;
  drug= new Drug();
  constructor(private formBuilder:FormBuilder,private dataService:DataService,private router:Router) { }
  createForm(){
    this.form = this.formBuilder.group({
      trade_name_en:['' , [Validators.required , Validators.minLength(3)]],
      description:['' , [Validators.required , Validators.minLength(15)]],
      price:['' , [Validators.required]],
      trade_name_ar:['' , [Validators.required , Validators.minLength(3)]],
      category_id:['' , [Validators.required ]],
      image:[null, [Validators.required ]],
      expiry_date:[null, [Validators.required ]],
      production_date:[null, [Validators.required ]],
    });
  }

  ngOnInit(): void {
    this.getDRUGSData()
    this.getCategories()
    this.createForm()
  }

  getDRUGSData(){
    this.dataService.getData().subscribe(res=>{
      this.drugs=res;
     })
  
   }
  
   getCategories() {
     this.dataService.getCategoriesData().subscribe(res => {
       this.categories = res
     })
   }

   uploadImage(event: any){
     if (event.target.files.length > 0) {
       this.file = event.target.files[0];
       this.form.get('image')?.setValue(this.file);
     }
   }

  insertDrugssData(){
    const formData = new FormData();
    formData.append('trade_name_en', this.form.get('trade_name_en')?.value)
    formData.append('trade_name_ar', this.form.get('trade_name_ar')?.value)
    formData.append('price', this.form.get('price')?.value)
    formData.append('description', this.form.get('description')?.value)
    formData.append('category_id', this.form.get('category_id')?.value)
    formData.append('image', this.form.get('image')?.value)
    formData.append('expiry_date', this.form.get('expiry_date')?.value)

formData.append('production_date', this.form.get('production_date')?.value)
    
    this.dataService.insertData(formData).subscribe(res=>{
       this.data=res
      console.log(res);
    })
     this.router.navigate(['/drugs']);
  }









  // gotoDrugs(){
  //   this.router.navigate(['/drugs']);
  // }













}
