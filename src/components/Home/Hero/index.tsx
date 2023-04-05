import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import ImageBanner from "../../../assets/images/bannerHome.jpg";
import IconPlay from "../../../assets/images/icon-play.svg";

function Hero() {
  return (
    <MainContainer>
      <Container>
        <TextContainer>
          <h2>Próximo evento de 2023</h2>
          <h1>O maior show de eletrônica do Brasil</h1>
          <p>
            Este é o show de eletrônica que você não pode perder! Com uma mistura
            envolvente de batidas eletrônicas, performances de tirar o fôlego e
            efeitos especiais alucinantes, este evento será uma experiência
            inesquecível para todos os amantes da música.
          </p>

          <div className="buttons">
            <Link href="/" className="linkFill">
              Garantir ingresso
            </Link>
            <Link href="https://www.youtube.com/watch?v=-Q2VLQyFdNA&ab_channel=FunctionLAB">
              <Image src={IconPlay} width={24} height={24} alt="" />
              Assistir Teaser
            </Link>
          </div>
        </TextContainer>

        <ContainerImageShow>
          <Image src={ImageBanner} alt="" />
        </ContainerImageShow>
      </Container>
    </MainContainer>
  );
}

export default Hero;
export const MainContainer = styled.div`
  height: calc(100vh - 100px);
`;
export const Container = styled.div`
  display: flex;
  gap: 32px;
  justify-content: space-between;
  align-items: center;  
  justify-content: center;
  height: calc(100vh - 100px);
`;
export const TextContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  h2 {
    color: #fb4b89;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1rem;
  }

  h1 {
    color: #fff;
    font-size: 3rem;
  }
  p {
    color: #fff;
    font-size: 1rem;
  }

  .buttons {
    display: flex;
    gap: 24px;
    margin-top: 24px;
    justify-content: center;
  }
  a {
    color: #fff;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 100px;
    border: 1px solid #fff;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    &.linkFill {
      border: 1px solid #fb4b89;
      background-color: #fb4b89;
    }
  }
`;

export const ContainerImageShow = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  top: 0;

  &::after {
    content: "";
    background-color: rgba(35, 17, 85, 0.7);
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    background-position: top;
  }
  /* background: linear-gradient(136.27deg, #fb4b89 -2.31%, #6926d7 100%);
  width: 100%;
  padding-bottom: 100px;
  img {
    object-fit: cover;
    width: 500px;
  } */
`;
