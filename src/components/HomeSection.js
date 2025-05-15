'use client';

import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import Image from 'next/image';

export default function HomeSection() {
    return (
        <section id="home" className="h-screen flex flex-col justify-center items-center text-center pt-16">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <p className="text-5xl font-bold mb-4">
                    <Typewriter
                        words={['Portfolio']}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </p>
                <p className="text-xl text-gray-500 mb-7">프론트엔드 개발자 박지은 입니다.</p>
            </motion.h1>

            <Link to="about" smooth={true} duration={500} offset={-55} className="cursor-pointer">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="mt-4 opacity-80"
                >
                    <Image
                        src="/images/arrow-down.png"
                        alt="down arrow"
                        width={40}
                        height={40}
                        priority
                    />
                </motion.div>
            </Link>
        </section>
    );
}
