/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║            OKR-verktøy — Konfigurasjonsfil                   ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * Fyll inn verdiene nedenfor og commit filen til GitHub.
 * Verktøyet leser denne filen automatisk ved oppstart.
 *
 * ──────────────────────────────────────────────────────────────
 *  FREMGANGSMÅTE 
 * ──────────────────────────────────────────────────────────────
 *  1. Fyll inn "owner" og "repo" nedenfor (påkrevd).
 *  2. Juster "branch" og "dataFile" ved behov (valgfritt).
 *  3. Commit og push filen til GitHub.
 *  4. Åpne verktøyet og gå til "Team & GitHub" for å
 *     legge inn Personal Access Token (PAT).
 *
 * ──────────────────────────────────────────────────────────────
 *  PERSONAL ACCESS TOKEN (PAT)
 * ──────────────────────────────────────────────────────────────
 *  PAT legges IKKE inn her av sikkerhetshensyn — den settes
 *  direkte i verktøyet og lagres kryptert i nettleseren.
 *
 *  Slik oppretter du en PAT:
 *    1. Gå til github.com → Settings → Developer settings
 *       → Personal access tokens → Fine-grained tokens
 *    2. Klikk "Generate new token"
 *    3. Gi tokenet tilgang til dette repoet
 *    4. Under "Repository permissions", sett Contents → Read & write
 *    5. Kopier tokenet og lim det inn i verktøyet
 *
 *  Offentlige repos: PAT er kun nødvendig for å SKRIVE data.
 *                    Lesing fungerer uten PAT.
 *  Private repos:    PAT kreves for både lesing og skriving.
 */

window.OKR_CONFIG = {

  github: {

    // ── owner ── PÅKREVD ────────────────────────────────────────
    //
    // GitHub-brukernavnet eller organisasjonsnavnet som eier repoet.
    //
    //   ✅ Riktig:  "jensholmsen"
    //   ✅ Riktig:  "acme-bedrift"
    //   ❌ Feil:    "https://github.com/jensholmsen"  ← ikke URL
    //   ❌ Feil:    "@jensholmsen"                    ← ikke @
    //
    owner: "eGovGeek",

    // ── repo ── PÅKREVD ─────────────────────────────────────────
    //
    // Navnet på GitHub-repoet — kun selve navnet, ikke full URL.
    //
    //   ✅ Riktig:  "okr-tool"
    //   ✅ Riktig:  "team-okr-2026"
    //   ❌ Feil:    "github.com/jens/okr-tool"   ← ikke URL
    //   ❌ Feil:    "jens/okr-tool"              ← ikke eier/repo
    //
    repo: "okt-tool",

    // ── branch ── VALGFRI (standard: "main") ────────────────────
    //
    // Branchen som brukes for lesing og skriving av data.
    // For de fleste repos er dette "main". Eldre repos bruker
    // gjerne "master". Sjekk hva din standardbranch heter på
    // github.com under repoets hovedside.
    //
    branch: "main",

    // ── dataFile ── VALGFRI (standard: "okr-data.json") ─────────
    //
    // Filstien til OKR-datafilen relativt til roten av repoet.
    // Filen opprettes automatisk første gang du trykker
    // "Lagre til GitHub" i verktøyet — du trenger ikke lage den selv.
    //
    //   ✅ Riktig:  "okr-data.json"      ← i rotmappen
    //   ✅ Riktig:  "data/okr.json"      ← i undermappe
    //   ❌ Feil:    "/okr-data.json"     ← ikke ledende skråstrek
    //
    dataFile: "okr-data.json",

  }

};
