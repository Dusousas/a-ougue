import React from 'react';

export default function Cta() {
    return (
        <>
            <section className='bg-[#F0F7EA] py-32 meatsBG'>
                <div className='maxW'>
                    <p className='uppercase text-sm font-semibold text-center tracking-widest'>Qualidade e sabor que você confia</p>
                    <h1 className='font-Vast uppercase text-RedP text-4xl mt-4 text-center'>As melhores carnes da região estão aqui</h1>
                    <p className='text-center text-GrayP mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, neque incidunt eaque architecto accusantium doloremque facere vitae veniam, nesciunt exercitationem commodi mollitia dolores rerum minima recusandae, totam quod quos. Reprehenderit!</p>
                    <div className='mt-6 flex justify-center'>
                        <a className='bg-GreenP px-8 py-2 rounded-4xl uppercase tracking-widest text-white' href="">Entrar em contato</a>
                    </div>
                </div>
            </section>
        </>
    );
}