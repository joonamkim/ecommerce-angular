import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    console.log(this.cartService);
    this.items = this.cartService.clearCart();

    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);

  }

}
