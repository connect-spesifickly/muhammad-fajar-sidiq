"use client";
import { Container } from "@/components/ui/container";
import * as React from "react";
import { Phone } from "lucide-react";
import { AtSign } from "lucide-react";
import { Button } from "@/components/shadcn-ui/button";
import { useForm } from "react-hook-form";
import { api } from "@/utils/axios";

export function Contact() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  function onSubmit(data: any) {
    // handle submit
    const response = api.post("/email", data);
    response
      .then(() => {
        console.log("Email sent successfully");
        alert("Email sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Error sending email. Please try again later.");
      });
    console.log("Form submitted:", data);
  }

  return (
    <div className="py-10">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="col-span-1">
            <h2 className="text-2xl font-bold text-gray-900">Contact Us!</h2>
            <h2 className="mt-3 text-4xl italic font-light text-gray-900">
              Lets Talk for
            </h2>
            <h2 className="text-4xl font-bold text-gray-900">
              Your New Project
            </h2>
            <div className="flex flex-col gap-5 py-10">
              <div className="flex items-center gap-5">
                <div className="p-3 bg-yellow-500 shadow-md rounded-xl">
                  {" "}
                  <Phone className="text-white" />
                </div>
                <a
                  href="https://wa.me/+62895339427085"
                  className="text-xl font-light text-gray-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +62 895-3394-27085
                </a>
              </div>
              <div className="flex items-center gap-5">
                <div className="p-3 bg-yellow-500 shadow-md rounded-xl">
                  {" "}
                  <AtSign className="text-white" />
                </div>
                <div className="text-xl font-light text-gray-800">
                  altitude.altair@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="grid col-span-2 gap-5">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full grid-cols-1 gap-4 md:grid-cols-2"
            >
              {/* Your Name */}
              <div className="w-full">
                <label className="text-lg ">Your Name *</label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Ex. Immanuel Janis"
                    {...form.register("name")}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-2xl focus:outline-none focus:ring"
                  />
                </div>
                {form.formState.errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="w-full">
                <label className="text-lg">Email *</label>
                <div className="mt-2">
                  <input
                    type="email"
                    placeholder="Ex. immanuel@gmail.com"
                    {...form.register("email")}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-2xl focus:outline-none focus:ring"
                  />
                </div>
                {form.formState.errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Number (full width) */}
              <div className="w-full col-span-1 md:col-span-2">
                <label className="text-lg">Phone Number *</label>
                <div className="mt-2">
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    {...form.register("phoneNumber")}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-2xl focus:outline-none focus:ring"
                  />
                </div>
                {form.formState.errors.phoneNumber && (
                  <p className="mt-1 text-sm text-red-500">
                    {form.formState.errors.phoneNumber.message}
                  </p>
                )}
              </div>

              {/* Leave Message (full width) */}
              <div className="w-full col-span-1 md:col-span-2">
                <label className="text-lg">Leave Message *</label>
                <div className="mt-2">
                  <textarea
                    rows={4}
                    placeholder="Type your message"
                    {...form.register("message")}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-2xl focus:outline-none focus:ring"
                  />
                </div>
                {form.formState.errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button (full width, start) */}
              <div className="flex justify-center col-span-1 lg:justify-start md:col-span-2 lg:pl-28">
                <Button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-gray-300 rounded-2xl hover:border hover:bg-white hover:border-black"
                >
                  Submit
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
                    />
                  </svg>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
