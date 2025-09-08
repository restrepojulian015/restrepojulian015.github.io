import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TranslationService {
  currentLanguage = signal("es");

  translations = {
    es: {
      // Navbar
      nav: {
        home: "Inicio",
        about: "Sobre Mí",
        skills: "Habilidades",
        projects: "Proyectos",
        certificates: "Certificados",
        contact: "Contacto"
      },
      // Hero
      hero: {
        greeting: "Hola, soy Julián Andrés Restrepo",
        title: "Desarrollador Full-Stack",
        description: "Estudiante de Ingeniería de Sistemas apasionado por crear soluciones digitales innovadoras. Especializado en JavaScript,PostgreSQL, MySQL, Node.js, Express, MongoDB y React. Comprometido con el aprendizaje continuo y el desarrollo de aplicaciones robustas.",
        viewProjects: "Ver Proyectos",
        contact: "Contactar"
      },
      // About
      about: {
        title: "Sobre Mí",
        description1: "Soy Julián Andrés Restrepo, estudiante de pregrado en Ingeniería de Sistemas en la Universidad EAN en Bogotá, Colombia. Actualmente estoy cursando mi carrera académica (2023 - Presente) y me he especializado en desarrollo backend junior.",
        description2: "Mi pasión por la tecnología me ha llevado a participar in bootcamps de inteligencia artificial y obtener certificaciones en desarrollo Full-Stack y AWS Foundations. Mi objetivo es construir al menos cuatro proyectos para mi portafolio, demostrando mis habilidades técnicas y mi capacidad para resolver problemas complejos.",
        stats: {
          years: "Años de Estudio",
          projects: "Proyectos Objetivo",
          commitment: "Compromiso"
        }
      },
      // Skills
      skills: {
        title: "Mis Habilidades",
        technical: "Conocimientos Técnicos",
        soft: "Habilidades Blandas",
        softSkills: {
          problemSolving: "Resolución de Problemas",
          problemSolvingDesc: "Capacidad para analizar y resolver problemas complejos de manera eficiente",
          teamwork: "Trabajo en Equipo",
          teamworkDesc: "Excelente comunicación y colaboración en entornos de desarrollo",
          learning: "Aprendizaje Continuo",
          learningDesc: "Comprometido con el desarrollo profesional y la actualización constante",
          timeManagement: "Gestión del Tiempo",
          timeManagementDesc: "Organización eficiente para cumplir objetivos y deadlines",
          creativity: "Creatividad",
          creativityDesc: "Enfoque innovador para encontrar soluciones únicas",
          adaptability: "Adaptabilidad",
          adaptabilityDesc: "Flexibilidad para trabajar con nuevas tecnologías y metodologías"
        }
      },
      // Projects
      projects: {
        title: "Mis Proyectos",
        viewCode: "Ver Código",
        viewDemo: "Ver Demo",
        items: [
          {
            title: "Sistema de Inventario PYMES",
            description: "Sistema completo de gestión de inventario para pequeñas y medianas empresas. Permite el control de stock, gestión de productos, proveedores y generación de reportes. Desarrollado con una arquitectura robusta y base de datos SQL.",
            tech: ["SQL", "Backend", "Gestión", "Reportes"],
            codeUrl: "https://github.com/restrepojulian015/Sistema-de-inventario-para",
            demoUrl: ""
          },
          {
            title: "Gestor Finanzas Personales",
            description: "Dashboard completo para la gestión de finanzas personales con PostgreSQL. Incluye seguimiento de ingresos y gastos, categorización, presupuestos y generación de informes. Utiliza particiones de tabla para un rendimiento óptimo con grandes volúmenes de datos.",
            tech: ["PostgreSQL", "SQL", "Stored Procedures", "Dashboard"],
            codeUrl: "https://github.com/restrepojulian015/Gestor_finanzas_personales",
            demoUrl: ""
          },
          {
            title: "Pistacherito",
            description: "Página web para Pistacherito, una marca de regalos artesanales basados en frutos secos premium. Incluye catálogo de productos, información sobre la empresa y formulario de contacto. Diseño moderno y responsivo que destaca los productos naturales.",
            tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
            codeUrl: "https://github.com/restrepojulian015/pistacherito-website",
            demoUrl: "https://restrepojulian015.github.io/pistacherito-website/"
          },
          {
            title: "Clínica Acme",
            description: "Sistema de gestión hospitalaria completo desarrollado con Node.js, Express y MongoDB. Incluye gestión de pacientes, doctores, citas médicas, medicamentos y consultorios. Genera reportes HTML automáticos y procesa archivos CSV para la carga masiva de datos.",
            tech: ["Node.js", "Express", "MongoDB", "CSV Processing", "HTML Reports"],
            codeUrl: "https://github.com/restrepojulian015/Examne_Node_restrepo_julian",
            demoUrl: ""
          },
          {
            title: "Acme Back",
            description: "API REST robusta construida con Node.js y Express, con base de datos MongoDB. Implementa patrones de diseño, validación de datos y operaciones CRUD completas. Sistema de autenticación y manejo seguro de errores.",
            tech: ["Node.js", "Express", "MongoDB", "REST API", "JWT"],
            codeUrl: "https://github.com/restrepojulian015/NodeProject",
            demoUrl: ""
          }
        ]
      },
      // Certificates
      certificates: {
        title: "Certificados y Títulos",
        verify: "Verificar",
        items: [
          {
            title: "Pregrado en Ingeniería de Sistemas",
            issuer: "Universidad EAN",
            date: "2023 - Presente",
            description: "Estudiante activo del programa de Ingeniería de Sistemas en Bogotá, Colombia. Formación integral en desarrollo de software, bases de datos y arquitectura de sistemas.",
            icon: "🎓"
          },
          {
            title: "Técnico en Desarrollo Backend Junior",
            issuer: "Campuslands",
            date: "2024 - 2025",
            description: "Certificación en desarrollo backend con enfoque en Node.js, Express, MongoDB y arquitectura de APIs. Desarrollo de proyectos reales y mejores prácticas de programación.",
            icon: "💻"
          },
          {
            title: "Bootcamp en Inteligencia Artificial",
            issuer: "Talento Tech - Universidad San José",
            date: "Julio 2025 - Presente",
            description: "Programa intensivo en inteligencia artificial, machine learning y aplicaciones prácticas de IA. Desarrollo de proyectos con tecnologías emergentes.",
            icon: "🤖"
          },
          {
            title: "Desarrollo Full-Stack Junior en JavaScript",
            issuer: "CodeSignal",
            date: "2024",
            description: "Certificación en desarrollo full-stack con JavaScript, incluyendo frontend y backend. Validación de habilidades técnicas y resolución de problemas de programación.",
            icon: "🚀"
          },
          {
            title: "AWS Foundations",
            issuer: "AWS Academy",
            date: "2024",
            description: "Certificación en fundamentos de Amazon Web Services. Conocimientos en servicios cloud, infraestructura como servicio y mejores prácticas de AWS.",
            icon: "☁️"
          }
        ]
      },
      // Contact
      contact: {
        title: "Contacto",
        subtitle: "¡Hablemos!",
        description: "Estoy siempre abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente o quieres conectar, no dudes en contactarme.",
        email: "Correo Electrónico",
        phone: "Teléfono",
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn",
        github: "GitHub",
        form: {
          name: "Nombre",
          namePlaceholder: "Tu nombre",
          email: "Correo Electrónico",
          emailPlaceholder: "tu@email.com",
          subject: "Asunto",
          subjectPlaceholder: "Asunto del mensaje",
          message: "Mensaje",
          messagePlaceholder: "Tu mensaje...",
          send: "Enviar Mensaje"
        },
        contactNote: "Estoy siempre abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente o quieres conectar, no dudes en contactarme a través de cualquiera de los medios disponibles.",
        linkedinLabel: "Perfil de LinkedIn",
        githubLabel: "Perfil de GitHub"
      },
      // Footer
      footer: {
        description: "Desarrollador Full-Stack apasionado por crear soluciones digitales innovadoras. Estudiante de Ingeniería de Sistemas comprometido con el aprendizaje continuo.",
        quickLinks: "Enlaces Rápidos",
        home: "Inicio",
        about: "Sobre Mí",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
        socialMedia: "Redes Sociales",
        rights: "Todos los derechos reservados.",
        linkedinLabel: "Perfil de LinkedIn",
        githubLabel: "Perfil de GitHub"
      }
    },
    en: {
      // Navbar
      nav: {
        home: "Home",
        about: "About Me",
        skills: "Skills",
        projects: "Projects",
        certificates: "Certificates",
        contact: "Contact"
      },
      // Hero
      hero: {
        greeting: "Hello, I am Julián Andrés Restrepo",
        title: "Full-Stack Developer",
        description: "Systems Engineering student passionate about creating innovative digital solutions. Specialized in JavaScript, PostgreSQL, MySQL, Node.js, Express, MongoDB and React. Committed to continuous learning and developing robust applications.",
        viewProjects: "View Projects",
        contact: "Contact"
      },
      // About
      about: {
        title: "About Me",
        description1: "I am Julián Andrés Restrepo, an undergraduate student in Systems Engineering at EAN University in Bogotá, Colombia. I am currently pursuing my academic career (2023 - Present) and have specialized in junior backend development.",
        description2: "My passion for technology has led me to participate in artificial intelligence bootcamps and obtain certifications in Full-Stack development and AWS Foundations. My goal is to build at least four projects for my portfolio, demonstrating my technical skills and ability to solve complex problems.",
        stats: {
          years: "Years of Study",
          projects: "Target Projects",
          commitment: "Commitment"
        }
      },
      // Skills
      skills: {
        title: "My Skills",
        technical: "Technical Knowledge",
        soft: "Soft Skills",
        softSkills: {
          problemSolving: "Problem Solving",
          problemSolvingDesc: "Ability to analyze and solve complex problems efficiently",
          teamwork: "Teamwork",
          teamworkDesc: "Excellent communication and collaboration in development environments",
          learning: "Continuous Learning",
          learningDesc: "Committed to professional development and constant updating",
          timeManagement: "Time Management",
          timeManagementDesc: "Efficient organization to meet objectives and deadlines",
          creativity: "Creativity",
          creativityDesc: "Innovative approach to finding unique solutions",
          adaptability: "Adaptability",
          adaptabilityDesc: "Flexibility to work with new technologies and methodologies"
        }
      },
      // Projects
      projects: {
        title: "My Projects",
        viewCode: "View Code",
        viewDemo: "View Demo",
        items: [
          {
            title: "SME Inventory System",
            description: "Complete inventory management system for small and medium-sized businesses. Allows stock control, product management, suppliers, and report generation. Developed with a robust architecture and SQL database.",
            tech: ["SQL", "Backend", "Management", "Reports"],
            codeUrl: "https://github.com/restrepojulian015/Sistema-de-inventario-para",
            demoUrl: ""
          },
          {
            title: "Personal Finance Manager",
            description: "Complete dashboard for personal finance management with PostgreSQL. Includes income and expense tracking, categorization, budgets, and report generation. Uses table partitioning for optimal performance with large data volumes.",
            tech: ["PostgreSQL", "SQL", "Stored Procedures", "Dashboard"],
            codeUrl: "https://github.com/restrepojulian015/Gestor_finanzas_personales",
            demoUrl: ""
          },
          {
            title: "Pistacherito",
            description: "Website for Pistacherito, a brand of artisanal gifts based on premium nuts. Includes product catalog, company information, and contact form. Modern and responsive design that highlights natural products.",
            tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
            codeUrl: "https://github.com/restrepojulian015/pistacherito-website",
            demoUrl: "https://restrepojulian015.github.io/pistacherito-website/"
          },
          {
            title: "Acme Clinic",
            description: "Complete hospital management system developed with Node.js, Express, and MongoDB. Includes patient management, doctors, medical appointments, medications, and offices. Generates automatic HTML reports and processes CSV files for bulk data loading.",
            tech: ["Node.js", "Express", "MongoDB", "CSV Processing", "HTML Reports"],
            codeUrl: "https://github.com/restrepojulian015/Examne_Node_restrepo_julian",
            demoUrl: ""
          },
          {
            title: "Acme Back",
            description: "Robust REST API built with Node.js and Express, with MongoDB database. Implements design patterns, data validation, and complete CRUD operations. Authentication system and secure error handling.",
            tech: ["Node.js", "Express", "MongoDB", "REST API", "JWT"],
            codeUrl: "https://github.com/restrepojulian015/NodeProject",
            demoUrl: ""
          }
        ]
      },
      // Certificates
      certificates: {
        title: "Certificates and Degrees",
        verify: "Verify",
        items: [
          {
            title: "Bachelor's Degree in Systems Engineering",
            issuer: "EAN University",
            date: "2023 - Present",
            description: "Active student in the Systems Engineering program in Bogotá, Colombia. Comprehensive training in software development, databases, and system architecture.",
            icon: "🎓"
          },
          {
            title: "Junior Backend Development Technician",
            issuer: "Campuslands",
            date: "2024 - 2025",
            description: "Certification in backend development with a focus on Node.js, Express, MongoDB, and API architecture. Development of real projects and programming best practices.",
            icon: "💻"
          },
          {
            title: "Artificial Intelligence Bootcamp",
            issuer: "Talento Tech - San José University",
            date: "July 2025 - Present",
            description: "Intensive program in artificial intelligence, machine learning, and practical AI applications. Development of projects with emerging technologies.",
            icon: "🤖"
          },
          {
            title: "Junior Full-Stack JavaScript Development",
            issuer: "CodeSignal",
            date: "2024",
            description: "Certification in full-stack development with JavaScript, including frontend and backend. Validation of technical skills and problem-solving in programming.",
            icon: "🚀"
          },
          {
            title: "AWS Foundations",
            issuer: "AWS Academy",
            date: "2024",
            description: "Certification in Amazon Web Services fundamentals. Knowledge in cloud services, infrastructure as a service, and AWS best practices.",
            icon: "☁️"
          }
        ]
      },
      // Contact
      contact: {
        title: "Contact",
        subtitle: "Let's Talk!",
        description: "I am always open to new opportunities and collaborations. If you have a project in mind or want to connect, do not hesitate to contact me.",
        email: "Email",
        phone: "Phone",
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn",
        github: "GitHub",
        form: {
          name: "Name",
          namePlaceholder: "Your name",
          email: "Email",
          emailPlaceholder: "your@email.com",
          subject: "Subject",
          subjectPlaceholder: "Message subject",
          message: "Message",
          messagePlaceholder: "Your message...",
          send: "Send Message"
        },
        contactNote: "I'm always open to new opportunities and collaborations. If you have a project in mind or want to connect, feel free to reach out through any of the available channels.",
        linkedinLabel: "LinkedIn Profile",
        githubLabel: "GitHub Profile"
      },
      // Footer
      footer: {
        description: "Passionate Full-Stack Developer creating innovative digital solutions. Systems Engineering student committed to continuous learning.",
        quickLinks: "Quick Links",
        home: "Home",
        about: "About Me",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        socialMedia: "Social Media",
        rights: "All rights reserved.",
        linkedinLabel: "LinkedIn Profile",
        githubLabel: "GitHub Profile"
      }
    }
  };

  switchLanguage() {
    const newLang = this.currentLanguage() === "es" ? "en" : "es";
    this.currentLanguage.set(newLang);
  }

  translate(key: string): string {
    const keys = key.split(".");
    let translation: any = this.translations[this.currentLanguage() as "es" | "en"];
    
    for (const k of keys) {
      translation = translation?.[k];
    }
    
    return translation || key;
  }
}
