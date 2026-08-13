import React from 'react'
import AboutImg from '../assets/kavin_buggy_ride.webp'

const About = () => {
    return (
        <section className='bg-black text-white py-16 px-6' id='about'>
            <div className='container mx-auto md:px-16 lg:px-24'>
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:items-start md:space-x-12'>
                    <img
                        src={AboutImg}
                        alt='Kavin Parthipan'
                        width='288'
                        height='320'
                        loading='lazy'
                        className='w-72 h-80 rounded object-cover mb-8 md:mb-0 shrink-0'
                    />
                    <div className='flex-1 space-y-4 text-base md:text-lg text-gray-300'>
                        <p>
                            I work mainly on backend systems: the services, data pipelines and job
                            orchestration that sit behind a product rather than the interface on top of it.
                            I&apos;m in my penultimate year, and this is the work I want to keep doing — most
                            recently as a backend engineering intern, and on my own time building services to
                            understand things I can&apos;t pick up from reading about them.
                        </p>
                        <p>
                            I&apos;ve been fortunate to work with people who were better than me at most of
                            this, and the fastest I have ever improved was when someone reviewed my code and
                            told me plainly what was wrong with it. So I ask questions early instead of
                            guessing, and I read how others have solved a problem before assuming my own
                            approach is the right one.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
