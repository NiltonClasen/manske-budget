import { Component, Inject, OnInit } from '@angular/core';
import { Degrau, degrauModel } from '../models/degrauModel';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-carouse-component',
  templateUrl: './carouse-component.component.html',
  styleUrls: ['./carouse-component.component.css'],
})
export class CarouseComponentComponent implements OnInit {
  ngOnInit() {}

  degrauModel: degrauModel = new degrauModel();
  listaTiposDegrau: Array<String> = this.degrauModel.getIds();
  listaTamanhosDegrau: Array<String> = this.degrauModel.getTamanhos();


  tipoDegrauSelected = '';
  tamanhoDegrauSelected = '';
  step = 0;
  selectedValue: string = '';
  valueInitialSlider = 1;
  subtotalDegrau = 200;
  valorDegrau = 0;
  valorDegrauSoma = 0;

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

  changeDegrau(){
    if(this.tipoDegrauSelected != '' && this.tamanhoDegrauSelected != ''){
      this.valorDegrau = this.degrauModel.getPrecoDegrau(this.tipoDegrauSelected, this.tamanhoDegrauSelected);
    }
  }
  valorSliderAlterado(){
    this.valorDegrauSoma = parseFloat((this.valorDegrau * this.valueInitialSlider).toFixed(2));
  }
}
