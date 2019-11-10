import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObservComponent } from './observ/observ.component';

const routes: Routes = [
  {path:'home/:id',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'observ', component:ObservComponent},
  {path:'**',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
