import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FRASES } from './frases-mock';
import { Frase } from '../shared/frase.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy{

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';
  // contrala a rodada de perguntas
  public rodada: number = 0;
  public rodadaFrase!: Frase;

  // controla o progresso da barra de progresso
  public progresso: number = 0;

  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit(): void {

  };

  ngOnDestroy(): void {
    console.log('Componente painel foi destruido')
  };

  public atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value);
  };

  public verificarResposta(): void {

    // Nota tratar o erro de maiusculas e minusculas.

    if(this.rodadaFrase.frasePtBr == this.resposta) {
      // Trocar espaço da rodada
      this.rodada++;

      // Progresso
      this.progresso = this.progresso + (100/ this.frases.length);

      if(this.rodada === 4) {
        this.encerrarJogo.emit('vitoria');
      }

      this.atualizaRodada();

    } else {
      // Decrementar avaríavel tentativas;
      this.tentativas--

      if(this.tentativas === -1){
        this.encerrarJogo.emit('derrota');
      }

    };
  };

  public atualizaRodada(): void {
    // Atualiza o objeto rodadaFrase
    this.rodadaFrase = this.frases[this.rodada];
    // Limpar a resposta do usuário
    this.resposta = '';
  };
}
