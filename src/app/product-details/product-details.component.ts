import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {products} from '../product';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute,
    private cartServce: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(this.route);
      this.product = products[+params.get('productId')];
      // console.log(+params.get('productId'));
      // console.log(params.get('productId'));
      }
    );
  }

  addToCart(product) {
    this.cartServce.addToCart(product);
    window.alert('Your product has been added to cart!');
  }

}
