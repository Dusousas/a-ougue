import React from 'react';
import Navbar from './subc/Navbar';

export default function Header() {
    return (
        <>
            <header className='py-6 bg-white'>
                <div className='maxW flex justify-between items-center'>
                    <a className='uppercase text-2xl font-Vast' href="">Sua<span className='font-semibold text-RedP'>Logo</span></a>
                    <Navbar />
                </div>
            </header>
        </>
    );
}