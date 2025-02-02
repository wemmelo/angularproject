import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ultimoId = 0;
  nome = "Wellington";
  adicionado = false;
  funcionarios = [{id:this.ultimoId, nome:this.nome}];

  adicionar() {
    console.log(`Adicionando ${this.nome}`);
    this.adicionado = true;

    this.funcionarios.push({
      id:++this.ultimoId,
      nome: this.nome
    });

  }

  alterarNome(event: any) {
    this.nome = event.target.value;
  }

}
