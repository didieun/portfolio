'use client';

import { useEffect } from 'react';
import BangkooDetail from './projectDetails/BangkooDetail';
import YonoDetail from '@/components/projectDetails/YonoDetail';
import TurtleDetail from "@/components/projectDetails/TurtleDetail";
import ProjectDetail from "@/components/projectDetails/ProjectDetail";

export default function PreviewDialog({ project, onClose }) {
    // 화면 스크롤 방지
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    if (!project) return null;

    const renderComponent = () => {
        switch (project.component) {
            case 'YonoDetail':
                return <YonoDetail />;
            case 'BangkooDetail':
                return <BangkooDetail />;
            case 'TurtleDetail':
                return <TurtleDetail />;
            case 'ProjectDetail':
                return <ProjectDetail />;
            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
            <div className="bg-white rounded-lg w-[90vw] h-[90vh] p-6 relative shadow-lg flex flex-col">
                {/* 닫기 버튼 */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-xl text-gray-600 hover:text-black z-10"
                >
                    ✕
                </button>

                {/* 타이틀 */}
                <h3 className="text-2xl font-bold mb-4 pr-10">{project.title}</h3>

                {/* 본문만 스크롤 & 스크롤바 숨김 */}
                <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide">
                    {renderComponent()}
                </div>
            </div>
        </div>
    );
}
