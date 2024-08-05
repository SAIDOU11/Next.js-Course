export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-4">
      {children}
      <h2 className="text-xl font-bold">Features products</h2>
    </div>
  );
}
