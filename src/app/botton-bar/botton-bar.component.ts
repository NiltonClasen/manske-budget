import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botton-bar',
  templateUrl: './botton-bar.component.html',
  styleUrls: ['./botton-bar.component.css']
})
export class BottonBarComponent {
@Input() teste!: number;

}
