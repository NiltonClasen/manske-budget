import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ItemLista } from '../table-component/table-component.component';

@Injectable()
export class GridDataService {
  private valor = new Subject<ItemLista>();
  private listaCompras: ItemLista[] = [];

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

  salvarLista(lista: ItemLista[]){
    this.listaCompras = lista;
  }

  recuperarLista(){
    const valor = localStorage.getItem('listaItens');
    if(valor){
      const lista = JSON.parse(valor) as ItemLista[];
      if(lista.length > 0){
        return lista;
      }
    }
    return [];
  }
}
