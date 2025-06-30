import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Muhammad Fajar Sidiq - Full Stack Developer Portfolio",
  description:
    "Full Stack Developer with expertise in React, Node.js, TypeScript, and modern web technologies. View my projects, experience, and technical skills.",
  keywords: [
    "Muhammad Fajar Sidiq",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Muhammad Fajar Sidiq" }],
  creator: "Muhammad Fajar Sidiq",
  publisher: "Muhammad Fajar Sidiq",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://muhammad-fajar-sidiq.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Muhammad Fajar Sidiq - Full Stack Developer Portfolio",
    description:
      "Full Stack Developer with expertise in React, Node.js, TypeScript, and modern web technologies. View my projects, experience, and technical skills.",
    url: "https://muhammad-fajar-sidiq.vercel.app",
    siteName: "Muhammad Fajar Sidiq Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Fajar Sidiq - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Fajar Sidiq - Full Stack Developer Portfolio",
    description:
      "Full Stack Developer with expertise in React, Node.js, TypeScript, and modern web technologies.",
    images: ["/og-image.png"],
    creator: "@muhammad_fajar_sidiq",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  //   yahoo: "your-yahoo-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
