// Henter alle elementer med klassen "card"
const cards = document.querySelectorAll(".card");

// Tilføjer en klik-event til hvert kort
cards.forEach(card => {
    card.addEventListener("click", () => {
        // Tjekker om kortet allerede er valgt
        const alreadySelected = card.classList.contains("selected");

        // Fjerner "selected" klassen fra alle kort
        cards.forEach(c => {
            c.classList.remove("selected");
            // Gendanner standardikon og tekst for hvert kort
            const img = c.querySelector(".icon");
            const btn = c.querySelector(".btn");

            img.src = img.dataset.default;
            btn.textContent = btn.dataset.default;
        });

         // Hvis kortet IKKE var valgt, vælg det nu
        if (!alreadySelected) {
            card.classList.add("selected");
            // Opdaterer ikon og tekst for det valgte kort
            const img = card.querySelector(".icon");
            const btn = card.querySelector(".btn");

            img.src = img.dataset.selected;
            btn.textContent = btn.dataset.selected;
        }
    });
});