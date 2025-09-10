@echo off
echo ==============================================
echo 🚀 DESPLEGANDO A GITHUB PAGES
echo ==============================================

echo.
echo 📦 Construyendo aplicacion para produccion...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Error en el build
    pause
    exit /b %errorlevel%
)

echo.
echo 📄 Creando archivo .nojekyll...
echo. > out\.nojekyll

echo.
echo 📋 Contenido generado en carpeta 'out':
dir out

echo.
echo 📤 Subiendo cambios a GitHub...
git add .
git commit -m "Deploy: Configuracion para GitHub Pages"
git push origin main

echo.
echo ==============================================
echo ✅ ¡DESPLEGADO EXITOSAMENTE!
echo ==============================================
echo.
echo 🌐 Tu intranet estara disponible en:
echo https://cristobalpontigo.github.io/intranet-moderna
echo.
echo ⏱️  GitHub Pages puede tardar unos minutos en actualizar
echo.
pause
