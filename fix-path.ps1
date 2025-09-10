# Script para configurar Node.js PATH permanentemente
Write-Host "🔧 Configurando Node.js PATH..." -ForegroundColor Yellow

# Verificar si Node.js ya está en el PATH
if (Get-Command "node" -ErrorAction SilentlyContinue) {
    Write-Host "✅ Node.js ya está configurado en el PATH" -ForegroundColor Green
    node --version
    npm --version
} else {
    Write-Host "⚙️ Configurando PATH de Node.js..." -ForegroundColor Yellow
    
    # Agregar Node.js al PATH del usuario actual
    $nodePath = "C:\Program Files\nodejs"
    $currentPath = [Environment]::GetEnvironmentVariable("PATH", "User")
    
    if ($currentPath -notlike "*$nodePath*") {
        $newPath = "$nodePath;$currentPath"
        [Environment]::SetEnvironmentVariable("PATH", $newPath, "User")
        Write-Host "✅ PATH configurado correctamente" -ForegroundColor Green
        Write-Host "⚠️ IMPORTANTE: Reinicia VS Code para aplicar los cambios" -ForegroundColor Yellow
    } else {
        Write-Host "✅ Node.js ya está en el PATH del usuario" -ForegroundColor Green
    }
    
    # Agregar al PATH de la sesión actual
    $env:PATH = "$nodePath;" + $env:PATH
    Write-Host "✅ PATH actualizado para la sesión actual" -ForegroundColor Green
}

# Verificar que todo funcione
Write-Host ""
Write-Host "🔍 Verificando instalación:" -ForegroundColor Cyan
Write-Host "Node.js version:" -ForegroundColor White
node --version
Write-Host "npm version:" -ForegroundColor White
npm --version

Write-Host ""
Write-Host "🚀 Ahora puedes ejecutar:" -ForegroundColor Green
Write-Host "   npm run dev" -ForegroundColor White
Write-Host ""
