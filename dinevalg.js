// ---------------------------------------------------
// FÆLLES FELTER I BEGGE BRUNE BOKSE
// ---------------------------------------------------

// Alle prisfelter (øverste + nederste brune boks)
// Bemærk: vi bruger querySelectorAll("#beloeb") selvom id'er er duplikeret
const prisFelter = document.querySelectorAll("#beloeb");

// Alle "periode"-felter (øverste + nederste brune boks)
const periodeFelter = document.querySelectorAll("#valg2");

// Dato-feltet i den NEDERSTE brune boks
const datoFelt = document.getElementById("valgt-dato");

// Alle kort (1 uge, 2 uger, ...)
const kort = document.querySelectorAll(".kort");


// ---------------------------------------------------
// VARIABLER TIL PRIS
// ---------------------------------------------------

let pris1 = 0;   // pris fra step 1 (kan sættes senere)
let pris2 = 0;   // pris for valgt lejeperiode
let samletPris = pris1 + pris2;


// Skriv startpris i begge prisfelter
opdaterPris();


// ---------------------------------------------------
// FUNKTION: OPDATER PRIS I BEGGE BOKSE
// ---------------------------------------------------
function opdaterPris() {
    samletPris = pris1 + pris2;

    prisFelter.forEach(felt => {
        felt.textContent = samletPris + " kr.";
    });
}


// ---------------------------------------------------
// KLIK PÅ LEJEPERIODE-KORT
// ---------------------------------------------------
kort.forEach(k => {
    k.addEventListener("click", () => {

        // Fjern "aktiv" fra alle kort
        kort.forEach(el => el.classList.remove("aktiv"));

        // Gør det klikkede kort aktivt (til CSS-border osv.)
        k.classList.add("aktiv");

        // Hent pris-teksten inde i kortet
        const prisTekst = k.querySelector(".pris").textContent;

        // Træk tallet ud (fx "395,-" → 395)
        const tal = prisTekst.match(/\d+/g);
        pris2 = Number(tal.join(""));

        // Hent overskriften (fx "4 uger")
        const overskrift = k.querySelector("h2").textContent;

        // Skriv overskriften i BEGGE brune bokse
        periodeFelter.forEach(felt => {
            felt.textContent = overskrift;
        });

        // Opdater prisen i begge bokse
        opdaterPris();
    });
});


// ---------------------------------------------------
// KALENDER: MÅNEDER + DAGE
// ---------------------------------------------------

// Titel (DECEMBER 2025 osv.)
const titel = document.getElementById("maanedTitel");

// Container til alle dage i kalenderen
const kalenderDage = document.querySelector(".kalender-dage");

// Pile til næste / forrige måned
document.getElementById("januarmåned").addEventListener("click", visJanuar);
document.getElementById("decembermåned").addEventListener("click", visDecember);


// ---------------------------------------------------
// HJÆLPEFUNKTION: GIV DAGE KLIK-EVENTS
// ---------------------------------------------------
function tilfoejDagEvents() {
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
            // titel = fx "DECEMBER 2025"
            const [maanedNavn, aar] = titel.textContent.split(" ");
            const dagNr = dag.textContent.trim();

            const tekst = `Startdato: ${dagNr}. ${maanedNavn.toLowerCase()} ${aar}`;

            // Skriv i dato-feltet (kun nederste boks)
            if (datoFelt) {
                datoFelt.textContent = tekst;
            }
        });
    });
}


// ---------------------------------------------------
//  MÅNED: DECEMBER 2025
// ---------------------------------------------------
function visDecember() {
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


// ---------------------------------------------------
//  MÅNED: JANUAR 2026
// ---------------------------------------------------
function visJanuar() {
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

    tilfoejDagEvents();
}


// ---------------------------------------------------
// Vis december med det samme når siden loader
// ---------------------------------------------------
visDecember();