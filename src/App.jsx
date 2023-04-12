import { Component } from 'react';
import Header from './components/Header';
import ConteudoInicial from './components/ConteudoInicial';
import QuemSomos from './components/QuemSomos';
import Tratamentos from './components/Tratamentos';
import FaleConosco from './components/FaleConosco';
import FormAgendamento from './components/FormAgendamento';
import TrabalheConosco from './components/TrabalheConosco';
import Footer from './components/Footer';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componenteRender: '',
      topTratamentos: [],
    };
  }

  componentDidMount() {
    fetch('src/tratamentos.json')
    .then(response => response.json())
    .then(data => this.setState({
        topTratamentos: data
    }))
  }

  handleComponent = (componente) => {
    this.setState({ componenteRender: componente });
  }

  render() {
    const { componenteRender, topTratamentos, quemSomosTxt  } = this.state;

    return (
      <div>
        <Header componente={ this.handleComponent } />
        { componenteRender === '' && <ConteudoInicial topTratamentos={ topTratamentos } /> }
        { componenteRender === 'quem-somos' && <QuemSomos /> }
        { componenteRender === 'tratamentos' && <Tratamentos topTratamentos={ topTratamentos } /> }
        { componenteRender === 'fale-conosco' && <FaleConosco /> }
        { componenteRender === 'form-agendamento' && <FormAgendamento tratamentos={ topTratamentos } /> }
        { componenteRender === 'trabalhe-conosco' && <TrabalheConosco /> }
        <Footer />
      </div>
    );
  }
}
