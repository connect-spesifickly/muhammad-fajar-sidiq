import { Container } from "@/components/ui/container";
import Image from "next/image";
import * as React from "react";

export interface IExperienceProps {}

export function MyExperiences(props: IExperienceProps) {
  return (
    <section className="bg-gray-100 ">
      <Container className="flex flex-col items-center justify-center pt-10 pb-9 md:pt-20 md:pb-19">
        <h1 className="text-4xl italic font-light">My Experience</h1>
        <div className="flex flex-col gap-10 py-10">
          <div className="flex items-start gap-5">
            <div className="relative w-[66px] h-[66px] p-3 bg-white shadow-md rounded-xl">
              <Image
                src={"/yayasan-al-kahfi-logo.jpeg"}
                width={100}
                height={100}
                alt={""}
                className="object-cover "
              />
            </div>
            <div className="">
              <h3 className="text-lg font-bold text-black">Yayasan Al-Kahfi</h3>
              <h4 className="text-sm text-gray-500">Community Volunteer</h4>
              <h4 className="text-sm text-gray-500">2020 - 2025</h4>
            </div>
          </div>
        </div>
      </Container>{" "}
    </section>
  );
}
