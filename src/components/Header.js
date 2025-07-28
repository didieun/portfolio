'use client';

import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi'; // 햄버거/닫기 아이콘

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false); // 메뉴 클릭 시 닫기
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
                ${isScrolled ? 'bg-white shadow' : 'bg-transparent'}`}
        >
            <div className="max-w-5xl mx-auto px-4 py-5 flex justify-between items-center">
                <div className="text-2xl font-bold">JIEUN</div>

                {/* 데스크탑 메뉴 */}
                <nav className="hidden md:flex space-x-5 text-sm font-medium text-gray-700">
                    <Link to="home" smooth duration={500} className="cursor-pointer hover:text-blue-500">HOME</Link>
                    <Link to="about" smooth duration={500} offset={-55} className="cursor-pointer hover:text-blue-500">ABOUT</Link>
                    <Link to="skills" smooth duration={500} offset={-55} className="cursor-pointer hover:text-blue-500">SKILLS</Link>
                    <Link to="projects" smooth duration={500} className="cursor-pointer hover:text-blue-500">PROJECTS</Link>
                    <Link to="career" smooth duration={500} className="cursor-pointer hover:text-blue-500">CAREER</Link>
                </nav>

                {/* 모바일 햄버거 아이콘 */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* 모바일 메뉴 */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow px-4 pb-4 pt-2 space-y-2 text-sm font-medium text-gray-700">
                    <Link to="home" smooth duration={500} onClick={handleLinkClick} className="block cursor-pointer hover:text-blue-500">HOME</Link>
                    <Link to="about" smooth duration={500} offset={-55} onClick={handleLinkClick} className="block cursor-pointer hover:text-blue-500">ABOUT</Link>
                    <Link to="skills" smooth duration={500} offset={-55} onClick={handleLinkClick} className="block cursor-pointer hover:text-blue-500">SKILLS</Link>
                    <Link to="projects" smooth duration={500} onClick={handleLinkClick} className="block cursor-pointer hover:text-blue-500">PROJECTS</Link>
                    <Link to="career" smooth duration={500} onClick={handleLinkClick} className="block cursor-pointer hover:text-blue-500">CAREER</Link>
                </div>
            )}
        </header>
    );
}
