import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import Head from "next/head";
import Router from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface LoginUser {
  name: string;
  password: string;
}
function Login() {
  const [loginUser, setLoginUser] = useState<LoginUser>({
    name: "",
    password: "",
  });
  function validateUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loginUser.name === "admin" && loginUser.password === "admin") {
      Router.push("/admin");
      localStorage.setItem("@adminEros", "valido")
    } else {
      toast("Credenciais incorretas", {
        theme: "dark",
        autoClose: 3000
      });
    }
  }
  return (
    <>
      <Head>
        <title>erosEvents - Login</title>
        <meta
          name="description"
          content="Simplifique o gerenciamento de seus eventos com nosso aplicativo. Com recursos como programação, inscrições, pagamentos e comunicação, você pode criar eventos de sucesso com facilidade. Experimente agora e faça seu evento decolar!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={poppins.className}>
        <Header />
        <ToastContainer />

        <Main>
          <form onSubmit={(e) => validateUser(e)}>
            <h1>Login</h1>
            <input
              type="text"
              placeholder="Digite seu usuário"
              name="user"
              onChange={(e) =>
                setLoginUser({ ...loginUser, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Digite sua senha"
              name="password"
              onChange={(e) =>
                setLoginUser({ ...loginUser, password: e.target.value })
              }
            />

            <button>Entrar</button>
          </form>
        </Main>

        <SpanFooter className="footer">
          <Footer />
        </SpanFooter>
      </main>
    </>
  );
}

export default Login;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 60vh;
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
    width: 300px;
    padding-left: 16px;
    border-radius: 8px;
    font-size: 16px;
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

export const SpanFooter = styled.span`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
