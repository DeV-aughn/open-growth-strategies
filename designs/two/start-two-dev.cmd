@echo off
title Design Two (dev, live reload) - Open Growth Strategies
cd /d "%~dp0"
echo.
echo   ============================================
echo     DESIGN TWO  -  DEV MODE (live reload)
echo   ============================================
echo.
echo   Opens automatically at:  http://localhost:5173/
echo.
echo   Every component I add appears here instantly.
echo   Keep THIS window open while we work.
echo   Close it (or Ctrl+C) to stop.
echo.
echo   --------------------------------------------
echo.
call npm run dev
echo.
echo   Dev server stopped. Press any key to close.
pause >nul
