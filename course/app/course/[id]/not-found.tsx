import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-xl text-red-600 font-bold">Course not found!</h1>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
