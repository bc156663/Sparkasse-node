console.log("Klausur 20240604")
// 
// Bearbeiten Sie alle Aufgaben nach Vorgabe. 
// Deklarieren Sie stets Varibalen mit sprechenden Namen und geben Sie einen Antwortsatz auf der Konsole aus.


console.log("Aufgabe 1")
// 1a) Berechnen Sie das Volumen eines Würfels mit Hilfe der Grundrechenoperatoren (+ , - , * , /) , bei dem die Kantenlänge mit der Varablen a festgelegt wird.

let a= 4;
let b= 4;
let c= 4;

console.log('Das Volumen eines Würfels mit Katenenlängen von jeweils 4 cm beträgt: '+(a*b*c)+'cm^3');


// 1b) - Nur Klausurschreiber
// Wiederholen Sie die Berechnung mit Hilfe der Math-Bibliothek, indem Sie die bekannte Funktion .sqrt() verwenden.



console.log("Aufgabe 2")
// Für Kreise gilt:
// Flächeninhalt = Pi * Radius²
// Umfang = 2 * pi * Radius
// Durchmesser = 2 * Radius



// 2a)
// Testschreiber deklarieren pi und initialisieren pi mit dem Wert 3.14.

let pi=3.14;



// Klausurschreiber deklarieren pi und initialisieren pi mit dem Wert aus der bekannten Bibliothek namens Math. Geben Sie Math.PI an, um den Wert von Pi in einer Variablen speichern zu können.




// 2b)
// Berechnen Sie Flächeninhalt.

let radius= 2;
let durchmesser= 2*radius;

console.log('Der Flächeninhalt eines Kreises mit einem Radius von 2 cm beträgt: '+(pi*durchmesser)+'cm^2');





// 2c)
// Berechnen Sie den Umfang

let umfang=2*pi*radius;

console.log('Der Umfang des Kreises beträgt: '+(umfang)+'cm');






// 2d)
// Berechnen Sie den Durchmesser

console.log('Der Durchmesser des Kreises beträgt: '+(durchmesser)+'cm');





console.log("Aufgabe 3")
// Es gilt:
// Rabatt = Listenpreis · Rabatt-Prozentsatz : 100 %
// Netto-Rechnungsbetrag = Listenpreis – Rabatt
// MwSt = Netto-Rechnungsbetrag · MwSt-Prozentsatz : 100 %
// Brutto-Rechnungsbetrag = Netto-Rechnungsbetrag + MwSt
// Skonto = Brutto-Rechnungsbetrag · Skonto-Prozentsatz : 100 %
// Zahlungsbetrag = Brutto-Rechnungsbetrag – Skonto

// Der Listenpreis einer Papierlieferung beträgt 16780,00 EUR; Rabatt 5 %, Mehrwertsteuer 19 %, Skonto 1,5 %.


// 3a)
// Berechnen Sie den Rabatt in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.

let listenpreis= 16780;
let prozentsatz= 0.05;
let rabatt= listenpreis*prozentsatz;

console.log('Der Rabatt beträgt: '+(rabatt)+'EUR.');



// 3b)
// Berechnen Sie den Netto-Rechnungsbetrag in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.

let nettorechnungsbetrag= listenpreis-rabatt;

console.log('Der Netto-rechnungsbetrag beträgt: '+(nettorechnungsbetrag)+'EUR.');


// 3c)
// Berechnen Sie die MwSt in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.
 
let mwstprozentsatz=0.19;
let mwst= nettorechnungsbetrag*mwstprozentsatz;

console.log('Die Mehrwertssteuer beträgt: '+(mwst)+'EUR.');




// 3d) - Nur Klausurschreiber
// Berechnen Sie den Brutto-Rechnungsbetrag in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.




// 3e) - Nur Klausurschreiber
// Berechnen Sie den Skonto in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.




// 3f) - Nur Klausurschreiber
// Berechnen Sie den Zahlungsbetrag in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.



console.log("Aufgabe 4")

// Die Allgemeine Zinsformel lautet: Z = K * (p / 100) * ( t / 360)
// Z = Zinsbetrag
// K = Kapital
// p = Zinssatz (in Prozent)
// t = Verzinsungszeit (in Tagen)

// 4a)
// Ein Kunde nimmst bei einer Bank einen Kredit über 5000 € auf. Die Laufzeit beträgt 6 Monate bei einem Zinssatz von 10%. Berechne die Zinszahlungen, die in diesem Zeitraum anfallen. Arbeiten Sie mit Variablen. Antwortsatz!

let kapital= 5000;
let zinssatz= 0.10;
let verzinsungsszeit= 90;
let zinsbetrag= kapital*(zinssatz/100)*(verzinsungsszeit/360);

console.log('Die Zinszahlungen, die für den Kunden innerhalb von 6 Monaten anfallen betragen: '+(zinsbetrag)+'EUR.');




// 4b) - Nur Klausurschreiber
// Am Jahresende erhält ein Kunde auf dem Sparbuch eine Zinsgutschrift über 500 €. Es befand sich aber lediglich für einen Zeitraum von 3 Monaten Geld auf dem Sparbuch. Der Zinssatz betrug 5%. Welche Geldsumme befand sich auf dem Sparbuch?








console.log("Aufgabe 5")

// Der Body-Mass-Index wird laut Wikipedia folgendermaßen berechnet:
// BMI = m / (l²)  
// wobei m die Körpermasse (in Kilogramm) und l die Körperlänge (in Metern) angibt. Der BMI wird also in der Maßeinheit kg/m² angegeben. 

// 5a)
// Erstellen Sie die notwendigen Variablen und weisen Sie beispielhaft Werte zu. 
// Erstellen Sie zusätzlich eine Variable für den Namen der Person.

let m= 68;
let l= 170;
let name= "Pit";





// 5b)
// Führen Sie die Berechnung durch.

let bmi= m/(l*l);

// 5c) 
// Geben Sie den Antwortsatz nach folgendem Muster aus. Die Werte werden aus den Variablen und der vorherigen Berechnung erzeugt: "Pit hat bei einer Körpergröße von 170 cm und einem Körpergewicht von 68 kg einen BMI von 24."

console.log( name +' hat mit einer Körpergröße von ' +(l)+ ' cm '+' und einem Körpergewicht von '+(m)+' kg '+ ' einen BMI von '+(bmi)+' .');


// 5d - Nur Klausurschreiber
// Interpretieren Sie das Ergebnis aus 7c nach folgender Vorgabe:
// Wenn der BMI zwischen 18,5 und 25 liegt, dann "Normalgewicht". Ansonsten "Untergewicht" oder "Übergewicht".
// Geben Sie eine entsprechende Rückmeldung auf der Konsole aus. Bsp: "Pit hat Normalgewicht." 
// Um die Aufgabe zu lösen, brauchen Sie die "Wenn-Funktion"
// Dazu ein erklärendes Beispiel:
// if (a > b) { console.log("A ist größer als B") }
// if (a <= b) { console.log("A ist kleiner als B oder gleich groß") }    


