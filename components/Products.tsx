import React from 'react';

interface Product {
    id: number;
    name: string;
    weight?: string;
    description: string;
    price: number;
    image: string;
    alt?: string;
}

interface ProductsProps {
    products?: Product[];
}

const defaultProducts: Product[] = [
    {
        id: 1,
        name: 'American Style Pork Ribs',
        weight: '1kg',
        description: 'Costela suína americana premium, macia e suculenta, ideal para churrasco.',
        price: 40.83,
        image: '/prontos/kibe.jpg',
        alt: 'Costela suína americana'
    },
    {
        id: 2,
        name: 'American Style Pork Ribs',
        weight: '1kg',
        description: 'Costela suína americana premium, macia e suculenta, ideal para churrasco.',
        price: 40.83,
        image: '/prontos/kibe.jpg',
        alt: 'Costela suína americana'
    },
    {
        id: 3,
        name: 'American Style Pork Ribs',
        weight: '1kg',
        description: 'Costela suína americana premium, macia e suculenta, ideal para churrasco.',
        price: 40.83,
        image: '/prontos/kibe.jpg',
        alt: 'Costela suína americana'
    },
    {
        id: 4,
        name: 'American Style Pork Ribs',
        weight: '1kg',
        description: 'Costela suína americana premium, macia e suculenta, ideal para churrasco.',
        price: 40.83,
        image: '/prontos/kibe.jpg',
        alt: 'Costela suína americana'
    },
    {
        id: 5,
        name: 'American Style Pork Ribs',
        weight: '1kg',
        description: 'Costela suína americana premium, macia e suculenta, ideal para churrasco.',
        price: 40.83,
        image: '/prontos/kibe.jpg',
        alt: 'Costela suína americana'
    },
    {
        id: 6,
        name: 'American Style Pork Ribs',
        weight: '1kg',
        description: 'Costela suína americana premium, macia e suculenta, ideal para churrasco.',
        price: 40.83,
        image: '/prontos/kibe.jpg',
        alt: 'Costela suína americana'
    },
    {
        id: 7,
        name: 'American Style Pork Ribs',
        weight: '1kg',
        description: 'Costela suína americana premium, macia e suculenta, ideal para churrasco.',
        price: 40.83,
        image: '/prontos/kibe.jpg',
        alt: 'Costela suína americana'
    },
    {
        id: 8,
        name: 'American Style Pork Ribs',
        weight: '1kg',
        description: 'Costela suína americana premium, macia e suculenta, ideal para churrasco.',
        price: 40.83,
        image: '/prontos/kibe.jpg',
        alt: 'Costela suína americana'
    },
];

export default function Products({ products = defaultProducts }: ProductsProps) {
    return (
        <section id='produtos' className='py-20 meatsBG bg-[#F7F4EF]'>
            <div className='maxW flex flex-col gap-10 lg:flex-row
            
            '>
                <article className='productsBG py-20 px-4 lg:w-[40%]'>
                    <p className='uppercase text-sm font-semibold mt-8 tracking-widest text-white text-center'>Mais</p>
                    <h1 className='font-Vast uppercase text-RedP text-4xl mt-4 text-center'>Especiais prontos</h1>
                </article>

                <article className='lg:w-[60%]'>
                    <div className='grid lg:grid-cols-2 gap-4'>
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className='mt-4 pt-4 border-t border-GreenP lg:flex items-center justify-between'>
                        <div>
                            <h1 className='text-sm font-semibold uppercase text-center lg:text-left'>Segunda à Sexta - <span className='font-normal text-GrayP '>Das 08:00 ás 19:00</span></h1>
                            <h1 className='font-Vast text-3xl text-GreenP mt-2 text-center lg:text-left'>14 9 1234-1234</h1>
                        </div>
                        <div className='mt-4 lg:mt-0 flex justify-center'>
                            <a className='bg-GreenP px-8 py-2 rounded-4xl uppercase tracking-widest text-white' href="">Saiba mais</a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    const formatPrice = (price: number) => {
        return `R$ ${price.toFixed(2).replace('.', ',')}`;
    };

    return (
        <div className='p-3'>
            <div className='flex gap-3'>
                <div className='flex-shrink-0'>
                    <img
                        className='w-30 h-30 object-cover rounded-l-xl'
                        src={product.image}
                        alt={product.alt || product.name}
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder-meat.jpg';
                        }}
                    />
                </div>

                <div className='flex-1 min-w-0'>
                    <h3 className='font-bold text-gray-800 text-sm mb-1 leading-tight'>
                        {product.name} {product.weight && `(${product.weight})`}
                    </h3>
                    <p className='text-xs text-gray-600 mb-2 line-clamp-2 leading-relaxed'>
                        {product.description}
                    </p>
                    <p className='text-RedP text-sm'>
                        {formatPrice(product.price)}
                    </p>
                </div>


            </div>
        </div>
    );
}
