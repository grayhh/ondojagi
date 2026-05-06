import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
    metadataBase: new URL("https://ondojagi.kr"),
    title: "온도자기 Ondojagi - Korean Pottery Studio",
    description: "A calm pottery studio that values the warmth of handmade work and the beauty of Korean tradition.",
    generator: "v0.app",
    icons: {
        icon: "/icon.svg",
    },
    openGraph: {
        title: "온도자기 Ondojagi - Korean Pottery Studio",
        description: "A calm pottery studio that values the warmth of handmade work and the beauty of Korean tradition.",
        url: "https://ondojagi.kr",
        siteName: "온도자기 Ondojagi",
        images: [
            {
                url: "/ondojagi.jpg",
                width: 1200,
                height: 630,
                alt: "온도자기 Ondojagi",
            },
        ],
        locale: "ko_KR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "온도자기 Ondojagi - Korean Pottery Studio",
        description: "A calm pottery studio that values the warmth of handmade work and the beauty of Korean tradition.",
        images: ["/ondojagi.jpg"],
    },
}
// </CHANGE>

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ko">
        <body className={`font-sans antialiased`}>
        {children}
        </body>
        </html>
    )
}
