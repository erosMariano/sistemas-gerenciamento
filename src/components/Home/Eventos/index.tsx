import React from "react";
import styled from "styled-components";
import CardEvents from "./CardEvents";

function Eventos() {
  return (
    <EventosContainer className="container">
      <h2>Nossos eventos</h2>

      <div className="containerEvents" id="eventos">
        <CardEvents />
        <CardEvents />
        <CardEvents />
        <CardEvents />
        <CardEvents />
      </div>
    </EventosContainer>
  );
}

export default Eventos;

export const EventosContainer = styled.section`
  &.container{
    padding-top: 80px;
  }
  .containerEvents {
    margin-top: 24px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 16px;
  }
  h2 {
    text-align: center;
    color: #fff;
    font-size: 2rem;
  }
`;
