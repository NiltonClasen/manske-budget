import { Component, OnInit } from '@angular/core';
import { GridDataService } from '../services/grid-data.service';
import { SelectionModel } from '@angular/cdk/collections';

export interface ItemLista {
  tipo: string;
  produto: string;
  tamanho: string;
  quantidade: number;
  valor: number;
}

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css'],
})
export class TableComponentComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'tipo',
    'produto',
    'quantidade',
    'valor',
  ];
  dataSource: ItemLista[] = [];
  selection = new SelectionModel<ItemLista>(true, []);
  hideDeleteButton: boolean = false;

  constructor(private gridData: GridDataService) {}

  ngOnInit() {
    this.onReady();
    this.gridData.receberInfo().subscribe((data) => {
      this.addElementosTable(data);
    });
    this.hideDeleteButton = true;
    if (this.gridData.recuperarLista().length > 0) {
      this.dataSource = [...this.gridData.recuperarLista()];
    }
  }

  onReady(){
    const valor = localStorage.getItem('listaItens');
    if(valor){
      const lista = JSON.parse(valor) as ItemLista[];
      if(lista.length > 0){
        this.atualizarValorLista(lista);
      }
    }
  }

  addElementosTable(elemento: Object) {
    this.dataSource.push(<ItemLista>elemento);
    this.atualizarValorLista(this.dataSource);
  }

  deleteElementosTable() {
    if (!this.selection.selected.length) {
      return;
    }

    this.selection.selected.forEach((element) => {
      let idx = this.dataSource.filter((e) => {
        return e === element;
      });
      this.dataSource.splice(this.dataSource.indexOf(idx[0]), 1);
    });
    this.atualizarValorLista(this.dataSource);
    //this.dataSource = [...this.dataSource];
    this.selection.clear();
    if (this.dataSource.length == 0) {
      this.habilitarDesabilitarElementos(true);
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.forEach((row) => this.selection.select(row));
  }

  habilitarDesabilitarElementos(isEsconder: boolean = false) {
    setTimeout(() => {
      const elementTable = window.document.getElementById('divTable');
      if (elementTable !== null) {
        elementTable.hidden = isEsconder;
      }
      const elementButtonFinalizar = window.document.getElementById(
        'button-finalizar-id'
      );
      if (elementButtonFinalizar !== null) {
        elementButtonFinalizar.hidden = isEsconder;
      }
    }, 800);
  }

  atualizarValorLista(dataSource: ItemLista[]){
    this.dataSource = [...dataSource];
    this.salvarValoresListaStorage();
    this.updatePriceLabel();
    this.habilitarDesabilitarElementos();
  }
  salvarValoresListaStorage() {
    this.gridData.salvarLista(this.dataSource);
    localStorage.setItem('listaItens', JSON.stringify(this.dataSource));
  }

  updatePriceLabel() {
    let total = 0;
    this.dataSource.forEach((element) => {
      total += element.valor;
    });
    const element = <HTMLElement>(
      window.document.getElementsByClassName('total-titulo')[0].children[0]
    );
    if (element) {
      element.innerText = 'Total R$' + total.toFixed(2);
    }
  }
}
