import { Component, Input } from "@angular/core";
import { ChartConfiguration, ChartOptions } from "chart.js";

@Component({
	selector: 'app-line-chart',
	template: `
  	<canvas baseChart
			[type]="'line'"
			[data]="data"
			[options]="lineChartOptions">
		</canvas>
  `,
	styleUrls: ['./line-chart.component.sass']
})
export class LineChartComponent {
	constructor() {
	}

	@Input()
	data?: ChartConfiguration<'line'>['data'];

	@Input()
	lineChartOptions: ChartOptions<'line'> = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			}
		}
	};

}
