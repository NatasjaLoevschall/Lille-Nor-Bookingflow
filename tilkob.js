// Find alle ledige stande (dem du kan klikke på)
const ledigeStande = document.querySelectorAll('.ledig');

// Hvor tallet skal skrives hen
const valgtStand = document.getElementById('valgt-stand');

// Find knappen
const knap = document.querySelector("#knap button");

// Find baggrundscirkel2 (sektion med tilkøb)
const tilkobSektion = document.getElementById("baggrundscirkel5");


// Klik på en stand
ledigeStande.forEach(stand => {

    stand.addEventListener('click', () => {

        // Find tallet
        const tekst = stand.textContent;
        const fundneTal = tekst.match(/\d+/g);
        let renTal = fundneTal ? fundneTal.join("") : "";

        // Sæt teksten
        valgtStand.textContent = "Valgt stand: " + renTal;

        // Vis visuelt valgt stand
        ledigeStande.forEach(s => s.classList.remove('valgt'));
        stand.classList.add('valgt');
    });
});


// Klik på knap1 → scroll til næste sektion
knap.addEventListener("click", () => {

    tilkobSektion.scrollIntoView({ behavior: "smooth" });
});


// Find alle kort i tilkøb
const kort = document.querySelectorAll('.kort');
const output = document.getElementById('valgt-pris');

// Find knap2
const knap2 = document.querySelector("#knap2 button");

// Find baggrundscirkel3 (sektion med tilkøb)
const oplysningsSektion = document.getElementById("container-oplysninger");

// Klik på kort
kort.forEach(k => {

    k.addEventListener('click', () => {

        const pris = k.querySelector('.pris').textContent;
        const tal = pris.match(/\d+/g);
        const renPris = tal ? tal.join("") : 0;

        output.textContent = "Valg af tilkøb: " + renPris + " kr.";

        // Fjern valgt fra alle kort
        kort.forEach(kortEl => kortEl.classList.remove('valgtkort'));

        // Tilføj valgt til det kort du klikkede på
        k.classList.add('valgtkort');
    });
});

// Klik på knap2 → scroll til næste sektion
knap2.addEventListener("click", () => {

    oplysningsSektion.scrollIntoView({ behavior: "smooth" });
});