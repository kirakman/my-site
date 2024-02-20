import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-container2',
  templateUrl: './container2.component.html',
  styleUrls: ['./container2.component.css']
})
export class Container2Component implements OnInit {

  mensagemAtual: number = 1;
  botaoFocado: number = 1;
  mostrarImagem1: boolean = false;
  mostrarImagem2: boolean = false;
  mostrarImagem3: boolean = false;
  


  ngOnInit(): void {
    const divMensagemInicial = document.getElementById('mensagem1');
    if (divMensagemInicial) {
      divMensagemInicial.style.display = 'block';
    }
    this.botaoFocado = 1;
    this.mostrarImagem1 = true;
  }

  mostrarMensagem(numero: number) {
    const divMensagemAtual = document.getElementById('mensagem' + this.mensagemAtual);
    if (divMensagemAtual) {
      divMensagemAtual.style.display = 'none';
    }

    const divMensagemNova = document.getElementById('mensagem' + numero);
    if (divMensagemNova) {
      divMensagemNova.style.display = 'block';
    }

    this.mensagemAtual = numero; 
    this.mostrarImagem1 = numero === 1;
    this.mostrarImagem2 = numero === 2;
    this.mostrarImagem3 = numero === 3;
  }
  
}
