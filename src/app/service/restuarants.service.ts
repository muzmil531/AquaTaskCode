import { Injectable } from '@angular/core';
import {Restaurants} from '../staticdata/restuarants'
import { Observable, from } from 'rxjs';

import {RestModel} from '../models/rest.model'
@Injectable({
  providedIn: 'root'
})
export class RestuarantsService {

  
  constructor() {}

  restuarants=Restaurants
  
  getalldata(){
    // this.restdata = this.restuarants
    // console.log(this.restuarants)
    return this.restuarants
  }
}

export interface RestData {
  
}