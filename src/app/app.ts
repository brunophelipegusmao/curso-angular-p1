import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component';
import { TemplateBinding } from "./components/template-binding/template-binding";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponent, TemplateBinding],
  template: `
    <!-- <router-outlet/> -->
    <h1>Curso Angular</h1>
    <!-- <app-new-component /> -->
     <app-template-binding/>
  `,
})
export class App {
  protected readonly title = signal('curso-angular-p1');
}
