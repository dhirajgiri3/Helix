import Header from "@/Components/Header/Header";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dhiraj",
  description:
    "HELIX: Get custom shipping and Logistics aggregator/management software built fast. Experience streamlined operations, expert support, and accelerated growth. Free consultation.",
  keywords:
    "Helix the logistics software provider, Helix by cyper studio, custom logistics software, shipping software, logistics software provider, shipping business software, logistics software solution, logistics software development, logistics software company india, shipping business optimization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
