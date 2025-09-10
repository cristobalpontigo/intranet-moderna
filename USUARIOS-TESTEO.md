# 👨‍💼 Usuarios de Testeo - Intranet

## 🔐 Credenciales de Acceso

### 🔴 **Administrador**
- **Email:** `admin@empresa.com`
- **Contraseña:** `admin123`
- **Rol:** Administrador del Sistema
- **Empresa:** Empresa Principal
- **Permisos:** Acceso completo (lectura, escritura, eliminación, gestión de usuarios, gestión de documentos)
- **Categorías de acceso:** Todas (Contratos, Manuales, Facturas, Propuestas, Reportes, Configuración)

---

### 🔵 **Cliente Estándar**
- **Email:** `cliente@test.com`
- **Contraseña:** `cliente123`
- **Rol:** Cliente
- **Empresa:** Cliente Test S.A.
- **Departamento:** Compras
- **Permisos:** Lectura y descarga
- **Categorías de acceso:** Contratos, Facturas, Propuestas

---

### 🟢 **Usuario Interno**
- **Email:** `usuario@empresa.com`
- **Contraseña:** `usuario123`
- **Rol:** Usuario Interno
- **Empresa:** Empresa Principal
- **Departamento:** Ventas
- **Permisos:** Lectura, escritura y descarga
- **Categorías de acceso:** Contratos, Propuestas, Reportes

---

### 🟣 **Cliente VIP**
- **Email:** `gerente@cliente.com`
- **Contraseña:** `gerente123`
- **Rol:** Cliente VIP
- **Empresa:** Cliente VIP Corp
- **Departamento:** Gerencia
- **Permisos:** Lectura, descarga y solicitud de documentos
- **Categorías de acceso:** Contratos, Manuales, Facturas, Propuestas, Reportes

---

### 🟡 **Soporte Técnico**
- **Email:** `soporte@empresa.com`
- **Contraseña:** `soporte123`
- **Rol:** Soporte
- **Empresa:** Empresa Principal
- **Departamento:** Soporte Técnico
- **Permisos:** Lectura, escritura y gestión de documentos
- **Categorías de acceso:** Manuales, Reportes, Configuración

---

## 🎯 **Cómo Probar**

1. **Abrir la aplicación:** http://localhost:3000
2. **Acceder al login:** Se redirige automáticamente
3. **Mostrar usuarios de prueba:** Hacer clic en "Mostrar Usuarios de Prueba"
4. **Login rápido:** Hacer clic en cualquier usuario para autocompletar
5. **Explorar el dashboard:** Cada usuario verá diferentes documentos según sus permisos

## 📋 **Diferencias por Rol**

### **Administrador** ve:
- ✅ Todos los documentos (6 documentos)
- ✅ Todas las categorías
- ✅ Botones de Ver y Descargar
- ✅ Información completa del perfil

### **Cliente** ve:
- ⚠️ Solo documentos de sus categorías permitidas
- ⚠️ Botones limitados según permisos
- ⚠️ Badge de "Cliente" en el header

### **Usuario Interno** ve:
- ✅ Documentos según su departamento
- ✅ Permisos de escritura (preparado para futuras funcionalidades)
- ✅ Badge de "Usuario" en el header

### **Soporte** ve:
- 🔧 Solo documentos técnicos
- 🔧 Acceso a configuración
- 🔧 Capacidades de gestión de documentos

## 🔄 **Funcionalidades Implementadas**

- ✅ **Autenticación real** con validación de credenciales
- ✅ **Gestión de sesiones** con expiración automática
- ✅ **Control de permisos** por rol y usuario
- ✅ **Filtrado de documentos** según acceso del usuario
- ✅ **Interfaz personalizada** según el rol
- ✅ **Botones de acción** según permisos
- ✅ **Información del usuario** en el header
- ✅ **Logout seguro** con limpieza de sesión

## 🚀 **Próximos Pasos**

- **Backend API** - Conectar con base de datos real
- **Visor PDF** - Implementar visualización de documentos
- **Upload de archivos** - Sistema de carga
- **Notificaciones** - Alertas en tiempo real
- **Logs de actividad** - Registro de acciones del usuario

---

**¡Prueba con diferentes usuarios para ver cómo cambia la experiencia según el rol!** 👨‍💼👩‍💼
