package br.com.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Max;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "clients")
@NoArgsConstructor @AllArgsConstructor
public class Client {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter private Long id;
	
	
	@Column(name = "user_name") @Max(value = 60, message = "Valor deve ser menor ou igual a 60")
	@Getter @Setter private String name;
	
	@Column(name = "user_cpf") @Max(value = 14, message = "Valor deve ser menor ou igual a 14")
	@Getter @Setter private String cpf;
	
	@Column(name = "user_email") @Max(value = 60, message = "Valor deve ser menor ou igual a 60")
	@Getter @Setter private String email;
	
	@Column(name = "user_pass") @Max(value = 14, message = "Valor deve ser menor ou igual a 14")
	@Getter @Setter private String pass;
	
	@Column(name = "user_phone") @Max(value = 12, message = "Valor deve ser menor ou igual a 12")
	@Getter @Setter private String phone;
	
}
