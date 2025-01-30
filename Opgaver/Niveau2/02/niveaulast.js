document.addEventListener("DOMContentLoaded", () => {
    const totalPrisElement = document.querySelector(".total-pris");

    function opdaterSamletTotal() {
        let samletTotal = 0;
        document.querySelectorAll(".produkt").forEach(produkt => {
            const totalElement = produkt.querySelector(".produkt__total");
            const totalPris = parseInt(totalElement.textContent.replace("Total: ", "").replace(" kr", ""));
            samletTotal += totalPris;
        });
        totalPrisElement.textContent = `Samlet total: ${samletTotal} kr`;
    }
    
    document.querySelectorAll(".produkt").forEach(produkt => {
        const plusKnap = produkt.querySelector(".produkt__knap--plus");
        const minusKnap = produkt.querySelector(".produkt__knap--minus");
        const antalElement = produkt.querySelector(".produkt__antal");
        const totalElement = produkt.querySelector(".produkt__total");
        const pris = parseInt(produkt.querySelector(".produkt__pris").textContent);
        
        let antal = 0;
        
        plusKnap.addEventListener("click", () => {
            antal++;
            antalElement.textContent = antal;
            totalElement.textContent = `Total: ${antal * pris} kr`;
            opdaterSamletTotal();
        });
        
        minusKnap.addEventListener("click", () => {
            if (antal > 0) {
                antal--;
                antalElement.textContent = antal;
                totalElement.textContent = `Total: ${antal * pris} kr`;
                opdaterSamletTotal();
            }
        });
    });
});

/* ------------- */
