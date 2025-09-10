@echo off
echo ========================================
echo     INTRANET MODERNA - ACCESO PUBLICO
echo ========================================
echo.
echo Este script expone la intranet a Internet
echo usando ngrok (tunel seguro)
echo.
echo IMPORTANTE: 
echo - Necesitas tener ngrok instalado
echo - Descargalo de: https://ngrok.com/download
echo - Crea cuenta gratuita en ngrok.com
echo.
echo ========================================

REM Verificar si ngrok esta instalado
where ngrok >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: ngrok no esta instalado
    echo.
    echo 1. Ve a https://ngrok.com/download
    echo 2. Descarga ngrok para Windows
    echo 3. Extrae el archivo ngrok.exe a C:\Windows\System32\
    echo 4. Crea cuenta gratuita en ngrok.com
    echo 5. Ejecuta: ngrok authtoken TU_TOKEN
    echo.
    pause
    exit /b 1
)

echo Iniciando tunel ngrok...
echo.
echo Una vez iniciado, ngrok te dara una URL publica
echo Ejemplo: https://abc123.ngrok.io
echo.
echo Esta URL sera accesible desde cualquier lugar del mundo
echo.

REM Exponer puerto 3000 a Internet
ngrok http 3000
