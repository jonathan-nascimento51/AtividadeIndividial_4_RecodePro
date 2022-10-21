package br.com.api.controller;

import java.util.HashMap;
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

import br.com.api.model.Client;
import br.com.api.repositorys.ClientRepository;
import br.com.api.exception.ResourceNotFoundException;

@RestController
@RequestMapping("api/")
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {

	@Autowired
	ClientRepository clientRepository;
	
	@GetMapping("client/{id}")
	public ResponseEntity<Client> getClientById (@PathVariable Long id) {
		Client client = clientRepository.findById(id)
							.orElseThrow(() -> new ResourceNotFoundException("Client not exist with id :" + id));
		
		return ResponseEntity.ok(client);
	}
	
	
	@PostMapping("client")
	public Client createClient(@RequestBody Client client) {
		return clientRepository.save(client);
	}
	
	
	@PutMapping("client/{id}")
	public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody Client clientDetails) {
		Client client = clientRepository.findById(id)
							.orElseThrow(() -> new ResourceNotFoundException("Client not exist with id :" + id));
		
		client.setName(clientDetails.getName());
		client.setCpf(clientDetails.getCpf());
		client.setEmail(clientDetails.getEmail());
		client.setPass(clientDetails.getPass());
		client.setPhone(clientDetails.getPhone());
		
		Client newClient = clientRepository.save(client);
		
		return ResponseEntity.ok(newClient);		
	}
	
	
	@DeleteMapping("client/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteClient(@PathVariable Long id){
		Client client = clientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		clientRepository.delete(client);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
	
}
