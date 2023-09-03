import { Component, OnInit } from '@angular/core';
import { GridDataService } from '../grid-data.service';

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
  displayedColumns: string[] = ['tipo', 'produto', 'quantidade', 'valor'];
  dataSource: ItemLista[] = [];
  clickedRows = new Set<ItemLista>();

  constructor(private gridData: GridDataService) {}

  ngOnInit() {
    this.gridData.receberInfo().subscribe((data) => {
      this.addElementosTable(data);
    });
  }

  addElementosTable(elemento: Object) {
    this.dataSource.push(<ItemLista>elemento);
    this.dataSource = [...this.dataSource];
  }

  deleteElementoTable() {
    this.clickedRows.forEach((row) => {
      this.dataSource.filter((element) => {
        return row != element;
      });
    });
  }
}
