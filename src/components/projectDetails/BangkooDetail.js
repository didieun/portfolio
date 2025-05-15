'use client';

import Image from 'next/image';
import { useState } from 'react';
import {FaGithub, FaRegCaretSquareRight } from 'react-icons/fa';
import ImageViewerDialog from '../ImageViewerDialog';
import { FcRating, FcFinePrint, FcSupport, FcStackOfPhotos } from "react-icons/fc";

const images = [
    '/images/bangkoo-ui1.png',
    '/images/bangkoo-ui2.png',
    '/images/bangkoo-ui3.png',
    '/images/bangkoo-ui4.png',
    '/images/bangkoo-ui5.png',
    '/images/bangkoo-ui6.png',
    '/images/bangkoo-ui7.png',
    '/images/bangkoo-ui8.png',
    '/images/bangkoo-ui9.png',
];

export default function YonoDetail() {
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
                    src={"/images/project-bangkoo.png"}
                    alt="YONO 배너"
                    width={350}
                    height={150}
                    className="mr-6"
                />

                <div className="text-left ">
                    <p className="mb-2">
                        <strong className="text-lg text-[#23486A]">
                            방꾸 – AI 기반 가구 배치 서비스
                        </strong>
                        <br />
                        <span className="text-gray-500">
                          2025.03.19 ~ 2025.04.30  / 참여인원: 총 5명
                        </span>
                    </p>

                    <div className="flex flex-col items-start space-y-2">
                        <a
                            href="https://github.com/AI-X-Bangkoo/Bangkoo-Frontend"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:text-gray-700"
                        >
                            <FaGithub className="mr-2" /> Bangkoo-Frontend 레포
                        </a>
                        <a
                            href="https://github.com/AI-X-Bangkoo/Bangkoo-Backend"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:text-gray-700"
                        >
                            <FaGithub className="mr-2" /> Bangkoo-Backend 레포
                        </a>

                        <a
                            href="https://github.com/AI-X-Bangkoo/Bangkoo-AI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:text-gray-700"
                        >
                            <FaGithub className="mr-2" /> Bangkoo-AI 레포
                        </a>

                        <a
                            href="https://www.youtube.com/watch?v=WQUKahTEBVA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:text-gray-700"
                        >
                            <FaRegCaretSquareRight className="mr-2" /> Bangkoo 영상
                        </a>

                        <a
                            href="/docs/Bangkoo_Planning.pdf"
                            download
                            className="px-4 py-2 bg-[#23486A] text-white rounded hover:bg-[#1f3d59] transition"
                        >
                            기획서 다운로드
                        </a>
                    </div>
                </div>
            </div>

            <hr className="mt-6 mb-6"/>

            <div className="mb-6">
                <h4 className="flex items-center text-base font-semibold text-[#23486A] mb-2">
                    <FcRating className="mr-2"/>프로젝트 소개
                </h4>
                <p>
                    방꾸!는 실제 방 사진 한 장만으로 기존 가구를 자동 인식하고, AI 추천 또는 직접 배치를 통해
                    가구 배치를 시뮬레이션할 수 있는 서비스입니다.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>내 방 사진 업로드</li>
                    <li>내방 가구 탐지</li>
                    <li>내가구 이동, 삭제</li>
                    <li>새로운 가구 추가, 배치</li>
                    <li>AI 가구 추천</li>
                </ul>
            </div>

            <div className="mb-6">
                <h4 className="text-base font-semibold text-[#23486A] mb-2">
                    기술 스택
                </h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>프론트엔드: React 18, Next.js, Tailwind CSS</li>
                    <li>백엔드: Java 17, Spring Boot 3, FastAPI (AI 서버)</li>
                    <li>AI: Grounding DINO, SAM2, Gemini 2.0 Flash</li>
                    <li>검색/임베딩: OpenAI GPT-4o, MongoDB Atlas 벡터 인덱스</li>
                    <li>인프라: AWS S3, Redis</li>
                </ul>
            </div>

            <hr className="mb-6"/>

            <div className="mb-6">
                <h4 className="flex items-center text-base font-semibold text-[#23486A] mb-2">
                    <FcFinePrint className="mr-2" /> 담당 업무
                </h4>

                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                        <strong>UI/UX 디자인 설계 및 퍼블리싱</strong><br/>
                        Figma 디자인 기반 컴포넌트 설계, styled-components 적용
                    </li>
                    <li>
                        <strong>프론트엔드 아키텍처</strong><br/>
                        컴포넌트 분리, Redux 상태 관리, 검색 API
                    </li>
                    <li>
                        <strong>튜토리얼 온보딩 시스템</strong><br/>
                        단계별 하이라이트 로직 및 툴팁 구현, 스크롤/포커스 제어
                    </li>
                </ul>
            </div>

            <hr className="mb-6"/>

            <div className="mb-6">
                <h4 className="flex items-center text-base font-semibold text-[#23486A] mb-2">
                    <FcSupport className="mr-2" /> 트러블슈팅
                </h4>
                <ul className="list-disc list-inside space-y-6">
                    {/* 문제 1 */}
                    <li>
                        <strong>문제 1: 검색 시 DB에 중복 저장</strong>
                        <ul className="list-none ml-6 space-y-1">
                            <li><strong>원인:</strong> {`FormData.append("userId", userId) 와 API 파라미터 중복 전달`}</li>
                            <li><strong>해결:</strong> {`FormData.append 제거 → searchByImage(formData, userId) 로 단일 전달, 백엔드 중복 처리 로직 보완`}</li>
                        </ul>
                    </li>

                    {/* 문제 2 */}
                    <li>
                        <strong>문제 2: /search 페이지 진입 시 검색 2회 실행</strong>
                        <ul className="list-none ml-6 space-y-1">
                            <li><strong>원인:</strong> SearchInputComponent 에서 navigate 후, SearchPage useEffect 에서 API 재호출</li>
                            <li><strong>해결:</strong> SearchInputComponent 에선 API 호출 없이 navigate 만, SearchPage 에선 location.search 변화로 한 번만 실행</li>
                        </ul>
                    </li>

                    {/* 문제 3 */}
                    <li>
                        <strong>문제 3: 검색 시 마지막 글자만 저장</strong>
                        <ul className="list-none ml-6 space-y-1">
                            <li><strong>원인:</strong> input value 를 Redux 상태에만 의존하여 반영 타이밍 지연</li>
                            <li><strong>해결:</strong> useState 로 inputValue 별도 관리 → onChange 에서 setInputValue & dispatch(setKeyword) 동시 실행</li>
                        </ul>
                    </li>

                    {/* 문제 4 */}
                    <li>
                        <strong>문제 4: 비로그인 최근검색어가 다나오는 현상 </strong>
                        <ul className="list-none ml-6 space-y-2">
                            <li>
                                <strong>원인:</strong> 비로그인 시 userId가 anonymous로 전달되어
                                모든 비회원의 최근검색어가 출력
                            </li>
                            <li>
                                <strong>해결:</strong>
                                <ul className="list-disc list-inside ml-6">
                                    <li>
                                        프론트엔드에서 비로그인 접속 시 <code>UUID</code>를 생성해
                                        <code>localStorage</code>에 저장
                                    </li>
                                    <li>
                                        검색 API 호출 시 userId를
                                        <code>{`"anonymous-" + UUID`}</code> 형태로 전달하도록 수정
                                    </li>
                                    <li>
                                        이를 통해 각 비로그인 디바이스마다 고유한 anonymous ID를 부여,
                                        해당 디바이스의 최근 검색어만 조회되도록 분리 저장 구현
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>


            <hr className="mb-6"/>

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
                                alt={`bangkoo-ui-${i}`}
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
