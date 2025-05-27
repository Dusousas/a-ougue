import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';

export default function Loc() {
    // Array com dados das unidades - adicione novas unidades aqui
    const unidades = [
        {
            id: 1,
            nome: "Unidade Galpão 1",
            endereco: "Rua endereço, 123 | Torrinha - SP",
            imagem: "/about-1.jpg",
            redesSociais: {
                instagram: "#",
                whatsapp: "#",
                facebook: "#"
            }
        },
        {
            id: 2,
            nome: "Unidade Centro",
            endereco: "Av. Principal, 456 | Centro - SP",
            imagem: "/about-2.jpg",
            redesSociais: {
                instagram: "#",
                whatsapp: "#",
                facebook: "#"
            }
        },
        {
            id: 3,
            nome: "Unidade Norte",
            endereco: "Rua das Flores, 789 | Zona Norte - SP",
            imagem: "/about-1.jpg",
            redesSociais: {
                instagram: "#",
                whatsapp: "#",
                facebook: "#"
            }
        }
    ];

    return (
        <>
            <section className='py-20'>
                <div className='maxW'>
                    <p className='uppercase text-sm font-semibold text-center'>Onde estamos?</p>
                    <h1 className='font-Vast uppercase text-RedP text-4xl mt-4 text-center'>Nossas unidades</h1>

                    <article className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {unidades.map((unidade) => (
                            <div key={unidade.id} className='group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2'>
                                <div className='relative overflow-hidden rounded-t-2xl'>
                                    <img 
                                        className='w-full h-[500px] object-cover rounded-t-2xl shadow transition-transform duration-500 group-hover:scale-110' 
                                        src={unidade.imagem} 
                                        alt={unidade.nome}
                                    />
                                </div>
                                
                                <div className='py-4 px-4 border-x border-b border-RedP rounded-b-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:border-opacity-80'>
                                    <h1 className='uppercase font-bold tracking-widest text-RedP transition-colors duration-300 group-hover:text-opacity-90'>
                                        {unidade.nome}
                                    </h1>
                                    <p className='transition-colors duration-300 group-hover:text-gray-600'>
                                        {unidade.endereco}
                                    </p>
                                    <div className='flex gap-4 mt-2'>
                                        <a href={unidade.redesSociais.instagram} target="_blank" rel="noopener noreferrer">
                                            <FaInstagramSquare className='text-3xl text-RedP cursor-pointer transition-all duration-300 hover:scale-125 hover:text-pink-500' />
                                        </a>
                                        <a href={unidade.redesSociais.whatsapp} target="_blank" rel="noopener noreferrer">
                                            <FaWhatsappSquare className='text-3xl text-RedP cursor-pointer transition-all duration-300 hover:scale-125 hover:text-green-500' />
                                        </a>
                                        <a href={unidade.redesSociais.facebook} target="_blank" rel="noopener noreferrer">
                                            <FaFacebookSquare className='text-3xl text-RedP cursor-pointer transition-all duration-300 hover:scale-125 hover:text-blue-500' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </article>
                </div>
            </section>
        </>
    );
}