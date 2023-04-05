import mysql from "mysql2/promise";
import { ResultSetHeader } from "mysql2";

const port = Number(process.env.MYSQL_PORT);

export async function query({
  query,
  values = [],
}: any): Promise<ResultSetHeader> {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: port,
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results as ResultSetHeader;
  } catch (error: any) {
    throw Error(error);
  }
}
