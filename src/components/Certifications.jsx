import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const certificates = [
    {
        id: 1,
        name: 'IBM Data Science Specialization',
        issuer: 'IBM',
        desc: 'Ten-course specialisation covering data science methodology, tooling and machine learning models.',
        link: 'https://www.coursera.org/account/accomplishments/specialization/RWG2FBUHXEWM',
    },
    {
        id: 2,
        name: 'Foundations in AI (AI4I)',
        issuer: 'AI Singapore',
        desc: 'Supervised and unsupervised learning, deep learning and exploratory data analysis, in theory and practice.',
        link: 'https://learn.aisingapore.org/certificate-verification/838A08250A-7349B0B038-14AF4F5AB/',
    },
    {
        id: 3,
        name: 'CS50x',
        issuer: 'Harvard University',
        desc: 'Algorithms, data structures, software engineering and web development in C, Python and SQL.',
        link: 'https://cs50.harvard.edu/certificates/a9138e57-d2df-4e8b-a564-56a7b8198e55',
    },
    {
        id: 4,
        name: 'Junior Penetration Tester (eJPT)',
        issuer: 'INE',
        desc: 'Practical assessment in network scanning, vulnerability assessment and exploitation.',
        link: 'https://certs.ine.com/025d217e-22a8-4191-a843-5f83c80bd414',
    },
]

const Certifications = () => {
    return (
        <section className='bg-black text-white py-16 px-6' id='certifications'>
            <div className='container mx-auto md:px-16 lg:px-24'>
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-10'>Certifications</h2>
                <ul className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
                    {certificates.map((certificate) => (
                        <li
                            key={certificate.id}
                            className='bg-gray-800/40 border border-gray-800 rounded-lg p-5 flex flex-col'
                        >
                            <h3 className='font-bold'>{certificate.name}</h3>
                            <p className='text-sm text-green-400 mt-1'>{certificate.issuer}</p>
                            <p className='text-sm text-gray-400 mt-3 flex-1'>{certificate.desc}</p>
                            <a
                                href={certificate.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='mt-4 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-green-400'
                            >
                                Verify <FaExternalLinkAlt className='text-xs' aria-hidden='true' />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Certifications;
