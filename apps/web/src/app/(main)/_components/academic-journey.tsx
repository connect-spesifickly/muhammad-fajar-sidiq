import { Container } from "@/components/ui/container";
import Image from "next/image";
import * as React from "react";

export function AcademicJourney() {
  return (
    <div className="pt-10 bg-gray-100 md:pt-20">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center ">
            <h2 className="text-4xl italic font-light text-center">
              {" "}
              My Academic{" "}
            </h2>
            <h2 className="text-4xl font-bold text-center">Journey</h2>
          </div>
          <div className="grid gap-6 py-10 md:grid-cols-2">
            <div className="flex items-center justify-between w-full p-6 bg-white rounded-lg shadow-md">
              <div className="">
                <h3 className="text-xl font-semibold text-gray-800">
                  STID Al-Hadid
                </h3>
                <p className="text-gray-600">Bachelor of Social Science</p>
                <p className="text-sm text-gray-500">2020 - 2024</p>
              </div>
              <div className="relative w-16 h-16">
                <Image
                  src="/stid-logo.jpg"
                  alt="STID AL-HADID"
                  layout="fill"
                  className="object-contain scale-150"
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-6 p-6 bg-white rounded-lg shadow-md">
              <div className="">
                <h3 className="text-xl font-semibold text-gray-800">
                  Purwadhika School
                </h3>
                <p className="text-gray-600">Fullstack Web Development</p>
                <p className="text-sm text-gray-500">2024 - 2025</p>
              </div>
              <div className="relative w-16 h-16">
                <Image
                  src="/purwadhika-logo.svg"
                  alt="Purwadhika School"
                  layout="fill"
                  className="object-contain w-2 h-4"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
