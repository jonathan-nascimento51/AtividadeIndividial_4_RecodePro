package br.com.api.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.api.model.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

}
