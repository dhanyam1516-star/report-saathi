@echo off
echo ===================================================
echo   Starting ReportSaathi Educational Lab Explainer
echo ===================================================
echo.
echo Opening ReportSaathi in your default browser...
start "" "%~dp0frontend\preview.html"
echo.
echo If you would like to run with Node/Vite instead, run:
echo   cd frontend
echo   npm install
echo   npm run dev
echo.
pause
