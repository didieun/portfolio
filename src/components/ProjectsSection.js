'use client';

import Image from 'next/image';
import { useState } from 'react';
import { projects } from '@/data/projects';
import PreviewDialog from './PreviewDialog';


export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            <section id="projects" className="bg-[#f9f9f9] py-[60px] px-6">
                <div className="max-w-[1024px] mx-auto">
                    <h2 className="text-3xl font-bold text-center pb-[20px]">Projects</h2>

                    <p className="text-md text-center text-gray-600 pb-[30px]">
                        프로젝트를 클릭하면 해당 프로젝트의 상세 내용을 확인할 수 있습니다.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-[180px] xs:h-[250px] sm:h-[400px] md:h-[270px] object-cover"
                                />
                                <div className="p-5">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="bg-[#23486A] text-white text-xs px-2 py-1 rounded"
                                            >
                                            {tech}
                                          </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedProject && (
                <PreviewDialog
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </>
    );
}
