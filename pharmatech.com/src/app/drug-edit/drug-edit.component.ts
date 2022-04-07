import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drug } from '../drug';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-drug-edit',
  templateUrl: './drug-edit.component.html',
  styleUrls: ['./drug-edit.component.css']
})
export class DrugEditComponent implements OnInit {
  data:any;
  id:any;
  drugs:any;
  drug= new Drug();
  file: any;
  image: any;
  categories: any;
  form!: FormGroup;
  constructor(private dataService:DataService,private route:ActivatedRoute,private router:Router,private formBuilder:FormBuilder) { }
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
    this.id=this.route.snapshot.params['id'];
    this.getData();
    this.getCategories()
    this.createForm()
  }
  
  uploadImage(event: any){
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.form.get('image')?.setValue(this.file);
    }
  }

getData(){
 
  this.dataService.getDrugById(this.id).subscribe(res=>{
  

    console.log(res);
    this.data = res
    this.drug.trade_name_en = this.data.name;
    this.drug.description = this.data.description;
    this.drug.price = this.data.price;
    this.drug.trade_name_ar = this.data.discount;
    this.drug.category_id = this.data.category_id;
   
    this.drug.image = this.data.image;
  })
}
getCategories() {
  this.dataService.getCategoriesData().subscribe(res => {
    this.categories = res
  })
}

updateDrug(){
  
  this.dataService.updateData(this.id,this.drug).subscribe(res=>{
   
  })
  this.router.navigate(['/drugs'])
}

}
