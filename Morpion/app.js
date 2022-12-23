const { Socket } = require('socket.io'); // On importe socket.io
const express = require('express'); // On importe express

const app = express(); // On créé notre serveur
const http = require('http').createServer(app); // On enregistre la création du serveur
const path = require('path');
const port = 666; // Port de notre serveur

const io = require('socket.io')(http); // Socket.io est parametré pour recevoir les requêtes du client

// Si l'utilisateur arrive sur http://localhost:666/ on lui envoie le fichier base.html

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/base.html'));
});

http.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
})