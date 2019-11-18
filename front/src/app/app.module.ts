import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaComponent } from './paginas/lista/lista.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { EdicaoComponent } from './paginas/edicao/edicao.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {rotas} from './app.rotas';
import {ReactiveFormsModule} from '@angular/forms';
import { SourceComponent } from './paginas/source/source.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CadastroComponent,
    EdicaoComponent,
    SourceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    rotas,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
