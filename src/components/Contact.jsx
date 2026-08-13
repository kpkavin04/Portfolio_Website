import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa'
import { EMAIL, LINKEDIN_URL, GITHUB_URL, RESUME_URL } from '../data/site'

const links = [
    { href: `mailto:${EMAIL}`, label: EMAIL, Icon: FaEnvelope, external: false },
    { href: LINKEDIN_URL, label: 'linkedin.com/in/kavin-parthipan', Icon: FaLinkedin, external: true },
    { href: GITHUB_URL, label: 'github.com/kpkavin04', Icon: FaGithub, external: true },
    { href: RESUME_URL, label: 'Resume (PDF)', Icon: FaFilePdf, external: true },
]

const Contact = () => {
    return (
        <section className='bg-black text-white py-16 px-6 border-t border-gray-800' id='contact'>
            <div className='container mx-auto md:px-16 lg:px-24 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4'>Get in touch</h2>
                <p className='text-gray-300 max-w-xl mx-auto'>
                    I&apos;m looking for Summer 2027 software engineering internships, and I&apos;m happy to talk
                    about any of the projects above. Email is the fastest way to reach me.
                </p>

                <ul className='mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4'>
                    {links.map(({ href, label, Icon, external }) => (
                        <li key={href}>
                            <a
                                href={href}
                                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                className='inline-flex items-center gap-3 border border-gray-700 rounded-full
                                            px-5 py-3 hover:border-green-400 transition-colors'
                            >
                                <Icon className='text-green-400' aria-hidden='true' />
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <p className='text-sm text-gray-600 mt-12'>
                    Built with React, Vite and Tailwind CSS. Source on{' '}
                    <a
                        href='https://github.com/kpkavin04/portfolio_website'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='underline hover:text-gray-400'
                    >
                        GitHub
                    </a>
                    .
                </p>
            </div>
        </section>
    );
};

export default Contact;
