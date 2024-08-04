import Header from "@/Components/Header/Header";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../registry";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Contact Helix: Affordable Logistics Software Support and Consultation",
    description: "Get in touch with Helix for custom and white-label shipping aggregator software solutions. Contact us for a free consultation, expert support, and to learn more about our affordable logistics software starting at ₹4,999/month.",
    keywords: "Helix contact, logistics software support, shipping software consultation, Helix by Cyper Studio, custom logistics software contact, best shipping aggregator software India, affordable logistics software India"
  };
  

export default function ContactLayout({ children }) {
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
