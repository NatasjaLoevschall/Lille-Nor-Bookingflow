// Hent pris-feltet nederst i den brune boks
const beloeb = document.getElementById("beloeb");

// Hent tekstfeltet for periode-valg (linjen med ikon 02)
const valg2 = document.getElementById("valg2");

// Start-priser
let pris1 = 0;   // fx pris for reolpakke (kan sættes senere)
let pris2 = 0;   // pris for valgt lejeperiode

// samletPris = pris1 + pris2
let samletPris = pris1 + pris2;

// Skriv start-værdi i <p id="beloeb">
beloeb.innerHTML = samletPris + " kr.";


// -------------------------
// FUNKTION: opdater pris
// -------------------------
function opdaterPris() {
    // Regn samlet pris ud hver gang noget ændrer sig
    samletPris = pris1 + pris2;

    // Skriv den nye pris ud i feltet
    beloeb.innerHTML = samletPris + " kr.";
}


// -------------------------
// EVENT-LISTENERS PÅ KORT
// -------------------------

// Find alle kort (de hvide bokse med uger)
const kort = document.querySelectorAll('.kort');

// Gå igennem hvert kort
kort.forEach(k => {
    // Tilføj en klik-funktion til hvert kort
    k.addEventListener('click', () => {

        // Fjern "aktiv"-klassen fra alle kort (så kun ét kan være markeret)
        kort.forEach(kortEl => kortEl.classList.remove('aktiv'));

        // Tilføj "aktiv" til det kort, der blev klikket på
        k.classList.add('aktiv');

        // Find pris-teksten i det valgte kort (fx "395,- pr. reol")
        const prisEl = k.querySelector('.pris');         
        const prisTekst = prisEl.textContent;

        // Find KUN tal fra pris-teksten (ved hjælp af regex)
        // "395,- pr. reol" -> ["395"]
        const tal = prisTekst.match(/\d+/g);             
        let renPris = 0;

        if (tal) {
            // Saml tallene og lav dem om til et tal
            // ["395"] -> "395" -> 395
            renPris = Number(tal.join(""));              
        } else {
            // Hvis der ingen tal er (fx "Gratis"), så er prisen 0
            renPris = 0;
        }

        // Gem prisen for perioden i pris2
        pris2 = renPris;

        // Find overskriften i kortet (fx "3 uger")
        const overskrift = k.querySelector('h2').textContent;

        // Sæt teksten i linje 02 i den brune boks
        // Vi viser kun "3 uger" – ikke "02 3 uger", fordi 02 er i ikonet
        valg2.textContent = overskrift;

        // Opdater den samlede pris nederst
        opdaterPris();
    });
});
