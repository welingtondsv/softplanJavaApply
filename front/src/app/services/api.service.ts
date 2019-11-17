import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pessoa} from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:8080/pessoa';

  getPessoas(): Observable<Pessoa[]> {
    const headers = this.montarHeader();
    return this.http.get<Pessoa[]>(`${this.baseUrl}/listar`, {headers});
  }

  deletarPessoa(id: bigint): Observable<any> {
    const headers = this.montarHeader();
    return this.http.delete(`${this.baseUrl}/deletar/${id}`, {headers});
  }

  cadastrarPessoa(value: any) {
    const headers = this.montarHeader();
    return this.http.post(`${this.baseUrl}/cadastrar`, value, {headers});
  }

  montarHeader(): HttpHeaders {
    return new HttpHeaders()
      .set('Authorization', `Basic ${window.btoa('softplayer:123')}`);
  }

  getPessoaPorId(pessoaId: string) {
    const headers = this.montarHeader();
    return this.http.get<Pessoa>(`${this.baseUrl}/${pessoaId}`, {headers});
  }

  atualizarPessoa(pessoa: Pessoa) {
    const headers = this.montarHeader();
    return this.http.put(`${this.baseUrl}/atualizar/${pessoa.id}`, pessoa, {headers});
  }
}
