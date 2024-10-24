import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { CardproductosComponent } from '../cardproductos/cardproductos.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardproducto',
  standalone: true,
  imports: [CardproductosComponent,CommonModule],
  templateUrl: './cardproducto.component.html',
  styleUrl: './cardproducto.component.css'
})
export class CardproductoComponent implements OnInit {
  producto: any = [];
  constructor(//referencia a las libreria o clases que se utilizan
    private activatedRoute: ActivatedRoute
    ,private _productosService: ProductosService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '0';
    this.producto = this._productosService.getProducto(parseInt(id));
    console.log(this.producto);
  }
}
