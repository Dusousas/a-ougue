import React from 'react';

export default function Main() {
    return (
        <section className="mainBG relative h-screen">
            <div className="absolute inset-0 bg-black/60 z-10" />

            <div className="relative z-20 maxW flex flex-col items-center justify-center text-white h-full">
                <p className='uppercase tracking-widest'>Melhor açougue de torrinha e região.</p>
                <h1 className="font-Vast text-RedP mt-4 uppercase text-5xl lg:text-9xl">Corte</h1>
                <h1 className="font-Vast text-RedP uppercase text-5xl lg:text-9xl">Perfeito</h1>
                <div className='mt-6'>
                    <a className='bg-GreenP px-8 py-2 rounded-4xl uppercase tracking-widest' href="">Entrar em contato</a>
                </div>
            </div>
        </section>
    );
}
