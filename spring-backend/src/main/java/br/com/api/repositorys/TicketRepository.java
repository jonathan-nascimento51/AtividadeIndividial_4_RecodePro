package br.com.api.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.api.model.Ticket;


@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {

}
