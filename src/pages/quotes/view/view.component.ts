import { Component, Input } from "@angular/core";
import { FinanceApiResponse } from "src/shared/definitions/quote.model";

@Component({
  selector: 'app-quote-view',
  template: `
    <header>
    </header>

    <main>

    </main>

    <footer>
      
    </footer>
  `,
  styleUrls: ['./view.component.sass']
})
export class QuoteViewComponent {
  @Input()
  quote?: FinanceApiResponse;

}
