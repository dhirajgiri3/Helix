import Header from "@/Components/Header/Header";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../registry";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dhiraj",
  description: "HELIX: Get custom shipping and Logistics aggregator/management software built fast. Experience streamlined operations, expert support, and accelerated growth. Free consultation.",
  keywords: "Helix the logistics software provider, Helix by cyper studio, custom logistics software, shipping software, logistics software provider, shipping business software, logistics software solution, logistics software development, logistics software company india, shipping business optimization",
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
          <Header />
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
