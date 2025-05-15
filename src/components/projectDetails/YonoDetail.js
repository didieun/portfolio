'use client';

import Image from 'next/image';
import { useState } from 'react';
import {FaGithub } from 'react-icons/fa';
import ImageViewerDialog from '../ImageViewerDialog';
import { FcRating, FcFinePrint, FcSupport, FcStackOfPhotos } from "react-icons/fc";

const images = [
    '/images/yono-ui1.png',
    '/images/yono-ui2.png',
    '/images/yono-ui3.png',
    '/images/yono-ui4.png',
    '/images/yono-ui5.png',
    '/images/yono-ui6.png',
    '/images/yono-ui7.png',
    '/images/yono-ui8.png',
    '/images/yono-ui9.png',
    '/images/yono-ui10.png',
    '/images/yono-ui11.png',
    '/images/yono-ui12.png',
    '/images/yono-ui13.png',
    '/images/yono-ui14.png',
    '/images/yono-ui15.png',
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
                    src={"/images/project-yono.png"}
                    alt="YONO 배너"
                    width={350}
                    height={150}
                    className="mr-6"
                />

                <div className="text-left ">
                    <p className="mb-2">
                        <strong className="text-lg text-[#23486A]">
                            YONO – 절약 소비 유도 웹 플랫폼
                        </strong>
                        <br />
                        <span className="text-gray-500">
                          2024.10.05 ~ 2025.02.10 / 참여인원: 총 5명
                        </span>
                    </p>

                    <div className="flex flex-col items-start space-y-2">
                        <a
                            href="https://github.com/didieun/yono-main"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:text-gray-700"
                        >
                            <FaGithub className="mr-2" /> yono-main 레포
                        </a>
                        <a
                            href="https://github.com/didieun/yono-admin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:text-gray-700"
                        >
                            <FaGithub className="mr-2" /> yono-admin 레포
                        </a>
                        <a
                            href="/docs/YONO_Planning.pdf"
                            download
                            className="px-4 py-2 bg-[#23486A] text-white rounded hover:bg-[#1f3d59] transition"
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
                    <FcRating className="mr-2"/>프로젝트 소개
                </h4>
                <p>
                    YONO 프로젝트는 건강한 소비 습관 형성을 목표로, 사용자가 자신의 소비 패턴을 분석하고 절약 목표를 시각적으로 확인할 수 있는 웹 플랫폼입니다.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>소비 데이터를 기반으로 일별·월별 통계를 제공하고, 절약 달성 시 뱃지와 랭킹 시스템으로 동기 부여</li>
                    <li>커뮤니티와 랭킹 경쟁 요소를 통해 사용자 간 경험을 공유하고, 즐겁게 절약 활동에 참여하도록 설계</li>
                </ul>
            </div>

            {/* 개발 환경 */}
            <div className="mb-6">
                <h4 className="text-base font-semibold text-[#23486A] mb-2">
                    개발 환경
                </h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>React v18.3.1</li>
                    <li>JDK 17</li>
                    <li>Oracle 11g</li>
                    <li>Spring Boot v3.1.9</li>
                </ul>
            </div>

            {/* 사용 도구 */}
            <div className="mb-6">
                <h4 className="text-base font-semibold text-[#23486A] mb-2">
                    사용 도구
                </h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>Visual Studio Code</li>
                    <li>Figma</li>
                    <li>Notion</li>
                </ul>
            </div>

            {/* 사용 기술 */}
            <div className="mb-6">
                <h4 className="text-base font-semibold text-[#23486A] mb-2">
                    사용 기술
                </h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>언어: Java, JavaScript</li>
                    <li>프레임워크: React, Spring Boot, JPA, Spring Security</li>
                    <li>라이브러리: Material-UI, Styled-Components, Redux, Nivo</li>
                    <li>형상관리: Git</li>
                    <li>데이터베이스: Oracle 11g</li>
                </ul>
            </div>

            <hr className="mb-6"/>

            {/* 담당 업무 */}
            <div className="mb-6">
                <h4 className="flex items-center text-base font-semibold text-[#23486A] mb-2">
                    <FcFinePrint className="mr-2" /> 담당 업무
                </h4>

                {/* 기여도 요약 */}
                <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                    <li><span className="font-bold">YONO 기획</span> (기여도 80%)</li>
                    <li><span className="font-bold">프론트엔드 초기 세팅</span> (기여도 60%)</li>
                    <li><span className="font-bold">소비 챌린지 → 뱃지 랭킹 페이지</span> (프론트, 백 기여도 100%)</li>
                    <li><span className="font-bold">소비 패턴 분석 → 일별 통계</span> (프론트, 백 기여도 100%)</li>
                    <li><span className="font-bold">관리자 페이지 개발</span> (기여도 90%)</li>
                    <li><span className="font-bold">디자인 / 프론트엔드 전반</span> (기여도 100%): 회원관리, 카드관리, 커뮤니티 관리, 공지사항 관리</li>
                    <li><span className="font-bold">백엔드</span> (기여도 100%): 회원관리, 카드 리스트 조회, 커뮤니티 관리, 공지사항 관리</li>
                </ul>

                {/* 프론트엔드 설계 */}
                <p className="font-semibold mb-1">프론트엔드 설계</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                        디자인 시스템 아키텍처 설계: Figma 시안의 컬러·폰트·간격 등 스타일 속성을&nbsp;
                        <code>theme.js</code>에 통합 관리하여, 변경 시 테마 파일만 수정하면
                        전역 스타일이 자동 반영되도록 구조화
                    </li>
                    <li>
                        공통 UI 요소(Dialog, Input, Select, Button 등)를&nbsp;
                        <code>common</code> 폴더에 Common 컴포넌트로 추출하고,&nbsp;
                        <code>props</code> 기반으로 색상·너비·높이·텍스트를 제어할 수 있게 설계해
                        재사용성과 일관성 확보
                    </li>
                    <li>
                        화면별 컴포넌트 구조 설계:
                        <ul className="list-disc list-inside ml-6 space-y-1">
                            <li>
                                소비 챌린지 → 뱃지 랭킹 페이지: 캘린더·차트·랭킹 리스트를 각기 독립
                                컴포넌트로 분리해, 데이터 로딩·렌더링·뷰 전환 책임을 명확히 분리
                            </li>
                            <li>
                                일별 통계 페이지: 카드 사용 내역 조회 컴포넌트와 목표 달성 뱃지 뷰
                                로직을 서비스 호출 컴포넌트로 분리하여, UI 변경 시 로직 영향 최소화
                            </li>
                            <li>
                                각 페이지에서 REST API 스펙에 맞춘 인터페이스 설계로, Axios 사용
                            </li>
                        </ul>
                    </li>
                </ul>

                {/* 백엔드 설계 */}
                <p className="font-semibold mt-4 mb-1">백엔드 설계</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                        3계층(Spring MVC) 아키텍처 설계: Controller → Service →
                        Repository(Dao) 계층으로 책임 분리하여, 비즈니스 로직 변경 시
                        Controller·Repository 레이어에 미치는 영향을 최소화
                    </li>
                    <li>
                        공통 응답 DTO 설계: Service 레이어에서 Entity → DTO 변환하여, Entity
                        노출을 방지하고 프론트엔드 호출 시 필요한 데이터만 전달하게 구성
                    </li>
                    <li>
                        데이터베이스 및 엔티티 관계 설계:
                        <ul className="list-disc list-inside ml-6 space-y-1">
                            <li>
                                일별 소비 통계 테이블: <code>CardHistoryEntity</code>에 사용 승인번호·날짜·금액·업종 등 컬럼 매핑, <code>@ManyToOne</code>으로 <code>UserCardEntity</code>와 관계 설정
                            </li>
                            <li>
                                뱃지 랭킹 테이블: 전월·저저번달 소비 금액 비교 후 뱃지 부여 로직을 반영할 수 있도록 <code>BadgeEntity</code>에 유저·월·뱃지개수 필드 설계, JPA 인덱스 추가로 효율적 조회 보장
                            </li>
                            <li>
                                회원·카드·커뮤니티·공지사항 관리 테이블: 각 관리자 기능별로 검색·페이징·이미지 첨부 등을 고려해 테이블 스키마 및 커스텀 쿼리 설계
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>


            <hr className="mb-6"/>

            {/* 트러블슈팅 */}
            <div className="mb-6">
                <h4 className="flex items-center text-base font-semibold text-[#23486A] mb-2">
                    <FcSupport className="mr-2" /> 트러블슈팅
                </h4>
                <ul className="list-disc list-inside space-y-4">
                    {/* 라우팅 충돌 문제 */}
                    <li>라우팅 충돌 문제
                        <ul className="list-none ml-6 space-y-1">
                            <li>
                                <strong>문제:</strong> 페이지 새로고침 시 API 요청이 404 또는 잘못된 경로로 연결되어 데이터가 불러와지지 않음
                            </li>
                            <li>
                                <strong>원인:</strong> React Router 경로와 Spring Boot의 API 매핑 주소가 동일하여 충돌 발생
                            </li>
                            <li>
                                <strong>해결:</strong> <code>setupProxy.js</code>에서 프록시 경로와 React 라우터 path를 분리해 지정하여 충돌 제거
                            </li>
                        </ul>
                    </li>

                    {/* 팀 협업 스타일 차이 */}
                    <li>팀 협업 스타일 차이
                        <ul className="list-none ml-6 space-y-1">
                            <li>
                                <strong>문제:</strong> 팀원 간 코드 스타일, API 호출 방식이 달라 초기 통합 과정에서 비효율 발생
                            </li>
                            <li>
                                <strong>원인:</strong> 각자 다른 구현 습관과 라이브러리 사용 방식으로 코드 가독성 및 유지보수성 저하
                            </li>
                            <li>
                                <strong>해결:</strong> 정기적인 코드 리뷰를 통해 스타일 가이드 공유, 비효율적 API 호출 패턴 리팩터링, 원활한 커뮤니케이션 강화
                            </li>
                        </ul>
                    </li>
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
