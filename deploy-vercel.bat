@echo off
echo ========================================
echo   INTRANET MODERNA - DEPLOY A VERCEL
echo ========================================
echo.
echo Este script sube tu intranet a Vercel
echo para acceso publico desde Internet
echo.
echo IMPORTANTE: Necesitas cuenta en Vercel
echo 1. Ve a https://vercel.com/signup
echo 2. Crea cuenta gratuita
echo 3. Ejecuta este script
echo.
echo ========================================
echo.

REM Configurar PATH
set PATH=C:\Program Files\nodejs;%PATH%

echo Verificando Vercel CLI...
vercel --version >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Vercel CLI no encontrado
    echo Instalando Vercel CLI...
    npm install -g vercel
)

echo.
echo Iniciando deployment a Vercel...
echo.
echo NOTA: En el primer deploy te pedira:
echo - Login con GitHub/Google/Email
echo - Configuracion del proyecto
echo - Nombre del dominio
echo.

REM Deploy a Vercel
vercel --prod

echo.
echo ========================================
echo DEPLOYMENT COMPLETADO
echo ========================================
echo.
echo Tu intranet ahora esta disponible en:
echo https://tu-proyecto.vercel.app
echo.
echo La URL exacta aparecera arriba ↑
echo.
echo Comparte esta URL con quien necesite acceso
echo desde cualquier lugar del mundo!
echo.
pause
