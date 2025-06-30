import { Container } from "@/components/ui/container";
import Image from "next/image";

export function HeroPage() {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[80vh] h-screen flex-col  justify-center py-10 md:py-32 lg:flex-row">
        <div className="flex flex-col items-start justify-center col-span-1 gap-9 lg:gap-0">
          <div className="flex justify-center mt-14 md:mt-0">
            <Image
              src="/portofolio-photo.jpeg"
              alt="Muhammad Fajar Sidiq"
              width={80}
              height={80}
              className="object-cover rounded-full w-36 h-36"
            />
          </div>
          <h1 className="mt-3 text-5xl font-bold lg:w-[40vw] ">
            Hello! I&apos;m Muhammad Fajar Sidiq
          </h1>
        </div>
        <div className="flex flex-col items-start justify-center col-span-1 font-light">
          <h3 className="mt-3 text-4xl">
            Fullstack Software Engineer in Indonesia.
          </h3>
          <h3 className="mt-3 text-lg text-gray-500">
            Passionate Creating Great Experiences for Digital Product
          </h3>
        </div>
      </div>
    </Container>
  );
}
