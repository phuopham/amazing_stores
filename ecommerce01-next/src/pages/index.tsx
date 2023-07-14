import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import SectionMain from "./home/SectionMain";
import SectionSale from "./home/SectionSale";
import GroupItemA from "./home/GroupItemA";
import GroupItemB from "./home/GroupItemB";
import SectionInquiry from "./home/SectionInquiry";
import SectionRecommand from "./home/SectionRecommand";
import SectionService from "./home/SectionService";
import SectionCountry from "./home/SectionCountry";

export default function Home() {
  return (
    <>
      <Head>
        <title>Base Ecommerce Web</title>
        <meta name="description" content="Royal Software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="overflow-x-auto bg-gray-100 scroll">
        <SectionMain />
        <SectionSale />
        <GroupItemA />
        <GroupItemB />
        <SectionInquiry />
        <SectionRecommand />
        <SectionService />
        <SectionCountry />
      </main>
    </>
  );
}
