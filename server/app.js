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

// READ ALL
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
app.get("/api2", (req, res) => {
    const sql = `
    SELECT *
    FROM owners
    `;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
// CREATE NEW
app.post("/api", (req, res) => {
    const sql = `
    INSERT INTO things
    (title, color, cs, texture)
    VALUES (?, ?, ?, ?)
    `;
    con.query(sql, [req.body.thing, req.body.color, req.body.cs, req.body.texture], (err, result) => {
        if (err) throw err;
        res.send({msg: {text: 'Oh, we have new thing!', type: 'success'}});
    });
});
app.post("/api2", (req, res) => {
    const sql = `
    INSERT INTO owners
    (name)
    VALUES (?)
    `;
    con.query(sql, [req.body.name], (err, result) => {
        if (err) throw err;
        res.send({msg: {text: 'Oh, we have new owner!', type: 'success'}});
    });
});


// SOFT DELETE
app.delete("/api/soft/:id", (req, res) => {
    const sql = `
    UPDATE things
    SET deleted = 1
    WHERE id = ?
    `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send({msg: {text: 'Oh, we put thing in the BIN!', type: 'success'}});
    });
});
app.delete("/api2/soft/:id", (req, res) => {
    const sql = `
    UPDATE owners
    SET deleted = 1
    WHERE id = ?
    `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send({msg: {text: 'Oh, we put owner in the BIN!', type: 'success'}});
    });
});



// UNDO DELETE
app.delete("/api/undo/:id", (req, res) => {
    const sql = `
    UPDATE things
    SET deleted = 0
    WHERE id = ?
    `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send({msg: {text: 'Oh, we have thing again!', type: 'success'}});
    });
});
// HARD DELETE
app.delete("/api/:id", (req, res) => {
    const sql = `
    DELETE FROM things
    WHERE id = ?
    `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send({msg: {text: 'Oh, the thing is dead!', type: 'info'}});
    });
});
// EDIT
app.put("/api/:id", (req, res) => {
    const sql = `
    UPDATE things
    SET title = ?, color = ?, cs = ?, texture = ?
    WHERE id = ?
    `;
    con.query(sql, [req.body.thing, req.body.color, req.body.cs, req.body.texture, req.params.id], (err, result) => {
        if (err) throw err;
        res.send({msg: {text: 'Oh, we have edited this thing!', type: 'success'}});
    });
});



app.listen(port, () => {
  console.log(`Bebras klauso ${port} porto`);
});