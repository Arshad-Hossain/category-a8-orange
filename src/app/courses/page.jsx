import CourseCard from "@/components/CourseCard";
import React from "react";

const CoursesPage = async () => {
  const res = await fetch("https://category-a8-orange.vercel.app/data.json");
  const courses = await res.json();
  return (
    <div>
      <h2 className="text-xl font-bold my-5">All Courses</h2>
      <div className="grid grid-cols-3 gap-5">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
