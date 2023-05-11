import './App.css'
import React, { Component } from 'react';


function imprimirLike(){
  console.log(`LIKE!`);
}

class Titulo extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

class Listas extends React.Component{
  render(){
         return(
                <ul>
                  {
                    this.props.children
                  }
                </ul>
         )
  }
}

function App() {
  
  return (
    <>
      <div className="card">
        <h1>Top Gun: Maverick</h1>
        <Titulo title="Generos"/>
        <Listas>
          <li>Acción</li>
          <li>Romance</li>
          <li>Drama</li>
        </Listas>
        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/PKEDBYMES5GSLE5SWZISGXRVI4.jpg" alt="TopGun2" />
        <p>
          Maverick, quien lleva 30 años de servicio, es ahora instructor de pilotos militares. Una última misión, un sacrificio final, obliga a este maestro de los cielos a enfrentar las heridas abiertas del pasado y sus temores más profundos.
        </p>
      </div>
      <Titulo title="Actores"/>
      <Listas>
        <li>Leonardo DiCaprio</li>
        <li>Brad Pitt</li>
        <li>Tom Cruise</li>
        <li>Will Smith</li>
        <li>Julia Roberts</li>
        <li>Angelina Jolie</li>
        <li>Meryl Streep</li>
        <li>Scarlett Johansson</li>
      </Listas>

      <button onClick={imprimirLike} className='colorBoton'>
        LIKE
      </button>
    </>
  )
}

export default App
