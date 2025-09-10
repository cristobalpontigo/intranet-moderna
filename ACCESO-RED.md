# 🌐 ACCESO DESDE OTROS PCs - Guía de Testeo

## 📋 **Información de Acceso**

### **🔗 URLs de Acceso:**
- **Acceso Local**: http://localhost:3000
- **Acceso desde la Red**: http://192.168.100.73:3000
- **Nombre del PC**: http://%COMPUTERNAME%:3000

### **📱 Dispositivos Compatibles:**
- 💻 **PCs con Windows**
- 🖥️ **PCs con Mac/Linux** 
- 📱 **Teléfonos móviles**
- 📱 **Tablets**
- 🌐 **Cualquier dispositivo con navegador web**

---

## 👥 **Usuarios de Prueba Disponibles**

### **🔑 Credenciales para Testing:**

#### **👨‍💼 Administrador (Acceso Completo)**
- **Email**: admin@empresa.com
- **Password**: admin123
- **Permisos**: 
  - ✅ Ver todos los documentos
  - ✅ Panel de administración
  - ✅ Gestión de usuarios
  - ✅ Carga de documentos

#### **👤 Cliente Estándar**  
- **Email**: cliente@test.com
- **Password**: cliente123
- **Permisos**:
  - ✅ Ver documentos: Contratos, Facturas, Reportes
  - ✅ Descargar documentos
  - ❌ Sin acceso al panel de admin

#### **👤 Cliente VIP**
- **Email**: vip@cliente.com  
- **Password**: vip123
- **Permisos**:
  - ✅ Acceso a todas las categorías de documentos
  - ✅ Permisos especiales de descarga e impresión
  - ✅ Vista premium del dashboard

#### **👨‍💻 Usuario Interno**
- **Email**: usuario@empresa.com
- **Password**: usuario123  
- **Permisos**:
  - ✅ Ver documentos: Contratos, Propuestas, Reportes
  - ✅ Funciones básicas del sistema

#### **🎧 Soporte Técnico**
- **Email**: soporte@empresa.com
- **Password**: soporte123
- **Permisos**:
  - ✅ Ver documentos: Manuales, Reportes, Configuración
  - ✅ Acceso a documentación técnica

---

## 🚀 **Instrucciones para Testers**

### **Paso 1: Conectarse**
1. Abrir cualquier navegador web
2. Ir a: **http://192.168.100.73:3000**
3. Esperar a que cargue la página de login

### **Paso 2: Iniciar Sesión**
1. Elegir uno de los usuarios de prueba de arriba
2. Introducir email y password
3. Hacer clic en "Iniciar Sesión"

### **Paso 3: Explorar Funcionalidades**
1. **Dashboard**: Ver estadísticas y documentos disponibles
2. **Búsqueda**: Usar filtros por categoría
3. **Visualización**: Hacer clic en "Ver" para abrir documentos
4. **Descarga**: Usar botón "Descargar" (según permisos)
5. **Admin Panel**: Solo para usuario admin - botón "Admin" arriba a la derecha

---

## 🔧 **Funcionalidades a Probar**

### **📊 Dashboard**
- ✅ Estadísticas de documentos
- ✅ Filtros por categoría  
- ✅ Búsqueda en tiempo real
- ✅ Vista responsiva en móviles

### **📄 Visor de Documentos**
- ✅ Apertura de documentos PDF simulados
- ✅ Controles de zoom (50% - 200%)
- ✅ Descarga de documentos
- ✅ Cierre del visor

### **👑 Panel de Administración** (Solo admin)
- ✅ Lista de clientes
- ✅ Búsqueda de clientes
- ✅ Carga de documentos por cliente
- ✅ Gestión de permisos

### **🔐 Sistema de Autenticación**
- ✅ Login/logout funcional
- ✅ Validación de credenciales
- ✅ Permisos por rol de usuario
- ✅ Sesiones de 24 horas

---

## 📱 **Compatibilidad de Dispositivos**

### **✅ Navegadores Soportados:**
- 🌐 Google Chrome (Recomendado)
- 🦊 Mozilla Firefox  
- 📘 Microsoft Edge
- 🍎 Safari (Mac/iOS)
- 📱 Navegadores móviles

### **📏 Resoluciones Testadas:**
- 📱 **Móvil**: 375px - 768px
- 📱 **Tablet**: 768px - 1024px  
- 💻 **Desktop**: 1024px+
- 🖥️ **Pantalla Grande**: 1440px+

---

## 🆘 **Soporte durante Testing**

### **❓ Si Tienes Problemas:**
1. **No carga la página**: Verificar que estés en la misma red WiFi
2. **Error de conexión**: Probar con http://192.168.100.73:3000
3. **Login no funciona**: Usar exactamente los emails/passwords de arriba
4. **Documentos no se ven**: Es normal, son simulados para testing

### **📞 Contacto:**
- **Email**: admin@empresa.com
- **Responsable**: Administrador del Sistema
- **Estado**: 🟢 Servidor activo para testing

---

## 🎯 **Objetivos del Testing**

### **Probar:**
- ✅ **Usabilidad**: ¿Es fácil de usar?
- ✅ **Responsividad**: ¿Se ve bien en tu dispositivo?
- ✅ **Performance**: ¿Carga rápidamente?
- ✅ **Funcionalidad**: ¿Todos los botones funcionan?
- ✅ **Autenticación**: ¿El login/logout funciona correctamente?

### **Reportar:**
- 🐛 **Errores encontrados**
- 💡 **Sugerencias de mejora**
- 📱 **Problemas de compatibilidad**
- ⚡ **Problemas de rendimiento**

---

**🎉 ¡Gracias por ayudar a testear la Intranet Moderna!**

*Última actualización: Septiembre 2025*
