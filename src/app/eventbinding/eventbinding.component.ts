import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {

  title = 'angularproject';
  data = 2022;
  nome = "Wellington";

  //este método vai ser utilizado no data binding event binding
  adicionar() {
    console.log(`Adicionando  ${this.nome}`)

    const numero = Math.round(Math.random() * 100);

    this.nome = `João` + numero;
  }

  alterarNome(event: any) {
    //com o console.log eu consigo visualizar os atributos do objeto event no console no navegador
    //console.log(event);
    this.nome = event.target.value;
  }
}
