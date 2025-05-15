import "@/styles/globals.css";

export const metadata = {
    title: "jieun 포트폴리오",
    description: "프론트엔드 개발자 박지은 포트폴리오 사이트",
    icons: {
        icon: '/favicon.ico',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body>{children}</body>
        </html>
    );
}
