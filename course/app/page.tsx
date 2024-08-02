import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Welcome Home 🏠</h1>
      <Link href="/blog" className="block m-4">
        Blog
      </Link>

      <Link href="/products" className="block m-4">
        Products
      </Link>
    </div>
  );
};

export default Home;
