// CONFIGURAÇÃO GLOBAL DA APLICAÇÃO
// Este arquivo centraliza TODOS os "providers" (serviços/funcionalidades globais)
// que a aplicação precisa para funcionar.
// É equivalente ao antigo array "providers" do AppModule (abordagem NgModule).

import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
// ^ ApplicationConfig: tipo TypeScript que define a estrutura do objeto de configuração.
// ^ provideBrowserGlobalErrorListeners: captura erros não tratados no browser
//   (ex: erros de Promise sem .catch()) e os repassa para o sistema de erros do Angular.

import { provideRouter } from '@angular/router';
// ^ Registra o sistema de roteamento como um serviço global da aplicação.
//   Sem isso, o <router-outlet> e os links de navegação NÃO funcionam.

import { routes } from './app.routes';
// ^ Importa o array de rotas definido em app.routes.ts

export const appConfig: ApplicationConfig = {
  // CONCEITO: "providers" são serviços e funcionalidades injetáveis disponíveis
  //           em TODA a aplicação. Pense como "plugins" globais.
  providers: [
    provideBrowserGlobalErrorListeners(), // Captura erros globais do browser
    provideRouter(routes), // Ativa o roteamento com as rotas definidas
  ],
};
