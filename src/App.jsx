import React from 'react';
import { useState, useEffect } from 'react';

const Mostrarnumero = (props) => {
  return(
    <p>
    {props.numero}<br/>
    Voltas
    </p>
  )
}
const MostrarTempo = (props) => {
  return(
    <p>
    {props.tempo} <br/>
    Tempo
    </p>
  )
}
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

function App() {
  const [numeroVoltas, setNumero] = useState(0);
  const [running, setRunning] = useState(false);
  const [tempo, setTempo] = useState(0);
  //setInterval é uma função do javascript que chama a função a cada determinado tempo
  useEffect(() => {
    let timer = null
    if (running) {
      timer = setInterval ( () =>{
        setTempo(old => old + 1)
      },1000 )
    }
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [running])
   
  const toggleRunning = () => {
    setRunning(!running)
  }

  const incrementNumeroVoltas = () =>{
    setNumero(numeroVoltas + 1)
  }
  const decrementNumeroVoltas = () =>{
    setNumero(numeroVoltas - 1)
  }
  
  return (
    <div>
    <Mostrarnumero numero={numeroVoltas} /> 
    <Button onClick={incrementNumeroVoltas} text='+' />
    <Button onClick={decrementNumeroVoltas} text='-' /> <br/>
    <MostrarTempo tempo={tempo} />
    <Button onClick={toggleRunning} text='Iniciar'/>
    <Button text='Reiniciar' />
    </div>
  )
  
}

export default App
