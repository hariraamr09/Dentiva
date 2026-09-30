import "./globals.css";

export const metadata = {
  title: "Dentiva | Premium Dental Care",
  description:
    "Dentiva provides premium dental care with modern treatments and experienced doctors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
