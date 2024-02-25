import { NextResponse } from 'next/server';
import { conn } from '@/libs/mysql';

export default async function handler(req, res) {

  if (req.method === "GET") {
    const { query } = req.query;

  try {
    const results = await new Promise((resolve, reject) => {
      const sql = `SELECT * FROM joined_cv_view WHERE nombre LIKE ? OR email LIKE ?`;
      conn.query(sql, [`%${query}%`, `%${query}%`], (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });

    res.status(200).json(results);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  }else {
    res.status(405).end(); // Método no permitido para otras solicitudes que no sean GET
  }
  
}

// export async function GET(req) {
//     const { query } = req.query;
//     const res = conn.query("SELECT * FROM joined_cv_view WHERE nombre LIKE ? OR email LIKE ?")
//     return NextResponse.json(res)
// }