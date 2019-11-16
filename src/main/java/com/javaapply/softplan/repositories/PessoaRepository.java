package com.javaapply.softplan.repositories;

import com.javaapply.softplan.models.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
    Integer countByCpf(String cpf);
    Integer countById(Long id);
    Pessoa findByCpf(String cpf);
}
