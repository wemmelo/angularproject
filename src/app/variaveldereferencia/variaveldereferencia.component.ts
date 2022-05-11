import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variaveldereferencia',
  templateUrl: './variaveldereferencia.component.html',
  styleUrls: ['./variaveldereferencia.component.css']
})
export class VariaveldereferenciaComponent {

  resultado = 0;

  somar(valor1: number, valor2: number) {
    this.resultado = valor1 + valor2;
  }

}
