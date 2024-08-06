function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading product");
  }
  return (
    <div className="m-4">
      {children}
      <h2 className="text-xl font-bold">Features products</h2>
    </div>
  );
}
