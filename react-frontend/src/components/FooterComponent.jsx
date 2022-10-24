import React, { Component } from 'react';
import img from '../images/logoEmpresa.png';

function mapStateToProps(state) {
    return {

    };
}

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer className="container-fluid row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-5 py-3 my-3 border-top sticky-bottom" style={{height:'200px'}}>
                    <div className="col mb-6"style={{paddingLeft:'40px'}}>
                        <a href="#" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                        <img className="logoNav" src={img} alt="logo empresa"/>
                        </a>
                    </div>
                        
                    <div className="col mb-3">    
                    </div>
                        
                    <div className="col mb-3">
                        <h4 className="text-dark">PRODUTOS</h4>
                        <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Passagens</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Hotéis</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Pacotes</a></li>
                        </ul>
                    </div>
                        
                    <div className="col mb-3">
                        <h4 className="text-dark">LINKS ÚTEIS</h4>
                        <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="promocao.jsp" className="nav-link p-0 text-dark">Promoções</a></li>
                        <li className="nav-item mb-2"><a href="destino.jsp" className="nav-link p-0 text-dark">Destinos</a></li>
                        <li className="nav-item mb-2"><a href="contato.jsp" className="nav-link p-0 text-dark">Contato</a></li>
                        <li className="nav-item mb-2"><a href="sobreNos.jsp" className="nav-link p-0 text-dark">Sobre nós</a></li>
                        </ul>
                    </div>
                        
                    <div className="col mb-3">
                        <h4 className="text-dark">FALE-CONOSCO</h4>
                        <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Rua da liberdade - 4200 - RS</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">jonathanturista@hotmail.com</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">51 - 98264 9873</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">51 - 3334 5332</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-dark">&copy; 2022 Copyright: Air Lines Vibes</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;