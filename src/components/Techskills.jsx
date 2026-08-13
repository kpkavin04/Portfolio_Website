import React from 'react';
import {
    SiPython, SiTypescript, SiJavascript, SiOpenjdk, SiHtml5, SiCss3, SiR,
    SiFastapi, SiNodedotjs, SiExpress, SiReact, SiExpo, SiTailwindcss, SiTemporal,
    SiPandas, SiNumpy, SiScikitlearn, SiOpencv,
    SiPostgresql, SiMysql, SiMongodb, SiSupabase, SiFirebase,
    SiApachespark, SiApachehadoop, SiPresto,
    SiDocker, SiAmazonwebservices, SiGooglecloud, SiGithub, SiTableau,
    SiPytorch, SiTensorflow, SiHuggingface, SiLangchain,
    SiStreamlit, SiFolium,
} from 'react-icons/si';
import {
    FaDatabase, FaServer, FaChartBar, FaProjectDiagram, FaSearch,
    FaChartLine, FaChartArea,
} from 'react-icons/fa';

const HEXAGON_CLIP =
    '[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]';

const skillGroups = [
    {
        title: 'Languages',
        skills: [
            { name: 'Python', Icon: SiPython },
            { name: 'TypeScript', Icon: SiTypescript },
            { name: 'JavaScript', Icon: SiJavascript },
            { name: 'Java', Icon: SiOpenjdk },
            { name: 'SQL', Icon: FaDatabase },
            { name: 'HTML', Icon: SiHtml5 },
            { name: 'CSS', Icon: SiCss3 },
            { name: 'R', Icon: SiR },
        ],
    },
    {
        title: 'Libraries & Frameworks',
        skills: [
            { name: 'FastAPI', Icon: SiFastapi },
            { name: 'Uvicorn', Icon: FaServer },
            { name: 'Node.js', Icon: SiNodedotjs },
            { name: 'Express', Icon: SiExpress },
            { name: 'React', Icon: SiReact },
            { name: 'Expo', Icon: SiExpo },
            { name: 'Tailwind CSS', Icon: SiTailwindcss },
            { name: 'Temporal', Icon: SiTemporal },
            { name: 'Pandas', Icon: SiPandas },
            { name: 'NumPy', Icon: SiNumpy },
            { name: 'Scikit-Learn', Icon: SiScikitlearn },
            { name: 'OpenCV', Icon: SiOpencv },
        ],
    },
    {
        title: 'Databases & Big Data',
        skills: [
            { name: 'PostgreSQL', Icon: SiPostgresql },
            { name: 'MySQL', Icon: SiMysql },
            { name: 'MongoDB', Icon: SiMongodb },
            { name: 'Supabase', Icon: SiSupabase },
            { name: 'Firebase', Icon: SiFirebase },
            { name: 'ChromaDB', Icon: FaDatabase },
            { name: 'Spark', Icon: SiApachespark },
            { name: 'Hadoop', Icon: SiApachehadoop },
            { name: 'Presto', Icon: SiPresto },
        ],
    },
    {
        title: 'Developer Tools',
        skills: [
            { name: 'Docker', Icon: SiDocker },
            { name: 'AWS', Icon: SiAmazonwebservices },
            { name: 'Google Cloud', Icon: SiGooglecloud },
            { name: 'GitHub', Icon: SiGithub },
            { name: 'Power BI', Icon: FaChartBar },
            { name: 'Tableau', Icon: SiTableau },
        ],
    },
    {
        title: 'AI & Machine Learning',
        skills: [
            { name: 'PyTorch', Icon: SiPytorch },
            { name: 'TensorFlow', Icon: SiTensorflow },
            { name: 'Hugging Face', Icon: SiHuggingface },
            { name: 'LangChain', Icon: SiLangchain },
            { name: 'LangGraph', Icon: FaProjectDiagram },
            { name: 'RAG', Icon: FaSearch },
        ],
    },
    {
        title: 'Data Visualisation',
        skills: [
            { name: 'Streamlit', Icon: SiStreamlit },
            { name: 'Matplotlib', Icon: FaChartLine },
            { name: 'Seaborn', Icon: FaChartArea },
            { name: 'Folium', Icon: SiFolium },
        ],
    },
];

const Skill = ({ name, Icon }) => (
    <li className='flex flex-col items-center gap-1.5 w-16 sm:w-[4.5rem]'>
        <div
            className={`w-11 h-11 sm:w-12 sm:h-12 bg-gray-800 flex items-center justify-center
                        transition-transform duration-300 hover:scale-105 motion-reduce:transition-none
                        motion-reduce:hover:scale-100 ${HEXAGON_CLIP}`}
        >
            <Icon className='w-5 h-5 sm:w-6 sm:h-6 text-gray-300' aria-hidden='true' />
        </div>
        <span className='text-[10px] sm:text-[11px] text-gray-400 text-center leading-tight'>{name}</span>
    </li>
);

const TechSkills = () => {
    return (
        <section className='bg-black text-white py-16 px-6' id='techSkills'>
            <div className='container mx-auto md:px-16 lg:px-24'>
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-10'>Technical Skills</h2>

                <div className='space-y-6'>
                    {skillGroups.map((group) => (
                        <div key={group.title}>
                            <h3 className='text-base font-bold text-transparent bg-clip-text
                                            bg-gradient-to-r from-green-400 to-blue-500 mb-3 text-center'>
                                {group.title}
                            </h3>
                            <ul className='flex flex-wrap justify-center gap-x-2 gap-y-3'>
                                {group.skills.map((skill) => (
                                    <Skill key={skill.name} {...skill} />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechSkills;
