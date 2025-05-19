const sqlite3 = require('sqlite3').verbose(); // SQLite3 import

// Initialize SQLite database and create "Kunden" table
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Create "Kunden" table if it doesn't exist
// The table structure is defined here
// with the following columns: KundenNr, Nachname, Vorname, Wohnort, PLZ, Strasse, Kennwort, Benutzername
// The KundenNr is the primary key and auto-incremented
// The other columns are defined as NOT NULL
// This means that they cannot be null when inserting a new record
// The table is created if it doesn't exist
// The database is serialized to ensure that the operations are executed in order
// This is important for database integrity
// The create table statement is executed
// If there is an error creating the table, it is logged to the console
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS Kunden (
        KundenNr INTEGER PRIMARY KEY AUTOINCREMENT,
        Nachname TEXT NOT NULL,
        Vorname TEXT NOT NULL,
        Wohnort TEXT NOT NULL,
        PLZ TEXT NOT NULL,
        Strasse TEXT NOT NULL,
        Kennwort TEXT NOT NULL,
        Benutzername TEXT NOT NULL
    )`, (err) => {
        if (err) {
            console.error('Error creating table ' + err.message);
        } else {
            console.log('Kunden table created or already exists.');
        }
    });
});


// Beispielkunde in die Tabelle "Kunden" einfügen
db.run(`INSERT INTO Kunden (Nachname, Vorname, Wohnort, PLZ, Strasse, Kennwort, Benutzername) 
        VALUES (?, ?, ?, ?, ?, ?, ?)`, 
        ['Mustermann', 'Max', 'Musterstadt', '12345', 'Musterstraße 1', 'passwort123', 'maxmuster'], 
        function(err) {
    //wenn err nicht null ist, dann ist ein Fehler aufgetreten
    // und die Fehlermeldung wird in der Konsole ausgegeben
    // wenn err gleich null ist, dann ist kein Fehler aufgetreten
    // und die ID des neu eingefügten Datensatzes wird in der Konsole ausgegeben
    if (err) {
        console.error('Fehler beim Einfügen des Beispielkunden:', err.message);
    } else {
        console.log(`Beispielkunde mit ID ${this.lastID} erfolgreich eingefügt.`);
    }
});


// Abfrage, um alle Kunden aus der Tabelle "Kunden" auszugeben
db.all('SELECT * FROM Kunden', (err, rows) => {
    if (err) {
        console.error('Fehler beim Abrufen der Kunden:', err.message);
    } else {
        console.log('Kunden aus der Tabelle:');
        rows.forEach((row) => {
            console.log(row);
        });
    }
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

// Constants
//Die Anweisungen werden von oben nach unten abgearbeitet. Der Wert 3000 wird von rechts nach links 
//zugewiesen an die Konstante namens PORT. Das einfache Gleichheitszeichen lässt sich also übersetzen
//mit "...wird zugewiesen an...""
const PORT = 3000;
//Der Wert '0.0.0.0' wird zugewiesen an eine Konstante namens HOST.
const HOST = '0.0.0.0';

// App

const app = express();

//Es wird der App bekannt gegeben, wo die styles zu finden sind.
app.use(express.static('public'))



app.get('/', (req, res) => {
	
	//res ist die Antwort des Servers an den Browser.
	//send() ist die Anweisung etwas an den Browser zu senden 
	//'Hello...' ist der Wert, der an die Anweisung send() übergeben wird
	//res.send('Hello remote world!\n');

//Das res-Objekt kann noch mehr als nur eine Zeichenkette an den 
//Browser zu senden. Das res-Objekt kann mit der Funktion render()
//eine HTML-Datei an den Browser senden.
res.render('index.ejs',{});
});

// Wenn im Browser die Adresse.../agb aufgerufen wird, wird der server aufgefordert, 
// die angefragte Seite an den Browser zurückzugeben.
// Der Server arbeitet dazu die Funktion app.get('agb)...ab.

app.get('/agb',(req, res)=>{

	// Der Server gibt die gerenderte EJS-Seite an den 
	// Browser zurück.
	res.render('agb.ejs',{});
});

app.get('/hilfe',(req, res)=>{
	res.render('hilfe.ejs',{});
});

app.get('/kontenuebersicht',(req, res)=>{
	res.render('kontenuebersicht.ejs',{});
});

app.get('/login',(req, res)=>{
	res.render('login.ejs',{});
});

app.get('/geldAnlegen',(req, res)=>{
	res.render('geldAnlegen.ejs',{});
});

app.get('/kreditBeantragen',(req, res)=>{
	res.render('kreditBeantragen.ejs',{});
});

app.get('/postfach',(req, res)=>{
	res.render('postfach.ejs',{});
});

app.get('/ueberweisungAusfuehren',(req, res)=>{
	res.render('ueberweisungAusfuehre.ejs',{});
});

//Mit listen() wird der Server angewiesen,auf den angegebenen HOST und 
//PORT zu lauschen.
app.listen(PORT, HOST);

//Mit der Anweisung console.log() wird dem Server-Administrator auf der 
//Konsole angezeigt, was der Server macht. Dwer Programmierer schreibt dazu 
//in die runden Klammern den Ausdruck, der auf der Konsole angezeigt 
//werden soll. Die Werte der beiden Konstanten HOST und PORT werden in den
//Ausdruck übergeben. Ein Wert mit anschließenden runden Klammern steht
//immer für eine Anweisung etwas zu tun. 
console.log(`Running on http://${HOST}:${PORT}`);

//Mit der Funktion require wird dir Datei in den runden Klammern eingelesen.
//require('./uebungen/01-grundlagen.js');
//require('./uebungen/03-objekte.js');
//require('./klausuren/klausur20240930.js');
//require('./uebungen/04-Funktionen.js');
