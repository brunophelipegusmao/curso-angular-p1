import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  h3Style,
  pStyle,
  mainStyle,
  articleStyle,
  inlineCodeStyle,
  codeBlockStyle,
  exempleButton,
} from '../../../utils/styles';

@Component({
  selector: 'app-template-variables',
  imports: [],
  templateUrl: './template-variables.html',
  styleUrl: './template-variables.css',
})
export class TemplateVariables {
  //----------------------------------->Estilização
  h3Style = h3Style();
  pStyle = pStyle();
  mainStyle = mainStyle();
  articleStyle = articleStyle();
  inlineCodeStyle = inlineCodeStyle();
  codeBlockStyle = codeBlockStyle();
  exempleButton = exempleButton();
  //<----------------------------------------------

  @ViewChild('h2')
  public nameH2!: ElementRef;
  ngAfterViewInit(){
    console.log(this.nameH2.nativeElement.innerText)
  }
}
