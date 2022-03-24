import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartapiService } from 'src/app/service/cartapi.service';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit {

  totalItemNumber: number = 0;
  token: any;
  constructor(private router: Router, private apiCart: CartapiService) { }

  ngOnInit(): void {

    this.apiCart.getDrugData().subscribe(res => {

      this.totalItemNumber = res.length;
    })

    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    }

  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

}
