import {Component, OnInit} from '@angular/core';
import {BibleQuotesService} from "../services/bible-quotes.service";
import {tap} from "rxjs";
import {BibleQuoteModel} from "../models/bible-quote.model";


@Component({
  selector: 'bible-quotes',
  templateUrl: './bible-quotes.component.html',
  styleUrls: ['./bible-quotes.component.scss']
})
export class BibleQuotesComponent implements OnInit {

  randomBibleQuote: BibleQuoteModel = {
    bookname: 'Nehemiah',
    chapter: 13,
    verse: 11,
    text: 'So I registered a complaint with the leaders, asking, “Why is the temple of God neglected?” Then I gathered them and reassigned them to their positions.'
  }

  constructor(private bibleService: BibleQuotesService) {
  }

  ngOnInit() {

   this.bibleService.getRandomBibleQuote()
     .pipe(
       tap (data => {
         if (!data) {
            return;
         }

         this.randomBibleQuote = data.length != 1 ? this.randomBibleQuote : data[0];
       })
     )
     .subscribe()
  }
}
