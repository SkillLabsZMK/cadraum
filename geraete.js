// Beschriftungen und Erklaerungstexte fuer den Rundgang.
// Diese Datei kann frei bearbeitet werden: name = Beschriftung im Raum,
// kategorie = kleine Zeile darueber, text = Erklaerung beim Hovern,
// punkte = Stichpunkte (optional). Die Schluessel (matik, form3bl, ...) nicht aendern.
window.CAM_GERAETE = {
  matik: {
    name: "Ceramill Matik",
    kategorie: "Fräsen · Amann Girrbach",
    text: "Vollautomatische Fräs- und Schleifeinheit. Die Matik verwaltet Rohlinge und Werkzeuge selbst und kann dadurch viele Aufträge nacheinander ohne Eingriff abarbeiten.",
    punkte: ["Integriertes Rohlingslager mit automatischem Wechsel", "Nass- und Trockenbearbeitung", "Materialien u. a. Zirkonoxid, PMMA, Wachs, Glaskeramik"]
  },
  pc: {
    name: "CAM-Arbeitsplatz",
    kategorie: "Steuerung",
    text: "PC-Arbeitsplatz neben der Matik zur Auftragsvorbereitung und Maschinensteuerung: Aufträge einlesen, Rohlinge zuweisen, Fräsjobs starten und überwachen.",
    punkte: []
  },
  sauger: {
    name: "Nass-/Trockensauger",
    kategorie: "Reinigung",
    text: "Industriesauger zur Reinigung von Fräsraum, Arbeitsflächen und Boden.",
    punkte: []
  },
  therm3: {
    name: "Ceramill Therm 3",
    kategorie: "Sintern · Amann Girrbach",
    text: "Hochtemperatur-Sinterofen für Zirkonoxid. Gefräste Restaurationen erhalten hier ihre endgültige Dichte, Festigkeit und Transluzenz.",
    punkte: ["Sintert gefräste Zirkonoxid-Arbeiten aus der Matik", "Im Betrieb und beim Abkühlen heiß – nur nach Einweisung bedienen"]
  },
  xtool: {
    name: "xTool S1",
    kategorie: "Lasern",
    text: "Geschlossener Dioden-Lasercutter und -gravierer. Schneidet und graviert u. a. Holz, Acryl und Leder; darüber sitzt die Absaughaube für Rauch und Dämpfe.",
    punkte: ["Betrieb nur mit geschlossenem Deckel und laufender Absaugung", "Nie unbeaufsichtigt laufen lassen (Brandgefahr)"]
  },
  waschbecken: {
    name: "Waschbecken / Erste Hilfe",
    kategorie: "Sicherheit",
    text: "Handwaschbecken direkt neben der Tür mit Augenspülstation, Erste-Hilfe-Kasten sowie Seifen- und Desinfektionsspender.",
    punkte: ["Augenspülflaschen bei Kontakt mit Harz oder Isopropanol", "Hände nach der Arbeit mit Harz gründlich waschen"]
  },
  psa: {
    name: "Info-Monitor & Schutzausrüstung",
    kategorie: "Sicherheit",
    text: "Stirnseite des Raumteilers: Info-Monitor, Handschuhspender in mehreren Größen und Atemschutzmasken. Schutzbrillen und weitere Handschuhe liegen im Regal dahinter.",
    punkte: ["Nitrilhandschuhe bei allen Arbeiten mit Harz", "Schutzbrille tragen"]
  },
  muell: {
    name: "Abfalltrennung",
    kategorie: "Entsorgung",
    text: "Rollbare Sammelbehälter für Kunststoff, Restmüll und Papier/Karton.",
    punkte: []
  },
  formcurel: {
    name: "Form Cure L",
    kategorie: "Nachhärten · Formlabs",
    text: "Großes Nachhärtegerät. Gewaschene Druckteile werden hier mit Licht und Wärme ausgehärtet und erreichen erst dadurch ihre endgültigen Materialeigenschaften.",
    punkte: ["Passend für Teile aus dem Form 3BL", "Drehteller für gleichmäßige Belichtung"]
  },
  formcure: {
    name: "Form Cure",
    kategorie: "Nachhärten · Formlabs",
    text: "Kompaktes Nachhärtegerät für Teile aus dem Form 3B. Härtet mit 405-nm-Licht und Wärme nach den Vorgaben des jeweiligen Harzes.",
    punkte: []
  },
  a1_regal: {
    name: "Bambu Lab A1 Combo",
    kategorie: "FDM-Druck · Bambu Lab",
    text: "Offener FDM-Drucker (Filamentdruck) mit AMS lite für bis zu vier Farben oder Materialien. Geeignet für Hilfsteile, Halterungen und Anschauungsmodelle.",
    punkte: ["Bauraum 256 × 256 × 256 mm", "Zweites Gerät dieses Typs steht auf der Arbeitsplatte"]
  },
  a1_platte: {
    name: "Bambu Lab A1 Combo",
    kategorie: "FDM-Druck · Bambu Lab",
    text: "Offener FDM-Drucker (Filamentdruck) mit AMS lite für bis zu vier Farben oder Materialien. Geeignet für Hilfsteile, Halterungen und Anschauungsmodelle.",
    punkte: ["Bauraum 256 × 256 × 256 mm", "Zweites Gerät dieses Typs steht im Raumteiler-Regal"]
  },
  form3b_ost: {
    name: "Form 3B",
    kategorie: "SLA-Druck · Formlabs",
    text: "Dentaler Stereolithografie-Drucker. Ein Laser härtet flüssiges Kunstharz Schicht für Schicht aus – für Modelle, Schienen, Bohrschablonen und provisorische Versorgungen.",
    punkte: ["Bauraum 145 × 145 × 185 mm", "Nach dem Druck: Waschen (Form Wash) und Nachhärten (Form Cure)"]
  },
  form3b_west: {
    name: "Form 3B",
    kategorie: "SLA-Druck · Formlabs",
    text: "Dentaler Stereolithografie-Drucker. Ein Laser härtet flüssiges Kunstharz Schicht für Schicht aus – für Modelle, Schienen, Bohrschablonen und provisorische Versorgungen.",
    punkte: ["Bauraum 145 × 145 × 185 mm", "Nach dem Druck: Waschen (Form Wash) und Nachhärten (Form Cure)"]
  },
  p1s: {
    name: "Bambu Lab P1S Combo",
    kategorie: "FDM-Druck · Bambu Lab",
    text: "Geschlossener FDM-Drucker mit aufgesetztem AMS für bis zu vier Filamente. Das geschlossene Gehäuse erlaubt auch anspruchsvollere Materialien.",
    punkte: ["Bauraum 256 × 256 × 256 mm", "Automatischer Filamentwechsel über das AMS"]
  },
  form3bl: {
    name: "Form 3BL",
    kategorie: "SLA-Druck · Formlabs",
    text: "Großformatiger dentaler Stereolithografie-Drucker. Druckt viele Modelle oder große Teile in einem Durchgang.",
    punkte: ["Bauraum 335 × 200 × 300 mm", "Nach dem Druck: Form Wash L und Form Cure L"]
  },
  formwashl: {
    name: "Form Wash L",
    kategorie: "Waschen · Formlabs",
    text: "Großes Waschgerät für Teile aus dem Form 3BL. Entfernt flüssige Harzreste automatisch im Lösungsmittelbad.",
    punkte: ["Deckel geschlossen halten – Lösungsmitteldämpfe"]
  },
  abzug: {
    name: "Laborabzug mit Nachbearbeitung",
    kategorie: "Nachbearbeitung",
    text: "Abzug für alle Arbeiten mit Isopropanol und flüssigem Harz: Teile von der Bauplattform lösen, spülen, mit Druckluft trocknen und Stützstrukturen entfernen.",
    punkte: ["Frontschieber so weit wie möglich geschlossen halten", "Unterbau: Sicherheitsschrank für brennbare Flüssigkeiten"]
  },
  formwash: {
    name: "Form Wash (2×)",
    kategorie: "Waschen · Formlabs",
    text: "Zwei Waschgeräte im Abzug für Teile aus dem Form 3B. Die Bauplattform wird eingehängt, die Teile werden automatisch gewaschen und anschließend aus dem Bad gehoben.",
    punkte: []
  },
  lichtschalter: {
    name: "Lichtschalter",
    kategorie: "Ansicht",
    text: "Dieser Schalter neben der Tür schaltet die Foto-Texturen im ganzen Raum an und aus: Foto-Ansicht für den realistischen Eindruck, Modell-Ansicht für die klare Übersicht.",
    punkte: ["Anklicken zum Umschalten", "Dasselbe macht der Knopf „Fotos“ oben"]
  },
  wandschrank: {
    name: "Wandschrank Formlabs-Zubehör",
    kategorie: "Lager",
    text: "Wandschrank über dem Form Wash L. Anklicken öffnet die Klappen nach oben, ein weiterer Klick schließt sie wieder.",
    punkte: ["Zubehör und Verbrauchsmaterial für die Formlabs-Drucker"]
  },
  material: {
    name: "Materialschränke",
    kategorie: "Lager",
    text: "Lager für Verbrauchsmaterial. Anklicken öffnet die Türen, ein weiterer Klick schließt sie wieder.",
    punkte: ["Links: Formlabs-Material – Harztanks, Harzkartuschen, Bauplattformen und Materialschachteln",
             "Rechts: Filamente – PLA, PETG und gemischte Spulen",
             "Harze lichtgeschützt und verschlossen lagern"]
  }
};
