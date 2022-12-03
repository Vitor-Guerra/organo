import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Ministerio from './componentes/Ministerio';
import Rodape from './componentes/Rodape';

function App() {

  const ministerios =[
    {
      nome: 'Pastores',
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Obreiros',
      corPrimaria: '#82CFFA',
      corSecundaria: 'E8F8FF'
    },
    {
      nome: 'Musicos',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Diaconos',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Membros',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Visitantes',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    }
  ] 

  const [membros, setMembros] = useState([])

  const aoNovoMembroAdicionado = (membro) => {
    setMembros([...membros, membro])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario ministerios={ministerios.map(ministerio => ministerio.nome)} aoMembroCadastrado={membro => aoNovoMembroAdicionado(membro)}/>
      {ministerios.map(ministerio => <Ministerio 
        key={ministerio.nome}
        ministerio={ministerio.nome}
        corPrimaria={ministerio.corPrimaria}
        corSecundaria={ministerio.corSecundaria}
        membros={membros.filter(membro => membro.ministerio === ministerio.nome)}
      />)}
      <Rodape />


    </div>
  );
}

export default App;
