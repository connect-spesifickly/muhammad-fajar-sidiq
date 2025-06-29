import { Container } from "@/app/components/container";
import Image from "next/image";
import * as React from "react";

export function TechStack() {
  const techStack = [
    {
      name: "Next.js",
      src: "devicon-nextjs-original-wordmark colored scale-125",
    },
    {
      name: "Tailwind CSS",
      src: "devicon-tailwindcss-plain-wordmark colored scale-150",
    },
    { name: "TypeScript", src: "devicon-typescript-plain colored" },
    { name: "JavaScript", src: "devicon-javascript-plain colored" },
    { name: "Node.js", src: "devicon-nodejs-plain-wordmark colored" },
    { name: "Express", src: "devicon-express-original-wordmark colored" },
    { name: "PostgreSQL", src: "devicon-postgresql-plain-wordmark colored" },
    { name: "Git", src: "devicon-git-plain-wordmark colored scale-90" },
    {
      name: "GitHub",
      src: "devicon-github-original-wordmark colored scale-75",
    },
    { name: "Vercel", src: "devicon-vercel-original-wordmark colored" },
    {
      name: "Supabase",
      src: "devicon-supabase-plain-wordmark colored scale-125",
    },
  ];

  return (
    <div className="bg-gray-100 ">
      <Container className="pt-10 md:pt-20">
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-4xl italic font-light text-center text-black">
            Exploring Tech Stack
          </h2>
          <h2 className="text-4xl font-bold text-center text-black">
            Behind My Project
          </h2>
        </div>
        <div className="w-full py-6 mt-2 overflow-hidden">
          <div className="flex gap-10 min-w-max animate-marquee ">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="p-3 bg-white shadow-md rounded-xl"
              >
                <div className="w-[128px] h-[80px] flex items-center justify-center">
                  <i className={`${tech.src} `} style={{ fontSize: "88px" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
