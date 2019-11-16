import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaComponent } from './pessoa/lista/lista.component';
import { CadastroComponent } from './pessoa/cadastro/cadastro.component';
import { EdicaoComponent } from './pessoa/edicao/edicao.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {rotas} from './app.rotas';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CadastroComponent,
    EdicaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    rotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
