import Image from "next/image";
import React from "react";

const CourseDetailsPage = async ({ params }) => {
  // const res = await params;
  const { id } = await params;
  // console.log(res, "params");

  const res = await fetch("https://category-a8-orange.vercel.app/data.json");
  const courses = await res.json();

  const course = courses.find((course) => course.id == id);

  if (!course) {
    return <p className="text-2xl text-center">Course not found</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-8 mb-30">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image */}
        <div className="relative w-full h-[220px] sm:h-[300px] md:h-full">
          <Image
            src={course.image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            alt={course.title}
            className="object-cover rounded-xl"
          />
        </div>

        {/* Course Info */}
        <div className="flex flex-col justify-between space-y-4">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              {course.title}
            </h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {course.description}
            </p>
          </div>

          {/* Meta Info */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            <p>
              <strong>Instructor:</strong> {course.instructor}
            </p>
            <p>
              <strong>Duration:</strong> {course.duration}
            </p>
            <p>
              <strong>Level:</strong> {course.level}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {course.rating}
            </p>
            <p>
              <strong>Category:</strong> {course.category}
            </p>
          </div>
        </div>
      </div>

      {/* Curriculum */}
      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          Course Curriculum
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Introduction & Setup",
            "Core Concepts & Fundamentals",
            "Hands-on Project",
            "Advanced Techniques",
            "Final Project & Deployment",
          ].map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-3 text-sm sm:text-base"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
