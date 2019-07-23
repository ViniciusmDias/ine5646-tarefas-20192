// @flow
import React from 'react'

import FazPedido from './FazPedido.jsx'
import VerificaPedido from './VerificaPedido.jsx'

//FIXME O código desta aplicação está completo.
// Sua tarefa é colocar esta aplicação no seu servidor na nuvem UFSC.

function App () {
  return (
    <div className="container is-fluid">
      <div className="message is-dark">
        <div className="message-header">
        UFSC - CTC - INE - INE5646 :: App Compra Vende :: Comprador
        </div>
        <div className="message-body">
          <div className='columns'>
            <div className='column is-two-thirds'><VerificaPedido /></div>
            <div className='column'><FazPedido /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
