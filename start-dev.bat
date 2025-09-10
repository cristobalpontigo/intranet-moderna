@echo off
echo ========================================
echo        INTRANET MODERNA - SERVIDOR
echo ========================================
echo.
echo Configurando Node.js...
set PATH=C:\Program Files\nodejs;%PATH%
echo.
echo Iniciando servidor de desarrollo...
echo.
echo ACCESO LOCAL: http://localhost:3000
echo.
for /f "tokens=2 delims=:" %%i in ('ipconfig ^| findstr /i "IPv4"') do (
    for /f "tokens=1" %%j in ("%%i") do (
        echo ACCESO RED:   http://%%j:3000
    )
)
echo.
echo Para detener: Ctrl+C
echo ========================================
echo.

npm run dev
