import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
  }

  getCart() {
    const cartJson = sessionStorage.getItem('cart');
    if (cartJson) {
      return JSON.parse(cartJson);
    } else {
      return [];
    }
  }

  saveCart(carts: any) {
    const cartJson = JSON.stringify(carts);
    sessionStorage.setItem('cart', cartJson);
  }

  getTotalPrice() {
    const carts = this.getCart();
    let total = 0;
    carts.forEach((item: any) => {
      total += item.quantity * item.price;
    });
    return total;
  }

  getTotalQuantity() {
    const carts = this.getCart();
    let total = 0;
    carts.forEach((item: any) => {
      total += item.quantity;
    });
    return total;
  }
}
