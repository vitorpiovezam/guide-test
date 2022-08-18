import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ChartConfiguration } from 'chart.js';
import { debounceTime, Subject, takeUntil, timer } from 'rxjs';
import { FinanceApiResponse, Quote } from 'src/shared/definitions/quote.model';
import { FinanceService } from 'src/shared/services/finance.service';

@Component({
  selector: 'app-quote-list',
  template: `
    <header>
      <form [formGroup]="form">
        <div class="input-wrapper">
          <input type="text" id="name" formControlName="name" placeholder="Enter a company symbol name to filter" autofocus/>
          <mat-spinner *ngIf="loading" diameter="40"></mat-spinner>
        </div>
      </form>
    </header>
  
    <main>
      <ng-container *ngIf="!error; else errorTemplate">
        <app-line-chart
          [data]="chartData"
        ></app-line-chart>

        <app-quote-view></app-quote-view>
         
        <p style="color: red">
          * Os timestamps da API parecem estarem errados (todos apontam para 1970), nao encontrei a documentacao
        </p>
      </ng-container>

      <ng-template #errorTemplate>
         <p style="color: red">
          Cotacao nao encontrada
        </p>
      </ng-template>
    </main>
  `,
  styleUrls: ['./list.component.sass']
})
export class QuoteListComponent implements OnInit, OnDestroy {
  private readonly subscriptions$ = new Subject();
  public data?: FinanceApiResponse;

	chartData?: ChartConfiguration<'line'>['data'];
  loading = false;
  error = false;

  form: FormGroup = new FormGroup({
    name: new FormControl('PETR4.SA')
  });

  constructor(
    private financeService: FinanceService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getQuote('PETR4.SA');
  }

  initForm() {
    this.form.valueChanges.pipe(
      takeUntil(this.subscriptions$),
      debounceTime(800),
    ).subscribe(value => this.getQuote(value.name));
  }

  getQuote(name: string) {
    this.loading = true;

    this.financeService.getChartByName(name).subscribe(
      res => {
        this.data = res;
        this.loading = false;
        this.error = false;

      
        this.initGraph()
      },
      err => {
        this.error = true;
      });
  }

  initGraph() {
    if (!this.data?.chart?.result[0]) return;

    const chartData: Number[] = this.data.chart.result[0].indicators.quote[0].open.slice(-30);
    const timestamps = this.data.chart.result[0].timestamp.slice(-30);

    this.chartData = {
      labels: timestamps.map(timestamp => new Date(timestamp).toLocaleDateString()),
      datasets: [
        {
          data: [ ...chartData as any],
          fill: false,
          tension: 0.5,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)',
        }
      ],
    }
  }

  ngOnDestroy() {
    this.subscriptions$.next(true);
    this.subscriptions$.complete();
  }
 }
