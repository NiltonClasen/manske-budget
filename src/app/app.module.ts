import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottonBarComponent } from './botton-bar/botton-bar.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { CarouseComponentComponent } from './carouse-component/carouse-component.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableComponentComponent } from './table-component/table-component.component';
import { MatTableModule } from '@angular/material/table';
import { GridDataService } from './services/grid-data.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BottonBarComponent,
    MainBodyComponent,
    CarouseComponentComponent,
    TableComponentComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatSelectModule,
    NgFor,
    FormsModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatTableModule,
    NgIf,
    MatCheckboxModule,
    MatToolbarModule,
  ],
  providers: [GridDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
