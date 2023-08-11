import { Component } from '@angular/core';
import { Favorito } from '../../interfaces/favoritos.interface';
import { autorService } from '../../services/autor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  cart: { product: Product, quantity: number }[] = [];
  nombre: string = '';
  email: string = '';
  telefono: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params && params['state'] && params['state'].cart) {
        this.cart = params['state'].cart;
        this.nombre = params['state'].nombre || '';
        this.email = params['state'].email || '';
        this.telefono = params['state'].telefono || '';
      }
      console.log(params)
    });
  }
  removeItem(index: number): void {
    if (index >= 0 && index < this.cart.length) {
      this.cart.splice(index, 1);
    }
  }
}
