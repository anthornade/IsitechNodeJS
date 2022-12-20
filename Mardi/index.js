// Écrivez un programme Node.js qui lit un fichier et imprime son contenu dans la console.

function readFile(fileName)
{
    const fs = require('fs'); // On inclut le module File System dans le Projet

    fs.readFile(fileName, 'utf8', function(err, data)
    {
        console.log(data); // On affiche
    });
}

readFile('question1.txt');

// Écrivez un programme Node.js qui lit un fichier, modifie son contenu et réécrit le contenu modifié dans le fichier.

function editFile(fileName, textToReplace)
{
    const fs = require('fs'); // On inclut le module File System dans le Projet

    fs.writeFile(fileName, textToReplace, function (err) // On remplace notre texte par un autre
    {
        if (err) throw err;
        readFile(fileName); // On affiche
    });
}

editFile('question2.txt', 'jsuis un texte modifié de la question 2 !');

// Écrivez un programme Node.js qui utilise le module http pour créer un serveur simple qui sert un fichier statique.

const http = require('http'); // On inclut le module HTTP dans le Projet
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res)
{
    res.writeHead(200);
    res.end("Je suis un serveur Node.js pour la question deux.");
};

const server = http.createServer(requestListener)
{
    server.listen(port, host, () => {
        console.log(`Accèder au serveur au http://${host}:${port}`)
    })
}

// Écrivez un programme Node.js qui utilise le module fs pour lister les fichiers d'un répertoire.

function readFilesInDir(dir) {
    const fs = require('fs'); // On inclut le module File System dans le Projet

    let fileNames = fs.readdirSync(dir);
    console.log('Fichier du dossier ' + dir + " :")
    fileNames.forEach((file) => {
        console.log(file);
    })
}

readFilesInDir('C:/Users/antho/Documents/Isitech/NodeJS/Mardi');

// Écrivez un programme Node.js qui utilise le module fs pour créer un nouveau fichier et y écrire des données.

const fs = require('fs'); // On inclut le module File System dans le Projet

fs.writeFile('question5.txt', 'Je suis le fichier de la question 5.', function (err)
{
    if (err) throw err;
});

// Écrivez un programme Node.js qui utilise le module os pour obtenir le répertoire personnel de l'utilisateur actuel.

function findPersonnalRepository() {
    const os = require('os'); // On inclut le module OS dans le Projet

    console.log("Mon répertoire personnel est : " + os.homedir());
}

findPersonnalRepository();

//Écrivez un programme Node.js qui utilise le module child_process pour exécuter un programme en ligne de commande.

function runProgramm(command)
{
    const child_process = require('child_process'); // On inclut le module child_process dans le Projet
    let ls_process = child_process.exec(command);
}

runProgramm("notepad.exe");

// Écrivez un programme Node.js qui utilise le module path pour manipuler les chemins de fichiers.

function whatIsTheExt(file) {
    let path = require('path'); // On inclut le module path dans le Projet
    console.log("L'extension du fichier " + file + " est " + path.extname("question2.txt"));
}

whatIsTheExt("question5.txt");

// Écrivez un programme Node.js qui utilise le module querystring pour analyser une chaîne de requête URL.

function createJqlJiraURL(jql) {
    const querystring = require('querystring'); // On inclut le module querrystring dans le Projet
    console.log("https://masociete.atlassian.net/issues/?" + querystring.stringify({ jql }));
}
createJqlJiraURL("project = MonProjet");

// Écrivez un programme Node.js qui utilise le module events pour créer un émetteur d'événements personnalisé.


function createEvent(eventName, message) {
    const EventEmitter = require('events'); // On inclut le module events dans le Projet
    let eventEmitter = new EventEmitter(); // On initialise notre evenement
    eventEmitter.on(eventName, (msg) => {
        console.log(msg);
    });
    eventEmitter.emit(eventName, message);
}
 createEvent("MonEvenement", "Je suis un evenement");