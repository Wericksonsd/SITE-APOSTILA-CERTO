import React from 'react';
import './App.css'
import Cap1 from './capitulo1';
import Cap2 from './capitulo2';

function App() {
  return (
    <>
      <div id='background'>
          <section>
            <header>
              <div> </div>
              <h3>APOSTILA BÁSICO</h3>            
              </header>
            <article id='menubar'>
              <div><span class="material-symbols-outlined">home</span></div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div><span class="material-symbols-outlined">trophy</span></div>
              <div><span class="material-symbols-outlined">build</span></div>
            </article>
            <span id='menuOp'>
              <ul>
                <li>Verbo to be</li>
                <li>Numbers</li>
                <li>Adjectives</li>
              </ul>
            </span>
            <main>
              <h2 id='Lets'>Let's build the future together</h2>
              <h3></h3>
              <div className='sumario'>
                <div>S U M Á R I O</div>
                <ol>
                  <li className='capitulos'><a href="#">CAPÍTULO 1</a></li>
                  <li><a href="#">Verbo To-be</a></li>
                  <li><a href="#">Preposições</a></li>
                  <li><a href="#">Números</a></li>
                  <li className='capitulos'><a href="#">CAPÍTULO 2</a></li>
                  <li><a href="#">Verbo To-be</a></li>
                  <li><a href="#">Preposições</a></li>
                  <li><a href="#">Números</a></li>
                  <li className='capitulos'><a href="#">CAPÍTULO 3</a></li>
                  <li><a href="#">Verbo To-be</a></li>
                  <li><a href="#">Preposições</a></li>
                  <li><a href="#">Números</a></li>
                  <li className='capitulos'><a href="#">CAPÍTULO 4</a></li>
                  <li><a href="#">Verbo To-be</a></li>
                  <li><a href="#">Preposições</a></li>
                  <li><a href="#">Números</a></li>
                  <li className='capitulos'><a href="#">CAPÍTULO 5</a></li>
                  <li><a href="#">Verbo To-be</a></li>
                  <li><a href="#">Preposições</a></li>
                  <li><a href="#">Números</a></li>
                </ol>
              </div>
              <div className='linha'></div>
              <div id='conteudo'>
                <h1 id='cap1'>CAPÍTULO 1</h1>
                <Cap1/>

                <h1 id='cap2'>CAPÍTULO 2</h1>
                <Cap2/>
              </div>
                <div className='exercicios'>
            
                </div>
            </main>
          </section>     
        <footer>DESENVOLVIDO POR ABRINDO PORTAS</footer>        
      </div>
    </>
  )
}

export default App