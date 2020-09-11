import { Component, OnInit } from '@angular/core';
import { RestuarantsService } from 'src/app/service/restuarants.service';
import { WeekDay } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // searchTerm:String;
  constructor(private restservice:RestuarantsService) { }

  restuarants;

  shopname:String
  

  resdata;
  ngOnInit(): void {
    this.restuarants=this.restservice.getalldata()
    console.log(this.restuarants)
  }

  Search(){
    if(this.shopname !=""){
      this.restuarants=this.restuarants.filter(res=>{
        return res.name.toLowerCase().match(this.shopname.toLowerCase())
        // console.log(this.resdata)
      })
      console.log(this.restuarants)
       
    }else if(this.shopname == ""){
      this.ngOnInit()
    }
    
  

  // console.log(event.data)
  }
 
}
