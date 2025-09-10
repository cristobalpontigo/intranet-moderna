# 🐙 ACCESO MEDIANTE GITHUB

## 🎯 **Opciones de GitHub disponibles:**

### **1. 📄 GitHub Pages (Recomendado - Gratis)**
- **URL**: https://cristobalpontigo.github.io/intranet-moderna  
- **Costo**: 100% Gratis
- **Configuración**: ✅ Ya configurado
- **SSL**: ✅ HTTPS automático

### **2. 🚀 GitHub Codespaces (Desarrollo)**
- **URL**: `https://[codigo]-3000.preview.app.github.dev`
- **Costo**: 120 horas gratis/mes
- **Ideal**: Testing y desarrollo

---

## 🛠️ **Desplegar a GitHub Pages**

### **Método 1: Script Automático (Fácil)**
```bash
# Ejecutar script de deploy
deploy-github.bat
```

### **Método 2: Manual**
```bash
# 1. Construir aplicación
npm run build

# 2. Crear archivo .nojekyll
echo. > out\.nojekyll

# 3. Subir cambios
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

---

## ⚙️ **Configurar GitHub Pages**

### **En GitHub.com:**
1. Ve a: https://github.com/cristobalpontigo/intranet-moderna
2. **Settings** → **Pages**  
3. **Source**: Deploy from a branch
4. **Branch**: `main` / `/ (root)`
5. **Save**

### **Activar GitHub Actions:**
1. **Actions** → **Enable Actions**
2. El workflow se ejecutará automáticamente

---

## 🌐 **URLs de Acceso**

### **📱 Desarrollo (Red Local):**
```
http://192.168.100.73:3000
```

### **🌍 Producción (GitHub Pages):**  
```
https://cristobalpontigo.github.io/intranet-moderna
```

### **⚡ Development (Codespaces):**
```
1. Ir a: https://github.com/cristobalpontigo/intranet-moderna
2. Código → Codespaces → Create codespace
3. En terminal: npm run dev  
4. Abrir puerto 3000 (público)
5. URL: https://[codigo]-3000.preview.app.github.dev
```

---

## 👥 **Usuarios de Prueba Disponibles**

Una vez desplegado, estos usuarios funcionarán en GitHub Pages:

| Usuario | Contraseña | Rol |
|---------|------------|-----|
| `admin` | `admin123` | Administrador |
| `cliente1` | `pass123` | Cliente |
| `clientevip` | `vip123` | Cliente VIP |
| `usuario` | `user123` | Usuario |
| `soporte` | `support123` | Soporte |

---

## 🔄 **Flujo de Trabajo**

### **Desarrollo Local:**
1. `npm run dev` → http://192.168.100.73:3000
2. Hacer cambios
3. Probar localmente

### **Deploy a Producción:**
1. `deploy-github.bat` → Construir y subir
2. GitHub Actions → Deploy automático
3. Disponible en: https://cristobalpontigo.github.io/intranet-moderna

---

## ✅ **Ventajas de GitHub Pages**

- ✅ **100% Gratis** (sin límites)
- ✅ **HTTPS automático** y seguro
- ✅ **CDN global** (rápido mundialmente)
- ✅ **URL personalizada** posible
- ✅ **Deploy automático** con git push
- ✅ **No requiere servidor** ni mantenimiento
- ✅ **Backup automático** en GitHub

---

## 🚀 **¿Listo para desplegar?**

```bash
# Ejecuta este comando para deployar ahora:
deploy-github.bat
```

**Tu intranet estará disponible mundialmente en:**  
**https://cristobalpontigo.github.io/intranet-moderna**

---

## 🔧 **Troubleshooting**

### **Si GitHub Pages no funciona:**
1. Verificar que GitHub Actions esté habilitado
2. Revisar configuración en Settings → Pages  
3. Esperar 5-10 minutos para propagación
4. Revisar build logs en Actions

### **Si hay errores de build:**
```bash
# Probar build local primero
npm run build

# Si funciona local, subir cambios
git add .
git commit -m "Fix build"  
git push origin main
```
