@echo off
cd /d "%~dp0"
echo Starting Joy Ogaya Realty website at http://127.0.0.1:5500/
echo Keep this window open while previewing the site.
py -m http.server 5500 --bind 127.0.0.1
