import { Container } from "@/app/components/container";
import * as React from "react";

export function MyProjects() {
  return (
    <div className="bg-gray-100">
      <Container>
        <div className="px-6">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl italic font-light text-black">My Latest</h2>
            <h2 className="text-4xl font-bold text-black">Projects</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-5 transition duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
              <div className="relative w-full h-[48px] rounded-lg overflow-hidden "></div>
              <h3 className="mt-4 text-xl font-semibold">Blibli Clone</h3>
              <p className="mt-2 text-gray-600">
                Frontend clone from blibli website. Frontend Feature include
                homepage (listing and searching), authentication page, detail
                page (carousel and some product and seller information).
              </p>
            </div>
            <div className="p-5 transition duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
              <div className="relative w-full h-[48px] rounded-lg overflow-hidden "></div>
              <h3 className="mt-4 text-xl font-semibold">Workase</h3>
              <p className="mt-2 text-gray-600">
                Job board web app that connects jobseekers and employers.
                Feature include homepage, authentication authorization, social
                sharing, job application process, profile management and
                dashboard.
              </p>
            </div>
            <div className="p-5 transition duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
              <div className="relative w-full h-[48px] rounded-lg overflow-hidden "></div>
              <h3 className="mt-4 text-xl font-semibold">Management App</h3>
              <p className="mt-2 text-gray-600">
                Management App that use for user to colaborate and check
                progress, like Trello. Features include authentication, project
                management, task management, team collaboration, and project
                tracking.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
