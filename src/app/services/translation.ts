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
        description: "Estudiante de Ingeniería de Sistemas apasionado por crear soluciones digitales innovadoras. Especializado en JavaScript, Node.js, Express, MongoDB y React. Comprometido con el aprendizaje continuo y el desarrollo de aplicaciones robustas.",
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
        viewDemo: "Ver Demo"
      },
      // Certificates
      certificates: {
        title: "Certificados y Títulos",
        verify: "Verificar"
      },
      // Contact
      contact: {
        title: "Contacto",
        subtitle: "¡Hablemos!",
        description: "Estoy siempre abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente o quieres conectar, no dudes en contactarme.",
        email: "Email",
        phone: "Teléfono",
        sendMessage: "Envíame un mensaje",
        form: {
          name: "Nombre",
          namePlaceholder: "Tu nombre",
          email: "Email",
          emailPlaceholder: "tu@email.com",
          subject: "Asunto",
          subjectPlaceholder: "Asunto del mensaje",
          message: "Mensaje",
          messagePlaceholder: "Tu mensaje...",
          send: "Enviar Mensaje"
        }
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
        description: "Systems Engineering student passionate about creating innovative digital solutions. Specialized in JavaScript, Node.js, Express, MongoDB and React. Committed to continuous learning and developing robust applications.",
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
        viewDemo: "View Demo"
      },
      // Certificates
      certificates: {
        title: "Certificates and Degrees",
        verify: "Verify"
      },
      // Contact
      contact: {
        title: "Contact",
        subtitle: "Let\"s Talk!",
        description: "I am always open to new opportunities and collaborations. If you have a project in mind or want to connect, do not hesitate to contact me.",
        email: "Email",
        phone: "Phone",
        sendMessage: "Send me a message",
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
        }
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
