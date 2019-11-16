package com.javaapply.softplan.controllers;

import com.javaapply.softplan.models.Pessoa;
import com.javaapply.softplan.repositories.PessoaRepository;
import com.javaapply.softplan.services.IPessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController()
@RequestMapping("/pessoa")
public class PessoaController {

    @Autowired
    private IPessoaService pessoaService;
    @Autowired
    private PessoaRepository pessoaRepository;

    @GetMapping(value = "/listar")
    public List<Pessoa> listarPessoas(){
        return pessoaRepository.findAll();
    }

    @PostMapping(value = "/cadastrar")
    @ResponseStatus(HttpStatus.CREATED)
    public Pessoa cadastrar(@RequestBody @Valid Pessoa pessoa){
        return pessoaService.cadastrar(pessoa);
    }

    @PutMapping(value = "/atualizar/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable("id") Long id, @RequestBody Pessoa pessoaAtualizada){
        pessoaService.atualizar(id, pessoaAtualizada);
    }

    @DeleteMapping("/deletar/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable("id") Long id){
        pessoaService.deletar(id);
    }
}
