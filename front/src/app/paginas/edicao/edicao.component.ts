import {Component, OnInit} from '@angular/core';
import {Pessoa} from '../../models/pessoa';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {NascimentoValidador} from '../../validadores/nascimento-validador';
import {CpfValidador} from '../../validadores/cpf-validador';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {

  pessoaForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) {
  }

  ngOnInit() {
    const pessoaId = window.localStorage.getItem('pessoaEditarId');
    if (!pessoaId) {
      alert('Ação invalida.');
      this.router.navigate(['listar-pessoas']);
      return;
    }
    this.pessoaForm = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      sexo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['', [Validators.required, NascimentoValidador.validaData]],
      naturalidade: [''],
      nacionalidade: [''],
      cpf: ['', [Validators.required, CpfValidador.validaCpf]]
    });
    this.apiService.getPessoaPorId(pessoaId)
      .subscribe(pessoa => {
        this.pessoaForm.patchValue(pessoa);
      });
  }

  onSubmit() {
    this.apiService.atualizarPessoa(this.pessoaForm.value);
    if (this.pessoaForm.invalid) {
      this.exibirMensagemCamposInvalido();
    } else {
      this.apiService.atualizarPessoa(this.pessoaForm.value)
        .pipe(first())
        .subscribe(
          data => {
            alert('Pessoa atualizada com sucesso.');
            this.router.navigate(['listar-pessoas']);
          },
          erro => {
            alert(erro.error.message);
          });
    }
  }

  private exibirMensagemCamposInvalido() {
    const camposInvalidos = [];
    const controls = this.pessoaForm.controls;
    for (const campo in controls) {
      if (controls[campo].invalid) {
        camposInvalidos.push(campo);
      }
    }
    alert('Erro ao enviar cadastro, os seguintes campos estão invalidos para cadastro: \n' + camposInvalidos);
  }


}
