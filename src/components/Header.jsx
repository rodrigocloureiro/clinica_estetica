import { Component } from "react";
import logo from '../assets/logo.png';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handleComponente: props.componente
        };
    }

    render() {
        const { handleComponente } = this.state;

        return (
            <header>
                <div className='container'>
                    <a href='index.html' title="Home">
                        <img src={logo} alt='Logo Maison Lavaux'></img>
                    </a>
                    <nav>
                        <ul>
                            <li>
                                <a href='#quem-somos' title="Quem Somos" onClick={() => handleComponente('quem-somos')}>Quem Somos</a>
                            </li>
                            <li>
                                <a href='#tratamentos' title="Tratamentos" onClick={() => handleComponente('tratamentos')}>Tratamentos</a>
                            </li>
                            <li>
                                <a href='#fale-conosco' title="Fale Conosco" onClick={() => handleComponente('fale-conosco')}>Fale Conosco</a>
                            </li>
                            <li>
                                <a href='#form-agendamento' title="Formulário de agendamento" onClick={() => handleComponente('form-agendamento')}>Agendamento</a>
                            </li>
                            <li>
                                <a href='#trabalhe-conosco' title="Trabalhe Conosco" onClick={() => handleComponente('trabalhe-conosco')}>Trabalhe Conosco</a>
                            </li>
                        </ul>
                    </nav>
                    <div className='icons'>
                        <a href='https://pt-br.facebook.com/' target='_blank' title='Facebook'>
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href='https://www.instagram.com/' target='_blank' title='Instagram'>
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href='https://web.whatsapp.com/' target='_blank' title='WhatsApp'>
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}