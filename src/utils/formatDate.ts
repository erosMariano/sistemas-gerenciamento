export function FormatDate(data: Date){
  const dia = data.getDate();
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`
}