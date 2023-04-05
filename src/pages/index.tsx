import Head from "next/head";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Home/Hero";
import Eventos from "@/components/Home/Eventos";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>erosEvents</title>
        <meta
          name="description"
          content="Simplifique o gerenciamento de seus eventos com nosso aplicativo. Com recursos como programação, inscrições, pagamentos e comunicação, você pode criar eventos de sucesso com facilidade. Experimente agora e faça seu evento decolar!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={poppins.className}>
        <Header />
        <Hero />
        <Eventos/>
        <Footer/>
      </main>
    </>
  );
}
