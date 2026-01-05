"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "We were honestly worried about changing our systems, but the transition was smooth and stress-free. The team handled everything professionally.",
    name: "Raj Kumar Thapa",
    role: "CEO, Tech Innovations, Kathmandu",
  },
  {
    quote:
      "Support was quick and clear. Our website loads faster now and we haven’t had any security issues since the update.",
    name: "Sita Gurung",
    role: "Manager, Himalayan Enterprises, Pokhara",
  },
  {
    quote:
      "They really listened to what we needed. The app was delivered on time and works exactly the way we discussed.",
    name: "Hari Bahadur Shrestha",
    role: "Director, Everest Solutions, Bhaktapur",
  },
  {
    quote:
      "Cloud migration sounded complicated at first, but they explained everything clearly and handled it without interrupting our daily work.",
    name: "Bishnu Maya Tamang",
    role: "IT Head, Valley Tech, Lalitpur",
  },
  {
    quote:
      "What I appreciated most was the communication. We always knew what was happening and what the next step was.",
    name: "Krishna Prasad Adhikari",
    role: "Owner, Bharatpur Digital, Chitwan",
  },
  {
    quote:
      "Cybersecurity was a big concern for us. Since working with them, we feel much more confident about our data safety.",
    name: "Laxmi Devi Magar",
    role: "Consultant, Eastern Nepal IT, Biratnagar",
  },
  {
    quote:
      "The software was customized properly instead of being a one-size-fits-all solution. That made a big difference for our workflow.",
    name: "Ram Bahadur Karki",
    role: "Founder, Sunsari Tech, Dharan",
  },
  {
    quote:
      "Training was practical and easy to follow. Even our non-technical staff picked things up quickly.",
    name: "Gita Rana",
    role: "Operations Manager, Western Nepal Solutions, Butwal",
  },
  {
    quote:
      "We needed a reliable development partner, not just a service provider. The collaboration felt genuine and professional.",
    name: "John Smith",
    role: "CEO, Aussie Tech Hub, Sydney",
  },
  {
    quote:
      "They responded fast whenever we had questions. The final delivery matched what we had discussed from the start.",
    name: "Emma Johnson",
    role: "Marketing Director, Melbourne Innovations",
  },
  {
    quote:
      "Technical knowledge was solid, but what stood out was their problem-solving approach. They didn’t overcomplicate things.",
    name: "Michael Brown",
    role: "IT Manager, Brisbane Digital",
  },
  {
    quote:
      "Everything was well-planned and executed smoothly. Integration with our existing systems went better than expected.",
    name: "Olivia Davis",
    role: "Consultant, Perth Enterprises",
  },
];

export default function Testimonial() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-section dark:bg-darklight"
    >
      <div className="container mx-auto max-w-6xl px-4 text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-2">
          <span className="w-3 h-3 rounded-full bg-success" />
          <span className="text-sm font-medium text-midnight_text dark:text-white/50">
            Testimonials
          </span>
        </div>

        <h2 className="pt-6 pb-4 text-[28px] sm:text-4xl font-bold text-midnight_text dark:text-white">
          What Our Clients Say
        </h2>

        <p className="mx-auto max-w-md text-base text-grey dark:text-white/50">
          Hear from our satisfied clients about their experiences with our services.
        </p>

        <Image
          src="/images/testimonial/vector-smart.png"
          alt="testimonial decoration"
          width={384}
          height={208}
          className="mx-auto mt-10"
          priority
        />

        <div className="pt-12 pb-20">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
}

function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const current = testimonials[index];

  return (
    <div
      className="max-w-3xl mx-auto"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Avatar placeholder */}
        <div className="w-24 h-24 rounded-full bg-gray/20 flex items-center justify-center text-xl font-bold text-gray">
          {current.name.charAt(0)}
        </div>

        <p className="text-base max-w-xl text-midnight_text dark:text-white transition-all duration-300">
          {current.quote}
        </p>

        <div>
          <p className="mt-4 text-lg font-bold text-midnight_text dark:text-white">
            {current.name}
          </p>
          <p className="text-sm text-gray dark:text-white/50">
            {current.role}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() =>
            setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
          }
          className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition"
        >
          Previous
        </button>

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() =>
            setIndex((i) => (i + 1) % testimonials.length)
          }
          className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition"
        >
          Next
        </button>
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition ${
              i === index ? "bg-primary" : "bg-gray/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
