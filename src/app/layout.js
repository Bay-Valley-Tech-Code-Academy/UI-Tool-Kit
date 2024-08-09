import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UI Tool Kit",
  description: "Bay Valley Tech UI tool kit.",
};

// The root layout is defined at the top level of the app directory and applies to all routes.
// This layout is required and must contain html and body tags, allowing you to modify the initial HTML returned from the server.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}