import { Component } from '@angular/core';
import { h3Style, pStyle, mainStyle, articleStyle, inlineCodeStyle, codeBlockStyle, exempleButton } from '../../utils/styles';

@Component({
  selector: 'app-template-binding',
  imports: [],
  templateUrl: './template-binding.html',
  styleUrl: './template-binding.css',
})
export class TemplateBinding {
  h3Style = h3Style();
  pStyle = pStyle();
  mainStyle = mainStyle();
  articleStyle = articleStyle();
  inlineCodeStyle = inlineCodeStyle();
  codeBlockStyle = codeBlockStyle();
  exempleButton = exempleButton();

// text interpolation
  public name: string = 'Bruno';
  public age: number = 38;
  public calculator(value1:number, value2:number) {
    return (
      value1 + value2
    )
  }

  // property binding
  public isDisabled = true;
  public isEnabled = false;

}
