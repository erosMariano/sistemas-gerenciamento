import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { EventsModel } from "@/types/models";
import { FormatDate } from "@/utils/formatDate";
import { Poppins } from "next/font/google";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styled from "styled-components";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

function Admin() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("@adminEros");

    if (typeof window !== "undefined" && token !== "valido") {
      router.push("/login");
    } else {
      setAuthChecked(true);
    }
  }, [router]);

  const [authChecked, setAuthChecked] = useState(false);
  const [createdEvent, setCreatedEvent] = useState<EventsModel>({
    id: 0,
    admin_evento: "",
    banner: "",
    data: "",
    local: "",
    nome_evento: "",
    quantidade_inscritos: 0,
    valor: 0,
  });
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

  const [newEvent, setNewEvent] = useState<EventsModel>({
    admin_evento: "",
    banner: "",
    data: "",
    local: "",
    nome_evento: "",
    quantidade_inscritos: 0,
    valor: "",
  });

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

  async function createEvent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newEvent),
    };

    //====== CRIAR VALIDAÇÕES
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/events`,
      postData
    );

    const dataResult = await res.json();
    if (dataResult.message !== "success") return;
    setCreatedEvent(dataResult);
    toast("Evento criado!", {
      theme: "light",
      autoClose: 3000,
    });

    clearInputs();
  }

  function clearInputs() {
    setNewEvent({
      admin_evento: "",
      banner: "",
      data: "00-00-00",
      local: "",
      nome_evento: "",
      valor: "",
      quantidade_inscritos: 0,
    });
  }

  const [deleteItem, setDeleteItem] = useState(false);

  async function deleteEvent(id: number) {
    setDeleteItem(true);
    const postData = {
      method: "DElETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/events/`,
      postData
    );
    const data = await res.json();
    if (data.response.message !== "success") return;
    toast("Evento deletado!", {
      theme: "light",
      autoClose: 3000,
    });

    setDeleteItem(false);
  }

  useEffect(() => {
    console.log(deleteItem);
  }, [deleteItem]);
  if (!authChecked) {
    return null;
  } else {
    return (
      <main className={poppins.className}>
        <Head>
          <title>erosEvents - Admin</title>
          <meta
            name="description"
            content="Simplifique o gerenciamento de seus eventos com nosso aplicativo. Com recursos como programação, inscrições, pagamentos e comunicação, você pode criar eventos de sucesso com facilidade. Experimente agora e faça seu evento decolar!"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header admin={true} />
        <ToastContainer />
        <Main className={poppins.className}>
          <form onSubmit={(e) => createEvent(e)}>
            <h1>Cadastrar evento</h1>
            <input
              type="text"
              placeholder="Digite o nome do evento"
              value={newEvent.nome_evento}
              onChange={(e) =>
                setNewEvent({ ...newEvent, nome_evento: e.target.value })
              }
            />
            <input
              type="date"
              placeholder="Data do evento: 00/00/00"
              value={newEvent.data}
              onChange={(e) =>
                setNewEvent({ ...newEvent, data: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Digite o local"
              value={newEvent.local}
              onChange={(e) =>
                setNewEvent({ ...newEvent, local: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Digite o responsável"
              value={newEvent.admin_evento}
              onChange={(e) =>
                setNewEvent({ ...newEvent, admin_evento: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Digite o valor do ingresso"
              value={newEvent.valor}
              onChange={(e) =>
                setNewEvent({ ...newEvent, valor: Number(e.target.value) })
              }
            />

            <input
              type="text"
              placeholder="URL do banner da festa"
              value={newEvent.banner}
              onChange={(e) =>
                setNewEvent({ ...newEvent, banner: e.target.value })
              }
            />
            <button>Entrar</button>
          </form>
        </Main>

        <Container className="container">
          <h2>Meus eventos cadastrados</h2>

          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Banner</th>
                <th>Nome do Evento</th>
                <th>Data</th>
                <th>Local</th>
                <th>Adm do Evento</th>
                <th>Valor</th>
                <th>Deletar</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => {
                const dataFormat = new Date(event.data);
                return (
                  <React.Fragment key={event.id}>
                    <tr>
                      <td>
                        <strong>{event.id}</strong>
                      </td>
                      <td className="banner">{event.banner}</td>
                      <td>{event.nome_evento}</td>
                      <td>{FormatDate(dataFormat)}</td>
                      <td>{event.local}</td>
                      <td>{event.admin_evento}</td>
                      <td>R$ {event.valor}</td>
                      <td>
                        <button
                          disabled={deleteItem}
                          onClick={() => deleteEvent(Number(event.id))}
                        >
                          Deletar
                        </button>
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </Table>
        </Container>
        <Footer />
      </main>
    );
  }
}

export default Admin;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  h1 {
    color: #fff;
    margin-bottom: 24px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input + input {
    margin-top: 16px;
  }
  input,
  button {
    border: 0;
    height: 48px;
    width: 500px;
    padding-left: 16px;
    border-radius: 8px;
    font-size: 16px;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
  }
  input[type="date"]::-ms-clear,
  input[type="date"]::-ms-reveal {
    display: none;
  }

  button {
    padding: 0;
    color: #fff;
    font-weight: 700;
    margin-top: 16px;
    cursor: pointer;

    background: linear-gradient(
      136.27deg,
      #fb4b89 -2.31%,
      #fb4b89 -2.31%,
      #fb4b89 -2.3%,
      #6926d7 100%
    );
  }
`;

export const Container = styled.div`
  h2 {
    color: #fff;
    margin-top: 80px;
    text-align: center;
    margin-bottom: 32px;
  }
`;
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
  font-size: 14px;

  td.banner {
    max-width: 150px; /* Defina o tamanho máximo que deseja para a coluna de banner */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  th {
    text-align: left;
    background-color: #f2f2f2;
    color: #666;
    padding: 10px;
    border: 1px solid #ddd;
  }

  td {
    padding: 10px;
    border: 1px solid #ddd;
  }

  td button {
    border: none;
    width: 100%;
    background-color: #ee0808;
    color: #fff;
    font-weight: 700;
    padding: 4px 0;
    border-radius: 4px;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
  tr {
    background-color: #f2f2f2;
  }
  tr:nth-child(even) {
    background-color: #c4c4c4;
  }
`;
