var score = parseInt(prompt("Score op 20:"))
var antwoord = "";

if(score < 10){
    antwoord = "Onvoldoende"
}
else if(score <= 13 && score >= 10){
    antwoord="Voldoende"
}
else if(score <= 17 && score >= 14){
    antwoord="Goed"
}
else if(score >= 18){
    antwoord="Uitstekend"
}
console.log(antwoord)