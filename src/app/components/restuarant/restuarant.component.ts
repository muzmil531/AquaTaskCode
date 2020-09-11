import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute} from '@angular/router';
import { RestuarantsService } from 'src/app/service/restuarants.service';

@Component({
  selector: 'app-restuarant',
  templateUrl: './restuarant.component.html',
  styleUrls: ['./restuarant.component.css']
})
export class RestuarantComponent implements OnInit {

  id:Number
  restdata

  restreview
  constructor(  private router: Router,    private route: ActivatedRoute,private restservice: RestuarantsService) { }

  ngOnInit(): void {
    this.id=parseInt(this.route.snapshot.paramMap.get('shopid'));

    this.restdata=this.restservice.getSpecifiRestuarantData(this.id)

    this.restreview=this.restdata.reviews
    console.log(this.restreview)
  }

}
