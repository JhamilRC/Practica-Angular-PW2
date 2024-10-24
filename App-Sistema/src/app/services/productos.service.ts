import { Injectable } from "@angular/core";
import { Producto } from "../models/producto.models";
@Injectable ({providedIn: 'root'})

export class ProductosService{
    constructor(){
    }
    private productos: Producto[] = [
        {nombre : "leon",detalle:"Este es  tu producto", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0oOWmBLHwE-QoCTFjzSnEc0nx3sYWEIOQ3K6jAV6OGF7wGkjISTQrq9e-f_T_OVi-tw&usqp=CAU", precio:100},
        {nombre : "gato",detalle:"Este es  tu producto",  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXcmiu7gR_MAQTHLuqClT65Vx2qcXydfDNkXYWlVBPYvXf8MbP-0HKee9WaaV_pIc3Evs&usqp=CAU", precio:200},
        {nombre : "tigre",detalle:"Este es  tu producto",  img:"https://img.freepik.com/vector-premium/diseno-ilustracion-icono-vector-plantilla-logotipo-mascota-cabeza-leon-sobre-fondo-blanco_938798-689.jpg", precio:1000000},
    ];
    getProductos(): Producto[]{//lista de los productos
        return this.productos;
    }
    getProducto(id:number) {//trae id de un producto
        return this.productos[id];
    }
    /*cambioo*/
    buscarProductos(termino: string/*definimos el tipo de dato*/): Producto[]{//Producto[] lo que retorna
        
        let productosArr: Producto[]=[];//
        termino = termino.toLowerCase();
        for(let i = 0; i< this.productos.length; i++){//buscar
            let producto = this.productos[i];
            let nombre = producto.nombre.toLowerCase();//convert a minusculas
            if(nombre.indexOf(termino)>=0){//trae toda la lista con el termino enviado
                productosArr.push(producto);
            }
        }
        return productosArr;
    }
}