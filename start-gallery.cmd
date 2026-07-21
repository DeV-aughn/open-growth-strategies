@echo off
title Design Gallery - Open Growth Strategies
cd /d "%~dp0"
echo.
echo   ============================================
echo     DESIGN GALLERY
echo   ============================================
echo.
echo   Open this in your browser:
echo.
echo       http://localhost:4321/
echo.
echo   Keep THIS window open while you browse.
echo   Close it (or press Ctrl+C) to stop the server.
echo.
echo   --------------------------------------------
echo.
node serve.mjs
echo.
echo   Server stopped. Press any key to close.
pause >nul
