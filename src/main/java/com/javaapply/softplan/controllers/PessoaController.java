package com.javaapply.softplan.controllers;

import com.javaapply.softplan.models.Pessoa;
import com.javaapply.softplan.repositories.PessoaRepository;
import com.javaapply.softplan.services.IPessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController()
@RequestMapping("/pessoa")
public class PessoaController {

    @Autowired
    private IPessoaService pessoaService;
    @Autowired
    private PessoaRepository pessoaRepository;

    @GetMapping(value = "/listar")
    public List<Pessoa> listarPessoas(){
        List<Pessoa> pessoas = pessoaRepository.findAll();
        pessoas.forEach(pessoa -> pessoa.add(linkTo(methodOn(PessoaController.class).buscarPessoa(pessoa.getId())).withSelfRel()));
        return pessoas;
    }

    @GetMapping(value = "{id}")
    public Pessoa buscarPessoa(@PathVariable("id") Long id){
        return pessoaService.buscarPorId(id);
    }

    @PostMapping(value = "/cadastrar")
    @ResponseStatus(HttpStatus.CREATED)
    public Pessoa cadastrar(@RequestBody @Valid Pessoa pessoaCadastrar){
        Pessoa pessoa = pessoaService.cadastrar(pessoaCadastrar);
        pessoa.add(linkTo(methodOn(PessoaController.class).listarPessoas()).withRel("listar todas pessoas cadastradas"));
        pessoa.add(linkTo(methodOn(PessoaController.class).buscarPessoa(pessoa.getId())).withSelfRel());
        return pessoa;
    }

    @PutMapping(value = "/atualizar/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable("id") Long id, @RequestBody @Valid Pessoa pessoaAtualizada){
        pessoaService.atualizar(id, pessoaAtualizada);
    }

    @DeleteMapping("/deletar/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable("id") Long id){
        pessoaService.deletar(id);
    }
}
