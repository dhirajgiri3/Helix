import Header from "@/Components/Header/Header";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../registry";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bluechip: Case Study on Advanced Logistics Software Solutions by Cyper Studio",
  description: "Explore how Bluechip leverages Cyper Studio's innovative logistics software to enhance supply chain efficiency and operational excellence. Discover the impact of advanced logistics solutions on Bluechip's business growth in our detailed case study.",
  keywords: "Logistics software solutions India, Custom logistics software development, Shipping software provider, Supply chain logistics solutions, Third-party logistics (3PL) software, Warehouse management software, Last mile logistics services, Digital logistics solutions, Bluechip logistics case study, Transportation management software",
};

export default function BluechipCaseStudyLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
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
