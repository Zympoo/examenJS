let getallen = [1,2,5,8,6,10];
let evenGetallen = [];
function isEven(getallen) {
    for (let i = 0; i < getallen.length; i++) {
        if (getallen[i] % 2 === 0) {
            evenGetallen.push(getallen[i]);
        }
    }
    return evenGetallen;
}

console.log(isEven(getallen));