import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-carouse-component',
  templateUrl: './carouse-component.component.html',
  styleUrls: ['./carouse-component.component.css']
})
export class CarouseComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    step = 0;
    selectedValue: string = "";
    valueInitialSlider = 0;
    subtotalDegrau =200;

    foods: Food[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'},
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

}
