package com.javaapply.softplan.repositories;

import com.javaapply.softplan.models.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
    Boolean existsByCpf(String cpf);
    Pessoa findByCpf(String cpf);
}
