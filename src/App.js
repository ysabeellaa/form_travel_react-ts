import { useState } from 'react';
import './App.css';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import TimePais from './Componentes/TimePais';

function App() {
  const paises = [
    {
      nome:'Brasil',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome:'França',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Austrália',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'USA',
      corPrimaria:'#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome:'Alemanha',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    },
    {
      nome:'Itália',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9'
    },
    {
      nome: 'Japão',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF'
    }
  ]
  
  const [viagens, setViagens] =useState([])

  const aoNovaViagemCadastrada = (viagem) =>{
    setViagens ([...viagens, viagem])
    console.log(viagem)
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario nomeDosPaises={paises.map(pais => pais.nome)} aoViagemCadastrada ={viagem => aoNovaViagemCadastrada(viagem)}/>
      {paises.map(pais => <TimePais
      key={pais.nome}
      nome={pais.nome}
      corPrimaria={pais.corPrimaria} 
      corSecundaria={pais.corSecundaria}
      viagens={viagens.filter(viagem => viagem.pais === pais.nome)}
      
      />)}

    </div>
  );
}

export default App;
