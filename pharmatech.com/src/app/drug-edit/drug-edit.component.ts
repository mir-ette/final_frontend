import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drug } from '../drug';
import { DataService } from '../service/data.service';
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
  constructor(private dataService:DataService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getData();

  }
getData(){
  this.dataService.getDrugById(this.id).subscribe(res=>{
    this.data=res;
    this.drug=this.data
  })
}


updateDrug(){
  this.dataService.updateData(this.id,this.drug).subscribe(res=>{
    
  })
}

}
