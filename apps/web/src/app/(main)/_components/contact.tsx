"use client";
import { Container } from "@/app/components/container";
import * as React from "react";
import { Phone } from "lucide-react";
import { AtSign } from "lucide-react";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/shadcn-ui/form";
import { Button } from "@/components/shadcn-ui/button";
import { useForm } from "react-hook-form";

export function Contact() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: any) {
    // handle submit
    console.log(data);
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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full grid-cols-1 gap-4 md:grid-cols-2"
              >
                {/* Your Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="font-semibold">
                        Your Name *
                      </FormLabel>
                      <FormControl>
                        <input
                          type="text"
                          placeholder="Ex. Immanuel Janis"
                          {...field}
                          className="w-full px-4 py-3 text-base border rounded-2xl focus:outline-none focus:ring"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="font-semibold">Email *</FormLabel>
                      <FormControl>
                        <input
                          type="email"
                          placeholder="Ex. immanuel@gmail.com"
                          {...field}
                          className="w-full px-4 py-3 text-base border rounded-2xl focus:outline-none focus:ring"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Phone Number (full width) */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="w-full col-span-1 md:col-span-2">
                      <FormLabel className="font-semibold">
                        Phone Number *
                      </FormLabel>
                      <FormControl>
                        <input
                          type="tel"
                          placeholder="Enter Phone Number"
                          {...field}
                          className="w-full px-4 py-3 text-base border rounded-2xl focus:outline-none focus:ring"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Leave Message (full width) */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="w-full col-span-1 md:col-span-2">
                      <FormLabel className="font-semibold">
                        Leave Message *
                      </FormLabel>
                      <FormControl>
                        <textarea
                          rows={4}
                          placeholder="Type your message"
                          {...field}
                          className="w-full px-4 py-3 text-base border rounded-2xl focus:outline-none focus:ring"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Submit Button (full width, right) */}
                <div className="flex justify-end col-span-1 md:col-span-2">
                  <Button
                    type="submit"
                    className="flex items-center gap-2 px-8 py-3 text-base font-semibold rounded-2xl"
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
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}
