// Verbindung zum Google Kalender des Skillab-Kontos.
//  - "demo": Buchungen nur zum Ausprobieren im Browser (nichts wird gespeichert).
//  - Web-App-URL des Apps-Scripts (https://script.google.com/macros/s/.../exec): echter Kalender.
//  - "" (leer): Kalenderfunktion aus.
window.CAM_KALENDER_URL = "https://script.google.com/macros/s/AKfycbx0QsfSC4ITbC1AHm0b3GAAbTbbVOO5Ize8lURRy3D7KqmbQWip8urlwspvcSYsGa_X/exec";

// Diese Geraete sind buchbar (Schluessel wie in geraete.js und kalender/Code.gs).
// Drucker, Sinterofen und Lasergravierer.
window.CAM_BUCHBAR = ["therm3", "xtool", "form3bl", "form3b_west", "form3b_ost", "p1s", "a1_platte", "a1_regal"];
