const express = require("express");
const app = express();
const port = 3003;
const cors = require("cors");
app.use(cors());
const mysql = require("mysql");
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "things",
});

app.get('/', (req, res) => {
  res.send('Labas, Briedi!');
});

app.get("/api", (req, res) => {
    const sql = `
    SELECT *
    FROM things
    `;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.post("/api", (req, res) => {
    const sql = `
    INSERT INTO things
    (title, color, cs, texture)
    VALUES (?, ?, ?, ?)
    `;
    con.query(sql, [req.body.thing, req.body.color, req.body.cs, req.body.texture], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.delete("/api/soft/:id", (req, res) => {
    const sql = `
    UPDATE things
    SET deleted = 1
    WHERE id = ?
    `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.delete("/api/undo/:id", (req, res) => {
    const sql = `
    UPDATE things
    SET deleted = 0
    WHERE id = ?
    `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.delete("/api/:id", (req, res) => {
    const sql = `
    DELETE FROM things
    WHERE id = ?
    `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});



app.listen(port, () => {
  console.log(`Bebras klauso ${port} porto`);
});