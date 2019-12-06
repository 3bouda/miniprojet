import { Component, OnInit} from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-proucts',
  templateUrl: './proucts.component.html',
  styleUrls: ['./proucts.component.css']
})
export class ProuctsComponent implements OnInit {
public products=[];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.products = this._productService.getProducts;
  }
  
  onAddProc(n:string,i:string,p:number,u:number,r:string)
  { this._productService.ajouterPro(n,i,p,u,r); }
  
  onDelete(i:number)
  {this._productService.effPro(i); }

  onUpgrade(n:string,i:string,p:number,c:number,r:string)
  { this._productService.modifierPro(n,i,p,c,r); }
}
