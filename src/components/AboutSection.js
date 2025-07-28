'use client';

import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiGithub } from 'react-icons/fi';
import Image from 'next/image';

export default function AboutSection() {
    return (
        <section
            id="about"
            className="min-h-[600px] bg-gray-100 text-black flex items-start px-6 md:px-20 py-[60px]"
        >
            <div className="max-w-[1024px] w-full text-left mx-auto">
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-center pb-[60px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    ABOUT ME
                </motion.h2>

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                    <motion.div
                        className="flex flex-col items-center gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <Image
                            src="/images/profile.png"
                            alt="Profile"
                            width={200}
                            height={200}
                            className="rounded-full object-cover"
                        />
                        <a
                            href="/박지은-이력서.pdf"
                            download
                            className="bg-[#23486A] hover:bg-[#1d3b5a] text-white px-4 py-2 rounded-md text-sm transition"
                        >
                            이력서 다운로드
                        </a>
                    </motion.div>

                    <div className="flex-1">
                        <motion.h2
                            className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 leading-snug sm:leading-normal"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                        >
                            안녕하세요.<br />저는 프론트엔드 개발자 박지은입니다.
                        </motion.h2>

                        <motion.p
                            className="text-sm sm:text-base font-medium leading-relaxed mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                        >
                            끊임없이 성장하고 도전하는 것을 즐기며, 사용자 중심의 UI/UX를 구현하는 데 열정을 가진 프론트엔드 개발자입니다.<br />
                            React.js와 Next.js 등을 활용한 모던 웹 개발에 자신 있으며,<br />
                            협업과 효율적인 코드 구조를 통해 팀과 함께 성장하는 개발자가 되고자 합니다.
                        </motion.p>

                        <motion.div
                            className="flex flex-col gap-3 text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <div className="flex items-center gap-2">
                                <FiPhone className="text-[#23486A]" />
                                <span>010-6399-7666</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiMail className="text-[#23486A]" />
                                <span>didieun531@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2 break-all">
                                <FiGithub className="text-[#23486A]" />
                                <a
                                    href="https://github.com/didieun"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    https://github.com/didieun
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
