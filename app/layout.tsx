import "./globals.css";

export const metadata = {
  title: "Andrea Horton",
  description:
    "Blog Page",
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
