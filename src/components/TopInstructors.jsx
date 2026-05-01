import Image from "next/image";
import React from "react";

const TopInstructors = async () => {
  const res = await fetch(
    "https://category-a8-orange.vercel.app/instructorData.json",
  );
  const instructors = await res.json();
  return (
    <section className="w-full bg-white py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Top Instructors
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base md:text-lg">
            Learn from experienced professionals guiding thousands of students.
          </p>
        </div>

        <div
          className="grid gap-5 sm:gap-6 md:gap-8 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3"
        >
          {instructors.map((inst) => (
            <div
              key={inst.id}
              className="group bg-gray-50 rounded-xl sm:rounded-2xl 
                         p-5 sm:p-6 md:p-7
                         shadow-sm hover:shadow-xl 
                         transition-all duration-300 
                         text-center flex flex-col items-center"
            >
              {/* Image */}
              <div className="relative mb-4 sm:mb-5">
                <Image
                  src={inst.image}
                  alt={inst.name}
                  width={120}
                  height={120}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 
                             lg:w-32 lg:h-32
                             object-cover rounded-full 
                             border-4 border-white shadow-md
                             group-hover:scale-105 transition"
                />
              </div>

              {/* Name */}
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                {inst.name}
              </h3>

              {/* Expertise */}
              <p className="text-blue-600 text-xs sm:text-sm md:text-base mb-3">
                {inst.expertise}
              </p>

              {/* Info */}
              <div className="text-gray-600 text-xs sm:text-sm md:text-base space-y-1">
                <p>Experience: {inst.experience}</p>
                <p>Students: {inst.students}</p>
                <p>Courses: {inst.courses}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
