import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prouct',
  templateUrl: './prouct.component.html',
  styleUrls: ['./prouct.component.css']
})
export class ProuctComponent implements OnInit {
  identifiant:number;
  public t:string;
  public p:string;
  public pr:number;

  constructor(private activatedRoute:ActivatedRoute,private _productService: ProductService) { }

  ngOnInit() {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
    this.t=this._productService.cherchId(this.identifiant).titre;
    this.p=this._productService.cherchId(this.identifiant).photo;
    this.pr=this._productService.cherchId(this.identifiant).prix;
    //this.products= this._productService.cherch(this.identifiant)
  }
   
  
}
