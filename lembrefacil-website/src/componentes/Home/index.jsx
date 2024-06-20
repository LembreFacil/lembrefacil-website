import React from 'react';
import logo from '../../assets/logo 1.png';
import Carrossel from '../Carrossel';

import './style.css';

function Home() {
    return (
        <>
        <main className='main-home'>
            <section className='main-home-content'>
                <aside className='main-home-text'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor labore vitae sed ipsa eveniet tempora voluptates vel? Voluptatem quasi quibusdam at quis, soluta error incidunt tenetur reprehenderit sunt, culpa a!</p>
                </aside>
                <aside className='main-home-image'>
                    <Carrossel/>
                </aside>
            </section>
        </main>
        </>
    )
}

export default Home