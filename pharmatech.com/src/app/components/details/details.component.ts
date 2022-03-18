import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drug } from 'src/app/drug';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data: any;
  id: any;
  // drugs:any;
  // drug= new Drug();
  drug: any;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.getDrugsById(this.id)
  }
  getDrugsById(id: number) {
    this.dataService.getDrugById(id).subscribe((res) => {
      this.drug = res;
      console.log(this.drug);
    })
  }

}
// ngOnInit(): void {
//   this.id=this.route.snapshot.params['id'];
//   this.getsData();

// }
// getsData(){
// this.dataService.getDrugById(this.id).subscribe(res=>{
//   this.data=res;
//   this.drug=this.data
// })
// }}