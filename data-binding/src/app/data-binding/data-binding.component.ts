import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css'],
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com';
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/400/200/';

  valorAtual = '';
  valorSalvo = '';

  isMouseOver = false;

  nome = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20
  };

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
