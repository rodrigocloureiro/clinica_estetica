import { Component } from "react";

export default class Tratamento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagem: props.imagem,
            nome: props.nome,
            descricao: props.descricao,
            contraindicacao: props.contraindicacao,
            valor: props.valor
        };
    }

    render() {
        const { imagem, nome, descricao, contraindicacao, valor } = this.state;

        return (
            <div className='card'>
                <div className='top'>
                    <img src={ imagem } alt={ `Imagem ${nome}` } />
                    <p>{ nome }</p>
                </div>
                    <div className='bottom'>
                        <p>{ descricao }</p>
                        <p className='contraindications'>Contraindicações: <span>{ contraindicacao }</span></p>
                        <p className='price'>R$ { valor }</p>
                    </div>
            </div>
        );
    }
}