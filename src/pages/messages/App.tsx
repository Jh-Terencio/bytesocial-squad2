import React from 'react';
import Button from '../../components/Button';
import style from './App.module.scss';
import {FiSettings} from 'react-icons/fi' ;

function App() {
return (

<body className={style.body}>
  <aside className={style.sidenav}>
    <button className={style.btn1}>
      ?
    </button>
    <Button>
      Inicio
    </Button>
    <Button>
      Meu perfil
    </Button>
    <button className={style.buttonPage}>Mensagens</button>
    <Button><FiSettings size={19} color="#0068DF"/>  Configurações</Button>
    <Button>Sair</Button>
  </aside>
  <main>
    <div className={style.title}>
      <h1>Mensagens</h1>
    </div>
    <div className={style.conversas}>
      <button className={style.btnConversas}>Conversas</button> <button>Lista de contatos</button> 
    </div>
  </main>
  
</body>
);
}

export default App;