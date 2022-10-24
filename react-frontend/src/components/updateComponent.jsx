import React, { Component } from 'react';
import TicketService from '../services/TicketService';

class updateComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
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

        this.updateTicket = this.updateTicket.bind(this);
        this.cancel = this.cancel.bind(this);

    }

    componentDidMount(){
        TicketService.getTicketById(this.state.id).then( (res) =>{
            let ticket = res.data;
            this.setState({namePas: ticket.namePas,
                partida: ticket.partida,
                destino : ticket.destino, 
                dataIda: ticket.dataIda, 
                dataVolta: ticket.dataVolta
            });
        });
    }

    updateTicket = (e) => {
        e.preventDefault();
        let ticket = {namePas: this.state.namePas,
            partida: this.state.partida,
            destino : this.state.destino, 
            dataIda: this.state.dataIda, 
            dataVolta: this.state.dataVolta};
        console.log('ticket => ' + JSON.stringify(ticket));
        console.log('id => ' + JSON.stringify(this.state.id));
        TicketService.updateTicket(ticket, this.state.id).then( res => {
            this.props.history.push('/home');
        });
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

    cancel(){
        this.props.history.push('/home');
    }

    render() {
        return (
            <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 bg-dark">
                                <h3 className="text-center text-white pt-4">Atualizar Passagem</h3>
                                <div className = "card-body">
                                    <form className='text-white'>
                                        <div className = "form-group pb-2">
                                            <label> Nome Completo </label>
                                            <input placeholder="Nome Completo" name="name" className="form-control" 
                                                value={this.state.namePas} onChange={this.changeNamePasHandler}/>
                                        </div>
                                        <div className = "form-group pb-2">
                                            <label> Partida: </label>
                                            <input placeholder="Partida:" name="partida" className="form-control" 
                                                value={this.state.partida} onChange={this.changePartidaHandler}/>
                                        </div>
                                        <div className = "form-group pb-2">
                                            <label> Destino: </label>
                                            <input placeholder="Destino:" name="destino" className="form-control" 
                                                value={this.state.destino} onChange={this.changeDestinoHandler}/>
                                        </div>

                                        <div className = "form-group pb-2">
                                            <label> Data Ida: </label>
                                            <input placeholder="Data Ida:" type='date' name="dataIda" className="form-control" 
                                                value={this.state.dataIda} onChange={this.changeDataIdaHandler}/>
                                        </div>

                                        <div className = "form-group pb-3">
                                            <label> Data Volta: </label>
                                            <input placeholder="Data Volta:" type='date' name="dataVolta" className="form-control" 
                                                value={this.state.dataVolta} onChange={this.changeDataVoltaHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateTicket}>Salvar</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Voltar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
            </div>
        );
    }
}

export default updateComponent;