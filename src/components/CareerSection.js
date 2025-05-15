'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { experiences } from '@/data/experiences';
import PreviewDialog from '@/components/PreviewDialog';

export default function CareerSection() {
    const [openDialogIndex, setOpenDialogIndex] = useState(null);

    return (
        <section id="career" className="bg-white py-[60px] px-6">
            <div className="max-w-[1024px] mx-auto">
                <motion.h2
                    className="text-3xl font-bold text-center pb-[50px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    CAREER
                </motion.h2>

                <div className="space-y-16 flex flex-col items-center">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col md:flex-row md:items-start items-center gap-8 w-full max-w-[900px]"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                        >
                            <div className="relative w-[120px] h-[120px] bg-white border border-gray-300 rounded-full overflow-hidden flex items-center justify-center">
                                <div className="relative w-[80%] h-[80%]">
                                    <Image
                                        src={exp.logo}
                                        alt="company logo"
                                        fill
                                        sizes="96px"
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-[#23486A]">{exp.company}</h3>
                                <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                                <p className="text-sm text-gray-600 mb-1">{exp.introduction}</p>
                                <p
                                    className="text-sm text-gray-600 mb-4"
                                    dangerouslySetInnerHTML={{ __html: exp.industry }}
                                />
                                <p className="text-sm text-gray-600 mb-1"><strong>담당직무: </strong>{exp.position}</p>
                                <p
                                    className="text-sm text-gray-600 mb-4"
                                    dangerouslySetInnerHTML={{ __html: exp.detail }}
                                />


                                <ul className="border-l-2 border-gray-300 pl-4 space-y-2">
                                    {exp.projects.map((project, idx) => (
                                        <li key={idx} className="relative pl-2 text-sm text-gray-700">
                                            <div className="absolute -left-[10px] top-[6px] w-2 h-2 bg-[#23486A] rounded-full" />
                                            <div className="flex flex-col items-start justify-between">
                                                <span>{project.title}</span>
                                                {project.preview && (
                                                    <button
                                                        onClick={() => setOpenDialogIndex(i + '-' + idx)}
                                                        className="text-xs text-blue-500 underline hover:text-blue-700"
                                                    >
                                                        화면 보기
                                                    </button>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <PreviewDialog
                isOpen={openDialogIndex !== null}
                onClose={() => setOpenDialogIndex(null)}
                imageSrc={(() => {
                    if (!openDialogIndex) return '';
                    const [expIdx, projIdx] = openDialogIndex.split('-').map(Number);
                    return experiences[expIdx]?.projects[projIdx]?.preview || '';
                })()}
            />
        </section>
    );
}
