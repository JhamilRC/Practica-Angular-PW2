import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.models';
import { ProductosService } from '../../services/productos.service';

import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import { CardproductoTarjetaComponent } from '../cardproducto-tarjeta/cardproducto-tarjeta.component';

@Component({
  selector: 'app-cardproductos',
  standalone: true,
  imports: [CardproductoTarjetaComponent,CommonModule],
  templateUrl: './cardproductos.component.html',
  styleUrl: './cardproductos.component.css'
})
export class CardproductosComponent implements OnInit{
  productos: Producto[] = [];

  constructor(
    private _productosService: ProductosService,
    private router: Router
  ) {

  }

  ngOnInit(){
    this.productos = this._productosService.getProductos();
  }
  verProducto(idx : number ){
    this.router.navigate(['/producto',idx])
  }
}
