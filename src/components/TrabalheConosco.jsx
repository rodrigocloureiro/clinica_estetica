import { Component } from "react";

export default class TrabalheConosco extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            telefone: '',
            curriculo: '',
            enviou: false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.nome !== '' && this.state.email !== '' && this.state.telefone !== '' && this.state.curriculo !== '') {
            this.setState({ enviou: true });
        }
    }

    handleNomeChange = (e) => {
        this.setState({ nome: e.target.value });
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }

    handleTelefoneChange = (e) => {
        this.setState({ telefone: e.target.value });
    }

    handleCurriculoChange = (e) => {
        this.setState({ curriculo: e.target.value });
    }

    render() {
        const { enviou } = this.state;

        return (
            <main>
                <section>
                    <div className='container'>
                        <h2>Trabalhe Conosco</h2>
                        <form onSubmit={this.handleSubmit} className='form__work_us'>
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" id="nome" value={this.state.nome} onChange={this.handleNomeChange} />

                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id="email" value={this.state.email} onChange={this.handleEmailChange} />

                            <label htmlFor="telefone">Telefone:</label>
                            <input type="tel" id="telefone" value={this.state.telefone} onChange={this.handleTelefoneChange} />

                            <label htmlFor="curriculo">Currículo:</label>
                            <textarea id="curriculo" value={this.state.curriculo} onChange={this.handleCurriculoChange} placeholder="Detalhe aqui o seu currículo" />

                            <button type="submit">Enviar</button>
                        </form>
                        <h3>Status: { enviou && <span>{this.state.nome}, recebemos seu currículo. Entraremos em contato via {this.state.email} ou {this.state.telefone}.</span> }</h3>
                    </div>
                </section>
            </main>
        );
    }
}