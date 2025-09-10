# 📋 Intranet - Portal de Documentos

Una aplicación web moderna para que los clientes puedan acceder y visualizar documentos PDF de manera segura y eficiente.

## 🚀 Características

### ✨ Diseño Moderno
- Interfaz limpia y profesional
- Diseño responsive para todos los dispositivos
- Componentes UI construidos con Tailwind CSS y shadcn/ui
- Temas claro/oscuro

### 🔐 Sistema de Autenticación
- Login seguro con validación
- Gestión de sesiones
- Protección de rutas

### 📊 Dashboard Interactivo
- Panel de control con estadísticas
- Búsqueda y filtrado de documentos
- Visualización de archivos PDF
- Descarga de documentos
- Categorización de archivos

### 🏗️ Arquitectura Técnica
- **Frontend:** Next.js 14 + TypeScript + React
- **Estilos:** Tailwind CSS
- **Componentes:** shadcn/ui + Radix UI
- **Iconos:** Lucide React
- **Autenticación:** NextAuth.js (preparado)
- **Visor PDF:** React-PDF

## 📋 Prerequisitos

Antes de instalar, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión 18.0 o superior)
- npm, yarn, pnpm o bun

## 🛠️ Instalación

1. **Clona el repositorio:**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd intranet-clientes
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Ejecuta el servidor de desarrollo:**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Abre tu navegador:**
   Visita [http://localhost:3000](http://localhost:3000)

## 📂 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── login/             # Página de inicio de sesión
│   ├── dashboard/         # Panel principal
│   ├── layout.tsx         # Layout raíz
│   ├── page.tsx          # Página de inicio
│   └── globals.css       # Estilos globales
├── components/
│   └── ui/               # Componentes UI reutilizables
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
└── lib/
    └── utils.ts          # Utilidades
```

## 🎨 Componentes UI

El proyecto utiliza componentes UI modernos y accesibles:

- **Button:** Botones con múltiples variantes y tamaños
- **Card:** Tarjetas para organizar contenido
- **Input:** Campos de entrada con validación
- **Iconos:** Set completo de iconos con Lucide React

## 🔧 Configuración de Desarrollo

### Scripts Disponibles

- `npm run dev` - Servidor de desarrollo con Turbopack
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

### Variables de Entorno

Crea un archivo `.env.local` para variables de entorno:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=tu_secret_key_aqui
DATABASE_URL=tu_database_url_aqui
```

## 🚀 Próximas Características

### Backend API Integration
- [ ] Conexión con API para autenticación
- [ ] Integración con base de datos
- [ ] Sistema de subida de archivos
- [ ] Gestión de usuarios y permisos

### Funcionalidades Avanzadas
- [ ] Visor de PDF integrado
- [ ] Sistema de comentarios en documentos
- [ ] Notificaciones en tiempo real
- [ ] Historial de actividades
- [ ] Búsqueda avanzada con filtros
- [ ] Exportación de reportes

### Mejoras UI/UX
- [ ] Modo oscuro
- [ ] Arrastrar y soltar archivos
- [ ] Vista previa de documentos
- [ ] Favoritos y marcadores
- [ ] Shortcuts de teclado

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1440px+)

## 🛡️ Seguridad

- Validación de formularios
- Protección CSRF
- Sanitización de inputs
- Headers de seguridad configurados
- Autenticación segura preparada

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Añade nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Soporte

Si tienes preguntas o necesitas soporte:
- 📧 Email: soporte@empresa.com
- 💬 Chat: Sistema de chat interno
- 📞 Teléfono: +34 XXX XXX XXX

---

**Desarrollado con ❤️ para una mejor experiencia de gestión documental**
