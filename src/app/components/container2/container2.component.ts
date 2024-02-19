import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container2',
  templateUrl: './container2.component.html',
  styleUrls: ['./container2.component.css']
})
export class Container2Component implements OnInit {

  mensagemAtual: number = 1;
  botaoFocado: number = 1;

  ngOnInit(): void {
    const divMensagemInicial = document.getElementById('mensagem1');
    if (divMensagemInicial) {
      divMensagemInicial.style.display = 'block';
    }
    this.botaoFocado = 1;
  }

  mostrarMensagem(numero: number) {
    // Oculta a mensagem atual
    const divMensagemAtual = document.getElementById('mensagem' + this.mensagemAtual);
    if (divMensagemAtual) {
      divMensagemAtual.style.display = 'none';
    }

    // Exibe a nova mensagem
    const divMensagemNova = document.getElementById('mensagem' + numero);
    if (divMensagemNova) {
      divMensagemNova.style.display = 'block';
    }

    this.mensagemAtual = numero; 
  }
}
