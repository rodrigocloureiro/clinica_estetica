import { Component } from "react";
import footerLogo from '../assets/footer-logo.png';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            informacoes: {
                endereco: {
                    rua: 'Avenida Delfim Moreira',
                    numero: '210',
                    sala: '1520',
                    cidade: 'Rio de Janeiro',
                    bairro: 'Leblon',
                    estado: 'RJ'
                },
                horarios: {
                    segundaSexta: '09h - 21h',
                    sabado: '09h - 13h',
                    domingoFeriado: 'Não abre'
                },
                contatos: {
                    whatsapp: '(21)99912-5003',
                    telefone: '(21)2234-4062',
                    email: 'maisonlavaux@gmail.com'
                }
            }
        };
    }

    render() {
        const { informacoes } = this.state;

        return (
            <footer>
                <div className='container'>
                    <div>
                        <img src={footerLogo} alt="" />
                    </div>
                    <div>
                        <p className='address'>Endereço:</p>
                        <p>{ `${informacoes.endereco.rua}, ${informacoes.endereco.numero}, Sala ${informacoes.endereco.sala}` }</p>
                        <p>{ `${informacoes.endereco.bairro} - ${informacoes.endereco.cidade}, ${informacoes.endereco.estado}` }</p>
                    </div>
                    <div>
                        <p className='hours'>Horário de Funcionamento:</p>
                        <p>{ `Segunda à Sexta: ${informacoes.horarios.segundaSexta}` }</p>
                        <p>{ `Sábado: ${informacoes.horarios.sabado}` }</p>
                        <p>{ `Domingo e Feriados: ${informacoes.horarios.domingoFeriado}` }</p>
                    </div>
                    <div>
                        <p className='contacts'>Contatos:</p>
                        <p>{ `WhatsApp: ${informacoes.contatos.whatsapp}` }</p>
                        <p>{ `Telefone: ${informacoes.contatos.telefone}` }</p>
                        <p className='email'>
                            <a href="mailto:maisonlavaux@gmail.com">{informacoes.contatos.email}</a>
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}