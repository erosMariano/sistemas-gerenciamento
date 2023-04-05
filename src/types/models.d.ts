export interface EventsModel {
  id?: number;
  banner: string;
  nome_evento: string;
  data: string;
  local: string;
  admin_evento: string;
  quantidade_inscritos: number;
  valor: number | string;
}