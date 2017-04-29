import { Component } from '@angular/core';
import { BaseBodyComponent } from '../base-component';

@Component({
  moduleId: module.id,
  selector: 'wb-quote-component',
  templateUrl: 'quote.component.html',
  styleUrls: ['quote.component.css']
})
export class QuoteComponent implements BaseBodyComponent {

  parameters: Map<string, string>;

  getQuote() {
    return this.parameters.get('quote');
  }

  getQuoteAuthor() {
    return this.parameters.get('author');
  }

}
