function beregnForhold(a, b) {
    return a / b;
}
const resultat = beregnForhold(4, 3);
console.log(resultat); 
function beregnForhold2(a, b) {
    if (b === 0) {
        return null; 
    }
    return a / b; 
}

const resultat2 = beregnForhold2(4, 3);
console.log(resultat2); 


const resultatMedNul = beregnForhold2(4, 0);
console.log(resultatMedNul);

