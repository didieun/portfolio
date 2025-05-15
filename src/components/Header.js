'use client';

import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={
                `fixed top-0 left-0 w-full z-50 transition-all duration-300 
                ${isScrolled ? 'bg-white shadow' : 'bg-transparent'}`
            }
        >
            <div className="max-w-5xl mx-auto px-4 py-5 flex justify-between items-center">
                <div className="text-2xl font-bold">JIEUN</div>
                <nav className="space-x-5 text-sm font-medium text-gray-700">
                    <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">HOME</Link>
                    <Link to="about" smooth={true} duration={500} offset={-55} className="cursor-pointer hover:text-blue-500">ABOUT</Link>
                    <Link to="skills" smooth={true} duration={500} offset={-55} className="cursor-pointer hover:text-blue-500">SKILLS</Link>
                    <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">PROJECTS</Link>
                    <Link to="career" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">CAREER</Link>
                </nav>
            </div>
        </header>
    );
}
