// PONTO DE ENTRADA DA APLICAÇÃO
// Este é o primeiro arquivo executado pelo Angular.
// Todo projeto Angular precisa de um "bootstrapper" — alguém que diz:
// "A aplicação começa aqui, com este componente raiz."

import { bootstrapApplication } from '@angular/platform-browser';
// ^ bootstrapApplication é a função moderna (Angular 14+) que inicializa
//   a aplicação sem precisar de um NgModule (abordagem antiga/legada).
//   Isso faz parte do conceito "Standalone Components".

import { appConfig } from './app/app.config';
// ^ Importa as configurações globais da app (providers, roteamento, etc.)

import { App } from './app/app';
// ^ Importa o componente RAIZ — o ponto de partida da árvore de componentes.

bootstrapApplication(App, appConfig)
  // ^ Inicia a aplicação:
  //   - 1º argumento: o componente raiz (App)
  //   - 2º argumento: as configurações globais (appConfig)
  .catch((err) => console.error(err));
// ^ Se o bootstrap falhar (ex: erro de configuração), o erro aparece no console.
