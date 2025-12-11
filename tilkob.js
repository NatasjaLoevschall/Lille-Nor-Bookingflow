
// ---------------------------------------------------
// FÆLLES FELTER I BRUNE BOKSE
// ---------------------------------------------------

// Alle prisfelter (øverste + nederste brune boks)
const prisFelter = document.querySelectorAll("#beloeb");

// Alle "periode"-felter (øverste + nederste brune boks)
const periodeFelter = document.querySelectorAll("#valg2");

// Alle "reolpakke"-felter (øverste + nederste brune boks)
const reolFelter = document.querySelectorAll("#valg1");

// Dato-feltet i den nederste brune boks (ved kalenderen)
const datoFelt = document.getElementById("valgt-dato");

// ---------------------------------------------------
// VARIABLER TIL PRIS (KUN LEJEPERIODE)
// ---------------------------------------------------

let prisLejeperiode = 0;   // pris for valgt lejeperiode (uger)
let samletPris = prisLejeperiode;


// ---------------------------------------------------
// FUNKTION: OPDATER PRIS I BEGGE BOKSE
// ---------------------------------------------------
function opdaterPris() {
    samletPris = prisLejeperiode;

    prisFelter.forEach(felt => {
        felt.textContent = samletPris + " kr.";
    });
}

// skriv startpris (0 kr.) i begge bokse, hvis de findes
opdaterPris();


// ---------------------------------------------------
// STEP 2 – VÆLG LEJEPERIODE (".kort")
// (TEKST + PRIS)
// ---------------------------------------------------

const kort1 = document.querySelectorAll(".kort1");
// Find knappen
const knap1 = document.querySelector("#knap1");

// Find baggrundscirkel2 (sektion med tilkøb)
const kalender = document.getElementById("baggrundscirkel3");

kort1.forEach(k => {
    k.addEventListener("click", () => {

        // Fjern aktiv styling fra alle kort
        kort1.forEach(el => el.classList.remove("aktiv"));

        // Gør det klikkede kort aktivt
        k.classList.add("aktiv");

        // Hent prisen som tekst (fx "395,-")
        const prisTekst = k.querySelector(".pris")?.textContent || "";

        // Træk alle tal ud af teksten (fx "395,-" → ["395"])
        const tal = prisTekst.match(/\d+/g);

        // Lav det om til et rigtigt tal
        prisLejeperiode = tal ? Number(tal.join("")) : 0;

        // Hent overskriften fra kortet (fx "4 uger")
        const overskrift = k.querySelector("h2")?.textContent || "";

        // Skriv overskriften ind i alle "valg2"-felter
        periodeFelter.forEach(felt => {
            felt.textContent = overskrift || "Ingen periode valgt";
        });

        // Opdater prisen i begge bokse (pris = kun lejeperiode)
        opdaterPris();
    });
});
// Klik på knap1 → scroll til næste sektion
knap1.addEventListener("click", () => {

    kalender.scrollIntoView({ behavior: "smooth" });
});



// ---------------------------------------------------
// STEP 3 – KALENDER: MÅNEDER + DATO-VALG
// ---------------------------------------------------

// Titel (fx "DECEMBER 2025")
const titel = document.getElementById("maanedTitel");

// Container til alle dage i kalenderen
const kalenderDage = document.querySelector(".kalender-dage");

// Pile til næste / forrige måned (kan være null på nogle sider)
const nextBtn = document.getElementById("januarmåned");
const prevBtn = document.getElementById("decembermåned");

// Find knappen
const knap2 = document.querySelector("#knap2");

// Find baggrundscirkel4 (sektion med tilkøb)
const stand = document.getElementById("baggrundscirkel4");


// Hjælpefunktion: giv alle dage klik-events
function tilfoejDagEvents() {
    if (!kalenderDage) return;

    const dage = kalenderDage.querySelectorAll(".dag");

    dage.forEach(dag => {
        dag.addEventListener("click", () => {

            // Hvis dagen er optaget, gør ingenting
            if (dag.classList.contains("dag-optaget")) return;

            // Fjern "valgt-dag" fra alle dage
            dage.forEach(d => d.classList.remove("valgt-dag"));

            // Marker den valgte dag
            dag.classList.add("valgt-dag");

            // Lav tekst til den brune boks
            const [maanedNavn, aar] = (titel?.textContent || "").split(" ");
            const dagNr = dag.textContent.trim();

            const tekst = `Startdato: ${dagNr}. ${maanedNavn?.toLowerCase()} ${aar || ""}`;

            // Skriv i dato-feltet i nederste boks, hvis den findes
            if (datoFelt) {
                datoFelt.textContent = tekst;
            }
        });
    });
}
// Klik på knap2 → scroll til næste sektion
knap2.addEventListener("click", () => {

    stand.scrollIntoView({ behavior: "smooth" });
});
// --------------------------
//  MÅNED: DECEMBER 2025
// --------------------------
function visDecember() {
    if (!titel || !kalenderDage) return;

    titel.textContent = "DECEMBER 2025";

    kalenderDage.innerHTML = `
        <div class="dag dag-optaget">1</div>
        <div class="dag dag-optaget">2</div>
        <div class="dag dag-optaget">3</div>
        <div class="dag dag-optaget">4</div>
        <div class="dag dag-optaget">5</div>
        <div class="dag dag-optaget">6</div>
        <div class="dag dag-ledig">7</div>

        <div class="dag dag-ledig">8</div>
        <div class="dag dag-ledig">9</div>
        <div class="dag dag-ledig">10</div>
        <div class="dag dag-ledig">11</div>
        <div class="dag dag-ledig">12</div>
        <div class="dag dag-ledig">13</div>
        <div class="dag dag-optaget">14</div>

        <div class="dag dag-ledig">15</div>
        <div class="dag dag-ledig">16</div>
        <div class="dag dag-ledig">17</div>
        <div class="dag dag-ledig">18</div>
        <div class="dag dag-ledig">19</div>
        <div class="dag dag-ledig">20</div>
        <div class="dag dag-optaget">21</div>

        <div class="dag dag-ledig">22</div>
        <div class="dag dag-ledig">23</div>
        <div class="dag dag-optaget">24</div>
        <div class="dag dag-optaget">25</div>
        <div class="dag dag-optaget">26</div>
        <div class="dag dag-ledig">27</div>
        <div class="dag dag-ledig">28</div>

        <div class="dag dag-ledig">29</div>
        <div class="dag dag-ledig">30</div>
        <div class="dag dag-ledig">31</div>
    `;

    tilfoejDagEvents();
}


// --------------------------
//  MÅNED: JANUAR 2026
// --------------------------
function visJanuar() {
    if (!titel || !kalenderDage) return;

    titel.textContent = "JANUAR 2026";

    kalenderDage.innerHTML = `
        <div class="dag dag-optaget">1</div>
        <div class="dag dag-optaget">2</div>
        <div class="dag dag-optaget">3</div>
        <div class="dag dag-ledig">4</div>
        <div class="dag dag-ledig">5</div>
        <div class="dag dag-optaget">6</div>
        <div class="dag dag-ledig">7</div>

        <div class="dag dag-ledig">8</div>
        <div class="dag dag-optaget">9</div>
        <div class="dag dag-optaget">10</div>
        <div class="dag dag-optaget">11</div>
        <div class="dag dag-optaget">12</div>
        <div class="dag dag-ledig">13</div>
        <div class="dag dag-ledig">14</div>

        <div class="dag dag-ledig">15</div>
        <div class="dag dag-ledig">16</div>
        <div class="dag dag-optaget">17</div>
        <div class="dag dag-optaget">18</div>
        <div class="dag dag-ledig">19</div>
        <div class="dag dag-ledig">20</div>
        <div class="dag dag-ledig">21</div>

        <div class="dag dag-ledig">22</div>
        <div class="dag dag-ledig">23</div>
        <div class="dag dag-optaget">24</div>
        <div class="dag dag-optaget">25</div>
        <div class="dag dag-optaget">26</div>
        <div class="dag dag-ledig">27</div>
        <div class="dag dag-ledig">28</div>

        <div class="dag dag-ledig">29</div>
        <div class="dag dag-ledig">30</div>
        <div class="dag dag-ledig">31</div>
    `;
    // Tilføj klik-events til de nyligt indsatte dage
    tilfoejDagEvents();
}

// tilføj event listeners til pilene (hvis de findes)
if (nextBtn) nextBtn.addEventListener('click', () => {
  visJanuar();
});
if (prevBtn) prevBtn.addEventListener('click', () => {
  visDecember();
});

// DECEMBER vises som standard NÅR SIDEN ÅBNES
visDecember();



// Find alle ledige stande (dem du kan klikke på)
const ledigeStande = document.querySelectorAll('.ledig');

// Hvor tallet skal skrives hen
const valgtStand = document.getElementById('valgt-stand');

// Find knappen
const knap3 = document.querySelector("#knap3");

// Find baggrundscirkel5 (sektion med tilkøb)
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
knap3.addEventListener("click", () => {

    tilkobSektion.scrollIntoView({ behavior: "smooth" });
});


// Find alle kort i tilkøb
const kort = document.querySelectorAll('.kort');
const output = document.getElementById('valgt-pris');

// Find knap2
const knap4 = document.querySelector("#knap4");

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
knap4.addEventListener("click", () => {

    oplysningsSektion.scrollIntoView({ behavior: "smooth" });
});