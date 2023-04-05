import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { EventsModel } from "@/types/models";
import { Poppins } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageBanner from "../../assets/images/bannerHome.jpg";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

function Evento() {
  const [event, setEvent] = useState<EventsModel[]>([{
    id: 0,
    admin_evento: "",
    banner: "",
    data: "",
    local: "",
    nome_evento: "",
    quantidade_inscritos: 0,
    valor: 0,
  }]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getEvent() {
      const postData = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/events/?${id}`,
        postData
      );

      const data = await res.json();
      setEvent(data);
    }
    getEvent();
  }, [id]);


  const dataFormat = new Date(event[0].data);

  const dia = dataFormat.getDate();
  const mes = String(dataFormat.getMonth() + 1).padStart(2, "0");
  const ano = dataFormat.getFullYear();

  return (
    <>
      <Head>
        <title>erosEvents - {event[0].nome_evento ? event[0].nome_evento : ""}</title>
        <meta
          name="description"
          content="Simplifique o gerenciamento de seus eventos com nosso aplicativo. Com recursos como programação, inscrições, pagamentos e comunicação, você pode criar eventos de sucesso com facilidade. Experimente agora e faça seu evento decolar!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      ;
      <main className={poppins.className}>
        <Header />
        <Container className="container">
          <div className="containerImage">
            <Image
              src={event[0].banner.length ? event[0].banner : ImageBanner}
              fill
              alt=""
            />
          </div>
          <Reserve>
            <div className="sideLeft">
              <h1>{event[0].nome_evento ? event[0].nome_evento : ""}</h1>
              <h2>Data: {event[0].data ? `${dia}/${mes}/${ano}` : ""}</h2>
              <h2>{event[0].admin_evento ? event[0].admin_evento : ""}</h2>
              <p>Local: {event[0].local ? event[0].local : ""}</p>
            </div>

            <form action="#">
              <h3>Reserve aqui</h3>
              <input type="text" name="name" placeholder="Digite seu nome" />
              <input
                type="number"
                name="number"
                placeholder="Digite seu e-mail"
              />
              <button>Reservar</button>
            </form>
          </Reserve>
        </Container>
        <Footer />
      </main>
    </>
  );
}

export default Evento;

export const Container = styled.div`
  .containerImage {
    position: relative;
    width: 100%;
    height: 500px;
    margin-top: 40px;
    img {
      border-radius: 16px;
      width: 100%;
      object-fit: cover;
    }
  }

  .sideLeft {
    color: #fff;
    margin-top: 24px;
    h2 {
      font-size: 16px;
    }
    h1 {
      font-size: 2rem;
    }

    p {
      margin-top: 8px;
    }
  }
`;

export const Reserve = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 8px;
    input,
    button {
      height: 32px;
      border: none;
      border-radius: 4px;
    }
    input {
      padding-left: 16px;
    }
    h3 {
      color: #fff;
      text-align: center;
    }

    button {
      background-color: #fb4b89;
      color: #fff;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;