import { Container } from "@/components/ui/container";

export function HeroPage() {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[80vh] h-screen flex-col  justify-center py-10 md:py-32 lg:flex-row">
        <div className="flex flex-col col-span-1 gap-9 justify-center items-start lg:gap-0">
          <div className="px-16 py-16 mt-14 bg-black rounded-full md:mt-0"></div>
          <h1 className="mt-3 text-5xl font-bold lg:w-[40vw] ">
            Hello! I&apos;m Muhammad Fajar Sidiq
          </h1>
        </div>
        <div className="flex flex-col col-span-1 justify-center items-start font-light">
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
