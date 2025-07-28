'use client';

export default function Footer() {
    return (
        <div className="mt-12">
            {/* 상단 메시지 영역 */}
            <div className="py-12 px-4 sm:px-6 text-center">
                <p className="text-xl sm:text-2xl font-bold text-black leading-relaxed">
                    포트폴리오를 봐주셔서 감사합니다.<br />
                    더 나은 개발자가 되기 위해 오늘도 성장 중입니다.
                </p>

                <div className="mt-8">
                    <a
                        href="mailto:didieun531@gmail.com"
                        className="inline-block bg-[#23486A] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#1d3b5a] transition"
                    >
                        Send Email
                    </a>
                </div>
            </div>

            {/* 하단 고정 영역 */}
            <footer className="bg-black text-white text-center py-6 text-sm sm:text-base px-4">
                ⓒ 2025 Park JI-Eun Portfolio | All Rights Reserved.
            </footer>
        </div>
    );
}
