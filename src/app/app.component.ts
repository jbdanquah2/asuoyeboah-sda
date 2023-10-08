import {Component, OnInit} from '@angular/core';
import {SymbolLoaderService} from "./services/google-symbols-loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Asuoyeboa SDA';


  constructor(public symbolLoaderService: SymbolLoaderService) {
  }

  ngOnInit() {

  }


}
