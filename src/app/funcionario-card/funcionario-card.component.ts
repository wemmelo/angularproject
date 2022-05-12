import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent{

  //componente customizado de um card
  //funcionario = {id:1, nome:'joao'}
  //com o any em crio um objeto genérico o @input() é o que permite deixar essa propridade acessivel a outros componentes do sistema
  @Input() funcionario: any;


}
