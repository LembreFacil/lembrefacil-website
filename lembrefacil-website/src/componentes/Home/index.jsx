import React from 'react';
import logo from '../../assets/logo 1.png';
import homemIdoso from '../../assets/homemIdoso.png'

import './style.css';

function Home() {
    return (
        <>
        <main className='main-home'>
            <section className='main-home-content'>
                <aside className='main-home-action'>
                    <div className='main-home-action-topo'>
                        <img src={logo} alt="" className='logo-imagem'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis adipisci enim suscipit tempora, architecto voluptatibus maxime a minima quaerat vitae repellat labore, beatae magnam natus quis veniam qui at earum.</p>
                        <a href="" className='botao-action'>BAIXE JÁ</a>
                    </div>
                    <img src={homemIdoso} alt=""  className='pessoa-imagem'/>
                </aside>
            </section>
        </main>
        </>
    )
}

export default Home