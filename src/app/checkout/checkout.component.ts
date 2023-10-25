import { Component, OnInit } from '@angular/core';
import { ItemLista } from '../table-component/table-component.component';
import { ActivatedRoute, Router } from '@angular/router';
import { GridDataService } from '../services/grid-data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  valorTotal = '0';
  textoWhats ='hehehe';
  displayedColumns: string[] = [
    'tipo',
    'produto',
    'quantidade',
    'valor',
  ];
  dataSource: ItemLista[] = [];

  ngOnInit() {
    if(this.gridData.recuperarLista().length > 0){
      this.dataSource = [...this.gridData.recuperarLista()];
      let valorSomado: number = 0;
      this.dataSource.forEach(element => {
        valorSomado += element.valor;
      });
      this.valorTotal = valorSomado.toFixed(2);
    }
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private gridData: GridDataService) { }

  getTotalCost(){
    return this.valorTotal;
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  enviarMensagem(){
    window.open('https://wa.me/?text='+this.getTextoMensagem(), '_blank');
  }

  getTextoMensagem(){
    const cabecalhoMensagem = 'Segue orçamento abaixo:%0a';
    const final = '*Orçamento válido por 7 dias* %0a_Escadas Manske_';
    const cabecalhoTabela = '*Tipo*                 *Produto*                 *Qnt.*       *Valor*%0a';
    const rodapeTabela = 'Total *R$'+this.valorTotal+'*%0a%0a';
    let textoEscadas: string = '';
    this.dataSource.forEach(registro =>{
      textoEscadas += registro.tipo + '             '+registro.produto+'               '+registro.quantidade+'           '+registro.valor+'%0a';
    });
    return cabecalhoMensagem+cabecalhoTabela+textoEscadas+rodapeTabela+final;

  }

}
