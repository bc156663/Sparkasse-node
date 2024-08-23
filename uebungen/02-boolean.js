console.log("Booleans")
console.log("========")

console.log("Boolsche Werte sind Wahrheitswerte, die wahr (true) oder falsch (false) annehmen können.")

//Wahrheitswerte kennen wir bereits aus der Wenn-Funktion in Excel.

console.log("Aufgabe 01")

if(true){
console.log("Der Ausdruck ist wahr.")
}else{
    console.log("Der Ausdruck ist unwahr / falsch / false.")
}

console.log("Aufgabe 02")

//In Erweiterung von Aufagebe 1 soll der Ausdruck dynamisch entweder true oder false sein.

let a = 7

if(a>6){
    console.log("Das ist wahr")
}else{
    console.log("Das ist falsch")
}

console.log("Aufgabe 03")

//Wenn die Schülerin 16 oder jünger ist, muss sie "fahrradfahren"
//Wenn sie 17 ist, darf sie "begleitet fahren"
//Wenn sie 18 ist darf sie "fahren"
//Vorraussetzung für das fahren mit dem Auto ist der Führerschein.

let alter=17;
let fuehrerschein = false;

if(alter<=16 || fuehrerschein === false){   //Wenn die Schülerin 16 ist oder keinen Füherschein hat oder beides, dann Fahrrad
    console.log("fahrradfahren")
}

if(alter===17 && fuehrerschein === true){   //Wenn 17 UND Führerschein, dann begleitet fahren
    console.log("begleitet fahren")
}

if(alter>17 && fuehrerschein === true){     //Wenn älter 17 UND Führerschein, dann fahren
    console.log("fahren")
}

// Andere Lösung:

if(fuehrerschein){    // fuehrerschein ist bereits true oder false. Es bedarf keines Vergleichsoperators.

    if(alter===17){
        console.log("begleitet fahren")
    }else{
        console.log("fahren")
    }
}else{
    console.log("fahrradfahren")
}
