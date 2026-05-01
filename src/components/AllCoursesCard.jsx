"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/navigation";

const AllCoursesCard = ({ course }) => {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleClick = () => {
    if (!user) {
      router.replace(`/login?redirect=/courses/${course.id}`);
    } else {
      router.replace(`/courses/${course.id}`);
    }
  };
  return (
    <Card className="border rounded-xl">
      <div className="relative w-full aspect-square">
        <Image
          src={course.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={course.title}
          className="object-cover rounded-xl"
        />

        {/* <Chip size="sm" className="absolute right-2 top-2">
          {photo.category}
        </Chip> */}
      </div>

      <div>
        <h2 className="font-medium">{course.title}</h2>
      </div>

      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <p>{course.instructor}</p>
        </div>

        <Separator orientation="vertical" />

        <div className="flex items-center gap-2">
          <p>{course.rating}</p>
        </div>
      </div>

      {/* <Link href={`/courses/${course.id}`}> */}
      <Button onClick={handleClick} variant="outline" className={"w-full"}>
        View Details
      </Button>
      {/* </Link> */}
    </Card>
  );
};

export default AllCoursesCard;
