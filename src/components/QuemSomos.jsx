import { Component } from "react";
import logo from '../assets/quemSomosLogo.png'

export default class QuemSomos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quemSomosTxt: []
        };
    }

    async componentDidMount() {
        const response = await fetch('src/textos.json');
        const data = await response.json();
        this.setState({
            quemSomosTxt: data
        });
    }

    render() {
        const { quemSomosTxt } = this.state;

        return (
            <main>
                <section>
                    <div className='container'>
                        <h2>Quem Somos</h2>
                        <div className="about">
                            <div className="logo_area">
                                <img src={ logo } alt="" />
                            </div>
                            <div className="about_text">
                                {
                                    quemSomosTxt.map(texto => (
                                        <p key={ texto.id }>
                                            <span>{ texto.conteudo.charAt(0) }</span>
                                            { texto.conteudo.substring(1) }
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}