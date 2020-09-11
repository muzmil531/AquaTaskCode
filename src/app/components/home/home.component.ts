import { Component, OnInit } from '@angular/core';
import { RestuarantsService } from 'src/app/service/restuarants.service';
import { WeekDay } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // searchTerm:String;
  constructor(private restservice: RestuarantsService, private router:Router) { }

  restuarants;
  originalrestuarantdata;
  shopname: String
  resdata;
  
  ngOnInit(): void {
    this.restuarants = this.restservice.getalldata()
    this.originalrestuarantdata=this.restuarants
    // console.log(this.restuarants['0'].reviews['0'])
    // console.log(this.restservice.getSpecifiRestuarantData(2))
  }

  Search() {
    this.restuarants=this.originalrestuarantdata;
    if (this.shopname != "") {
      this.restuarants = this.restuarants.filter(res => {
        return res.name.toLowerCase().match(this.shopname.toLowerCase())
      })
      this.restuarants=this.restuarants.sort((a, b) => (a.priority > b.priority) ? 1 : -1)


    } else if (this.shopname == "") {
      this.restuarants=this.originalrestuarantdata;
    }
  }

  barpage(id){
    this.router.navigate([`/restuarant/${id}`]);
  }

}
