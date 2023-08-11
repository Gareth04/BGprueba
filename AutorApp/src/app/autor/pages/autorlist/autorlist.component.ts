import { Component } from '@angular/core';
import { RESTAutor } from '../../interfaces/autor.interface';
import { autorService } from '../../services/autor.service';
import { Product } from '../../interfaces/product.interface';
import { routes } from '../../../app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autorlist',
  templateUrl: './autorlist.component.html',
  styleUrls: ['./autorlist.component.css']
})
export class AutorlistComponent {
  //Inicialización de variables y arreglos
  products: Product[] = [];
  cart: { product: Product, quantity: number }[] = [];
  //Carga del servicio
  constructor(private autorService: autorService, private router: Router){}
  ngOnInit(): void {
    this.autorService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      error => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

  addToCart(product: Product): void {
    const existingItem = this.cart.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }
  goToCart(): void {
    console.log(this.cart)
    this.router.navigate(['/carrito'], { state: { cart: this.cart } });
  }
  getQuantity(product: Product): number {
    const cartItem = this.cart.find(item => item.product.id === product.id);
    return cartItem ? cartItem.quantity : 0;
  }
  removeFromCart(product: Product): void {
    const cartItem = this.cart.find(item => item.product.id === product.id);
    if (cartItem && cartItem.quantity > 0) {
      cartItem.quantity--;
    }
  }
  
}
