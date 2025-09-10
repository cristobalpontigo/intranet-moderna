# 🏢 Intranet Moderna

Una intranet moderna y profesional construida con **Next.js 14**, **TypeScript**, y **Tailwind CSS** para la gestión de documentos corporativos con sistema de autenticación y panel de administración.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)

## ✨ Características Principales

### 🔐 **Sistema de Autenticación**
- Login seguro con roles de usuario (Admin, Cliente, Usuario)
- Gestión de sesiones con localStorage
- Permisos granulares por usuario
- 5 usuarios de prueba preconfigurados

### 📄 **Visualizador de Documentos**
- Visor de PDF interactivo con zoom
- Descarga de documentos
- Categorización por tipo (Contratos, Facturas, Manuales, etc.)
- Filtros por categoría y búsqueda

### 👑 **Panel de Administración**
- Gestión completa de clientes
- Carga de documentos por cliente
- Asignación de permisos y categorías
- Interface intuitiva para administradores

### 🎨 **Diseño Moderno**
- UI/UX profesional con Tailwind CSS
- Componentes reutilizables con Radix UI
- Responsive design
- Tema corporativo moderno

## 🚀 Instalación y Configuración

### **Prerrequisitos**
- Node.js 18+ 
- npm o yarn
- Git

### **Instalación Rápida**

```bash
# Clonar repositorio
git clone https://github.com/TU-USUARIO/intranet-moderna.git
cd intranet-moderna

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

### **Instalación en Windows**
```bash
# Usar el script de instalación incluido
install.bat
```

## 🔑 Usuarios de Prueba

### **👨‍💼 Administrador**
- **Email**: admin@empresa.com
- **Password**: admin123
- **Permisos**: Acceso completo, panel de administración

### **👤 Cliente Estándar**
- **Email**: cliente@test.com  
- **Password**: cliente123
- **Acceso**: Contratos, Facturas, Reportes

### **👤 Cliente VIP**
- **Email**: vip@cliente.com
- **Password**: vip123  
- **Acceso**: Todas las categorías

### **👨‍💻 Usuario Interno**
- **Email**: usuario@empresa.com
- **Password**: usuario123
- **Acceso**: Contratos, Propuestas, Reportes

### **🎧 Soporte**
- **Email**: soporte@empresa.com
- **Password**: soporte123
- **Acceso**: Manuales, Reportes, Configuración

## 📁 Estructura del Proyecto

```
├── src/
│   ├── app/                 # App Router de Next.js
│   │   ├── dashboard/       # Panel principal
│   │   ├── login/          # Página de autenticación
│   │   └── layout.tsx      # Layout principal
│   ├── components/         # Componentes reutilizables
│   │   ├── ui/            # Componentes base (shadcn/ui)
│   │   ├── AdminPanel.tsx  # Panel de administración
│   │   └── PDFViewer.tsx   # Visor de documentos
│   └── lib/               # Utilidades y lógica
│       ├── auth.ts        # Sistema de autenticación
│       └── utils.ts       # Funciones auxiliares
├── docs/                  # Documentación
├── public/               # Archivos estáticos
└── README.md            # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 14 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes**: Radix UI + shadcn/ui
- **Iconos**: Lucide React
- **Autenticación**: Sistema propio con bcryptjs
- **Estado**: React Hooks + localStorage

## 📖 Guías de Uso

### **Para Usuarios**
1. Accede con tus credenciales
2. Navega por los documentos disponibles
3. Usa los filtros y búsqueda
4. Visualiza y descarga documentos según tus permisos

### **Para Administradores**
1. Accede con credenciales de admin
2. Haz clic en el botón "Admin" 
3. Selecciona un cliente de la lista
4. Carga nuevos documentos o gestiona existentes

Ver [GUIA-ADMINISTRACION.md](./GUIA-ADMINISTRACION.md) para instrucciones detalladas.

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo

# Producción  
npm run build        # Construir para producción
npm run start        # Servidor de producción

# Utilidades
npm run lint         # Linter de código
```

## 📋 Funcionalidades por Implementar

- [ ] Base de datos real (PostgreSQL/MongoDB)
- [ ] API REST para documentos
- [ ] Carga real de archivos PDF
- [ ] Notificaciones en tiempo real
- [ ] Historial de actividades
- [ ] Backup automático
- [ ] Integración con SSO

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de features (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

- 📧 Email: soporte@empresa.com
- 📖 Documentación: [INSTALL-WINDOWS.md](./INSTALL-WINDOWS.md)
- 👥 Usuarios de prueba: [USUARIOS-TESTEO.md](./USUARIOS-TESTEO.md)

---

**¡Desarrollado con ❤️ para una gestión documental moderna y eficiente!**
