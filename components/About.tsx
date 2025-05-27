import React from 'react';

export default function About() {
    return (
        <section className="pb-20 lg:pt-30">
            <div className="maxW flex flex-col-reverse items-center gap-10">

                <article className="flex gap-6 lg:w-1/2">
                    <div className="-mt-10">
                        <img className="rounded-lg shadow-lg" src="/about-1.jpg" alt="Carne grelhada" />
                    </div>
                    <div>
                        <img className="rounded-lg shadow-lg" src="/about-2.jpg" alt="Carne crua com vinho" />
                    </div>
                </article>

                <article className=' text-center py-20 lg:w-1/2'>
                    <div className='flex items-center justify-center'>
                        <img className='' src="/logo-h3.svg" alt="" />
                    </div>
                    <p className='uppercase text-sm font-semibold mt-8'>Bem-vindo ao SUALOGO</p>
                    <h1 className='font-Vast uppercase text-RedP text-4xl mt-4'>Referência em carnes nobres e frescas.</h1>
                    <div className='flex items-center justify-center mt-2'>
                        <img src="/dotted-t.svg" alt="" />
                    </div>
                    <p className='mt-4 font-light text-GrayP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eum veritatis iure! Excepturi dolores repudiandae sed suscipit facilis, quo quae sapiente explicabo porro unde eligendi optio recusandae. Sunt, distinctio unde!</p>
                    <div className='mt-10'>
                        <a className='bg-GreenP px-8 py-2 rounded-4xl uppercase tracking-widest text-white' href="">Saiba mais</a>
                    </div>
                </article>

            </div>
        </section>
    );
}
