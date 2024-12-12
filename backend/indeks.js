const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3000;

// Parser za JSON podatke
app.use(bodyParser.json());

// Parser za podatke iz formi
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'student.veleri.hr',
    user: 'slezaja',
    password: '11',
    database: 'slezaja'
});

app.use(express.urlencoded({ extended: true }));

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


app.get("/api/knjiga", (request, response) => { // dohvaćanje svih knjiga

    connection.query("SELECT * FROM knjiga", (error, results) => {
        if (error) throw error;
        response.send(results);
    });
    /*
    req - request - slanje zahtjeva s klijentske strane
    res - response - slanje odgovora sa server strane

    */
    // response.send("popis knjiga");
});

app.get("/api/knjige/:id", (request, response) => { //dohvaćanje knjige po id-u
    const id = request.params.id; // request sa klijentse strane
    response.send("jedna knjiga " + id);
})

app.get("/api/knjiga/naslov/:naslov", (request, response) => {
    const naslov = request.params.naslov;
    connection.query("SELECT * FROM knjiga WHERE naslov=?", naslov, (error, results) => {
        if (error) throw error;
        response.send(results);
    });
    //response.send("naslov " + naslov);
})

/*app.post("/api/rezerv_knjige", (request, response) => {
    const data = request.body;
    rezervacija = [[data.datum, data.id_knjiga, data.id_korisnik]]
    connection.query("INSERT INTO rezervacija (datum_rez, knjiga, korisnik) VALUES ?", [rezervacija], (error, results) => {
        if (error) throw error;
        response.send(results);
    });
    //response.send("Poslano" + data.id_knjiga);
});
*/


app.listen(port, () => {
    console.log("Server running at port: " + port);
});

// npm install -g nodemon