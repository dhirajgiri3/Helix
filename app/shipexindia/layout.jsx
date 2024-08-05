import Header from "@/Components/Header/Header";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../registry";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shipex India: Case Study on Custom Logistics Software Solutions by Helix",
  description: "Discover how Shipex India leverages Helix's custom logistics software to enhance shipping efficiency, streamline operations, and achieve accelerated growth. Explore our comprehensive case study for insights on logistics software development, innovative solutions, and expert support.",
  keywords: "Logistics software solutions India, Custom logistics software development, Shipping software provider, Logistics software for shipping businesses, Efficient logistics management software, Logistics and supply chain optimization, Third-party logistics (3PL) software, Supply chain logistics solutions, Transportation management software, Shipex India logistics case study",
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
