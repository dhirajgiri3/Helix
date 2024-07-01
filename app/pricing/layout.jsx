import "../globals.css";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "HELIX: Affordable Custom Logistics Software Pricing for Shipping Businesses",
  description:
    "Explore HELIX's pricing plans for custom shipping and logistics software. Get the best value for streamlined operations, expert support, and accelerated growth. Start with a free consultation.",
  keywords:
    "Helix logistics software pricing, affordable logistics software, shipping software pricing, custom logistics software cost, logistics software pricing plans, shipping business software pricing, logistics software value, Helix pricing by Cyper Studio, cost-effective logistics software solutions, custom shipping software prices",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
