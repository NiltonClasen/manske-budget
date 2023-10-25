import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botton-bar',
  templateUrl: './botton-bar.component.html',
  styleUrls: ['./botton-bar.component.css'],
})
export class BottonBarComponent implements OnInit {
  visible: boolean = false;
  ngOnInit() {
    this.visible = true;
  }

  constructor(private router: Router) { }

  checkoutPath(){
    this.router.navigate(['/checkout']);
  }
}
