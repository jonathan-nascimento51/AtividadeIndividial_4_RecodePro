import React, { Component } from 'react';
import img from '../images/logoEmpresa.png';

class HeaderComponent extends Component {

    render(){
        return (
            <div>
                <header className="container-fuid fixed-top">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand"><img className="logoNav" src={img} alt="logoAviao"/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-links" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-start" id="navbar-links">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item"><a href="#"className="nav-link text-white">Home</a></li>
                                    <li className="nav-item"><a href="#"className="nav-link text-white">Promocões</a></li>
                                    <li className="nav-item"><a href="#"className="nav-link text-white">Destinos</a></li>
                                    <li className="nav-item"><a href="#"className="nav-link text-white">Sobre nós</a></li>
                                    <li className="nav-item"><a href="#"className="nav-link text-white">Contatos</a></li>
                                </ul>

                                <div className="dropdown mb-2 mt-md-2">
                                    <button type="button" className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown">
                                        Perfil
                                    </button>
                                    <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Sair</a></li>
                                    <li><a className="dropdown-item" href="#">Perfil</a></li>
                                    </ul>
                                </div>
                                <button className="btn btn-light ms-lg-2 text-dark">Seja Bem-Vindo(a)!</button>
                            </div>   
                        </div>
                    </nav>
                </header>
            </div>
        );
    }    
}

export default HeaderComponent;