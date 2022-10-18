import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './componants/product/product.component';
import { AddProductComponent } from './componants/add-product/add-product.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'products', component: ProductComponent },
{ path: 'products/addProducts', component: AddProductComponent },
{ path: 'dashboard', component: DashboardComponent }

]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
