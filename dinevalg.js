// -------------------------
// HENT HTML-ELEMENTER
// -------------------------

// Prisfeltet nederst
const beloeb = document.getElementById("beloeb");

// Tekstfelt ved ikon 02
const valg2 = document.getElementById("valg2");

// Alle kort (1 uge, 2 uger, osv.)
const kort = document.querySelectorAll(".kort");


// -------------------------
// VARIABLER
// -------------------------

let pris1 = 0;        // pris fra step 1 (kommer senere)
let pris2 = 0;        // pris for valgt lejeperiode
let samletPris = pris1 + pris2;


// Skriv startpris
beloeb.textContent = samletPris + " kr.";


// -------------------------
// FUNKTION: OPDATER PRIS
// -------------------------

function opdaterPris() {
    samletPris = pris1 + pris2;
    beloeb.textContent = samletPris + " kr.";
}


// -------------------------
// EVENTLISTENERS PÅ KORT
// -------------------------

kort.forEach(k => {
    k.addEventListener("click", () => {

        // Fjern aktiv styling fra alle kort
        kort.forEach(el => el.classList.remove("aktiv"));

        // Gør det klikkede kort aktivt
        k.classList.add("aktiv");

        // Hent prisen som tekst
        const prisTekst = k.querySelector(".pris").textContent;

        // Træk alle tal ud af teksten
        // Fx "395,- pr. reol" → ["395"]
        const tal = prisTekst.match(/\d+/g);

        // Lav det om til et rigtigt tal
        pris2 = Number(tal.join(""));

        // Hent overskriften fra kortet
        const overskrift = k.querySelector("h2").textContent;

        // Skriv overskriften ind i boks2
        valg2.textContent = overskrift;

        // Opdater prisen i boks2
        opdaterPris();
    });
});