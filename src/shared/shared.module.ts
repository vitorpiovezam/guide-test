import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinanceService } from './services/finance.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { ShimmerModule } from '@sreyaj/ng-shimmer';

const sharedModules = [
  FormsModule,
  ReactiveFormsModule,
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  ShimmerModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  NgChartsModule,
  RouterModule,
];

const sharedComponents = [
  LineChartComponent,
];

@NgModule({
  declarations: [
    LineChartComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ...sharedModules,
  ],
  providers: [
    FinanceService
  ],
  exports: [
    ...sharedModules,
    ...sharedComponents,
  ]
})
export class SharedModule { }
