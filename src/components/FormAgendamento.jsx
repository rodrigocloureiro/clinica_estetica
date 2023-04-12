import { Component } from "react";
import Hora from "./Hora";

export default class FormAgendamento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            data: '',
            tratamento: '',
            agendou: false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.nome !== '' && this.state.data !== '' && this.state.tratamento !== '') {
            this.setState({ agendou: true });
        }
    };

    handleNomeChange = (e) => {
        this.setState({ nome: e.target.value });
    };

    handleDataChange = (e) => {
        this.setState({ data: e.target.value });
    };

    handleTratamentoChange = (e) => {
        this.setState({ tratamento: e.target.value });
    };

    render() {
        const { agendou } = this.state;
        const { tratamentos } = this.props;

        return (
            <main>
                <section>
                    <div className='container'>
                        <h2>Agendamento</h2>
                        <form onSubmit={this.handleSubmit} className='form__agendamento'>
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" id="nome" value={this.state.nome} onChange={this.handleNomeChange} />

                            <label htmlFor="data">Data:</label>
                            <input type="date" id="data" value={this.state.data} onChange={this.handleDataChange} />

                            <label htmlFor="tratamento">Tratamento:</label>
                            <select id="tratamento" value={this.state.tratamento} onChange={this.handleTratamentoChange}>
                                <option value="">Selecione um tratamento</option>
                                {
                                    tratamentos.map(tratamento => (
                                        <option key={ tratamento.id }>{ tratamento.nome }</option>
                                    ))
                                }
                            </select>
                            <button type="submit">Agendar</button>
                            <h3>Status: { agendou && (<span className="confirm">Agendamento Concluído ( Recebido às: <Hora /> )! { this.state.tratamento } - { this.state.data } - { this.state.nome }</span>) }</h3>
                            { agendou && <p>Lembramos que é por ordem de chegada. O agendamento garante o atendimento.</p> }
                        </form>
                    </div>
                </section>
            </main>
        );
    }
}