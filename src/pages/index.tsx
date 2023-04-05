import Head from "next/head";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Home/Hero";
import Eventos from "@/components/Home/Eventos";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { EventsModel } from "@/types/models";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  const [events, setEvents] = useState<EventsModel[]>([
    {
      id: 0,
      admin_evento: "",
      banner: "",
      data: "",
      local: "",
      nome_evento: "",
      quantidade_inscritos: 0,
      valor: 0,
    },
  ]);

  const [createdEvent, setCreatedEvent] = useState<EventsModel[]>([
    {
      id: 0,
      admin_evento: "",
      banner: "",
      data: "",
      local: "",
      nome_evento: "",
      quantidade_inscritos: 0,
      valor: 0,
    },
  ]);
  useEffect(() => {
    async function getEvents() {
      const postData = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/events`,
        postData
      );

      const data = await res.json();
      setEvents(data);
    }
    getEvents();
  }, []);

  async function updateEvent(eventModify: EventsModel) {
    const postData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(eventModify),
    };

    // ====== CRIAR VALIDAÇÕES
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/events`,
      postData
    );

    const dataResult = await res.json();
    if (dataResult.response.message !== "success") return;
    setCreatedEvent(dataResult);
  }


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
        <Eventos listEvents={events} />
        <Footer />
      </main>
    </>
  );
}
