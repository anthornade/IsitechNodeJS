//- 1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.

function addNumber(a, b)
{
    let result = a + b;
    console.log(result);
}
addNumber(1,2);

//- 2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.

const myNumberArray = [34, 69, 6, 56, 12];
let number = 0;

function whichIsBigger(myNumberArray, number)
{
    for (let index = 0; index < myNumberArray.length; index++)
    {

        if (number < myNumberArray[index])
        {
            number = myNumberArray[index];
        }
    }
    console.log(number);
}

whichIsBigger(myNumberArray, number);

//- 3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.

function withoutVowels(myString)
{
    for (let i = 0; i < myString.length; i++)
    {
        myString = myString.replace(/[aeiouy]/gi, "");
    }
    console.log(myString);
}
withoutVowels("Voyelles");

//- 4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.

const myWordArray = ["Elephant", "Tigre", "Bison", "Chat", "Poule"];

function orderByName(myWordArray)
{
    myWordArray.sort();
    console.log(myWordArray)
}

orderByName(myWordArray);

//- 5 Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".

function jeNeSaisPas() {
    console.log("Je ne sais pas comment faire la question 5 de façon optimisé...");
}

jeNeSaisPas();

//- 6 Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet.

let myNameArray = ["Lucas", "Eloise", "Jade", "Louison"];
let myAgeArray = [15, 19, 23, 18];
let myObjectArray = [myNameArray, myAgeArray];

function findMyAge(myObjectArray)
{
    for (let ii = 0; ii < myNameArray.length; ii++ )
    {
        console.log(myObjectArray[0][ii], myObjectArray[1][ii]);
    }
}

findMyAge(myObjectArray);

//- 7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.

function orderByDescending(myNumberArray)
{
    const sortAsc = (a, b) => a - b;
    myNumberArray.sort(sortAsc);
    console.log(myNumberArray)
}
orderByDescending(myNumberArray);

//- 8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.

function uppercase(myString)
{
    console.log(myString.toUpperCase());
}
uppercase("Je suis une phrase");

//- 9 Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.

function countVowels(myString)
{
    console.log(myString.match(/[aeiou]/gi).length);
}
countVowels("Je suis une phrase")

//- 10 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.

function consonantsInUpperCase(myString)
{
    let chars = myString.split("");

    for (let i = 0; i < myString.length; i ++)
    {
        if (chars[i] !== "a" && chars[i] !== "e" && chars[i] !== "i" && chars[i] !== "o" && chars[i] !== "y") {
            chars[i] = chars[i].toUpperCase();
        }
        else chars[i] = chars[i].toLowerCase();
    }
    console.log(chars.join(""));
}
consonantsInUpperCase("Voyelles");