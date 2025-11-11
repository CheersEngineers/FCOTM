```markdown
### Versionhallinta

| Versio | Päivämäärä | Muokkaaja | Muutokset | Kommentit |
|--------|------------|----------:|----------|-----------|
| 1.0 | 1.11.2025 | Jonas Christiansen | Alkuperäinen versio | + Git repo luotu |
| 1.1 | 1.11.2025 | Jonas Christiansen | Sivut + sisältö | - |
| 1.11 | 1.11.2025 | Jonas Christiansen | Koodin siistiminen ja some ikonit | - |
| 1.12 | 1.11.2025 | Jonas Christiansen | Maakunnat lomakkeeseen | Pieni päivitys |
| 1.13 | 2.11.2025 | Heidi Hekkala | Muokattu turnauslomaketta | Lisätty osoite-kenttä ja kentille required |
| 1.14 | 2.11.2025 | Heidi Hekkala | Lomakkeen ja linkkien tekstit: "turnauksen ilmoittautuminen" → "turnauksen ilmoittaminen" | - |
| 1.15 | 2.11.2025 | Mirva Koivusipilä | SCRUM-10 mukaiset päivitykset sivustoon | Aikajakson suodatusominaisuuteen lisättävä alku- ja päättymispäivä |
| 1.16 | 3.11.2025 | Heidi Hekkala | Lisätty "tyhjennä"-painike lomakesivuille. | Painiketta muokattava, en saanut vielä samankokoiseksi kuin viereiset painikkeet |
| 1.17 | 3.11.2025 | Heidi Hekkala | Poistettu etusivulta ylimääräinen "lisää turnaus"-lomake | - |
| 1.18 | 4.11.2025 | Mirva Koivusipilä | Lisätty alku- ja lopetuspäivämäärät ajanjakson suodatusominaisuuteen etusivulle sekä lisätty turnauksen ilmoittamisen lomakkeeseen mahdollisuus ilmoittaa aloituspäivämäärä(required) ja lopetuspäivämäärä | Joukkueen ilmoittamisen lomakkeesta puuttuu turnauksen tunnistetiedot, mihin halutaan ilmottautua (?) |
| 1.19 | 4.11.2025 | Milja Kivijärvi | Lisätty asteriskit (tähdet) turnaukseen ilmoittautumiselle (joukkueen ilmoittautuminen) ja laitettu lomakkeelle placeholdereita | - |
| 1.2 | 4.11.2025 | Mirva Koivusipilä | Lisätty hae-painike suodattimiin | - |
| 1.21 | 5.11.2025 | Heidi Hekkala | Lisätty ilmoittutumissivulle Valitse turnaus -valikko | Lomakkeiden kenttien ulkonäkö ei vielä yhtenäinen |
| 1.22 | 5.11.2025 | Heidi Hekkala | Ilmoittautumissivun kenttävalidointien päivitys | - |
| 1.23 | 9.11.2025 | Mirva Koivusipilä | Lisätty suodattimiin kentät turnauksen nimi, sukupuoli ja turnauksen taso + lisätty form suodattimien ympärille | - |
| 1.24 | 10.11.2025 | Heidi Hekkala | Yhtenäistetty lomakkeiden kenttien ulkonäköä (fontit, paddingit, marginaalit, asteriskien muotoilu)| Fontit ja värit vaihdetaan vielä myöhemmin Palloliiton brändiohjeistuksen mukaisiksi |
| 1.3 | 10.11.2025 | Heidi Hekkala | Värit ja fontit Palloliiton ohjeistuksen mukaisiksi | Tarkistettava vielä saavutettavuustyökaluilla |
| 1.31 | 10.11.2025 | Heidi Hekkala | Painikkeiden hover-väritystä hieman tummennettu | - |
| 1.32 | 10.11.2025 | Milja Kivijärvi | Burger-valikon tekstien värit (ei focus tai hover) muutettu valkoisesta tummemman sinisiksi | Valkoinen teksti valkoisella pohjalla huomattu saavutettavuustarkistuksen yhteydessä |
| 1.33 | 10.11.2025 | Mirva Koivusipilä | Korjaukset lomakkeiden kenttiin | - |
| 1.34 | 10.11.2025 | Jonas Christiansen | Pallo pyörimään | tärkeä ominaisuus |
| 1.4 | 11.11.2025 | Heidi Hekkala | Tehty kirjautuminen.html + Naviin vaihdettu linkki + kirjautumissivulta pääsy admin.html -sivulle + värien hienosäätöä | Kirjautumislomakkeen muotoilu kesken + siirtyminen hallintasivulle toimii toistaiseksi ilman kirjautumistietoja, koska painike on vain linkki. |
| 1.41 | 11.11.2025 | Jonas Christiansen | Suodattimet siirretty lomakkeen keskelle pois sidebarista ja korjattu skaalautuvuus. | Suodattimen kentät venytetty skalautumista varten, voidaan palauttaa lyhkäsemmiksi tarvittaessa. |

---

### Päivitysohje (lyhyt)
- Kun teet muutoksen tiedostoon, luo uusi versiorivi taulukkoon.  
- Versioformaatiksi suositeltu: major.minor (esim. 2.1). Päivitä major-numero isossa muutoksessa tai julkaisussa.  
- Kirjoita lyhyt, selkeä muutoskuvaus ja lisää tarvittaessa kommentti (esim. linkki issueen tai PR:ään).  
- Commit-viestiin: "Päivitä VERSION.md — versio X.Y" ja avaa PR tai push suoraan projektikäytännön mukaan.
```