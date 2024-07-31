export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {" "}
        <header style={{ backgroundColor: "lightblue", padding: "1em" }}>
          <p>Header</p>
        </header>
        {children}
        <footer style={{ backgroundColor: "ghostwhite", padding: "1em" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
