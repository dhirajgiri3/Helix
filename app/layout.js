import "./globals.css";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import Footer from "@/Sections/Footer/Footer";
import ThemeProvider from "@/styles/ThemeProvider"; // Ensure the correct path
import { Fragment } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HELIX: Affordable and Advanced Shipping Aggregator Software in India",
  description:
    "HELIX offers custom and white-label shipping aggregator software designed to streamline logistics, reduce costs, and enhance efficiency. Starting at just ₹4,999/month with a 1-month free trial. Benefit from pre-integrated rate cards from top logistics companies.",
  keywords:
    "Helix logistics software, affordable shipping software, best shipping aggregator software India, Helix by Cyper Studio, custom logistics software, white-label shipping software, shipping aggregator software, logistics software provider, shipping business software, advanced logistics solutions, logistics software India, shipping business growth",
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
        <body className={inter.className}>
          <ThemeProvider>
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
