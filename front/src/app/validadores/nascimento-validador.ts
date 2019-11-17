import {AbstractControl} from '@angular/forms';

export class NascimentoValidador {

  static validaData(controle: AbstractControl) {
    const datainformada = new Date(controle.value);
    const dataAtual = new Date();

    // data=new Date(data);

    if (datainformada < dataAtual) {
      return null;
    } else {
      return {dataInvaldia: true};
    }
  }
}
