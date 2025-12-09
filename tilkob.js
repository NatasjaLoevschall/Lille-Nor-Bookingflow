// Find alle kort
const kort = document.querySelectorAll('.kort');

// Find boks2's tekstfelt
const output = document.getElementById('valgt-pris');

// Tilføj klik-event til hvert kort
kort.forEach(k => {
    k.addEventListener('click', () => {

        const pris = k.querySelector('.pris'); // tag fat i alle priser
        const prisTekst = pris.textContent;     // hele teksten fx "250,- pr. reol"

        // Find KUN tal fra pris
        const tal = prisTekst.match(/\d+/g);

        let renPris = 0;

        if (tal) {
            renPris = tal.join(""); // samler tal, fx "250"
        } else {
            renPris = 0; // hvis "Gratis"
        }

        // Skriv det rensede tal i boks2
        output.textContent = renPris + " kr. i tilkøb";
    });
});
