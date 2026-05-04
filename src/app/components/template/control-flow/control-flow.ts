import { Component } from '@angular/core';
import {
  h3Style,
  pStyle,
  mainStyle,
  articleStyle,
  inlineCodeStyle,
  codeBlockStyle,
  exempleButton,
} from '../../../utils/styles';
import { delay, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

interface Usuario {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-control-flow',
  imports: [AsyncPipe],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  h3Style = h3Style();
  pStyle = pStyle();
  mainStyle = mainStyle();
  articleStyle = articleStyle();
  inlineCodeStyle = inlineCodeStyle();
  codeBlockStyle = codeBlockStyle();
  exempleButton = exempleButton();

  isLogado = false;

  // exeplo para o FOR
  public usuario$: Observable<Usuario[]> = of([
    { id: 1, nome: 'Ada' },
    { id: 2, nome: 'Alan' },
    { id: 3, nome: 'Grace' },
  ]).pipe(delay(3000));
}
