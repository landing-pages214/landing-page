import "./globals.css";

export const metadata = {
  title: "Kyle Goertzen",
  description:
    "Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
