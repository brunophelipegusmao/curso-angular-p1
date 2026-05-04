import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/template/new-component/new-component';
import { TemplateBinding } from './components/template/template-binding/template-binding';
import { AttributeDirectives } from './components/template/attribute-directives/attribute-directives';
import { TemplateVariables } from './components/template/template-variables/template-variables';
import { ControlFlow } from "./components/template/control-flow/control-flow";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponent, TemplateBinding, AttributeDirectives, TemplateVariables, ControlFlow],
  template: `
    <!-- <router-outlet/> -->
    <h1>Curso Angular</h1>
    <!-- <app-new-component /> -->
    <!-- <app-template-binding/> -->
    <!-- <app-attribute-directives /> -->
    <!-- <app-template-variables /> -->
    <app-control-flow />
  `,
})
export class App {
  protected readonly title = signal('curso-angular-p1');
}
