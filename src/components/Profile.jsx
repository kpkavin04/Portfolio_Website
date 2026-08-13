import React from 'react'
import ProfileImg from '../assets/kavin_pic.webp'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { RESUME_URL, LINKEDIN_URL, GITHUB_URL } from '../data/site'

const Profile = () => {
    return (
        <header className='bg-black text-white text-center pt-28 pb-20 px-6' id='home'>
            <img
                src={ProfileImg}
                alt='Kavin Parthipan'
                width='192'
                height='192'
                className='mx-auto mb-8 w-48 h-48 rounded-full object-cover'
            />
            <h1 className='text-4xl md:text-6xl font-bold'>Kavin Parthipan</h1>
            <p className='mt-3 text-2xl md:text-4xl font-bold text-transparent bg-clip-text
                            bg-gradient-to-r from-green-400 to-blue-500'>
                Software Engineer
            </p>
            <p className='mt-4 text-base md:text-lg text-gray-300 max-w-2xl mx-auto'>
                Year 3 Computer Science undergraduate at the National University of Singapore,
                graduating May 2028. Seeking Summer 2027 software engineering internships.
            </p>
            <p className='mt-4 text-sm md:text-base text-gray-400'>
                Previously backend and data engineering intern at{' '}
                <span className='text-gray-200 font-semibold'>Motional</span>,{' '}
                <span className='text-gray-200 font-semibold'>Shopee</span> and{' '}
                <span className='text-gray-200 font-semibold'>ComfortDelGro</span>
            </p>
            <p className='mt-3 text-sm md:text-base text-gray-500'>
                Python · TypeScript · FastAPI · React · PostgreSQL · Docker
            </p>

            <div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-4'>
                <a
                    href={RESUME_URL}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-full sm:w-auto bg-gradient-to-r from-green-400 to-blue-500 text-black font-bold
                                px-6 py-2.5 rounded-full hover:opacity-90'
                >
                    View Resume
                </a>
                <div className='flex gap-4'>
                    <a
                        href={GITHUB_URL}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='GitHub profile'
                        className='flex items-center gap-2 border border-gray-700 px-5 py-2.5 rounded-full hover:border-green-400'
                    >
                        <FaGithub /> GitHub
                    </a>
                    <a
                        href={LINKEDIN_URL}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='LinkedIn profile'
                        className='flex items-center gap-2 border border-gray-700 px-5 py-2.5 rounded-full hover:border-green-400'
                    >
                        <FaLinkedin /> LinkedIn
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Profile
