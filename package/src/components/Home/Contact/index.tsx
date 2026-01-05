"use client";
import React from "react";
import Image from "next/image";

const Contactform = () => {
  return (
    <section className="overflow-x-hidden bg-darkmode dark:bg-darklight">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 md:gap-7 gap-0">
          {/* Left Info */}
          <div
            className="row-start-1 col-start-1 row-end-2 md:col-end-7 col-end-12"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="flex gap-2 items-center justify-start">
              <span className="w-3 h-3 rounded-full bg-success"></span>
              <span className="font-medium text-sm text-white">build everything</span>
            </div>

            <h2 className="sm:text-4xl text-[28px] leading-tight font-bold text-white py-12">
              Let’s discuss your project and take it to the next level.
            </h2>

            {/* Contact Info */}
            <div className="grid grid-cols-6 pb-12 border-b border-dark_border">
              <div className="col-span-3">
                <span className="text-white/50 text-lg">Phone</span>
                <p className="text-white text-lg">+61 451 645 169</p>
              </div>
              <div className="col-span-3">
                <span className="text-white/50 text-lg">Email</span>
                <p className="text-white text-lg">admin@canberraitsolutions.com.au</p>
              </div>
              <div className="col-span-6 pt-8">
                <span className="text-white/50 text-lg">Location</span>
                <p className="text-white text-lg">
                  12/3 Barrier St, Fyshwick ACT 2609, Canberra, ACT, Australia | Nepal, Lalitpur, Kupondole
                </p>
              </div>
            </div>

            {/* Trusted by */}
            <div className="pt-12 text-center">
              <p className="text-white/50 text-base pb-1">Trusted by</p>
              <p className="text-white/40 text-sm">50+ companies and partners worldwide</p>
            </div>
          </div>

          {/* Form */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="relative md:row-start-1 row-start-2 md:col-start-8 col-start-1 row-end-2 col-end-13"
          >
            <div className="lg:mt-0 mt-8 bg-white dark:bg-darkmode max-w-[50rem] m-auto pt-9 pb-8 px-10 rounded-md relative z-10">
              <h2 className="sm:text-3xl text-lg font-bold text-midnight_text mb-3 dark:text-white">
                Start the project
              </h2>

              <form className="flex w-full flex-wrap gap-4">
                {/* Name fields */}
                <div className="flex gap-4 w-full">
                  <input
                    type="text"
                    placeholder="First name"
                    className="text-midnight_text w-full text-base bg-transparent border border-border rounded-lg px-4 py-2 placeholder:text-grey focus:border-primary focus:outline-none dark:border-dark_border dark:text-white dark:focus:border-primary"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="text-midnight_text w-full text-base bg-transparent border border-border rounded-lg px-4 py-2 placeholder:text-grey focus:border-primary focus:outline-none dark:border-dark_border dark:text-white dark:focus:border-primary"
                  />
                </div>

                {/* Email */}
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="youremail@website.com"
                    className="text-midnight_text w-full text-base bg-transparent border border-border rounded-lg px-4 py-2 placeholder:text-grey focus:border-primary focus:outline-none dark:border-dark_border dark:text-white dark:focus:border-primary"
                  />
                </div>

                {/* Country */}
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Country"
                    className="text-midnight_text w-full text-base bg-transparent border border-border rounded-lg px-4 py-2 placeholder:text-grey focus:border-primary focus:outline-none dark:border-dark_border dark:text-white dark:focus:border-primary"
                  />
                </div>

                {/* Project message */}
                <div className="w-full">
                  <textarea
                    placeholder="Let us know about your project"
                    className="text-midnight_text w-full h-36 text-base bg-transparent border border-border rounded-lg px-4 py-2 placeholder:text-grey focus:border-primary focus:outline-none dark:border-dark_border dark:text-white dark:focus:border-primary resize-none"
                  />
                </div>

                {/* Terms */}
                <div className="flex items-start gap-2">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-5 w-5 rounded border border-primary checked:bg-primary cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-grey dark:text-white/50 text-sm">
                    I have read and acknowledge the{" "}
                    <span className="text-primary cursor-pointer">Terms and Conditions</span>
                  </label>
                </div>

                {/* Submit */}
                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg transition"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;
