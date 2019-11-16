import {RouterModule, Routes} from '@angular/router';
import {CadastroComponent} from './pessoa/cadastro/cadastro.component';
import {ListaComponent} from './pessoa/lista/lista.component';
import {EdicaoComponent} from './pessoa/edicao/edicao.component';

const routes: Routes = [
  { path: 'cadastrar-pessoa', component: CadastroComponent },
  { path: 'listar-pessoas', component: ListaComponent },
  { path: 'editar-pessoa', component: EdicaoComponent },
  {path : '', component : ListaComponent}
];

export const rotas = RouterModule.forRoot(routes);
