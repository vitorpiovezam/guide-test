import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'quote',
    pathMatch: 'prefix'
  },
  {
    path: 'quote',
    loadChildren: () => import('../pages/quotes/quotes.module').then(m => m.QuotesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
