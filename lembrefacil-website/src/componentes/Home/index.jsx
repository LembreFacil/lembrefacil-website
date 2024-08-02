import React from 'react';
import logo from '../../assets/logo 1.png';
import homemIdoso from '../../assets/homemIdoso.png';

import './style.css';

function Home() {
    return (
        <>
        <main className='main-home'>
            <div className='main-home-content'>
                <div class="card">
                    <div class="header-card">LembreFácil</div>
                    <div class="info">
                        <p class="title">O que é o LembreFácil?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi. </p>
                    </div>
                    <div class="footer-card">
                        <p class="tag">#HTML #CSS </p>
                        <button type="button" class="action">Baixe Já</button>
                    </div>
                </div>
                <div class="card">
                    <div class="header-card">LembreFácil</div>
                    <div class="info">
                        <p class="title">O que é o LembreFácil?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi. </p>
                    </div>
                    <div class="footer-card">
                        <p class="tag">#HTML #CSS </p>
                        <button type="button" class="action">Baixe Já</button>
                    </div>
                </div>
            </div>
            <img src={homemIdoso} alt="Homem Idoso" className='homem-idoso'/>
        </main>
        </>
    )
}

export default Home;
