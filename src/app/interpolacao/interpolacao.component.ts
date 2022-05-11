import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  templateUrl: './interpolacao.component.html',
  styleUrls: ['./interpolacao.component.css']
})
export class InterpolacaoComponent {

  title = 'angularproject';
  data = 2022;
  nome = "Wellington";

   //criei este método para ser utilizado no data binding com interpolação
   getData(){
    return this.data;
  }
}
