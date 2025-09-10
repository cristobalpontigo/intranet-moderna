@echo off
echo ========================================
echo      INSTALADOR INTRANET - WINDOWS
echo ========================================
echo.

REM Verificar si Node.js ya está instalado
echo Verificando si Node.js está instalado...
node --version >nul 2>&1
if %errorlevel% == 0 (
    echo ✅ Node.js ya está instalado
    node --version
    goto :install_deps
) else (
    echo ❌ Node.js no encontrado
    goto :install_node
)

:install_node
echo.
echo 📥 Node.js necesita ser instalado manualmente
echo.
echo Por favor:
echo 1. Visita https://nodejs.org/
echo 2. Descarga la versión LTS
echo 3. Ejecuta el instalador
echo 4. Reinicia este script
echo.
pause
exit /b 1

:install_deps
echo.
echo 📦 Instalando dependencias del proyecto...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Error al instalar dependencias
    pause
    exit /b 1
)

echo.
echo ✅ ¡Instalación completada!
echo.
echo 🚀 Para ejecutar el proyecto:
echo    npm run dev
echo.
echo 🌐 El proyecto estará disponible en:
echo    http://localhost:3000
echo.
pause
