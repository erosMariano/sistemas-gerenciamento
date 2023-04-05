import { EventsModel } from "@/types/models";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
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
        {listEvents[0].id !== 0 ? (
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
          ))
        ) : (
          <BoxCardsSkelleton>
            <Card>
              <Skeleton count={1} height={413} width={361} />
            </Card>
            <Card>
              <Skeleton count={1} height={413} width={361} />
            </Card>

            <Card>
              <Skeleton count={1} height={413} width={361} />
            </Card>
          </BoxCardsSkelleton>
        )}
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

export const BoxCardsSkelleton = styled.div`
  display: flex;
  justify-content: space-between;
  height: 400px;
`;
export const Card = styled.div`
  width: 400px;
  height: 300px;
`;
