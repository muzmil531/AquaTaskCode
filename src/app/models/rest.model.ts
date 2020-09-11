import { Injectable } from "@angular/core";


@Injectable()
export class RestModel {
    id?: Number
    name?: String
    neighborhood?: String
    photograph?: String
    address?: String
    latlng?: {
        lat: Number,
        lng: Number
    }
    cuisine_type?: String
    operating_hours: {
        Monday: String,
        Tuesday: String,
        Wednesday: String,
        Thursday: String,
        Friday: String,
        Saturday: String,
        Sunday: String
      }
    reviews: [{
        name: String,
        date: String,
        rating: Number,
        comments: String
    }]
}
