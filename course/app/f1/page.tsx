import React from "react";
import Link from "next/link";

const F1 = () => {
  return (
    <div className="m-4">
      <h1 className="text-3xl font-bold">F1 page</h1>
      <div>
        <Link
          href="/f1/f2"
          className="text-blue-600 underline visited:text-violet-600"
        >
          F2
        </Link>
      </div>
    </div>
  );
};

export default F1;
