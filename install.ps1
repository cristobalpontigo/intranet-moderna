# Instalador PowerShell para Intranet
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "      INSTALADOR INTRANET - WINDOWS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Función para verificar si un comando existe
function Test-CommandExists {
    param($command)
    $null = Get-Command $command -ErrorAction SilentlyContinue
    return $?
}

# Verificar si Node.js está instalado
Write-Host "🔍 Verificando si Node.js está instalado..." -ForegroundColor Yellow

if (Test-CommandExists "node") {
    $nodeVersion = node --version
    Write-Host "✅ Node.js ya está instalado: $nodeVersion" -ForegroundColor Green
    
    # Verificar npm
    if (Test-CommandExists "npm") {
        $npmVersion = npm --version
        Write-Host "✅ npm está disponible: $npmVersion" -ForegroundColor Green
    } else {
        Write-Host "❌ npm no está disponible" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "❌ Node.js no está instalado" -ForegroundColor Red
    Write-Host ""
    Write-Host "📥 Opciones para instalar Node.js:" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Opción 1: Instalación manual"
    Write-Host "  1. Visita https://nodejs.org/"
    Write-Host "  2. Descarga la versión LTS"
    Write-Host "  3. Ejecuta el instalador"
    Write-Host "  4. Reinicia PowerShell y ejecuta este script nuevamente"
    Write-Host ""
    
    # Verificar si Chocolatey está disponible
    if (Test-CommandExists "choco") {
        Write-Host "Opción 2: Con Chocolatey (detectado)" -ForegroundColor Green
        $choice = Read-Host "¿Quieres instalar Node.js con Chocolatey? (y/n)"
        if ($choice -eq "y" -or $choice -eq "Y") {
            Write-Host "🔄 Instalando Node.js con Chocolatey..." -ForegroundColor Yellow
            choco install nodejs -y
            Write-Host "✅ Node.js instalado. Reinicia PowerShell y ejecuta este script nuevamente." -ForegroundColor Green
            pause
            exit 0
        }
    }
    
    # Verificar si Winget está disponible
    if (Test-CommandExists "winget") {
        Write-Host "Opción 3: Con Winget (detectado)" -ForegroundColor Green
        $choice = Read-Host "¿Quieres instalar Node.js con Winget? (y/n)"
        if ($choice -eq "y" -or $choice -eq "Y") {
            Write-Host "🔄 Instalando Node.js con Winget..." -ForegroundColor Yellow
            winget install OpenJS.NodeJS
            Write-Host "✅ Node.js instalado. Reinicia PowerShell y ejecuta este script nuevamente." -ForegroundColor Green
            pause
            exit 0
        }
    }
    
    Write-Host ""
    Write-Host "Por favor instala Node.js manualmente desde https://nodejs.org/" -ForegroundColor Red
    pause
    exit 1
}

Write-Host ""
Write-Host "📦 Instalando dependencias del proyecto..." -ForegroundColor Yellow

try {
    npm install
    Write-Host "✅ Dependencias instaladas correctamente!" -ForegroundColor Green
} catch {
    Write-Host "❌ Error al instalar dependencias: $_" -ForegroundColor Red
    pause
    exit 1
}

Write-Host ""
Write-Host "🎉 ¡Instalación completada exitosamente!" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 Para ejecutar el proyecto:" -ForegroundColor Cyan
Write-Host "   npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "🌐 El proyecto estará disponible en:" -ForegroundColor Cyan
Write-Host "   http://localhost:3000" -ForegroundColor White
Write-Host ""
Write-Host "📋 Páginas disponibles:" -ForegroundColor Cyan
Write-Host "   • Login: http://localhost:3000/login" -ForegroundColor White
Write-Host "   • Dashboard: http://localhost:3000/dashboard" -ForegroundColor White
Write-Host ""

$choice = Read-Host "¿Quieres ejecutar el servidor de desarrollo ahora? (y/n)"
if ($choice -eq "y" -or $choice -eq "Y") {
    Write-Host "🚀 Iniciando servidor de desarrollo..." -ForegroundColor Yellow
    npm run dev
} else {
    Write-Host "👍 Perfecto! Ejecuta 'npm run dev' cuando quieras iniciar el servidor." -ForegroundColor Green
    pause
}
