package com.javaapply.softplan.services;


import com.javaapply.softplan.exceptions.CpfExistenteException;
import com.javaapply.softplan.exceptions.IdNaoExistente;
import com.javaapply.softplan.models.Pessoa;
import com.javaapply.softplan.repositories.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class PessoaService implements IPessoaService{

    @Autowired
    private PessoaRepository repository;


    @Override
    public Pessoa cadastrar(Pessoa pessoaParaCadastro) {
        validarCpfExistente(pessoaParaCadastro.getCpf());
        pessoaParaCadastro.setDataCadastro(new Date());
        return repository.save(pessoaParaCadastro);
    }

    @Override
    public void atualizar(Long id, Pessoa pessoaAtualizada) {
        validarIdExiste(id);
        validarAtualizacaoCpf(pessoaAtualizada.getCpf(), id);
        pessoaAtualizada.setId(id);
        pessoaAtualizada.setDataAtualizacao(new Date());
        repository.save(pessoaAtualizada);
    }

    @Override
    public void deletar(Long id) {
        validarIdExiste(id);
        repository.deleteById(id);
    }

    private void validarAtualizacaoCpf(String cpf, Long id) {
        Pessoa pessoa = repository.findByCpf(cpf);
        if(pessoa != null && !pessoa.getId().equals(id)){
            throw new CpfExistenteException();
        }
    }

    private void validarIdExiste(Long id) {
        if(repository.countById(id) == 0){
            throw new IdNaoExistente();
        }
    }

    private void validarCpfExistente(String cpf) {
        if(repository.countByCpf(cpf) != 0){
            throw new CpfExistenteException();
        }
    }
}
