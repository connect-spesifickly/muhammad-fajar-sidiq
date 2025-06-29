import { Copyright } from "lucide-react";
import * as React from "react";

export function Footer() {
  return (
    <div className="py-8 text-gray-300 bg-black">
      <div className="lg:px-[7.5vw]">
        <div className="flex flex-col items-center justify-between text-center lg:flex-row lg:text-left">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-lg font-semibold">Fajar</h2>
            <p className="flex items-center text-sm font-light">
              <Copyright className="scale-50 ml-[-5px] " />
              2025 All Rights Reserved
            </p>
          </div>
          <div className="flex gap-4 mt-4 scale-125 lg:mt-0">
            <a
              href="https://github.com/connect-spesifickly"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="devicon-github-original hover:text-white"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-fajar-sidiq-916879258/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="devicon-linkedin-plain hover:text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
