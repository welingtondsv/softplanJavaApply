import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {CpfValidador} from '../../validadores/cpf-validador';
import {NascimentoValidador} from '../../validadores/nascimento-validador';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) {
  }

  pessoaForm: FormGroup;

  ngOnInit() {
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

  }

  onSubmit() {
    if (this.pessoaForm.invalid) {
      this.exibirMensagemCamposInvalido();
    } else {
      this.apiService.cadastrarPessoa(this.pessoaForm.value)
        .subscribe(data => {
          this.router.navigate(['listar-pessoas']);
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
    alert('Erro ao enviar cadastro, os seguintes campos estão invalidos para cadastro: \n' +  camposInvalidos);
  }
}
