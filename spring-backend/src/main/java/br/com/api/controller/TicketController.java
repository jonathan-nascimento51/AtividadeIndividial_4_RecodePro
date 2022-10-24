package br.com.api.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.model.Ticket;
import br.com.api.repositorys.TicketRepository;
import br.com.api.exception.ResourceNotFoundException;

@RestController
@RequestMapping("api/")
@CrossOrigin(origins = "http://localhost:3000")
public class TicketController {

	@Autowired
	TicketRepository ticketRepository;
	
	
	@GetMapping("ticket")
	public List<Ticket> getAllTickets(){
		return ticketRepository.findAll();
	}	
	
	
	@GetMapping("ticket/{id}")
	public ResponseEntity<Ticket> getTicketById (@PathVariable Long id) {
		Ticket ticket = ticketRepository.findById(id)
							.orElseThrow(() -> new ResourceNotFoundException("Ticket not exist with id :" + id));
		
		return ResponseEntity.ok(ticket);
	}
	
	
	@PostMapping("ticket")
	public Ticket createTicket(@RequestBody Ticket ticket) {
		return ticketRepository.save(ticket);
	}
	
	
	@PutMapping("ticket/{id}")
	public ResponseEntity<Ticket> updateTicket(@PathVariable Long id, @RequestBody Ticket ticketDetails) {
		Ticket ticket = ticketRepository.findById(id)
							.orElseThrow(() -> new ResourceNotFoundException("Ticket not exist with id :" + id));
		
		ticket.setNamePas(ticketDetails.getNamePas());
		ticket.setPartida(ticketDetails.getPartida());
		ticket.setDestino(ticketDetails.getDestino());
		ticket.setDataIda(ticketDetails.getDataIda());
		ticket.setDataVolta(ticketDetails.getDataVolta());
		
		Ticket newTicket = ticketRepository.save(ticket);
		
		return ResponseEntity.ok(newTicket);		
	}
	
	
	@DeleteMapping("ticket/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteTicket(@PathVariable Long id){
		Ticket ticket = ticketRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Ticket not exist with id :" + id));
		
		ticketRepository.delete(ticket);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
	
}
