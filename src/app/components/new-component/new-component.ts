import { Component } from '@angular/core';
import { h3Style, pStyle, mainStyle, articleStyle } from '../../utils/styles';

@Component({
  selector: 'app-new-component',
  imports: [],
  templateUrl: './new-component.html',
  styleUrl: './new-component.css',
})
export class NewComponent {
  h3Style = h3Style();
  pStyle = pStyle();
  mainleStyle = mainStyle();
  articleStyle = articleStyle();
}
