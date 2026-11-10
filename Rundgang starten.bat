@echo off
rem Startet einen kleinen lokalen Webserver und oeffnet den Rundgang im Browser.
rem Fenster offen lassen, solange der Rundgang benutzt wird. Beenden mit Strg+C.
cd /d "%~dp0"
start "" http://localhost:8765/
py -m http.server 8765 --bind 127.0.0.1
