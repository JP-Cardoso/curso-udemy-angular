import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit{


  @Input() public tentativas!: number;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() {

  }

  // Ele é executado quando tiver entrada de dados dos componentes pais para os filhos.
  ngOnChanges(): void {
    // Esses são os valores que estamos recebendo
    // this.tentativas
    // this.coracoes.lenght
    if(this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false
    }

  }


  ngOnInit(): void {
  }

}
