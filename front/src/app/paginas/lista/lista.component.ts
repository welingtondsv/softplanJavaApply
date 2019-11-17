import {Component, OnInit} from '@angular/core';
import {Pessoa} from '../../models/pessoa';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  pessoas: Pessoa[];

  constructor(private router: Router, private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getPessoas()
      .subscribe(pessoas => {
        this.pessoas = pessoas;
      });
  }

  deletar(pessoa: Pessoa): void {
    this.apiService.deletarPessoa(pessoa.id)
      .subscribe(data => {
        this.pessoas = this.pessoas.filter(p => p !== pessoa);
      });
  }

  editar(pessoa: Pessoa): void {
    window.localStorage.removeItem('pessoaEditarId');
    window.localStorage.setItem('pessoaEditarId', pessoa.id.toString());
    this.router.navigate(['editar-pessoa']);
  }

  cadastrar(): void {
    this.router.navigate(['cadastrar-pessoa']);
  }

}
