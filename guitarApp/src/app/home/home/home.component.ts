import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Guitar } from '../../interfaces/guitar.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public cart:Guitar[] = [];
   constructor(private cartService:CartService){}

  ngOnInit(): void {
      this.cart = this.cartService.getCarts;
  }
}
