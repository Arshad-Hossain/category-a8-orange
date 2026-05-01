"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/courses");
  };
  return (
    <div className="border-b px-2 mb-5">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.jpg"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">SkillSphere</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/courses"}>Courses</Link>
          </li>

          <li>
            <Link href={"/profile"}>My Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {!user && (
            <ul className="flex items-center  text-sm gap-5">
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
            </ul>
          )}

          {user && (
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleLogout} size="sm" variant="danger">
                Logout
              </Button>
            </div>
          )}
        </div>

        {/* <div>
          <ul>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
          </ul>
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
