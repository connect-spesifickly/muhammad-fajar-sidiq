import * as React from "react";
import { HeroPage } from "./_components/hero";
import { MyExperiences } from "./_components/experiences";
import { MyProjects } from "./_components/projects";
import { TechStack } from "./_components/tech-stack";
import { AcademicJourney } from "./_components/academic-journey";
import { Contact } from "./_components/contact";

export default function Home() {
  return (
    <div className="">
      <HeroPage />
      <MyExperiences />
      <MyProjects />
      <TechStack />
      <AcademicJourney />
      <Contact />
    </div>
  );
}
