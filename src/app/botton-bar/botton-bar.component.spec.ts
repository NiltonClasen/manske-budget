import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonBarComponent } from './botton-bar.component';

describe('BottonBarComponent', () => {
  let component: BottonBarComponent;
  let fixture: ComponentFixture<BottonBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottonBarComponent]
    });
    fixture = TestBed.createComponent(BottonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
