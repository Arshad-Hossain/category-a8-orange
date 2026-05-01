import Banner from "@/components/Banner";
import PopularCourses from "@/components/PopularCourses";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Suspense
        fallback={<h1 className="text-xl text-center">Data is loading...</h1>}
      >
        <PopularCourses></PopularCourses>
      </Suspense>
    </div>
  );
}
