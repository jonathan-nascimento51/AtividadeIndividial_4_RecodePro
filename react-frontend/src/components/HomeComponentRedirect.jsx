import React, { Component } from 'react';
import img1 from '../images/fernandoDeNoronha.jpg';
import pantanal from '../images/pantanal.png';
import pipa from '../images/praia-da-pipa.png';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import TicketService from '../services/TicketService';

class HomeComponentRedirect extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tickets:[],

            id: '',
            namePas: '',
            partida: '',
            destino: '',
            dataIda: '',
            dataVolta: ''
        }
        this.changeNamePasHandler = this.changeNamePasHandler.bind(this);
        this.changePartidaHandler = this.changePartidaHandler.bind(this);
        this.changeDestinoHandler = this.changeDestinoHandler.bind(this);
        this.changeDataIdaHandler = this.changeDataIdaHandler.bind(this);
        this.changeDataVoltaHandler = this.changeDataVoltaHandler.bind(this);

        this.saveOrUpdateTicket = this.saveOrUpdateTicket.bind(this);
        this.deleteTicket = this.deleteTicket.bind(this);
        this.editTicket = this.editTicket.bind(this);

    }

    componentDidMount(){
        TicketService.getTickets().then((res) => {
            this.setState({ tickets: res.data});
        });
    }

    saveOrUpdateTicket = (e) => {
        e.preventDefault();
        let ticket = {namePas: this.state.namePas, partida: this.state.partida, 
                            destino: this.state.destino, dataIda: this.state.dataIda, dataVolta: this.state.dataVolta};
        console.log('ticket => ' + JSON.stringify(ticket));
        TicketService.createTicket(ticket).then(res =>{
            this.props.history.push('/');
        });
    }

    deleteTicket(id){
        TicketService.deleteTicket(id).then( res => {
            this.setState({tickets: this.state.tickets.filter(ticket => ticket.id !== id)});
        });
    }

    editTicket(id){
        this.props.history.push(`/update/${id}`);
    }

    changeNamePasHandler= (event) => {
        this.setState({namePas: event.target.value});
    }

    changePartidaHandler= (event) => {
        this.setState({partida: event.target.value});
    }

    changeDestinoHandler= (event) => {
        this.setState({destino: event.target.value});
    }

    changeDataIdaHandler= (event) => {
        this.setState({dataIda: event.target.value});
    }

    changeDataVoltaHandler= (event) => {
        this.setState({dataVolta: event.target.value});
    }

    render() {
        return (
            <div>
            <HeaderComponent/>
                <div className="pb-2">
                    <img className='w-100' src={img1} alt=''/>
                </div>
                    
                <div className="container bg-dark w-75 rounded pt-2 mt-4 mb-4">
                    <form>
                        <div className="container pt-2 pb-2">
                            <h2 className="text-white bg-none">Tem interesse em viajar?</h2>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-10 col-xl-4 col-lg-10 pb-lg-2 col-sm-10">
                                <input onChange={this.changeNamePasHandler} value={this.state.namePas} type="text" className="form-control" name="namePas" placeholder="Insira seu nome" ></input>
                            </div>
                        </div>

                        <div className="row justify-content-center pb-3">
                            <div className="pb-4 col-5 mx-1 pb-2 col-xl-2">
                                <input onChange={this.changePartidaHandler} value={this.state.partida} className="form-control" type="text" placeholder="Local Partida" name="partida"/>
                            </div>
                            <div className="pb-4 col-5 mx-1 pb-2 col-xl-2">
                                <input onChange={this.changeDestinoHandler} value={this.state.destino} className="form-control" type="text" placeholder="Local Destino" name="destino"/>
                            </div>
                            <div className="pb-4 col-5 mx-1 pb-2 col-xl-2">
                                <div className="input-group">
                                    <div className="input-group-text">Ida</div>
                                    <input onChange={this.changeDataIdaHandler} value={this.state.dataIda} type="date" className="form-control" name="dataPartida"/>
                                </div>
                            </div>
                            <div className="pb-4 col-5 mx-1 pb-2 col-xl-2">
                                <div className="input-group">
                                    <div className="input-group-text">Volta</div>
                                    <input onChange={this.changeDataVoltaHandler} value={this.state.dataVolta} type="date" className="form-control" name="dataDestino"/>
                                </div>
                            </div>
                            <div className="d-xl-block gap-2 d-grid col-10 col-xl-2">
                                <button onClick={this.saveOrUpdateTicket} className="btn btn-primary">Quero viajar</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className = "container justify-content-center pt-2">
                    <h2 className='px-5 pb-2'>Minhas Passagens</h2>
                    <table className = "table table-striped table-bordered table-response">
                            <thead>
                                <tr>
                                    <th> Nome Passageiro </th>
                                    <th> Partida </th>
                                    <th> Destino </th>
                                    <th> Data Ida </th>
                                    <th> Data Volta </th>
                                    <th> Ações </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tickets.map(
                                        ticket => 
                                        <tr key = {ticket.id}>
                                             <td> {ticket.namePas} </td>   
                                             <td> {ticket.partida}</td>
                                             <td> {ticket.destino}</td>
                                             <td> {ticket.dataIda}</td>
                                             <td> {ticket.dataVolta}</td>
                                             <td>
                                                <button onClick={ () => this.editTicket(ticket.id)} className="btn btn-info">Atualizar</button>
                                                <button style={{marginLeft: '10px'}} onClick={ () => this.deleteTicket(ticket.id)} className="btn btn-danger">Deletar</button> 
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                    </table>
                </div>
                    
                <main className="container pt-3">
                    <h2 className="text-dark pb-3">Destinos Mais Visitados:</h2>
                    <div className="row text-dark" style={{textAlign: 'center'}}>
                        <div className="col-lg-4">
                            <img className="rounded pb-1" style={{width: '200px'}} src={pipa} alt="foto de bonito" width="140" height="140"/>
                            <h2>Bonito - MS</h2>
                            <p>Conhecida pelos rios de água translúcida, como o Rio da Prata, 
                                um destino repleto de peixes. 
                                O Abismo Anhumas é uma enorme caverna coberta de estalactites que permite a prática de rapel
                                    e de mergulho num lago subterâneo.
                            </p>
                            <p><a className="btn btn-dark" href='' role="button">Ver Mais</a></p>
                        </div>

                        <div className="col-lg-4">
                            <img className="rounded pb-1" style={{width: '200px'}} src={pantanal} alt="foto do pantanal" width="140" height="140"/>
                            <h2>Pantanal - MS</h2>
                            <p>O Complexo do Pantanal, ou simplesmente Pantanal, é um bioma 
                                constituído principalmente por uma savana estópica, alagada em sua maior parte, 
                                com 250 mil quilômetros quadrados de extensão e uma altitude média de 100 metros.
                            </p>
                            <p><a className="btn btn-dark" href="#" role="button">Ver Mais</a></p>
                        </div>

                        <div className="col-lg-4">
                            <img className="rounded pb-1" style={{width: '200px'}} src={pipa} alt="foto da praia da pipa" width="140" height="140"/>
                            <h2>Praia da Pipa - RN</h2>
                            <p>A Praia de Pipa é uma famosa praia localizada no município de Tibau do Sul,
                                capital do estado do Rio Grande do Norte, Brasil.
                                    é o principal balneário do Litoral Sul do estado, que inclui praias como Ponta do Madeiro, Praia do Amor.
                            </p>
                            <p><a className="btn btn-dark" href="#" role="button">Ver Mais</a></p>
                        </div>
                    </div>
                </main> 
            <FooterComponent/>
            </div>
        );
    }    
}

export default HomeComponentRedirect;