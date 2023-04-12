import { Component } from "react";

export default class FaleConosco extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            mensagem: '',
            enviou: false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.nome !== '' && this.state.email !== '' && this.state.mensagem !== '')
            this.setState({ enviou: true});
    }

    render() {
        const { enviou } = this.state;

        return (
            <main>
                <section>
                    <div className='container'>
                        <h2>Fale Conosco</h2>
                        <form onSubmit={this.handleSubmit} className='form__contact_us'>
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" id="nome" value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} />

                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />

                            <label htmlFor="mensagem">Mensagem:</label>
                            <textarea id="mensagem" value={this.state.mensagem} onChange={(e) => this.setState({ mensagem: e.target.value })} />

                            <button type="submit">Enviar</button>
                        </form>
                        <h3>Status: { enviou && <span>Enviada com sucesso. Obrigado pela mensagem, { this.state.nome }!</span> }</h3>
                    </div>
                </section>
            </main>
        );
    }
}