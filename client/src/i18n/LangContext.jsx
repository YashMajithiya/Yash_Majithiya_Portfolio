import { createContext, useContext, useState } from 'react'

const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      resume: 'Resume',
    },
    hero: {
      badge: 'Available for new projects',
      roles: ['Full Stack Developer', 'MERN Stack Engineer', 'React Developer', 'Node.js Developer'],
      description:
        'I build fast, scalable, and beautiful web applications end-to-end. Passionate about clean code, great DX, and turning ideas into production-ready products.',
      cta1: 'View Projects',
      cta2: 'Get In Touch',
      scroll: 'scroll',
    },
    about: {
      sub: 'Who I Am',
      h1: 'Crafting Digital',
      h2: 'Experiences',
      p1: "Hey! I'm Yash Majithiya, a Full Stack Developer based in India with a passion for crafting digital experiences that live on the internet.",
      p2: 'I specialize in the MERN stack — MongoDB, Express, React, and Node.js — and I love building products from zero to production. Whether it\'s a sleek front-end or a robust REST API, I care deeply about performance, scalability, and clean code.',
      p3: "When I'm not pushing commits, you'll find me exploring new technologies, contributing to open-source, or diving into system design concepts.",
      location: 'India · Open to remote opportunities',
      statsLabels: ['Years Experience', 'Projects Shipped', 'Happy Clients', 'Remote Ready'],
    },
    skills: {
      sub: 'What I Work With',
      h1: 'Skills &',
      h2: 'Technologies',
      coreTitle: 'Core Proficiencies',
      alsoTitle: 'Also Familiar With',
      categories: ['Frontend', 'Backend', 'Tools & Cloud'],
    },
    projects: {
      sub: 'Portfolio',
      h1: "Things I've",
      h2: 'Built',
      featured: 'Featured',
      viewAll: 'View All on GitHub',
    },
    experience: {
      sub: 'Career',
      h1: 'Work',
      h2: 'Experience',
      current: 'Current',
      eduTitle: 'Education',
    },
    contact: {
      sub: 'Say Hello',
      h1: "Let's Work",
      h2: 'Together',
      description:
        "Have a project in mind or a job opportunity? I'd love to hear from you. My inbox is always open.",
      availability: 'Open to new opportunities',
      responseTime: 'Typically responds within 24h',
      form: {
        name: 'Name',
        namePH: 'Your name',
        email: 'Email',
        emailPH: 'your@email.com',
        message: 'Message',
        messagePH: 'Tell me about your project or opportunity...',
        send: 'Send Message',
        sending: 'Sending...',
        success: "Message sent! I'll get back to you soon.",
        error: 'Something went wrong. Please try again.',
      },
    },
    footer: {
      builtBy: 'Designed & Built by',
      rights: '© 2024 · All rights reserved',
    },
  },

  hi: {
    nav: {
      about: 'परिचय',
      skills: 'कौशल',
      projects: 'परियोजनाएं',
      experience: 'अनुभव',
      contact: 'संपर्क',
      resume: 'रेज़्युमे',
    },
    hero: {
      badge: 'नई परियोजनाओं के लिए उपलब्ध',
      roles: ['फुल स्टैक डेवलपर', 'MERN स्टैक इंजीनियर', 'React डेवलपर', 'Node.js डेवलपर'],
      description:
        'मैं तेज़, स्केलेबल और सुंदर वेब एप्लिकेशन बनाता हूं। स्वच्छ कोड, बेहतरीन DX और विचारों को प्रोडक्ट में बदलने के प्रति जुनूनी।',
      cta1: 'परियोजनाएं देखें',
      cta2: 'संपर्क करें',
      scroll: 'नीचे',
    },
    about: {
      sub: 'मेरे बारे में',
      h1: 'डिजिटल अनुभव',
      h2: 'का निर्माण',
      p1: 'नमस्ते! मैं यश माजिठिया हूं, भारत में स्थित एक फुल स्टैक डेवलपर जो इंटरनेट पर जीवंत डिजिटल अनुभव बनाने का शौकीन है।',
      p2: 'मैं MERN स्टैक में विशेषज्ञ हूं — MongoDB, Express, React और Node.js — और शून्य से उत्पादन तक प्रोडक्ट बनाना पसंद करता हूं। चाहे स्लीक फ्रंट-एंड हो या रोबस्ट REST API, मैं परफॉर्मेंस और क्लीन कोड की गहरी परवाह करता हूं।',
      p3: 'जब मैं कमिट नहीं कर रहा होता, तो आप मुझे नई तकनीकों की खोज करते, ओपन-सोर्स में योगदान देते, या सिस्टम डिज़ाइन में डूबते हुए पाएंगे।',
      location: 'भारत · रिमोट अवसरों के लिए खुला',
      statsLabels: ['वर्षों का अनुभव', 'परियोजनाएं पूर्ण', 'खुश क्लाइंट', 'रिमोट रेडी'],
    },
    skills: {
      sub: 'मैं क्या उपयोग करता हूं',
      h1: 'कौशल और',
      h2: 'तकनीकें',
      coreTitle: 'मुख्य दक्षताएं',
      alsoTitle: 'परिचित तकनीकें',
      categories: ['फ्रंटएंड', 'बैकएंड', 'टूल्स और क्लाउड'],
    },
    projects: {
      sub: 'पोर्टफोलियो',
      h1: 'मैंने क्या',
      h2: 'बनाया',
      featured: 'फीचर्ड',
      viewAll: 'GitHub पर सभी देखें',
    },
    experience: {
      sub: 'करियर',
      h1: 'कार्य',
      h2: 'अनुभव',
      current: 'वर्तमान',
      eduTitle: 'शिक्षा',
    },
    contact: {
      sub: 'नमस्ते कहें',
      h1: 'साथ मिलकर',
      h2: 'काम करें',
      description:
        'कोई प्रोजेक्ट या नौकरी का अवसर है? मुझसे संपर्क करें। मेरा इनबॉक्स हमेशा खुला है।',
      availability: 'नए अवसरों के लिए खुला',
      responseTime: '24 घंटे में जवाब देता हूं',
      form: {
        name: 'नाम',
        namePH: 'आपका नाम',
        email: 'ईमेल',
        emailPH: 'your@email.com',
        message: 'संदेश',
        messagePH: 'अपनी परियोजना के बारे में बताएं...',
        send: 'संदेश भेजें',
        sending: 'भेज रहा है...',
        success: 'संदेश भेजा गया! मैं जल्द ही वापस आऊंगा।',
        error: 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।',
      },
    },
    footer: {
      builtBy: 'द्वारा डिज़ाइन और निर्मित',
      rights: '© 2024 · सर्वाधिकार सुरक्षित',
    },
  },

  es: {
    nav: {
      about: 'Sobre Mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
      resume: 'Currículum',
    },
    hero: {
      badge: 'Disponible para nuevos proyectos',
      roles: [
        'Desarrollador Full Stack',
        'Ingeniero MERN Stack',
        'Desarrollador React',
        'Desarrollador Node.js',
      ],
      description:
        'Construyo aplicaciones web rápidas, escalables y hermosas de extremo a extremo. Apasionado por el código limpio, la gran experiencia de desarrollo y convertir ideas en productos.',
      cta1: 'Ver Proyectos',
      cta2: 'Contáctame',
      scroll: 'bajar',
    },
    about: {
      sub: 'Quién Soy',
      h1: 'Creando Experiencias',
      h2: 'Digitales',
      p1: '¡Hola! Soy Yash Majithiya, un desarrollador Full Stack en India apasionado por crear experiencias digitales en internet.',
      p2: 'Me especializo en el stack MERN — MongoDB, Express, React y Node.js — y me encanta construir productos de cero a producción. Ya sea una interfaz elegante o una API robusta, me importan el rendimiento, la escalabilidad y el código limpio.',
      p3: 'Cuando no estoy haciendo commits, me encontrarás explorando nuevas tecnologías, contribuyendo al código abierto o estudiando diseño de sistemas.',
      location: 'India · Abierto a oportunidades remotas',
      statsLabels: ['Años de Experiencia', 'Proyectos Entregados', 'Clientes Satisfechos', 'Trabajo Remoto'],
    },
    skills: {
      sub: 'Con Qué Trabajo',
      h1: 'Habilidades y',
      h2: 'Tecnologías',
      coreTitle: 'Competencias Principales',
      alsoTitle: 'También Conozco',
      categories: ['Frontend', 'Backend', 'Herramientas y Cloud'],
    },
    projects: {
      sub: 'Portafolio',
      h1: 'Lo Que He',
      h2: 'Construido',
      featured: 'Destacado',
      viewAll: 'Ver Todo en GitHub',
    },
    experience: {
      sub: 'Carrera',
      h1: 'Experiencia',
      h2: 'Laboral',
      current: 'Actual',
      eduTitle: 'Educación',
    },
    contact: {
      sub: 'Saluda',
      h1: 'Trabajemos',
      h2: 'Juntos',
      description:
        '¿Tienes un proyecto o una oportunidad laboral? Me encantaría escucharte. Mi bandeja de entrada siempre está abierta.',
      availability: 'Abierto a nuevas oportunidades',
      responseTime: 'Responde en 24 horas típicamente',
      form: {
        name: 'Nombre',
        namePH: 'Tu nombre',
        email: 'Correo',
        emailPH: 'tu@correo.com',
        message: 'Mensaje',
        messagePH: 'Cuéntame sobre tu proyecto...',
        send: 'Enviar Mensaje',
        sending: 'Enviando...',
        success: '¡Mensaje enviado! Te responderé pronto.',
        error: 'Algo salió mal. Por favor intenta de nuevo.',
      },
    },
    footer: {
      builtBy: 'Diseñado y desarrollado por',
      rights: '© 2024 · Todos los derechos reservados',
    },
  },
}

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')

  const changeLang = (code) => {
    setLang(code)
    localStorage.setItem('lang', code)
  }

  return (
    <LangContext.Provider value={{ t: translations[lang], lang, changeLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLanguage = () => useContext(LangContext)
