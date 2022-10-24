import React, { Component } from 'react';
import ClientService from '../services/ClientService';

class updateComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
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

    }

    componentDidMount(){
        ClientService.getClientById(this.state.id).then( (res) =>{
            let client = res.data;
            this.setState({name: client.name,
                cpf: client.cpf,
                email : client.email, 
                pass: client.pass, 
                phone: client.phone
            });
        });
    }

    updateClient = (e) => {
        e.preventDefault();
        let client = {name: this.state.name,
            cpf: this.state.cpf,
            email : this.state.email, 
            pass: this.state.pass, 
            phone: this.state.phone};
        console.log('client => ' + JSON.stringify(client));
        console.log('id => ' + JSON.stringify(this.state.id));
        ClientService.updateClient(client, this.state.id).then( res => {
            this.props.history.push('/home');
        });
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

    cancel(){
        this.props.history.push('/home');
    }

    render() {
        return (
            <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Atualizar Passagem</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.cpf} onChange={this.changeCpfHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.pass} onChange={this.changePassHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.phone} onChange={this.changePhoneHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateClient}>Salvar</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
            </div>
        );
    }
}

export default updateComponent;