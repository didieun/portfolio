'use client';

import Image from 'next/image';
import { useState } from 'react';
import {FaGithub, FaRegCaretSquareRight} from 'react-icons/fa';
import ImageViewerDialog from '../ImageViewerDialog';
import { FcRating, FcFinePrint, FcSupport, FcStackOfPhotos } from "react-icons/fc";

const images = [
    '/images/project-ui1.png',
    '/images/project-ui2.png',
    '/images/project-ui3.png',
];

export default function ProjectDetail() {
    const [selectedImage, setSelectedImage] = useState(null);

    // 선택된 이미지의 인덱스
    const currentIndex = selectedImage
        ? images.findIndex((src) => src === selectedImage)
        : -1;

    // 이전 이미지로 이동
    const handlePrev = () => {
        if (currentIndex > -1) {
            const prevIndex = (currentIndex - 1 + images.length) % images.length;
            setSelectedImage(images[prevIndex]);
        }
    };

    // 다음 이미지로 이동
    const handleNext = () => {
        if (currentIndex > -1) {
            const nextIndex = (currentIndex + 1) % images.length;
            setSelectedImage(images[nextIndex]);
        }
    };

    return (
        <div className="text-sm text-gray-800 leading-relaxed">
            <div className="flex">
                <Image
                    src={"/images/project-project.png"}
                    alt="YONO 배너"
                    width={350}
                    height={150}
                    className="mr-6 border"
                />

                <div className="text-left ">
                    <p className="mb-2">
                        <strong className="text-lg text-[#23486A]">
                            Next.js 활용한 Portfolio
                        </strong>
                    </p>

                    <div className="flex flex-col items-start space-y-2">
                        <a
                            href="https://github.com/AI-X-team-projects/turtle-dream-frontend"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:text-gray-700"
                        >
                            <FaGithub className="mr-2" /> turtle-dream-frontend 레포
                        </a>
                    </div>
                </div>
            </div>

            <hr className="mt-6 mb-6"/>

            {/* 프로젝트 소개 */}
            <div className="mb-6">
                <h4 className="flex items-center text-base font-semibold text-[#23486A] mb-2">
                    <FcRating className="mr-2"/>포트폴리오 소개
                </h4>
                <p>
                    프론트엔드 개발자로서의 역량을 보여주기 위해 직접 구현한 개인 포트폴리오 웹사이트입니다.<br/>
                    헤더 메뉴 클릭 또는 스크롤을 통해 각 섹션으로 자연스럽게 이동할 수 있도록 구성하였으며,<br/>
                    각 프로젝트 카드를 클릭하면 상세 정보를 볼 수 있는 다이얼로그가 나타나도록 구현했습니다.
                </p>
            </div>

            <div className="mb-6">
                <h4 className="text-base font-semibold text-[#23486A] mb-2">
                    주요 기능 및 특징
                </h4>
                <ul className="list-disc list-inside space-y-1">
                    <li className="font-bold">로고 타이핑 효과 커스텀 구현</li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;직접 만든 커스텀 훅을 활용해 메인 로고에 타이핑 애니메이션을 적용하여 사용자에게 인상적인 첫 인상을 전달합니다.</span>
                    <li className="font-bold">Framer Motion을 활용한 인터랙션</li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;각 섹션과 요소에 자연스럽게 등장하는 애니메이션을 적용하여 더 풍부한 사용자 경험(UI/UX) 을 제공합니다.</span>
                    <li className="font-bold">프로젝트 상세 확인 기능</li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;각 프로젝트 클릭 시 상세 설명과 작업 이미지가 포함된 다이얼로그가 열리도록 구현하였으며,
이미지 클릭 시 확대      미리보기 기능도 함께 제공합니다.</span>
                    <li className="font-bold">반응형 웹 디자인</li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;데스크탑, 태블릿, 모바일 등 다양한 화면 크기에 대응하는 반응형 UI로 어떤 환경에서도 편리하게 이용 가능합니다.</span>
                </ul>
            </div>

            <hr className="mb-6"/>

            {/* 작업 화면 */}
            <div>
                <h4 className="flex items-center text-base font-semibold text-[#23486A] mb-4">
                    <FcStackOfPhotos className="mr-2"/> 작업 화면
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="relative w-full rounded shadow border-neutral-400 overflow-hidden cursor-pointer"
                            style={{ aspectRatio: '3 / 2' }}
                            onClick={() => setSelectedImage(src)}
                        >
                            <Image
                                src={src}
                                alt={`yono-ui-${i}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
                {selectedImage && (
                    <ImageViewerDialog
                        src={selectedImage}
                        onClose={() => setSelectedImage(null)}
                        onPrev={handlePrev}
                        onNext={handleNext}
                    />
                )}
            </div>
        </div>
    );
}
