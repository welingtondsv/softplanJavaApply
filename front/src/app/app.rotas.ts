import {RouterModule, Routes} from '@angular/router';
import {CadastroComponent} from './paginas/cadastro/cadastro.component';
import {ListaComponent} from './paginas/lista/lista.component';
import {EdicaoComponent} from './paginas/edicao/edicao.component';
import {SourceComponent} from './paginas/source/source.component';

const routes: Routes = [
  { path: 'cadastrar-pessoa', component: CadastroComponent },
  { path: 'listar-pessoas', component: ListaComponent },
  { path: 'editar-pessoa', component: EdicaoComponent },
  { path: 'source', component: SourceComponent },
  {path : '', component : ListaComponent}
];

export const rotas = RouterModule.forRoot(routes);
