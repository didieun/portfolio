'use client';

import Image from 'next/image';
import { useState } from 'react';
import {FaGithub, FaRegCaretSquareRight} from 'react-icons/fa';
import ImageViewerDialog from '../ImageViewerDialog';
import { FcRating, FcFinePrint, FcSupport, FcStackOfPhotos } from "react-icons/fc";

const images = [
    '/images/turtle-ui1.png',
    '/images/turtle-ui2.png',
    '/images/turtle-ui3.png',
    '/images/turtle-ui4.png',
    '/images/turtle-ui5.png',
    '/images/turtle-ui6.png',
];

export default function TurtleDetail() {
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
            <div className="flex flex-col md:flex-row items-start md:items-center">
                <Image
                    src="/images/project-turtle.png"
                    alt="YONO 배너"
                    width={350}
                    height={150}
                    className="mb-4 md:mb-0 md:mr-6 w-full md:w-auto"
                />

                <div className="text-left w-full">
                    <p className="mb-2">
                        <strong className="text-lg text-[#23486A]">
                            거북이의 꿈 - AI기반 거북목 자세 분석 프로그램
                        </strong>
                        <br />
                        <span className="text-gray-500">
                            2025.03.10 ~ 2025.03.18 / 참여인원: 총 6명
                        </span>
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
                        <a
                            href="https://github.com/AI-X-team-projects/turtle-dream-backend"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:text-gray-700"
                        >
                            <FaGithub className="mr-2" /> turtle-dream-backend 레포
                        </a>
                        <a
                            href="https://github.com/AI-X-team-projects/turtle-dream-AI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:text-gray-700"
                        >
                            <FaGithub className="mr-2" /> turtle-dream-AI 레포
                        </a>

                        <a
                            href="https://www.youtube.com/watch?v=XrJYZfyYSCc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:text-gray-700"
                        >
                            <FaRegCaretSquareRight className="mr-2" /> 거북이의꿈 시연 영상
                        </a>

                        <a
                            href="/docs/Turtle_Planning.pdf"
                            download
                            className="mt-2 px-4 py-2 bg-[#23486A] text-white rounded hover:bg-[#1f3d59] transition"
                        >
                            기획서 다운로드
                        </a>
                    </div>
                </div>
            </div>


            <hr className="mt-6 mb-6"/>

            {/* 프로젝트 소개 */}
            <div className="mb-6">
                <h4 className="flex items-center text-base font-semibold text-[#23486A] mb-2">
                    <FcRating className="mr-2" /> 프로젝트 소개
                </h4>
                <p className="text-sm leading-relaxed">
                    “AI 기반 거북목 자세 분석 시스템 개발”을 목표로, 카메라와 AI 비전 기술을 활용해 사용자의 앉은 자세를 실시간으로 분석하고 즉각 경고를 제공하는 프로그램입니다.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                    <li>실시간 자세 분석: 카메라를 통해 사용자의 목·어깨·척추 위치를 파악해 올바른 자세인지, 거북목인지 판단</li>
                    <li>경고 시스템: 잘못된 자세가 일정 시간 이상 지속되면 팝업 알림으로 경고</li>
                    <li>데이터 비교·피드백: 어제·오늘 또는 사용자가 선택한 날짜 간 자세 변화를 시각적 통계로 제공</li>
                </ul>
            </div>

            <div className="mb-6">
                <h4 className="text-base font-semibold text-[#23486A] mb-2">기술 스택</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>프론트엔드: React</li>
                    <li>백엔드: Python 3.9, Spring Boot</li>
                    <li>AI 서버: FastAPI (자세 분석 및 인페인팅 모듈)</li>
                    <li>데이터베이스: MongoDB</li>
                </ul>
            </div>

            <hr className="mb-6" />

            <div className="mb-6">
                <h4 className="flex items-center text-base font-semibold text-[#23486A] mb-2">
                    <FcFinePrint className="mr-2" /> 담당 업무
                </h4>
                <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                    <li><strong>기획:</strong> 서비스 흐름 설계 및 기능 명세 작성</li>
                    <li><strong>디자인:</strong> Figma 시안을 바탕으로 UI/UX 가이드 수립</li>
                    <li><strong>퍼블리싱:</strong> styled-components 및 React.js로 화면 레이아웃 구현</li>
                    <li><strong>공통 파일 정리:</strong> `common` 디렉토리에 재사용 컴포넌트·유틸 파일 구성</li>
                    <li><strong>theme.js 컴포넌트화:</strong> 전역 테마 설정을 `theme.js`로 모듈화하고 컴포넌트화 작업</li>
                </ul>
            </div>

            <hr className="mb-6" />

            <div className="mb-6">
                <h4 className="flex items-center text-base font-semibold text-[#23486A] mb-2">
                    <FcSupport className="mr-2" /> 트러블슈팅
                </h4>
                <div className="text-sm space-y-2 leading-relaxed">
                    <p><strong>문제:</strong> 코드 스타일 및 네이밍 컨벤션 불일치</p>
                    <p><strong>원인:</strong></p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>팀원마다 코드, 세미콜론, 공백 등이 제각각이었음</li>
                        <li>컴포넌트·훅·유틸 함수 명명 규칙이 문서화되지 않아 중복·혼용된 이름이 다수 발생</li>
                    </ul>
                    <p><strong>해결:</strong></p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Notion에 네이밍 가이드 문서화 (폴더 구조, 접두어·접미어 규칙 등)</li>
                        <li>코드 리뷰를 통해 스타일 가이드 공유</li>
                    </ul>
                </div>
            </div>

            <hr className="mb-6" />

            <div>
                <h4 className="flex items-center text-base font-semibold text-[#23486A] mb-4">
                    <FcStackOfPhotos className="mr-2" /> 작업 화면
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="relative w-full rounded shadow border border-neutral-300 overflow-hidden cursor-pointer"
                            style={{ aspectRatio: '3 / 2' }}
                            onClick={() => setSelectedImage(src)}
                        >
                            <Image
                                src={src}
                                alt={`turtle-ui-${i}`}
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
