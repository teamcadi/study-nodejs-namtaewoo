const mysql = require("mysql2/promise");
require("dotenv").config();
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "80968096",
    database: 'board',
    waitForConnections: true,
    connectionLimit: 5,
});
// (async ()=>{
//     const conn = await pool.getConnection();
//     await conn.execute(
//         `
//         CREATE TABLE user(
//             id int(11) NOT NULL AUTO_INCREMENT,
//             email varchar(100) NOT NULL,
//             name varchar(50) NOT NULL,
//             password varchar(100) NOT NULL,
//             createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
//             updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
//             PRIMARY KEY (id),
//             UNIQUE KEY (email)
//         )
//         `
//     );
// })();

module.exports = {
    getConn: () => pool.getConnection()
};

// 테이블 호스트언어로 만들기
// (async ()=>{
//     const conn = await pool.getConnection();
//     const sql = "CREATE DATABASE board"
//     const result = await conn.execute(sql);
// })()