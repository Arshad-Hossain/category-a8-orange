import React from "react";
import CourseCard from "./CourseCard";

const TrendingCourses = async () => {
  const res = await fetch("https://category-a8-orange.vercel.app/data.json");
  const courses = await res.json();
  // console.log(courses, "courses");

  const three_courses = courses.slice(0, 3);
  return (
    <div className="mb-5">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold my-5 text-center">
        Trending Courses
      </h2>

      <div className="grid grid-cols-3 gap-5">
        {three_courses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default TrendingCourses;
