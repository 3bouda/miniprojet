import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { ProuctsComponent } from './proucts/proucts.component';
import { UserComponent } from './user/user.component';
import { ProuctComponent} from './prouct/prouct.component'


const routes: Routes = [
  {path:'user', component:UserComponent},
  {path:'user/:id', component:ProuctComponent},
  {path:'proucts', component:ProuctsComponent},
{path:'LogIn', component:LogInComponent},
{path:'', redirectTo:'LogIn', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ ProuctsComponent,
                                  LogInComponent,
                                  UserComponent,
                                  ProuctComponent]
