'use client';

import Image from 'next/image';
import {
    AiOutlineLeft,
    AiOutlineRight,
    AiOutlineClose,
} from 'react-icons/ai';

export default function ImageViewerDialog({ src, onClose, onPrev, onNext }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4">
            {/* 이미지 + 버튼 래퍼 */}
            <div className="relative w-full max-w-[800px] h-[60vh] sm:h-[70vh] md:h-[600px] flex items-center justify-center">
                {/* 닫기 버튼 */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white text-2xl sm:text-3xl z-10 hover:scale-110 transition"
                >
                    <AiOutlineClose />
                </button>

                {/* 이전 버튼 (이미지 내부 왼쪽) */}
                <button
                    onClick={onPrev}
                    className="absolute left-4 text-black text-2xl sm:text-3xl z-10 hover:scale-110 transition"
                >
                    <AiOutlineLeft />
                </button>

                {/* 다음 버튼 (이미지 내부 오른쪽) */}
                <button
                    onClick={onNext}
                    className="absolute right-4 text-black text-2xl sm:text-3xl z-10 hover:scale-110 transition"
                >
                    <AiOutlineRight />
                </button>

                {/* 이미지 */}
                <div className="relative w-full h-full">
                    <Image
                        src={src}
                        alt="preview"
                        fill
                        className="rounded object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                    />
                </div>
            </div>
        </div>
    );
}
