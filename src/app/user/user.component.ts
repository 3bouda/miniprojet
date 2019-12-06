import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-user',
  template: `
<img src="../assets/head.jpg" style="height: 400px;width: 100%;">
<div class="fat">
  <div id="mySidenav" class="sidenav" [ngClass]="t==true ? 'c1':'c2'">
    <button class="closebtn" (click)="ff()">&times;</button>
    <input type="text" class="ser" placeholder="Search..." (keyup)="oncherche(titre.value)" #titre>
    <button (click)="cherche(vetement)">Vétements</button>
    <button (click)="cherche(alimentation)">Alimentation</button>
    <button (click)="cherche(cosmetique)">Cosmetiques</button>
    </div>
  <div style="font-size:30px;cursor:pointer;" class="opennav" (click)="rr()">&#9776; Filtrer</div>


  <div class="container-fluid" >
    <div class="row" >
      <div class="col-md-2 text-center shadow p-4 mb-4 bg-white" style="margin:50px;padding: 0px !important;" *ngFor="let t of products" >
        <div>
          <a [routerLink]="['/user',t.id]">
            <img src={{t.photo}}  style="height:150px;width:auto;">
          </a>
        </div>
        <div style="font-size: 22px;"><strong>{{t.titre}}</strong></div>
        <div style="font-size: 22px;">{{t.categorie}}</div>
        <div style=" color: grey;font-size: 18px;">{{t.prix}} dt</div>
        <div style="bottom:0%"><button class="buy">buy</button></div>
      </div>
    </div>
  </div>
</div>
  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public products=[];
  public t=false;
  constructor(private _productService: ProductService) { }
  
  ngOnInit() {
    this.products = this._productService.getProducts;
  }
 oncherche(n:string){
   this.products = this._productService.cherchTitre(n);
 }
 cherche(f:string){
  this.products = this._productService.cherchCtaegorie(f);
   }
 ff(){
  this.t=false; 
  return this.t;
 }
 rr(){
  this.t=true; 
  return this.t;
 }

}
