import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from 'react-icons/ai';

export default function ImageViewerDialog({ src, onClose, onPrev, onNext }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            {/* 이미지 + 버튼 래퍼 */}
            <div className="relative w-[800px] h-[600px] flex items-center">
                {/* 이전 버튼: 이미지 왼쪽 바깥 */}
                <button
                    onClick={onPrev}
                    className="absolute left-[-40px] text-white text-3xl z-10 hover:scale-110 transition"
                >
                    <AiOutlineLeft />
                </button>

                {/* 닫기 버튼: 이미지 위쪽 중앙 */}
                <button
                    onClick={onClose}
                    className="absolute top-[-40px] right-0 text-white text-3xl z-10 hover:scale-110 transition"
                >
                    <AiOutlineClose />
                </button>

                {/* 이미지 컨테이너: 고정 크기 */}
                <div className="relative w-full h-full">
                    <Image
                        src={src}
                        alt="preview"
                        fill
                        className="rounded object-contain"
                    />
                </div>

                {/* 다음 버튼: 이미지 오른쪽 바깥 */}
                <button
                    onClick={onNext}
                    className="absolute right-[-40px] text-white text-3xl z-10 hover:scale-110 transition"
                >
                    <AiOutlineRight />
                </button>
            </div>
        </div>
    );
}
