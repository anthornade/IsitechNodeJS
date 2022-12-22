const readline = require("readline"); //On appel le module readline
const colors = require('colors');

//On créer l'interface pour interragir avec le joueur

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//On initialise le joueur

let player = 'X';

// On initialise le plateau de jeu

let ticktacktoe = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
];

//On va définir le joueur qui jouera le premier

function defaultPlayer() {
    rl.question("Le joueur par défaut est X, voulez vous changer ? ( o or n )".red, function (defaultOrChoose) {
        let choice = defaultOrChoose.toLowerCase();
        if (choice === 'o') { //Si oui : On appel setPlayer()
            setPlayer();
        } else if (choice === 'n') { //Si non : On appel printBoard() puis on appel playTickTacToe()
            console.log(`Le joueur X commence.`.red);
            printBoard();
            playTickTacToe();

        } else {
            defaultPlayer();
        }


    });

}

//On confirme le choix du joueur qui jouera le premier

function setPlayer() {

    rl.question("Le joueur par défaut est X, pour changer tapez O sinon tapez X ? ".red, function (whichPlayer) {
        changePlayer(whichPlayer);
    });

}

function changePlayer(playerChange) {

    let mov = playerChange.toUpperCase();

    if (mov === 'O' || mov === 'X') {
        console.log(`Le joueur qui commence est ${mov}`.red)
        player = mov;
        printBoard();
        playTickTacToe();
    } else {
        setPlayer();
    }

}

//On verifie si le joueur peut jouer sur la case de son choix

function playTickTacToe() {
    let continePlay = false;
    for (let i = 0; i < ticktacktoe.length; i++) {
        if (ticktacktoe[i] === ' ') {
            continePlay = true;
        }
    }
    //Si la case est vide on l'autorise
    if (continePlay === true) {
        rl.question("Choisissez une case : ".red, function (movve) {
            gameplayer(movve)
        });
    }
}

//On va faire correspondre le numero de case tapé par le joueur aux index du tableau
//Comme les cases vont de 1 à 9 et que les index du tableau vont de 0 à 8 il faut les faires correspondre

function gameplayer(move) {

    let moveToCheck = parseInt(move) - 1;
    let i;
    for (i = 0; i < ticktacktoe.length; i++) {

        if (moveToCheck === i && ticktacktoe[i] === ' ') { //Si la case est vide

            ticktacktoe[i] = player; //On inscrit le X ou le O en fonction du joueur en cours

            //On passe au joueur suivant

            if (player === 'X') {
                console.clear();
                player = 'O';
            } else if (player === 'O') {
                console.clear();
                player = 'X'
            }


        } else {
            playTickTacToe();
        }
    }

    console.log('\n');
    printBoard();

    const winner = calculateWinner();

    if (winner !== ' ') {
        console.log(`\n   Le gagnant est ${winner}`.red.bold);
        process.exit();
    }
    playTickTacToe();


}

function calculateWinner() { //On cherche si un des joueurs a aligné 3 cases et on le retourne

    if (ticktacktoe[0] === ticktacktoe[1] && ticktacktoe[0] === ticktacktoe[2]) {
        return ticktacktoe[0];

    } else if (ticktacktoe[3] === ticktacktoe[4] && ticktacktoe[3] === ticktacktoe[5]) {
        return ticktacktoe[3];

    } else if (ticktacktoe[6] === ticktacktoe[7] && ticktacktoe[6] === ticktacktoe[8]) {
        return ticktacktoe[6];

    } else if (ticktacktoe[0] === ticktacktoe[3] && ticktacktoe[0] === ticktacktoe[6]) {
        return ticktacktoe[0];

    } else if (ticktacktoe[1] === ticktacktoe[4] && ticktacktoe[1] === ticktacktoe[7]) {
        return ticktacktoe[1];

    } else if (ticktacktoe[2] === ticktacktoe[5] && ticktacktoe[2] === ticktacktoe[8]) {
        return winner = ticktacktoe[2];

    } else if (ticktacktoe[0] === ticktacktoe[4] && ticktacktoe[0] === ticktacktoe[8]) {
        return ticktacktoe[0];
    } else if (ticktacktoe[2] === ticktacktoe[4] && ticktacktoe[2] === ticktacktoe[6]) {
        return ticktacktoe[2];
    }

    return ' ';
}

//On affiche le plateau de jeu

function printBoard() {
    console.clear();
    let line = "";
    for (let i = 1; i < 10; i++) {
        line += ticktacktoe[i - 1] + ' | '.green.bold;

        if (i % 3 === 0) {
            console.log(line);//On rempli le tableau de lignes vides
            console.log('____________'.green.bold)//On créé les bordures du tableau
            line = "";
        }

    }
}

function launcGame() {

    //On appel la fonction pour afficher le plateau de jeu

    printBoard();

// On appel la fonction pour choisir le joueur par défaut

    defaultPlayer();
}

launcGame();