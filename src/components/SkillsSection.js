'use client';

import {
    FaHtml5, FaCss3Alt, FaReact, FaGithub, FaSlack, FaJava
} from 'react-icons/fa';
import {
    SiTailwindcss, SiRedux, SiJquery, SiSpring, SiSpringboot,
    SiNotion, SiFigma, SiNextdotjs, SiVercel, SiOracle
} from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import { motion } from 'framer-motion';

export default function SkillsSection() {
    const categories = [
        {
            title: "FRONTEND",
            skills: [
                { icon: <FaReact />, name: "React" },
                { icon: <SiNextdotjs />, name: "Next.js" },
                { icon: <DiJavascript1 />, name: "JavaScript" },
                { icon: <FaHtml5 />, name: "HTML" },
                { icon: <FaCss3Alt />, name: "CSS" },
                { icon: <SiTailwindcss />, name: "Tailwind CSS" },
                { icon: <SiJquery />, name: "jQuery" },
                { icon: <SiRedux />, name: "Redux" },
            ],
        },
        {
            title: "BACKEND",
            skills: [
                { icon: <SiSpring />, name: "Spring" },
                { icon: <SiSpringboot />, name: "SpringBoot" },
                { icon: <FaJava/>, name: "Java" },
                { icon: <span className="text-lg">MVC</span>, name: "MVC" },
                { icon: <span className="text-lg">JPA</span>, name: "JPA" },
                { icon: <span className="text-lg">MyBatis</span>, name: "MyBatis" },
            ],
        },
        {
            title: "DATABASE",
            skills: [
                { icon: <SiOracle/>, name: "Oracle" },
            ],
        },
        {
            title: "TOOLS & OTHERS",
            skills: [
                { icon: <FaGithub />, name: "GitHub" },
                { icon: <SiFigma />, name: "Figma" },
                { icon: <SiNotion />, name: "Notion" },
                { icon: <FaSlack />, name: "Slack" },
                { icon: <SiVercel />, name: "Vercel" },
            ],
        },
    ];

    return (
        <section id="skills" className="bg-[#23486A] py-[60px] px-6">
            <div className="max-w-[1024px] mx-auto">
                <motion.h2
                    className="text-3xl font-bold text-white text-center pb-[50px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    SKILLS
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {categories.map((category, i) => (
                        <div key={i} className="flex flex-col h-full">
                            <h3 className="text-lg font-bold text-white text-center mb-3">
                                {category.title}
                            </h3>
                            <div className="border-2 border-gray-400 rounded-md p-6 shadow-sm hover:shadow-md transition flex-1">
                                <ul className="space-y-2 list-disc">
                                    {category.skills.map((skill, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-white">
                                            <span className="text-xl">{skill.icon}</span>
                                            <span>{skill.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
