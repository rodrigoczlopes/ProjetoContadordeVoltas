import React from 'react';
import { useState, useEffect } from 'react';
import Mostrarnumero from './MostrarNumero';
import MostrarTempo from './MostrarTempo';
import Button from './Button';



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
      },1000)
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
  const reset = () => {
    setNumero(0)
    setTempo(0)
  }
  return (
    <div>
    <Mostrarnumero numero={numeroVoltas} /> 
    <Button onClick={incrementNumeroVoltas} text='+' />
    <Button onClick={decrementNumeroVoltas} text='-' /> <br/>
    {
      numeroVoltas > 0 &&
      <MostrarTempo tempo={Math.round(tempo/numeroVoltas)} />
    }
    <Button onClick={toggleRunning} text='Iniciar'/>
    <Button onClick={reset} text='Reiniciar' />
    </div>
  )
  
}

export default App
