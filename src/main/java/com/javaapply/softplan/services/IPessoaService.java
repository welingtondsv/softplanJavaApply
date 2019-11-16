package com.javaapply.softplan.services;

import com.javaapply.softplan.models.Pessoa;


public interface IPessoaService {

    Pessoa cadastrar(Pessoa pessoaParaCadastro);

    Pessoa buscarPorId(Long id);

    void atualizar(Long id, Pessoa pessoaAtualizada);

    void deletar(Long id);
}
