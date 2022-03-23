import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproject';
  data = 2022;
  nome = "Wellington";

  //criei este método para ser utilizado no data binding com interpolação
  getData(){
    return this.data;
  }

  //este método vai ser utilizado no data binding event binding
  adicionar(){
    console.log(`Adicionando  ${this.nome}`)

    const numero = Math.round(Math.random() * 100);

    this.nome = `João` + numero;
  }

  alterarNome(event: any){
      //console.log(event);
      this.nome = event.target.value;
  }
}
