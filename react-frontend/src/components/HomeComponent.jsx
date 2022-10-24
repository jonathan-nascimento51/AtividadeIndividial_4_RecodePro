import React, { Component } from 'react';
import img1 from '../images/fernandoDeNoronha.jpg';
import pantanal from '../images/pantanal.png';
import pipa from '../images/praia-da-pipa.png';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ClientService from '../services/ClientService';

class HomeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            clients:[],

            id: '',
            name: '',
            cpf: '',
            email: '',
            pass: '',
            phone: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCpfHandler = this.changeCpfHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePassHandler = this.changePassHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);

        this.saveOrUpdateClient = this.saveOrUpdateClient.bind(this);
        this.deleteClient = this.deleteClient.bind(this);

    }

    componentDidMount(){
        ClientService.getClients().then((res) => {
            this.setState({ clients: res.data});
        });
    }

    saveOrUpdateClient = (e) => {
        e.preventDefault();
        let client = {name: this.state.name, cpf: this.state.cpf, 
                            email: this.state.email, pass: this.state.pass, phone: this.state.phone};
        console.log('client => ' + JSON.stringify(client));
        ClientService.createClient(client).then(res =>{
            this.props.history.push('/');
        });
    }

    deleteClient(id){
        ClientService.deleteClient(id).then( res => {
            this.setState({clients: this.state.clients.filter(client => client.id !== id)});
        });
    }

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }

    editEmployee(id){
        this.props.history.push(`/update/${id}`);
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeCpfHandler= (event) => {
        this.setState({cpf: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changePassHandler= (event) => {
        this.setState({pass: event.target.value});
    }

    changePhoneHandler= (event) => {
        this.setState({phone: event.target.value});
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
                                <input onChange={this.changeNameHandler} value={this.state.name} type="text" className="form-control" name="name" placeholder="Insira seu nome" ></input>
                            </div>
                        </div>

                        <div className="row justify-content-center pb-3">
                            <div className="pb-4 col-5 mx-1 pb-2 col-xl-2">
                                <input onChange={this.changeCpfHandler} value={this.state.cpf} className="form-control" type="text" placeholder="Local Partida" name="partida"/>
                            </div>
                            <div className="pb-4 col-5 mx-1 pb-2 col-xl-2">
                                <input onChange={this.changeEmailHandler} value={this.state.email} className="form-control" type="text" placeholder="Local Destino" name="destino"/>
                            </div>
                            <div className="pb-4 col-5 mx-1 pb-2 col-xl-2">
                                <div className="input-group">
                                    <div className="input-group-text">Ida</div>
                                    <input onChange={this.changePassHandler} value={this.state.pass} type="date" className="form-control" name="dataPartida"/>
                                </div>
                            </div>
                            <div className="pb-4 col-5 mx-1 pb-2 col-xl-2">
                                <div className="input-group">
                                    <div className="input-group-text">Volta</div>
                                    <input onChange={this.changePhoneHandler} value={this.state.phone} type="date" className="form-control" name="dataDestino"/>
                                </div>
                            </div>
                            <div className="d-xl-block gap-2 d-grid col-10 col-xl-2">
                                <button onClick={this.saveOrUpdateClient} className="btn btn-primary">Quero viajar</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className = "container justify-content-center pt-2">
                    <table className = "table table-striped table-bordered table-response">
                            <thead>
                                <tr>
                                    <th> nome</th>
                                    <th> ida</th>
                                    <th> volta</th>
                                    <th> data ida</th>
                                    <th> data volta</th>
                                    <th> ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.clients.map(
                                        client => 
                                        <tr key = {client.id}>
                                             <td> { client.name} </td>   
                                             <td> {client.cpf}</td>
                                             <td> {client.email}</td>
                                             <td> {client.pass}</td>
                                             <td> {client.phone}</td>
                                             <td>
                                                <button onClick={ () => this.editEmployee(client.id)} className="btn btn-info">Update</button>
                                                <button style={{marginLeft: '10px'}} onClick={ () => this.deleteClient(client.id)} className="btn btn-danger">Delete</button> 
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

export default HomeComponent;