import {Injectable} from "@angular/core";
import {environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {BibleQuoteModel} from "../models/bible-quote.model";

@Injectable()
export class BibleQuotesService {

  constructor(private http: HttpClient) {
  }

  getRandomBibleQuote(): Observable<BibleQuoteModel[]> {
   return this.http.get(environment.api.getRandomBibleQuotes)
     .pipe(
       map((data: any) => {
         if (!data) {
           return;
         }
          return data;
       }
     ));
  }
}
