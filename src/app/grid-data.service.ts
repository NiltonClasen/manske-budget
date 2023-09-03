import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ItemLista } from './table-component/table-component.component';

@Injectable()
export class GridDataService {
  private valor = new Subject<ItemLista>();

  enviarInfo(info: ItemLista) {
    try {
      this.valor.next(info);
    } catch (e) {
      console.log(e);
    }
  }
  receberInfo() {
    return this.valor.asObservable();
  }
}
