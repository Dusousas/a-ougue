import React, { useState } from 'react';

type MeatCategory = 'boi' | 'porco' | 'galinha' | 'carneiro';

interface MenuItem {
    image: string;
    name: string;
    description?: string;
}

interface MenuData {
    [key: string]: MenuItem[];
}

export default function Meats() {
    const [selectedCategory, setSelectedCategory] = useState<MeatCategory>('boi');

    // Dados do cardápio - você pode expandir com mais itens
    const menuData: MenuData = {
        boi: [
            {
                image: "/cardapio/boi.jpg",
                name: "Patinho Moído",
                description: "Carne bovina moída de primeira qualidade"
            },
            {
                image: "/cardapio/boi.jpg",
                name: "Patinho Moído",
                description: "Carne bovina moída de primeira qualidade"
            }, {
                image: "/cardapio/boi.jpg",
                name: "Patinho Moído",
                description: "Carne bovina moída de primeira qualidade"
            }
        ],
        porco: [
            {
                image: "/cardapio/porco.jpg",
                name: "Costela Suína",
                description: "Costela de porco temperada e grelhada"
            },

        ],
        galinha: [
            {
                image: "/cardapio/galinha.jpg",
                name: "Frango Grelhado",
                description: "Frango temperado e grelhado na brasa"
            },
        ],
        carneiro: [
            {
                image: "/cardapio/carneiro.jpg",
                name: "Pernil de Carneiro",
                description: "Pernil assado com alecrim e alho"
            },
        ]
    };

    const categories = [
        { id: 'boi' as MeatCategory, icon: 'icons/1.png', alt: 'Boi', name: 'Bovino' },
        { id: 'porco' as MeatCategory, icon: 'icons/2.png', alt: 'Porco', name: 'Suíno' },
        { id: 'galinha' as MeatCategory, icon: 'icons/3.png', alt: 'Galinha', name: 'Frango' },
        { id: 'carneiro' as MeatCategory, icon: 'icons/4.png', alt: 'Carneiro', name: 'Carneiro' }
    ];

    return (
        <>
            <section id='cortes' className='py-20 meatsBG bg-[#F7F4EF]'>
                <div className='maxW'>
                    <p className='uppercase text-sm font-semibold text-center tracking-widest'>Carnes Premiums</p>
                    <h1 className='font-Vast uppercase text-RedP text-4xl mt-4 text-center'>Epeciais</h1>
                    <article className='flex flex-wrap gap-4 sm:gap-8 md:gap-12 lg:gap-20 justify-center mb-8 px-4 mt-10'>
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className={`cursor-pointer transition-all duration-300 transform hover:scale-110 flex flex-col items-center min-w-[80px] ${selectedCategory === category.id
                                    ? 'opacity-100 scale-110'
                                    : 'opacity-70 hover:opacity-100'
                                    }`}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                <img
                                    src={category.icon}
                                    alt={category.alt}
                                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                                />
                                <p className="text-center mt-1 sm:mt-2 font-medium text-gray-700 text-xs sm:text-sm md:text-base">
                                    {category.name}
                                </p>
                            </div>
                        ))}
                    </article>

                    {/* Grid dos itens do cardápio */}
                    <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'>
                        {menuData[selectedCategory]?.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <img
                                    className='w-[300px] h-[200px] object-cover'
                                    src={item.image}
                                    alt={item.name}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = '/cardapio/placeholder.jpg';
                                    }}
                                />
                                <div className='p-4'>
                                    <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                                        {item.name}
                                    </h3>
                                    {item.description && (
                                        <p className='text-gray-600 text-sm'>
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )) || (
                                <div className="col-span-full text-center py-20">
                                    <p className="text-gray-500 text-lg">
                                        Nenhum item disponível para esta categoria
                                    </p>
                                </div>
                            )}
                    </article>
                </div>
            </section>
        </>
    );
}