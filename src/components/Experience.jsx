import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGithub } from 'react-icons/fa';
import motional_pic from '../assets/kavin_motional_pic.webp';
import shopee_pic from '../assets/kavin_shopee_pic.webp';
import quadrant_pic from '../assets/kavin_quadrant_pic.webp';
import transcom_pic from '../assets/kavin_transcom_pic.webp';
import fintech_pic from '../assets/kavin_fintech_pic.webp';
import cdg_pic from '../assets/kavin_cdg_pic.webp';

const experiences = [
    {
        id: 1,
        title: 'Backend Software Engineer Intern',
        company: 'Motional',
        date: 'May 2026 - Aug 2026',
        points: [
            'Sole engineer on migrating Motional\u2019s five nuScenes evaluation challenges, used each year by thousands of autonomous-driving researchers, off paid infrastructure and onto open-source Hugging Face Spaces in eight weeks \u2014 removing $30,000 a year in vendor spend.',
            'Made releases roughly five times faster by re-architecting all five challenges onto a single shared codebase, replacing a brittle five-branch parallel-merge process.',
            'Built OAuth-gated per-user annual submission quotas and a bounded process queue that fairly orders concurrent submissions under load.',
        ],
        image: motional_pic,
    },
    {
        id: 2,
        title: 'Data Analyst Intern, Data Engineering & Backend',
        company: 'Shopee',
        date: 'Jan 2026 - Mar 2026',
        points: [
            'Built a cross-platform ETL workflow that aggregates TikTok Shop sales data into Shopee\u2019s Hive environment through the Google Drive API, using tuned SparkSQL queries to speed up weekly stakeholder reporting across eight regional markets.',
            'Wrote region-agnostic Python scripts so one reporting pipeline serves five regional markets and multiple campaigns without per-market forks.',
        ],
        image: shopee_pic,
    },
    {
        id: 3,
        title: 'Data Science Intern, Backend & Cloud Systems',
        company: 'ComfortDelGro',
        date: 'Sep 2025 - Nov 2025',
        points: [
            'Built and deployed a Python web scraper on Google Cloud Run that extracts data from over 14,000 SGCarMart vehicle listings, improving valuation accuracy for ComfortDelGro Rent-A-Car\u2019s fleet.',
            'Halved total scrape time by replacing sequential requests with a concurrent thread pool.',
            'Designed interactive Power BI dashboards fed by SQL queries running against BigQuery on Google Cloud Platform.',
        ],
        image: cdg_pic,
    },
    {
        id: 4,
        title: 'Machine Learning Analyst',
        company: 'NUS Fintech Society',
        date: 'Aug 2024 - May 2025',
        points: [
            'Researched and implemented the retrieval-augmented generation component of a financial literacy AI tutor, covering document ingestion, chunking, embedding-based retrieval and answer grounding.',
            'Built a stock price forecasting service using a multi-layer LSTM trained on Yahoo Finance closing prices, served through a FastAPI endpoint for frontend consumption.',
        ],
        image: fintech_pic,
        link: {
            href: 'https://github.com/kpkavin04/LSTM-stock-screener',
            label: 'LSTM forecasting service',
        },
    },
    {
        id: 5,
        title: 'Cyber Security Intern',
        company: 'Quadrant360',
        date: 'Jan 2024 - Apr 2024',
        points: [
            'Ran vulnerability assessments on client systems and wrote up findings into remediation reports.',
            'Co-built a controlled malware demonstration in an isolated virtual environment for internal training use.',
        ],
        image: quadrant_pic,
    },
    {
        id: 6,
        title: 'Deputy Team Leader',
        company: 'Singapore Police Force (Transcom)',
        date: 'Dec 2022 - Nov 2023',
        points: [
            'Deputy lead for a unit of over 100 officers, planning patrol operations and coordinating crisis response.',
            'Rebuilt the unit\u2019s reporting workflow in Excel, cutting the manual effort behind routine documentation.',
        ],
        image: transcom_pic,
    },
];

const Experience = () => {
    return (
        <section className='bg-black text-white py-16 px-6' id='experience'>
            <div className='container mx-auto md:px-16 lg:px-24'>
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>Experience</h2>
                <VerticalTimeline lineColor='#374151'>
                    {experiences.map((exp) => (
                        <VerticalTimelineElement
                            key={exp.id}
                            className='vertical-timeline-element--work'
                            contentStyle={{ background: '#1f2937', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid #3b82f6' }}
                            date={exp.date}
                            iconStyle={{ background: '#3b82f6', color: '#fff' }}
                            icon={<FaBriefcase />}
                        >
                            <h3 className='text-xl font-bold'>{exp.title}</h3>
                            <h4 className='text-lg text-gray-300'>{exp.company}</h4>
                            <ul className='mt-3 space-y-2 text-gray-400 list-disc pl-5'>
                                {exp.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                            {exp.link && (
                                <a
                                    href={exp.link.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='mt-3 inline-flex items-center gap-2 text-sm text-green-400 hover:underline'
                                >
                                    <FaGithub aria-hidden='true' /> {exp.link.label}
                                </a>
                            )}
                            {exp.image && (
                                <img
                                    src={exp.image}
                                    alt={`Kavin Parthipan at ${exp.company}`}
                                    width='800'
                                    height='450'
                                    loading='lazy'
                                    className='mt-4 rounded-lg w-full object-cover'
                                />
                            )}
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default Experience;
