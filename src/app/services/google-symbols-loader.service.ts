import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SymbolLoaderService {
  private googleMaterialSymbolsLoaded = false;

  constructor() {
    this.checkGoogleMaterialSymbolsLoaded();
  }

  private checkGoogleMaterialSymbolsLoaded() {
    const link = document.querySelector("link[href*='Material+Symbols+Outlined']") as HTMLLinkElement;

    if (link) {
      link.addEventListener('load', () => {
        this.googleMaterialSymbolsLoaded = true;
      });

      // If the font is already loaded, the 'load' event might have already fired, so check the readyState
      if (link.sheet) {
        this.googleMaterialSymbolsLoaded = true;
      }
    } else {
      // Handle the case where the link element is not found
      console.error("Google Material Symbols link element not found.");
    }
  }


  isGoogleMaterialSymbolsLoaded(): boolean {
    return this.googleMaterialSymbolsLoaded;
  }
}
