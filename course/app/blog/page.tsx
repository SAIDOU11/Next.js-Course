function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 5000));
}

const blog = async () => {
  await sleep();
  return (
    <div className="bg-blue-200 p-4">
      <h1 className="text-xl text-red-900 font-bold">Blog</h1>
    </div>
  );
};

export default blog;
