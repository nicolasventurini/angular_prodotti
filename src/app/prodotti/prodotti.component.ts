import { Component, OnInit } from '@angular/core';
import { PRODOTTI } from './lista-prodotto.component';
import { Prodotto } from './prodotto';

@Component({
  selector: 'app-prodotto',
  templateUrl: './lista-prodotto-component.html',
  styleUrls: ['./lista-prodotto-component.css'],
})
export class ProdottoComponent implements OnInit {
  ILocalita = PRODOTTI;
  mostraImmagine: boolean = false;
  //listFilter: string = '';

  private _listFilter: string = '';
  prodottiFiltrati: Prodotto[] = [];

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log(value);
    this.prodottiFiltrati = this.datiFiltrati(value);
  }

  mostraNascondi(): void {
    this.mostraImmagine = !this.mostraImmagine;
  }

  datiFiltrati(filtratoPer: string): Prodotto[] {
    filtratoPer = filtratoPer.toLocaleLowerCase();

    return this.ILocalita.filter((prodottiFiltrati: Prodotto) =>
      prodottiFiltrati.productName.toLocaleLowerCase().includes(filtratoPer)
    );
  }

  ngOnInit() {
    console.log('lista creata.');
    this.listFilter = '';
  }
}
