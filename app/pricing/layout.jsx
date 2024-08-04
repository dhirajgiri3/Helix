import "../globals.css";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../registry";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HELIX: Affordable Custom Logistics Software Pricing for Shipping Businesses",
  description: "Explore HELIX's pricing plans for custom and white-label shipping aggregator software. Get the best value for streamlined operations, expert support, and accelerated growth. Start with a free consultation and 1-month free trial.",
  keywords: "Helix logistics software pricing, affordable logistics software, most affordable shipping aggregator software, best value for money shipping aggregator software, best shipping aggregator software, custom logistics software cost, logistics software pricing plans, shipping business software pricing, Helix pricing by Cyper Studio, cost-effective logistics software solutions, custom shipping software prices",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-071ZXJEWG4"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-071ZXJEWG4');
          `,
        }} />
      </Head>
      <StyledComponentsRegistry>
        <body className={inter.className}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
