import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { SECTIONS, SCROLL_OFFSET, RESUME_URL } from '../data/site';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const close = () => setIsOpen(false);

    return (
        <nav className='w-full bg-black text-white px-6 md:px-8 fixed top-0 left-0 z-50 border-b border-gray-800'>
            <div className='w-full py-4 flex justify-between items-center'>
                <Link
                    to='home'
                    smooth={true}
                    duration={500}
                    offset={SCROLL_OFFSET}
                    onClick={close}
                    className='text-xl md:text-2xl font-bold cursor-pointer'
                >
                    Kavin Parthipan
                </Link>

                <div className='hidden lg:flex items-center space-x-6 text-base'>
                    {SECTIONS.map(({ id, label }) => (
                        <Link
                            key={id}
                            to={id}
                            smooth={true}
                            duration={500}
                            offset={SCROLL_OFFSET}
                            spy={true}
                            activeClass='text-green-400'
                            className='hover:text-gray-400 cursor-pointer'
                        >
                            {label}
                        </Link>
                    ))}
                    <a
                        href={RESUME_URL}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold px-4 py-1.5 rounded-full hover:opacity-90'
                    >
                        Resume
                    </a>
                </div>

                <button
                    type='button'
                    onClick={() => setIsOpen((open) => !open)}
                    aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isOpen}
                    className='lg:hidden text-2xl p-1'
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {isOpen && (
                <div className='lg:hidden pb-4 flex flex-col space-y-3 text-lg'>
                    {SECTIONS.map(({ id, label }) => (
                        <Link
                            key={id}
                            to={id}
                            smooth={true}
                            duration={500}
                            offset={SCROLL_OFFSET}
                            onClick={close}
                            className='hover:text-gray-400 cursor-pointer'
                        >
                            {label}
                        </Link>
                    ))}
                    <a
                        href={RESUME_URL}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold px-4 py-2 rounded-full text-center'
                    >
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
