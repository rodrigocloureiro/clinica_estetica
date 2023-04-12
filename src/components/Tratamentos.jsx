import { Component } from "react";
import Tratamento from "./Tratamento";

export default class Tratamentos extends Component {
    render() {
        const { topTratamentos } = this.props;

        return (
            <main>
                <section>
                    <div className='container'>
                        <h2>Tratamentos</h2>
                        <p className="treatments">Veja os tratamentos que oferecemos:</p>
                        <div className='cards'>
                            {
                                topTratamentos.map(tratamento => (
                                    <Tratamento key={ tratamento.id } imagem={ tratamento.imagem } nome={ tratamento.nome } descricao={ tratamento.descricao } contraindicacao={ tratamento.contraindicacao } valor={ tratamento.valor } />
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}