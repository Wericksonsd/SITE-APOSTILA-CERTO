import React from 'react';
import './App.css';
import './Cap1.css';

function Cap1(){
    return(
        <>
        <h2>Pronomes Pessoais</h2>
        <p>Usamos os pronomes pessoais para representar algo ou alguém,               substituindo nomes ou substantivos. Temos dois tipos de personal pronouns: <span className='negrito'>subject and object</span></p>
        <table>
            <tr>
            <th>PRONOME</th>
            <th>SUBJECT PERSONAL PRONOME</th>
            <th>OBJECT PERSONAL PRONOME</th>
            </tr>
            <tr> <td>eu</td> <td>I</td> <td>me</td> </tr>
            <tr> <td>você</td> <td>you</td> <td>you</td> </tr>
            <tr> <td>ele</td> <td>he</td> <td>him</td> </tr>            
            <tr> <td>ela</td> <td>she</td> <td>her</td> </tr>            
            <tr> <td>ele/ela</td> <td>it</td> <td>it</td> </tr>            
            <tr> <td>nós</td> <td>we</td> <td>us</td> </tr>            
            <tr> <td>vocês</td> <td>you</td> <td>you</td> </tr>
            <tr> <td>eles</td> <td>they</td> <td>them</td> </tr>
        </table>
        <p>O pronome é usado quando nos referimos a animais, plantas e
        objetos, mas não pessoas.</p>
        <div id='pronoums1'>
            <div className='exemplos'>
                <h4>This is Sushi, it’s my kitty, it’s so cute.</h4>
                <p>Essa é a Sushi, ela é minha gatinha, ela é tão fofa.</p>
            </div>
            <article></article>
        </div>
        <p>Também usamos para falarmos sobre nós mesmos.</p>
        <div className='exemplos'>
            <h4>Hello, it’s Thomas.</h4>
            <p>Olá, é o Thomas.</p>
            <h4>Yes, it’s me, it’s Mary.</h4>
            <p>Sim, sou eu, é a Mary.</p>
        </div>
        <h2>Subject Personal Pronoun</h2>
        <p>Usamos o <span className='negrito'>subject personal pronoun</span> (pronome pessoal reto) quando algo ou alguém é o sujeito da ação, ou seja, quem <span className='negrito'>realiza</span> a ação do verbo na frase.</p>
        <div className='linha'></div>
        </>
    )
}

export default Cap1