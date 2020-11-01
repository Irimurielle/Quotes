import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]= [
    new Quote(1,'Murielle', 'Dalai Lama', 'The purpose of our lives is to be happy', 0, 0, new Date(2020, 8, 29))
  ]
  deleteQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.date = new Date(quote.date)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
