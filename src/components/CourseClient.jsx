"use client";

import React, { useState } from "react";
import AllCoursesCard from "@/components/AllCoursesCard";
import SearchUI from "@/components/SearchUI";

const CoursesClient = ({ courses }) => {
  const [search, setSearch] = useState("");

  const filteredCourses =
    search.trim() === ""
      ? courses
      : courses.filter((course) =>
          course.title.toLowerCase().includes(search.toLowerCase()),
        );

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold my-10">All Courses</h2>
        <SearchUI search={search} setSearch={setSearch} />
      </div>

      <div className="grid grid-cols-3 gap-5 mb-5">
        {filteredCourses.map((course) => (
          <AllCoursesCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesClient;
