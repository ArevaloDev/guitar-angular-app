import { Injectable } from '@angular/core';
import {db} from '../db/db'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  get getCarts(){
      return db;
  }
}
