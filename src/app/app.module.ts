import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { InterpolacaoComponent } from './interpolacao/interpolacao.component';
import { VariaveldereferenciaComponent } from './variaveldereferencia/variaveldereferencia.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';


@NgModule({
  declarations: [
    AppComponent,
    EventbindingComponent,
    InterpolacaoComponent,
    VariaveldereferenciaComponent,
    FuncionarioCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  //aqui eu modifico para o componente que eu quero levantar no servidor
  bootstrap: [AppComponent]
})
export class AppModule { }
