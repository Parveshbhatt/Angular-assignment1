import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  title:string = "boAt";
  description:string = "boAt Flash Edition Smartwatch with Activity Tracker, Multiple Sports ...";
  price:string = "1,299";
  faStar = faStar;
  faHeartCirclePlus = faHeartCirclePlus;
}
