// DEFINIÇÃO DAS ROTAS DA APLICAÇÃO
// Este arquivo é o "mapa de navegação" da sua aplicação.
// Cada objeto dentro do array Routes representa uma URL e qual componente
// deve ser exibido quando o usuário acessar aquela URL.

import { Routes } from '@angular/router';
// ^ Routes: tipo TypeScript — é simplesmente um alias para Array<Route>.
//   Cada Route pode ter: path, component, children, guards, resolvers, etc.

// EXEMPLO de como adicionar rotas (NÃO ALTERE AGORA — apenas leia):
// export const routes: Routes = [
//   { path: '', component: HomeComponent },           // Rota raiz: localhost:4200/
//   { path: 'sobre', component: SobreComponent },    // localhost:4200/sobre
//   { path: '**', component: NotFoundComponent },    // Qualquer rota não encontrada (404)
// ];

export const routes: Routes = [];
// ^ Por enquanto o array está VAZIO — nenhuma rota foi definida ainda.
//   O <router-outlet> no template do App.ts não renderiza nada por isso.
