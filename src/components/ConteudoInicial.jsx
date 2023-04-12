import { Component } from "react";
import Tratamento from "./Tratamento";

export default class ConteudoInicial extends Component {
    render() {
        const { topTratamentos } = this.props;

        return (
            <main>
                <section>
                    <div className='container'>
                        <h1>Maison Lavaux, a clínica de estética especializada em cuidados faciais e corporais.</h1>
                        <h2>Tratamentos do Momento</h2>
                        <div className='cards'>
                            {
                                topTratamentos.slice(0, 4).map(tratamento => (
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