import { Component, OnInit } from '@angular/core';
import { degrauModel } from '../models/degrauModel';
import { GridDataService } from '../grid-data.service';
import { ItemLista } from '../table-component/table-component.component';
import { PatamarModel } from '../models/patamarModel';
import { OutrosModel } from '../models/outrosModel';
import { MontagemModel } from '../models/montagemModel';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-carouse-component',
  templateUrl: './carouse-component.component.html',
  styleUrls: ['./carouse-component.component.css'],
})
export class CarouseComponentComponent{

  constructor(private gridData: GridDataService) {}

  degrauModel: degrauModel = new degrauModel();
  tamanhosGenericos = this.degrauModel.getTamanhos();
  listaTiposDegrau: Array<String> = this.degrauModel.getIds();
  listaTamanhosDegrau: Array<String> = this.tamanhosGenericos;


  patamarModel: PatamarModel = new PatamarModel();
  listaTamanhosPatamar: Array<String> = this.tamanhosGenericos;

  OutrosModel: OutrosModel = new OutrosModel();
  listaTiposOutros: Array<String> = this.degrauModel.getIds();
  listaTamanhosOutros: Array<String> = this.degrauModel.getTamanhos();

  montagemModel: MontagemModel = new MontagemModel();
  listaTiposMontagem: Array<String> = this.degrauModel.getIds();
  listaTamanhosMontagem: Array<String> = this.tamanhosGenericos;

  tipoDegrauSelected = '';
  tamanhoDegrauSelected = '';
  step = 0;
  selectedValue: string = '';
  quantidadeSlider = 1;
  subtotalDegrau = 200;
  valorDegrau = 0;
  valorDegrauSoma = 0;
  valueInitialSlider = 0;

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  adicionarDegrau(tipo: string) {
    const item: ItemLista = {
      tipo: tipo,
      produto: this.tipoDegrauSelected,
      tamanho: this.tamanhoDegrauSelected,
      quantidade: this.quantidadeSlider,
      valor: this.valorDegrauSoma,
    };
    this.gridData.enviarInfo(item);
  }

  changeDegrau() {
    if (this.tipoDegrauSelected != '' && this.tamanhoDegrauSelected != '') {
      this.valorDegrau = this.degrauModel.getPrecoDegrau(
        this.tipoDegrauSelected,
        this.tamanhoDegrauSelected
      );
      this.valorDegrauSoma = this.valorDegrau;
    }
  }
  valorSliderAlterado() {
    this.valorDegrauSoma = parseFloat(
      (this.valorDegrau * this.quantidadeSlider).toFixed(2)
    );
  }
}
