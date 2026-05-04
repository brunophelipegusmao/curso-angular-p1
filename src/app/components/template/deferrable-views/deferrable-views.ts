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

@Component({
  selector: 'app-deferrable-views',
  imports: [],
  templateUrl: './deferrable-views.html',
  styleUrl: './deferrable-views.css',
})
export class DeferrableViews {
  h3Style = h3Style();
  pStyle = pStyle();
  mainStyle = mainStyle();
  articleStyle = articleStyle();
  inlineCodeStyle = inlineCodeStyle();
  codeBlockStyle = codeBlockStyle();
  exempleButton = exempleButton();
}
