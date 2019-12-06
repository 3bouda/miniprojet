import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { UserComponent } from './user/user.component';
import { ProuctComponent } from './prouct/prouct.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserComponent,
    ProuctComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
