const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '80968096',
    database: 'board',
});

// 테이블 호스트언어로 만들기
// (async ()=>{
//     const conn = await pool.getConnection();
//     const sql = "CREATE DATABASE board"
//     const result = await conn.execute(sql);
// })()