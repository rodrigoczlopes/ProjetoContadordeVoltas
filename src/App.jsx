import React from 'react';
import { useState } from 'react';

const numero = (props) => {
  return(
    <p>
    {props.numero}
    </p>
  )
}
const tempo = (props) => {
  return(
    <p>
    {props.tempo}
    </p>
  )
}
const Button = (props) => <button onClick={props.button}>{props.text}</button>


function App() {
  
  const [numero, setNumero] = useState(0);
  const [tempo, setTempo] = useState(0);

  return (
    <div>
    <p>
      {numero} <br/>
      Voltas
    </p>
    <Button text='+' />
    <Button text='-' />
    <p>
      {tempo}<br/>
      Tempo
    </p>
    <Button text='Iniciar'/>
    <Button text='Reiniciar' />
    </div>
  )
}

export default App
