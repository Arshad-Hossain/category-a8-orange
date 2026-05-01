import React from "react";
import CourseCard from "./CourseCard";

const PopularCourses = async () => {
  const res = await fetch("https://category-a8-orange.vercel.app/data.json");
  const courses = await res.json();
  // console.log(courses, "courses");

  const top_three_courses = courses
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
  console.log(top_three_courses);
  return (
    <div>
      <h1 className="text-xl font-bold my-3">Popular Courses</h1>

      <div className="grid grid-cols-3 gap-5">
        {top_three_courses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
