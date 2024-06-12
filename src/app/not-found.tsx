"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { RotateCw } from "lucide-react";

export default function page() {
  const router = useRouter();

  return (
    <div className="container flex flex-col items-center">
      <Image
        className="mt-32"
        width={250}
        height={250}
        alt="offline"
        src={"/images/Fast-Internet.svg"}
      />
      <h2 className="mt-2 text-center  text-2xl font-semibold font-mono">
        Oops! Page Not Found
      </h2>
      <p className="text-sm opacity-50">
        Sorry, we can't find the page you're looking for.
      </p>

      <button
        className="cursor-pointer mt-8"
        type="button"
        onClick={() => router.push("/")}
      >
        <div className="flex items-center">
          <span className="text-2xl font-semibold font-mono underline">
            Go to Home Page
          </span>
          <RotateCw className="ml-2" width={21} height={21} />
        </div>
      </button>
    </div>
  );
}
