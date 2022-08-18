import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { QuoteListComponent } from './list/list.component';
import { QuoteViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    QuoteListComponent,
    QuoteViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuoteListComponent,
      },
    ])
  ],
  providers: [],
  bootstrap: []
})
export class QuotesModule { }
