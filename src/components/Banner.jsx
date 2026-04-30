import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div
        className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center rounded-lg overflow-hidden shadow-xl
      bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644')] bg-cover bg-center bg-no-repeat"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Learn Skills That Shape Your Future
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6">
              Join SkillSphere to explore expert-led courses, build real-world
              skills, and accelerate your career growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/courses" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2">
                  Explore Courses
                </Button>
              </Link>

              <Link href="/signup" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black px-6 py-2"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
