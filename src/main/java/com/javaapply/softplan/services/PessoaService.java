package com.javaapply.softplan.services;


import com.javaapply.softplan.exceptions.CpfExistenteException;
import com.javaapply.softplan.exceptions.IdNaoExistente;
import com.javaapply.softplan.models.Pessoa;
import com.javaapply.softplan.repositories.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

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
    public Pessoa buscarPorId(Long id) {
        validarIdExiste(id);
        return repository.findById(id).get();
    }

    @Override
    public void atualizar(Long id, Pessoa pessoaAtualizada) {
        validarIdExiste(id);
        validarAtualizacaoCpf(pessoaAtualizada.getCpf(), id);
        Optional<Pessoa> pessoa = repository.findById(id);
        pessoaAtualizada.setDataCadastro(pessoa.get().getDataCadastro());
        pessoaAtualizada.setDataAtualizacao(new Date());
        pessoaAtualizada.setId(id);
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
        if(!repository.existsById(id)){
            throw new IdNaoExistente();
        }
    }

    private void validarCpfExistente(String cpf) {
        if(repository.existsByCpf(cpf)){
            throw new CpfExistenteException();
        }
    }
}
