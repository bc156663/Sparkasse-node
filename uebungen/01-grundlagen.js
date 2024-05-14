console.log('GRUNDLAGEN');
console.log('==========');

console.log('Aufgabe 1');
console.log('Erstelle zwei Variablen namens a und b. Initialisiere mit den Werten 1 und 2.');

//Der Wert 1 wird zugewiesen (=) an eine Variable namens a.
let a=1;
let b=2;

//Mit dem Plus-Operator findet eine String-Verkettung statt. Ein string ist eine Zeichenkette, eingerahmt
//mit Hochkommas.
console.log('Der Wert der Variablen a ist:'+a);

console.log('Aufgabe 2');
console.log('Gib das Ergebnis der Addition von a und b aus.');

//Wenn links oder rechts vom Plus-Operator ein String steht, wird verkettet.
//Wenn links oder rechts Zahlen stehen, wird addiert.
console.log(a+b);
console.log('Das Ergebnis der Addition:'+(a+b));

console.log('Aufgabe 3');
console.log('Gib das Ergebnis der Subtraktion, Multiplikation, Division von a und b aus');

console.log("Subtraktion:"+(a-b));
console.log("Multiplikation:"+(a*b));
console.log("Division:"+(a/b));

console.log('Aufgabe 4');
console.log('Der Wert von c sei das Ergebnis der Addition von a und b.');

let c = a + b;

console.log("c hat den Wert:"+c);

console.log('Aufgabe 5');
console.log('a und b sind die Seitenlängen der Katheten enes rechtwinkligen Dreiecks. Bestimme die Länge der Hypotenuse c');

//cQuadrat ist in Kamelhöcker-Notation geschrieben. Das heißt: zuerst ein Kleinbuchstabe. Verbundene Wörter beginnen groß.
let cQuadrat = a * a + b * b;

//Javascript kennt eine Bibliothek namens Math. In der Bibliothek gibt es eine Funktion namens sqrt. Als Parameter in den
//runden Klammern erwartet sqrt eine Zahl, aus der die Wurzel dann gezogen wird.
c = Math.sqrt(cQuadrat);

console.log('Die Hypotenuse ist '+c+' lang.');

console.log('Aufgabe 6');
console.log('Ein Kunde legt 100 Euro auf dem Sparbuch an. Jedes jahr bekommt er 10% Zinsen. Wie viel bekommt der Kunde');
console.log('nach zwei Jahren ausgezahlt. Beachte den Zinseszinseffekt.');

let laufzeit=2;
let startkapital=100;
let zinssatz=0.1; /*Das Komma ist zur Entwicklungszeit ein Punkt.*/

let kapitalNachEinemJahr = startkapital * (1 + zinssatz);

console.log("Kapital nach einem Jahr:"+kapitalNachEinemJahr + " Eur.");

let kapitalNachZweiJahren = kapitalNachEinemJahr *(1+zinssatz);

console.log("Kapitalnach zwei Jahren:"+kapitalNachZweiJahren+" EUR.");

let endkapital= startkapital*Math.pow((1 * zinssatz),laufzeit);

console.log("Endkapital nach"+laufzeit+"Jahren:"+endkapital+"EUR.");

console.log('Aufgabe 7');
console.log('Die Werte aus der vorherigen Aufgabe werden als Reihe dargestellt');

//Im Zeitpunkt Null ist das endkapital = dem startkapital
endkapital= startkapital;
console.log(endkapital);

//Nach dem ersten Jahr erhöht sich das Endkapital um den Faktor 1,1
endkapital= endkapital*(1+zinssatz);
console.log(endkapital);

//Nach dem zweiten Jahr wird dem Endkapital der Wert des Endkapitals * 1,1 zugewiesen.
endkapital= endkapital*(1+zinssatz);
console.log(endkapital);

//Nach dem dritten Jahr wird dem Endkapital der Wert des Endkapitals * 1,1 zugewiesen.
endkapital= endkapital*(1+zinssatz);
console.log(endkapital);

//Nach dem vierten Jahr wird dem Endkapital der Wert des Endkapitals * 1,1 zugewiesen.
endkapital= endkapital*(1+zinssatz);
console.log(endkapital);

console.log('Aufgabe 8');
console.log('In Aufgabe 7 wurde die Anweisung endkapital = ... mehrfach wiederholt.');
console.log('Um sich Tipparbeit zu sparen und die Wiederholung der Anweisung in der');
console.log('gewünschten Häufigkeit durchzuführen, nutzt der Programmierer eine Schleife.');

startkapital=100;
endkapital=startkapital;
zinsssatz=0.1;
laufzeit=3;

for (let i = 0; i < laufzeit; i++) {
    endkapital= endkapital*(1+zinssatz);
    console.log("Endkapital nach Jahr " +(i+1)+":" +endkapital + "EUR.");
    }


console.log('Aufgabe 9');
console.log('Wenn der Artikel Lebensmittel ist, dann ist die MwSt 7%, ansonsten 19%');
console.log('In Excel würde das so aussehen: =wenn(A1=Lebensmittel;7;19)');

let artikel='Lebensmittel';
let mwstSatz= (artikel === "Lebensmittel") ? 7 : 19;

//Der Ausdruck ist vergleichbar mit Excel. In den runden Klammern findet die Prüfung
//auf wahr oder falsch statt. Wenn Artikel === "Lebensmittel" wahr ist, wird der
//Wert vor dem Doppelpunkt zurückgegeben. Ansonsten der Wert hinter dem Doppelpunkt.
//Anders als in Excel ist das einfache Gleichheitszeichen für eine Zuweisung reserviert.
//Für einen Vergleich muss in Javascript mit zwei oder drei === gearbeitet werden.

console.log('Der Mehrwertsteuersatz für den Artikel' +artikel+ ' beträgt ' +mwstSatz+'%.');

console.log('Aufgabe 10');
console.log('Hausaufgabe: Eigene Aufgabe mit Wenn-Funktion / if-else-Ausdruck');

