import type { NextApiRequest, NextApiResponse } from "next";

import { query } from "@/lib/db";
import { EventsModel } from "@/types/models";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let eventos;
  let message;

  if (req.method === "GET" && !req.query.id) {
    eventos = await query({
      query: "SELECT * FROM eventos",
      values: [],
    });
    res.status(200).json(eventos);
  }
  if(req.method === "GET" && req.query.id){
    const { id } = req.query;
    console.log("entreei aqui")

    eventos = await query({
      query: "SELECT * FROM eventos WHERE id = ?",
      values: [id],
    });

    console.log(eventos)
    res.status(200).json(eventos);
  }

  if (req.method === "POST") {
    const {
      banner,
      nome_evento,
      data,
      local,
      admin_evento,
      quantidade_inscritos,
      valor,
    }: EventsModel = req.body;

    const addEvent = await query({
      query:
        "INSERT INTO eventos (banner, nome_evento, data, local, admin_evento, quantidade_inscritos, valor) VALUES (?, ?, ?, ?, ?, ?, ?)",
      values: [
        banner,
        nome_evento,
        data,
        local,
        admin_evento,
        quantidade_inscritos,
        valor,
      ],
    });
    let product = {
      banner,
      nome_evento,
      data,
      local,
      admin_evento,
      quantidade_inscritos,
      valor,
    };
    res.status(200).json({ message: "success", product: product });
  }

  if (req.method === "PUT") {
    const {
      banner,
      nome_evento,
      data,
      local,
      admin_evento,
      quantidade_inscritos,
      valor,
      id,
    }: EventsModel = req.body;

    const updateEvent = await query({
      query:
        "UPDATE eventos SET banner = ?, nome_evento = ?, data = ?, local = ?, admin_evento = ?, quantidade_inscritos = ?, valor = ? WHERE id = ?",
      values: [
        banner,
        nome_evento,
        data,
        local,
        admin_evento,
        quantidade_inscritos,
        valor,
        id,
      ],
    });
    let product = {
      banner,
      nome_evento,
      data,
      local,
      admin_evento,
      quantidade_inscritos,
      valor,
      id,
    };

    res.status(200).json({ message: "success", product: product });
  }

  if (req.method === "DELETE") {
    const { id }: EventsModel = req.body;

    const deleteProduct = await query({
      query: "DELETE FROM eventos WHERE id = ?",
      values: [id],
    });

    const result = deleteProduct.affectedRows;

    if (result) {
      message = "success";
    } else {
      message = "error";
    }

    res.status(200).json({ response: { message: message, eventoId: id } });
  }
}
