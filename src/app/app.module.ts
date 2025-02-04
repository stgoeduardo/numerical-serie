import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormNumericalSerieComponent } from './components/form-numerical-serie/form-numerical-serie.component';
import { LogicNumericalSerieComponent } from './components/logic-numerical-serie/logic-numerical-serie.component';
import { ResultsNumericalSerieComponent } from './components/results-numerical-serie/results-numerical-serie.component';

@NgModule({
  declarations: [
    AppComponent,
    FormNumericalSerieComponent,
    LogicNumericalSerieComponent,
    ResultsNumericalSerieComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
