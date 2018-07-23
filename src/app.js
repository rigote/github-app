'use strict'

import React, {Component} from 'react'

class App extends Component {
  render(){
    return(
      <div className='app'>
        <div className='search'>
          <input type='search' placeholder='Digite o nome do usuário no Github.'/>
        </div>

        <div className='user-info'>
          <img src='https://avatars0.githubusercontent.com/u/10486867?v=4' />
          <h1><a href='https://api.github.com/users/rigote'>Matheus Souza Rigote</a></h1>

          <ul className='repos-info'>
            <li>Repositórios: 10</li>
            <li>Seguidores: 0</li>
            <li>Seguindo: 0</li>
          </ul>

          <div className='actions'>
            <button>Ver repositórios</button>
            <button>Ver favoritos</button>
          </div>

          <div className='repos'>
            <h2>Repositórios:</h2>
            <ul>
              <li><a href='#'>Nome do repositório</a></li>
            </ul>
          </div>

          <div className='starred'>
            <h2>Favoritos:</h2>
            <ul>
              <li><a href='#'>Nome do repositório</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
