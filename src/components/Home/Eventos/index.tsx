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
  console.log(listEvents);
  return (
    <EventosContainer className="container">
      <h2>Nossos eventos</h2>

      <div className="containerEvents" id="eventos">
        {listEvents.length > 0 ? (
          listEvents[0].banner !== "" ? (
            listEvents.map((evento) => {
              return (
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
              );
            })
          ) : (
            <BoxCardsSkeleton>
              <Card>
                <Skeleton count={1} height={413} width={361} />
              </Card>
              <Card>
                <Skeleton count={1} height={413} width={361} />
              </Card>

              <Card>
                <Skeleton count={1} height={413} width={361} />
              </Card>
            </BoxCardsSkeleton>
          )
        ) : (
          <h3 className="semEventos">Sem eventos</h3>
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

  .semEventos{
    color: #fb4b89;
    font-size: 2rem;
    text-align: center;
    background: #cecece;
    padding: 12px 50px;
    border-radius: 8px;
    margin: 0 auto
  }
`;

export const BoxCardsSkeleton = styled.div`
  display: flex;
  justify-content: space-between;
  height: 400px;
`;
export const Card = styled.div`
  width: 400px;
  height: 300px;
`;
