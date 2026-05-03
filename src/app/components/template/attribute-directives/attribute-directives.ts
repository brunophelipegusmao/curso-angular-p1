import { Component } from '@angular/core';
import {
  articleStyle,
  codeBlockStyle,
  exempleButton,
  h3Style,
  inlineCodeStyle,
  mainStyle,
  pStyle,
} from '../../../utils/styles';

@Component({
  selector: 'app-attribute-directives',
  imports: [],
  templateUrl: './attribute-directives.html',
  styleUrl: './attribute-directives.css',
})
export class AttributeDirectives {
  //----------------------------------->Estilização
  h3Style = h3Style();
  pStyle = pStyle();
  mainStyle = mainStyle();
  articleStyle = articleStyle();
  inlineCodeStyle = inlineCodeStyle();
  codeBlockStyle = codeBlockStyle();
  exempleButton = exempleButton();
  //<----------------------------------------------
}
