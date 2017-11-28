/**
* Exercices sur les variables et les fonctions
**/

// ----
// Ecrire une fonction 'hello' qui affiche dans la console "Hello World!"

function hello() {

    console.log ("hello world")

	// write your code HERE
};
hello();




var str1= "hello";
var str2= "world";
var a = 10;
var b = 20;
var a1 = 11;
var a2 = 12;
var a3 = 13;


function addition(a, b){// ----
// écrire des fonctions suivante:
// addition(a, b)
	console.log (a+b);
};
addition(a,b);

// ----
// écrire des fonctions suivante:
function soustraction(a,b)
{
// soustraction(a, b)
	console.log (a-b);
};
soustraction(a,b);
   
function division(a,b)
{
// soustraction(a, b)
	console.log (a/b);
};
division(a,b);

function concatenation(str1,str2)
{// concatenation(str1, str2)
	console.log (str1+str2);
};
concatenation(str1,str2);


function moyenne(a1,a2,a3)
{// moyenne(a1, a2, a3)
	console.log ((a1+a2+a3)/3);
};
moyenne(a1,a2,a3);

// Chaque fonction devra effectuerS l'opération correspondant à son nom, et renvoyer le résultat. 
// Celui-ci sera stocké dans une variable, qui sera ensuite affichée dans la console
 
// ----
// Déclarer deux variables a et b, de valeurs respectives 5 et 12
// A l'aide d'une variable intermédiaire, inverser les deux valeurs pour que a ait pour valeur 12 et b pour valeur 5
// Afficher le résultat de a et b dans la console sous la forme d'une phrase: "A vaut : xxx et B vaut yyy"
var a, b;
a=5;
b=12;
a=a-b;
b=a+b;
a=b-a;

console.log("A vaut:" +a+ "B vaut:"+b);

// ----
// Ecrire une fonction 'isDivisibleBy5' qui reçoit un nombre en paramètre, et qui vérifie que ce nombre est divisible par 5.
// Cette fonction doit renvoyer un booléen

var isDivisibleBy5= function (x) {
	
    console.log(x%5==0);
};
isDivisibleBy5(10);

// ----
// Ecrire une fonction 'isDivisibleByN' qui reçoit deux nombres entiers x et n, et qui vérifie si x est divisible par n.
// Cette fonction doit renvoyer un booléen
var x= 10;
var n = 20;
function isDivisibleByN(x, n) {
	   console.log((x/n)===0);
};
isDivisibleByN(x,n);


// ----
// Générer un nombre décimal compris entre 0 et 1, et le stocker dans une variable
// Changer la valeur de cette variable pour qu'elle vaille le nombre initial arrondi à 2 décimales
// Afficher dans la console
 var x= 0.55556;

function genereEtArrondit(x) {
   console.log(x.toFixed(2));
     
};
genereEtArrondit(x);


/**
* Exercices sur les chaînes de caractères
**/
// ----
// Ecrire une fonction qui reçoit une chaîne de caractères, et qui renvoie la position 
// de la première occurence de la lettre 'e' dans cette chaîne
var y = 'anticonstitutionnellement';

function chaineCaract(y) {
     console.log(y.indexOf('e'));
 
};
chaineCaract(y);


// ----
// Ecrire une fonction qui reçoit une chaîne de caractères, et qui renvoie la position 
// de la dernière occurence de la lettre 'e' dans cette chaîne
var z = 'anticonstitutionnellement';
  function chaineCaractere(z) {
     console.log(z.lastIndexOf('e'));
 
};
chaineCaractere(z);
// ----
// Ecrire une fonction qui reçoit une chaîne de caractères contenant une prhase entière, 
// et qui renvoie un tableau contenant chacun des différents mots dans la phrase

var string = "i am the best of the world";
function sentence(table)
{   
	var table = string.split(" ");
	console.log(table);

	
};
 sentence("");


// ----
// Ecrire une fonction qui reçoit une chaîne de caractère, qui transforme 
// la première lettre en majuscule, et qui renvoie la nouvelle chaîne


/**
* Exercices sur les fonctions natives javascript
**/

// ----
// Ecrire une fonction qui stocke vos noms et prénoms dans deux variables firstName et lastName
// Afficher dans une popup la concaténation des deux

// ----
// Ecrire une fonction qui respecte les étapes suivantes:
// Demander à l'utilisateur de saisir une valeur numérique par le biais d'une popup
// Stocker cette valeur dans une variable
// Afficher sa valeur dans la console

// ----
// Ecrire une fonction qui respecte les étapes suivantes:
// Demander à l'utilisateur de saisir deux valeurs numériques grâce à une popup de saisie
// L'alerter grâce à une popup si la valeur saisie n'est pas un nombre
// Afficher dans la console la somme des deux valeurs


/**
* Exercices sur les tableaux
**/

// ----
// Ecrire une fonction qui prend en argument un tableau de nombres et en calcule la somme.
// Valeurs initiales: 
var numTab = [45, 99, 357, -33, 1, 8, -78];
function computeSumOfArray(tab) {
	// WRITE YOUR CODE HERE
};

/**
* Exercices sur les structures de contrôles et de boucles
**/

// ----
// 1)
// 	- construire un tableau vide initialement
// 	- rajouter l'une après l'autre 10 valeurs quelconques (nombres, string) dans ce tableau
// 	- utiliser une boucle for pour afficher toutes les valeurs du tableau dans la console

// 2)
// 	- reprendre le tableau construit précédemment
// 	- utiliser une boucle while pour afficher toutes les valeurs du tableau dans la console

// ----
// Ecrire une fonction qui réalise les étapes suivantes:
// Utiliser une fonction de type 'random' pour générer une liste de nombre aléatoires
// Utiliser une boucle for, et l'instruction 'if' pour afficher dans la console uniquement les nombres impairs de ce tableau

// ----
// Ecrire une fonction qui réalise les étapes suivantes:
// Sur 50 itérations:
//     - générer un entier de façon aléatoire
//     - si l'entier est divisible par 5, le stocker dans le tableau
// Afficher avec une boucle for le contenu du tableau dans la console


/**
* Exercices sur les objets
**/

// ----
// Construire un objet :
// - ayant deux propriéts: nom, prénom
// - dont les valeurs sont votre nom et votre prénom
// - rajouter dynamiquement une propriété âge
// - modifier dynamiquement le prénom de cet objet

// ----
// Ecrire une fonction qui reçoit un objet, et qui renvoie la longueur de cet objet 
var getObjLength = function(obj) {
	// WRITE YOUR CODE HERE
};
// Tester cette fonction avec un objet de votre choix que vous aurez écrit

// ----
// Pour résoudre les exercices précédents vous avez écrit des fonctions.
// Vous devez maintenant construire un objet ayant plusieurs propriétés dont:
// - le nom de la propriété s'appelle 'solution_N', où N est le numéro de l'exercice
// - la valeur de la propriété est la fonction qui résoud l'exercice N