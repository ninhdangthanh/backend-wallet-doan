// app/layout.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>"top"</h1>
        {children}
      </body>
    </html>
  );
}
