import React from 'react';
import { useState } from 'react';

const Mostrarnumero = (props) => {
  return(
    <p>
    {props.numero}
    Voltas
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
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>


function App() {
  
  const [numeroVoltas, setNumero] = useState(0);
  const [tempo, setTempo] = useState(0);

  const incrementNumeroVoltas = () =>{
    setNumero(numeroVoltas + 1)
  }
  const decrementNumeroVoltas = () =>{
    setNumero(numeroVoltas - 1)
  }
  const resetNumeroVoltas = () => {
    setNumero(numeroVoltas = 0)
  }
  
  return (
    <div>

      {numeroVoltas} <br/>

    <Button onClick={incrementNumeroVoltas} text='+' />
    <Button onClick={decrementNumeroVoltas} text='-' /> <br/>
    <Button onClick={resetNumeroVoltas} text='Resetar' />
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
