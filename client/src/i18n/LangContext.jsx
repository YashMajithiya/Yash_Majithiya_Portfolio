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
      roles: ['Full Stack Developer', 'MERN Stack Engineer', 'React Developer', ],
      description:
        'React Native Developer with 3+ years of experience building large-scale, high-performance mobile applications. Skilled in designing scalable architectures, implementing clean coding practices, and delivering robust enterprise solutions. Experienced in analyzing existing systems, identifying gaps, and developing effective solutions to improve performance and user experience. Strong expertise in effort estimation, project planning, and delivering features within committed timelines. Successfully developed and maintained enterprise applications used by 500+ customers. Also experienced in integrating AI-powered capabilities into applications to automate workflows and enhance business processes.',
      cta1: 'View Projects',
      cta2: 'Get In Touch',
      scroll: 'scroll',
    },
    about: {
      sub: 'Who I Am',
      h1: 'Crafting Digital',
      h2: 'Experiences',
      p1: "Hey! I'm Yash Majithiya, a React Native Developer based in India with over 3 years of experience building scalable, enterprise-grade mobile applications. I specialize in designing application architecture, developing high-performance solutions, and transforming complex business requirements into intuitive user experiences.",
      p2: "Throughout my career, I've taken ownership of the complete development lifecycle—from identifying system gaps and defining technical solutions to architecture design, implementation, deployment, and ongoing support. I have successfully architected and delivered enterprise applications such as DSO, DigiSign, and Gateway Prayas, ensuring scalability, maintainability, and long-term business value.",
      p3: "My expertise lies in building multi-tenant applications with a single codebase, enabling efficient management of large-scale products serving multiple clients and user groups. I have also provided development and production support for more than 20 applications used by US-based clients, focusing on performance optimization, reliability, and seamless user experiences. I am passionate about clean architecture, reusable components, scalable codebases, and delivering accurate estimations that help teams execute projects efficiently. Beyond mobile development, I actively explore AI integrations and intelligent automation solutions that enhance workflows, improve productivity, and create smarter digital products. I enjoy solving complex technical challenges, collaborating with cross-functional teams, and building applications that not only meet business goals but also provide exceptional experiences for end users.",
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
      roles: ['फुल स्टैक डेवलपर', 'MERN स्टैक इंजीनियर', 'React डेवलपर'],
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
      p1: 'नमस्ते! मैं यश माजिठिया हूं, भारत में स्थित एक React Native डेवलपर, जिसके पास स्केलेबल और एंटरप्राइज़-ग्रेड मोबाइल एप्लिकेशन बनाने का 3+ वर्षों का अनुभव है। मैं एप्लिकेशन आर्किटेक्चर डिजाइन करने, उच्च-प्रदर्शन समाधान विकसित करने और जटिल बिज़नेस आवश्यकताओं को सहज यूज़र अनुभव में बदलने में विशेषज्ञ हूं।',
      p2: 'अपने करियर के दौरान, मैंने पूरे डेवलपमेंट लाइफसाइकिल की जिम्मेदारी ली है—सिस्टम गैप्स की पहचान करने और तकनीकी समाधान परिभाषित करने से लेकर आर्किटेक्चर डिजाइन, इम्प्लीमेंटेशन, डिप्लॉयमेंट और निरंतर सपोर्ट तक। मैंने DSO, DigiSign और Gateway Prayas जैसे एंटरप्राइज़ एप्लिकेशन सफलतापूर्वक आर्किटेक्ट और डिलीवर किए हैं, जिससे स्केलेबिलिटी, मेंटेनबिलिटी और दीर्घकालिक बिज़नेस वैल्यू सुनिश्चित हुई है।',
      p3: 'मेरी विशेषज्ञता एक ही कोडबेस के साथ मल्टी-टेनेंट एप्लिकेशन बनाने में है, जिससे कई क्लाइंट्स और यूज़र ग्रुप्स को सेवा देने वाले बड़े प्रोडक्ट्स का कुशल प्रबंधन संभव होता है। मैंने US-आधारित क्लाइंट्स द्वारा उपयोग किए जाने वाले 20+ एप्लिकेशन के लिए डेवलपमेंट और प्रोडक्शन सपोर्ट भी प्रदान किया है, जहां मेरा फोकस परफॉर्मेंस ऑप्टिमाइज़ेशन, विश्वसनीयता और सहज यूज़र अनुभव पर रहा है। मैं क्लीन आर्किटेक्चर, रीउसएबल कंपोनेंट्स, स्केलेबल कोडबेस और सटीक estimations देने के लिए जुनूनी हूं, जो टीमों को प्रोजेक्ट्स कुशलता से पूरा करने में मदद करते हैं। मोबाइल डेवलपमेंट के अलावा, मैं AI integrations और intelligent automation solutions भी सक्रिय रूप से explore करता हूं, जो workflows को बेहतर बनाते हैं, productivity बढ़ाते हैं और smarter digital products बनाते हैं। मुझे complex technical challenges solve करना, cross-functional teams के साथ collaboration करना और ऐसे applications बनाना पसंद है जो business goals के साथ-साथ end users को exceptional experience दें।',
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
        'Desarrollador Full Stack Developer',
        'Ingeniero MERN Stack',
        'Desarrollador React',
        'Desarrollador JavaScript',
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
      p1: '¡Hola! Soy Yash Majithiya, un desarrollador React Native en India con más de 3 años de experiencia construyendo aplicaciones móviles escalables y de nivel empresarial. Me especializo en diseñar arquitecturas de aplicación, desarrollar soluciones de alto rendimiento y transformar requisitos de negocio complejos en experiencias de usuario intuitivas.',
      p2: 'A lo largo de mi carrera, he asumido la responsabilidad de todo el ciclo de desarrollo: desde identificar brechas del sistema y definir soluciones técnicas hasta el diseño de arquitectura, implementación, despliegue y soporte continuo. He diseñado y entregado con éxito aplicaciones empresariales como DSO, DigiSign y Gateway Prayas, garantizando escalabilidad, mantenibilidad y valor de negocio a largo plazo.',
      p3: 'Mi experiencia se centra en construir aplicaciones multi-tenant con una sola base de código, lo que permite gestionar eficientemente productos a gran escala que sirven a múltiples clientes y grupos de usuarios. También he brindado soporte de desarrollo y producción para más de 20 aplicaciones utilizadas por clientes de EE. UU., enfocándome en la optimización del rendimiento, la confiabilidad y experiencias de usuario fluidas. Me apasiona la arquitectura limpia, los componentes reutilizables, las bases de código escalables y entregar estimaciones precisas que ayuden a los equipos a ejecutar proyectos de manera eficiente. Más allá del desarrollo móvil, exploro activamente integraciones de IA y soluciones de automatización inteligente que mejoran los flujos de trabajo, aumentan la productividad y crean productos digitales más inteligentes. Disfruto resolver desafíos técnicos complejos, colaborar con equipos multifuncionales y construir aplicaciones que no solo cumplan objetivos de negocio, sino que también ofrezcan experiencias excepcionales a los usuarios finales.',
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
