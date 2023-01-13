import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent {
  // Esse atributo que está sendo interpolado no html écontralado por aqui.
  // Com o decoereitor @input fazemos com que esse atributo seja recebido em outro componente
  @Input() public progresso: number = 0;


}
