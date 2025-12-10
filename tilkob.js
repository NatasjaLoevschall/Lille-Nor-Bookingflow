// Find alle ledige stande (dem du kan klikke på)

const ledigeStande = document.querySelectorAll('.ledig');

// Hvor tallet skal skrives hen
const valgtStand = document.getElementById('valgt-stand');

// Tilføj klik-event til hver ledig stand
ledigeStande.forEach(stand => {

    stand.addEventListener('click', () => {

        // Hent teksten inde i standen, fx "12"
        const tekst = stand.textContent;

        // Find KUN tal i teksten
        const fundneTal = tekst.match(/\d+/g);

        let renTal = "";

        if (fundneTal) {
            renTal = fundneTal.join(""); // fx "12"
        }

        // Skriv tallet i boks2
        valgtStand.textContent = "Valgt stand: " + renTal;
    });
});

// Find alle kort i vælg dine køb
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
            renPris = tal.join(""); // hvis det er tal så bliver RenPris til tallet fx "250"
        } else {
            renPris = 0; // hvis det ikke er tal så bliver renPris 0 / "Gratis"
        }

        // Skriv det rensede tal i boks2
        output.textContent = "Valg af tilkøb: " + renPris + " kr.";
    });
});
