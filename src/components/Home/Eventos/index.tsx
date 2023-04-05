import { EventsModel } from "@/types/models";
import React from "react";
import styled from "styled-components";
import CardEvents from "./CardEvents";

interface EventosProps {
  listEvents: EventsModel[];
}
function Eventos({ listEvents }: EventosProps) {
  return (
    <EventosContainer className="container">
      <h2>Nossos eventos</h2>

      <div className="containerEvents" id="eventos">
        {listEvents &&
          listEvents.map((evento) => (
            <CardEvents
              admin_evento={evento.admin_evento}
              banner={evento.banner}
              data={evento.data}
              local={evento.local}
              nome_evento={evento.nome_evento}
              quantidade_inscritos={evento.quantidade_inscritos}
              valor={evento.valor}
              id={evento.id}
              key={evento.id}
            />
          ))}
      </div>
    </EventosContainer>
  );
}

export default Eventos;

export const EventosContainer = styled.section`
  &.container {
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
