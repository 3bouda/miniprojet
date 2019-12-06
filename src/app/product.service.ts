import { Injectable } from '@angular/core';
import {Type} from './type';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts=[ 
    new Type ('Wallyscar','../assets/voiture-tunisienne.jpg',5000000,37,'voiture'),
    new Type ('Stickers','../assets/weldkhaldoun.PNG',1,4,'accessoir'),
    new Type ('Stickers','../assets/Capture.PNG',1.875,4,'accessoir'),
    new Type ('Stickers','../assets/heisenburg.PNG',1.875,4,'accessoir'),
    new Type ('Afset-Essid','../assets/Afset-Essid.jpg',2,5,'zliz'),
    new Type ('crissxcros','../assets/crissxcros.png',2,5,'zliz'),
 
    new Type ('harissa','../assets/sicam-harissa.jpg',12,12,'alimentation'),
    new Type ('tomate','../assets/sicame-tomate.jpg',1.875,28,'alimentation'),
    new Type ('bouga','../assets/bouga.jpg',1.5,28,'alimentation'),
    
   
  ]
  constructor() { }
  cherchTitre(n:string){
    if (n==""){return this.getProducts;}
    else {
      let rech=[];
      for (let x of this.getProducts){
        let j=0;
        for(let i=0;i<n.length;i++){
          if(x.titre[i]==n[i]){
            j++;
          }
        }
        if(j==n.length){rech.push(x);}
      }
    return rech;
    }
  }
  ajouterPro(f:string,s:string,p:number,u:number,c:string)
    {
      let j:string = ("../assets/" +s+ ".jpg");
      let t = new Type (f,j,p,u,c);
      this.getProducts.push(t); 
    }
  cherchId(f:number){
    return this.getProducts.find(x=>x.id== f)
    }

  cherchCtaegorie(l:string){
    let reche=[];
      this.getProducts.find(x=>x.categorie== l);
      reche.push(l);
      return reche;  
      
    }

    effPro(c:number){
      this.getProducts.splice(c,1);
    }
    modifierPro(n:string,i:string,p:number,c:number,r:string){
      let t = new Type (n,i,p,c,r);
      let u = this.getProducts.findIndex(x=>x.id== c);
      this.getProducts.splice(u,1,t);
    }
   
  } 
  
