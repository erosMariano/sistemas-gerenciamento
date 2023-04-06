import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Pessoas from "../../../../assets/images/pessoas.svg";
import Banner from "../../../../assets/images/bannerHome.jpg";
import Link from "next/link";
import { EventsModel } from "@/types/models";
import { FormatDate } from "@/utils/formatDate";

function CardEvents({
  banner,
  admin_evento,
  data,
  local,
  nome_evento,
  quantidade_inscritos,
  valor,
  id,
}: EventsModel) {
  const dataFormat = new Date(data);
  const regex = /\.(jpeg|jpg|gif|png)$/;
  const isImage = regex.test(banner);

  return (
    <Card>
      <Link href={`/eventos/${id}`}>
        <>
          <Image
            src={isImage ? banner : Banner}
            width={361}
            height={200}
            alt=""
          />
          <div className="text">
            <h3>{nome_evento}</h3>
            <span className="dia">Data: {FormatDate(dataFormat)}</span>
            <span className="datails">{local}</span>
            <span className="datails">Valor: R${valor}</span>
            <span className="datailsCommunity">{admin_evento}</span>
            <span className="datailsCommunity">
              {quantidade_inscritos}
              <Image src={Pessoas} width={15} height={15} alt="" /> inscritos
            </span>
          </div>
        </>
      </Link>
    </Card>
  );
}

export default CardEvents;

export const Card = styled.div`
  overflow: hidden;
  width: 361px;
  border-radius: 9px;

  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    object-fit: cover;
  }

  .dia {
    color: #fb4b89;
    margin-bottom: 8px;
    margin-top: 8px;
    font-weight: 600;
  }
  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .datails {
    font-size: 14px;
    color: #787878;
  }
  .text {
    padding: 24px 16px;
    background-color: #fff;
    margin-top: -7px;
  }

  span.datailsCommunity {
    margin-top: 8px;
    font-weight: 600;
    + .datailsCommunity {
      margin-top: 0;
    }
  }
`;
