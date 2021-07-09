import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BethelComponent } from './pages/bethel/bethel.component';

const routes: Routes = [
  {path: 'bethel', component: BethelComponent},
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
