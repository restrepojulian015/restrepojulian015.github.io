# Mi Portafolio - Angular

Un portafolio profesional desarrollado con Angular que muestra mis habilidades, proyectos y experiencia como desarrollador.

## 🚀 Características

- **Diseño Responsive**: Se adapta a todos los dispositivos
- **Navegación Suave**: Scroll suave entre secciones
- **Componentes Modulares**: Estructura organizada y escalable
- **Diseño Moderno**: UI/UX atractivo y profesional
- **SEO Optimizado**: Estructura semántica correcta

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Barra de navegación
│   │   ├── hero/            # Sección principal
│   │   ├── about/           # Sobre mí
│   │   ├── skills/          # Habilidades técnicas y blandas
│   │   ├── projects/        # Proyectos
│   │   ├── certificates/    # Certificados y títulos
│   │   ├── contact/         # Formulario de contacto
│   │   └── footer/          # Pie de página
│   ├── app.ts               # Componente principal
│   ├── app.html             # Template principal
│   └── app.css              # Estilos principales
└── styles.css               # Estilos globales
```

## 🛠️ Tecnologías Utilizadas

- **Angular 17+**: Framework principal
- **TypeScript**: Lenguaje de programación
- **CSS3**: Estilos y animaciones
- **HTML5**: Estructura semántica

## 📝 Personalización

### 1. Información Personal
Edita los siguientes archivos para personalizar tu información:

- `src/app/components/hero/hero.html` - Tu nombre y título
- `src/app/components/about/about.html` - Descripción personal
- `src/app/components/contact/contact.html` - Información de contacto

### 2. Proyectos
Edita `src/app/components/projects/projects.html`:
- Nombres de proyectos
- Descripciones
- Enlaces a GitHub
- Enlaces a demos en vivo

### 3. Habilidades
Edita `src/app/components/skills/skills.html`:
- Nivel de habilidades técnicas
- Habilidades blandas
- Porcentajes de dominio

### 4. Certificados
Edita `src/app/components/certificates/certificates.html`:
- Nombres de certificados
- Instituciones emisoras
- Fechas
- Enlaces de verificación

### 5. Contacto
Edita `src/app/components/contact/contact.html`:
- Email
- Teléfono
- LinkedIn
- GitHub

## 🚀 Instalación y Ejecución

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo**:
   ```bash
   ng serve
   ```

3. **Abrir en el navegador**:
   ```
   http://localhost:4200
   ```

## 📱 Responsive Design

El portafolio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🎨 Personalización de Colores

Los colores principales se pueden modificar en:
- `src/styles.css` - Variables CSS globales
- Cada componente tiene sus propios estilos

## 📤 Despliegue

### GitHub Pages
1. Construir el proyecto:
   ```bash
   ng build --prod
   ```

2. Subir a GitHub y configurar GitHub Pages

### Netlify/Vercel
1. Conectar tu repositorio
2. Configurar build command: `ng build`
3. Configurar output directory: `dist/portfolio`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📞 Contacto

Si tienes preguntas o sugerencias, no dudes en contactarme.

---

**¡Gracias por usar mi portafolio!** 🎉
