let hoeveelheidNamen = parseInt(prompt("Hoeveel namen wil je ingeven?"));
let namen = [];

for(let i = 0; i < hoeveelheidNamen; i++){
    let ingegevenNaam = prompt("Naam")
    if(ingegevenNaam.length > 5){
        namen.push(ingegevenNaam);
    }
}
if(namen.length === 1){
    console.log(`Er is ${namen.length} naam langer dan 5 letters.`);
}
else{
    console.log(`Er zijn ${namen.length} namen langer dan 5 letters.`);
}
