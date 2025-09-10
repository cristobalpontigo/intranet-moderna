# 🚀 Guía de Instalación para Windows

## Paso 1: Instalar Node.js

### Opción A: Descarga Directa (Recomendado)
1. Visita https://nodejs.org/
2. Descarga la versión **LTS** (Long Term Support)
3. Ejecuta el instalador (.msi)
4. Sigue el asistente de instalación
5. **Importante:** Marca la casilla "Automatically install the necessary tools"

### Opción B: Con Chocolatey (Si tienes Chocolatey instalado)
```powershell
choco install nodejs
```

### Opción C: Con Winget
```powershell
winget install OpenJS.NodeJS
```

## Paso 2: Verificar la Instalación

Después de instalar, **reinicia tu terminal de PowerShell** y ejecuta:

```powershell
node --version
npm --version
```

Deberías ver algo como:
```
v20.x.x
10.x.x
```

## Paso 3: Instalar Dependencias del Proyecto

Una vez que Node.js esté instalado:

```powershell
# Navegar al directorio del proyecto (si no estás ya ahí)
cd "C:\Users\Programador\Desktop\PROGRAMACION\INTRANET"

# Instalar dependencias
npm install
```

## Paso 4: Ejecutar el Proyecto

```powershell
# Modo desarrollo
npm run dev

# El proyecto estará disponible en:
# http://localhost:3000
```

## ⚠️ Solución de Problemas

### Si Node.js no se reconoce después de la instalación:
1. **Reinicia completamente VS Code**
2. **Reinicia tu terminal PowerShell**
3. Verifica que Node.js esté en el PATH:
   ```powershell
   $env:PATH -split ';' | Where-Object { $_ -like "*node*" }
   ```

### Si hay problemas con permisos:
```powershell
# Ejecuta PowerShell como administrador y ejecuta:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Instalación alternativa sin instalador:
1. Descarga el archivo ZIP de Node.js
2. Extrae en `C:\nodejs`
3. Añade `C:\nodejs` a tu variable PATH

## 🎯 Una Vez Funcionando

Cuando tengas Node.js instalado y `npm install` ejecutado correctamente, podrás:

1. **Ejecutar en desarrollo:** `npm run dev`
2. **Ver el login:** http://localhost:3000
3. **Acceder al dashboard:** http://localhost:3000/dashboard
4. **Compilar para producción:** `npm run build`

## 📞 Si Necesitas Ayuda

- Verifica que tu versión de Windows sea compatible
- Asegúrate de tener permisos de administrador si es necesario
- Reinicia tu computadora después de la instalación si persisten los problemas
