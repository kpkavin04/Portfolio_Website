import React from 'react'
import { FaGithub, FaLock } from 'react-icons/fa'
import TemporalImg from '../assets/MinimalTemporalJobServiceImg.webp'
import VideoClipImg from '../assets/AI_Video_Clip_Selector.webp'
import VerifAiImg from '../assets/VerifAI_arch_diagram_pic.webp'
import ExpenseTrackerImg from '../assets/ExpenseTrackerImg.webp'

const featuredProjects = [
    {
        id: 'temporal',
        name: 'Minimal Temporal Job Service',
        role: 'Solo project',
        technologies: 'Python, FastAPI, Temporal, Docker, Uvicorn',
        description:
            'A FastAPI service that runs background jobs as Temporal workflows, so work that fails partway through is retried and resumed rather than lost. Built to understand where durable execution earns its complexity over a plain task queue.',
        image: TemporalImg,
        github: 'https://github.com/kpkavin04/Minimal-Temporal-Job-Service',
    },
    {
        id: 'videotto',
        name: 'AI Video Clip Selector',
        role: 'Solo project',
        technologies: 'Python, FastAPI, Docker, AWS App Runner, yt-dlp, ffmpeg, Whisper, React',
        description:
            'Takes a long-form video, pulls the audio with yt-dlp, transcribes it with Whisper, then has GPT-4o-mini rank the three most clip-worthy segments and return timestamps. A second endpoint re-downloads the source and cuts the chosen span with ffmpeg. Packaged as a Docker image on AWS App Runner, with slow work run as background tasks that the client polls for status.',
        image: VideoClipImg,
        github: 'https://github.com/kpkavin04/videotto-project',
    },
    {
        id: 'verifai',
        name: 'VerifAI',
        role: 'Solo project',
        technologies: 'Python, FastAPI, ChromaDB, SentenceTransformers',
        description:
            'A retrieval-augmented question answering system for private documents, built around the assumption that refusing is better than guessing. It estimates how well retrieved context supports an answer and declines below a confidence threshold, trading answer coverage for fewer confident wrong answers.',
        image: VerifAiImg,
        github: 'https://github.com/kpkavin04/VerifAI',
    },
    {
        id: 'expense',
        name: 'Expense Tracker',
        role: 'Solo project',
        technologies: 'React (TypeScript), Node.js, Express, MongoDB',
        description:
            'A MERN-stack expense tracker with JWT-authenticated accounts and full CRUD over categorised transactions, built with a typed React client talking to a separate Express API.',
        image: ExpenseTrackerImg,
        github: 'https://github.com/kpkavin04/Expense_Tracker',
    },
]

const otherProjects = [
    {
        id: 'telegram',
        name: 'Telegram Wrapped',
        role: 'Two-person project',
        technologies: 'Python, Telethon, FastAPI, React, Tailwind CSS, OpenAI API',
        description:
            'An analytics dashboard for exported Telegram archives, surfacing messaging trends and per-contact activity with sentiment scoring through the OpenAI API.',
        contribution:
            'I connected the Telegram service to the processing pipeline and wrote the Telethon-based message processing, then built the word cloud and the persona card that characterises a user from their texting style. Design decisions were made jointly.',
        github: 'https://github.com/kpkavin04/TelegramWrapped',
    },
    {
        id: 'rizztaurant',
        name: 'Rizztaurant',
        role: 'NUS Orbital (CP2106) · two-person team',
        technologies: 'React Native, Expo, Supabase, Node.js, Google Places API, Groq API',
        description:
            'A restaurant discovery mobile app with Tinder-style swiping, saved lists and Google Places integration, built and assessed as my NUS Orbital project.',
        github: 'https://github.com/shijiken/rizztaurant/tree/final',
    },
    {
        id: 'lstm',
        name: 'LSTM Stock Screener',
        role: 'Solo project',
        technologies: 'Python, TensorFlow, FastAPI, yfinance',
        description:
            'A FastAPI endpoint serving 30-day price forecasts from a multi-layer LSTM trained on Yahoo Finance closing prices. Built during my time at NUS Fintech Society.',
        github: 'https://github.com/kpkavin04/LSTM-stock-screener',
    },
    {
        id: 'massgames',
        name: 'Mass Games Score Tracker',
        role: 'Solo project',
        technologies: 'Python, Telethon',
        description:
            'A script that reads mission submissions posted in a Telegram group chat and tabulates scores automatically, replacing manual tallying during a large-scale event.',
        github: 'https://github.com/kpkavin04/Drabroksi_Quest_Tracker',
    },
    {
        id: 'barbell',
        name: 'Barbell Path Tracker',
        role: 'Solo project',
        technologies: 'Python, OpenCV, Streamlit',
        description:
            'A Streamlit tool that tracks the barbell across frames of a lifting video with OpenCV and overlays its path, to check whether the bar travels vertically.',
        github: 'https://github.com/kpkavin04/Barbell_Path_Tracker',
    },
    {
        id: 'safetyfirst',
        name: 'SafetyFirst',
        role: 'DSTA BrainHack team',
        technologies: 'React Native, Expo, Supabase, Express, OpenAI API',
        description:
            'A centralised crisis reporting app for Singapore with live incident maps, built during DSTA BrainHack.',
        contribution:
            'I led the interface and user experience design in Figma and implemented several of the backend features.',
        github: 'https://github.com/nazeeeef007/brainhack',
        isPrivate: true,
    },
]

const Projects = () => {
    return (
        <section className='bg-black text-white py-16 px-6' id='projects'>
            <div className='container mx-auto md:px-16 lg:px-24'>
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>Projects</h2>
                <p className='text-center text-gray-400 mb-12'>
                    Every repository below is public unless noted, and each project states whether I built it
                    alone or with a team.
                </p>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {featuredProjects.map((project) => (
                        <article
                            key={project.id}
                            className='bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden flex flex-col
                                        hover:border-green-400/60 transition-colors'
                        >
                            <img
                                src={project.image}
                                alt={`${project.name} screenshot`}
                                width='800'
                                height='400'
                                loading='lazy'
                                className='w-full h-48 object-cover border-b border-gray-700'
                            />
                            <div className='p-6 flex flex-col flex-1'>
                                <h3 className='text-xl md:text-2xl font-bold'>{project.name}</h3>
                                <p className='text-xs uppercase tracking-wide text-green-400 mt-1'>
                                    {project.role}
                                </p>
                                <p className='text-gray-300 mt-4 flex-1'>{project.description}</p>
                                <p className='text-sm text-gray-500 mt-4'>{project.technologies}</p>
                                <a
                                    href={project.github}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='mt-5 inline-flex items-center justify-center gap-2 bg-gradient-to-r
                                                from-green-400 to-blue-500 text-black font-semibold px-5 py-2
                                                rounded-full self-start hover:opacity-90'
                                >
                                    <FaGithub aria-hidden='true' /> View code
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <h3 className='text-2xl font-bold mt-16 mb-6'>Other projects</h3>
                <ul className='space-y-4'>
                    {otherProjects.map((project) => (
                        <li
                            key={project.id}
                            className='bg-gray-800/30 border border-gray-800 rounded-lg p-5 flex flex-col
                                        md:flex-row md:items-start md:justify-between gap-4'
                        >
                            <div className='flex-1'>
                                <h4 className='text-lg font-bold'>{project.name}</h4>
                                <p className='text-xs uppercase tracking-wide text-green-400 mt-1'>
                                    {project.role}
                                </p>
                                <p className='text-gray-300 mt-2'>{project.description}</p>
                                {project.contribution && (
                                    <p className='text-gray-400 text-sm mt-2 border-l-2 border-gray-700 pl-3'>
                                        <span className='text-gray-300 font-semibold'>My contribution: </span>
                                        {project.contribution}
                                    </p>
                                )}
                                <p className='text-sm text-gray-500 mt-2'>{project.technologies}</p>
                            </div>
                            <div className='shrink-0 flex flex-col items-start md:items-end gap-1'>
                                <a
                                    href={project.github}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center gap-2 border border-gray-700 px-4 py-2
                                                rounded-full text-sm hover:border-green-400'
                                >
                                    {project.isPrivate ? <FaLock aria-hidden='true' /> : <FaGithub aria-hidden='true' />}
                                    Code
                                </a>
                                {project.isPrivate && (
                                    <span className='text-xs text-gray-500'>Private repository</span>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Projects
