import { Component, OnInit } from '@angular/core';
import { GridDataService } from '../grid-data.service';
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
  hideDeleteButton:boolean = false;

  constructor(private gridData: GridDataService) {}

  ngOnInit() {
    this.gridData.receberInfo().subscribe((data) => {
      this.addElementosTable(data);
    });
    this.hideDeleteButton = true;
  }

  addElementosTable(elemento: Object) {
    this.dataSource.push(<ItemLista>elemento);
    this.dataSource = [...this.dataSource];
    const element = window.document.getElementById('divTable');

    if (element !== null) {
      element.hidden = false;
    }
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
    this.dataSource = [...this.dataSource];
    this.selection.clear();
    if (this.dataSource.length == 0) {
      const element = window.document.getElementById('divTable');
      if (element !== null) {
        element.hidden = true;
      }
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
}
