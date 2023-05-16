import './App.css'
import React, { Component } from 'react';
import Titulo from './components/Titulo';
import Listas from './components/Listas';


function imprimirLike(){
  console.log(`LIKE!`);
}

function App() {
  
  return (
    <>
      <div className="card">
        <h1>Top Gun: Maverick</h1>
        <Titulo title="Generos"/>
        <Listas>
          <li>Acción</li>
          <li>Drama</li>
          <li>Romance</li>
        </Listas>
        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/PKEDBYMES5GSLE5SWZISGXRVI4.jpg" alt="TopGun2" />
        <p>
          Maverick, quien lleva 30 años de servicio, es ahora instructor de pilotos militares. Una última misión, un sacrificio final, obliga a este maestro de los cielos a enfrentar las heridas abiertas del pasado y sus temores más profundos.
        </p>
      </div>
      <Titulo title="Actores"/>
      <Listas>
        <li>Tom Cruise</li>
        <li>Miles Teller</li>
        <li>Val Kilmer</li>
        <li>Glen Powell</li>
        <li>Jennifer Connelly</li>
        <li>Jon Hamm</li>
        <li>Mónica Bárbaro</li>
        <li>Lewis Pullman</li>
      </Listas>

      <button onClick={imprimirLike} className='colorBoton'>
        LIKE
      </button>
    </>
  )
}

export default App
