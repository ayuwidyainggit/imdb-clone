import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Providers from "./Providers";
import Navbar from "@/component/Navbar";
import SearchBox from "@/component/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB clone",
  description: "This is the movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers defaultThemes="system" attribute="class">
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
