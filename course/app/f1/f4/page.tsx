import React from "react";
import Link from "next/link";

const F4 = () => {
  return (
    <div className="m-4">
      <h1 className="text-3xl font-bold">F4 page</h1>
      <Link
        href="/f1/f3"
        className="text-blue-600 underline visited:text-violet-600"
      >
        F3
      </Link>
      <br />
      <Link
        href="/about"
        className="text-blue-600 underline visited:text-violet-600"
      >
        About page
      </Link>
    </div>
  );
};

export default F4;
