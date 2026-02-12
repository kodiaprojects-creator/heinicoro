import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    es: {
        translation: {
            nav: {
                about: 'About',
                projects: 'Proyectos',
                cv: 'CV',
                contact: 'Contacto',
            },
            hero: {
                title1: '¡Hola!',
                title2: '¡Soy Heini!',
                subtitle: 'Project Manager. Emprendedor. Mente inquieta.',
            },
            about: {
                title: 'Sobre mí',
                name: 'ENRIC COROMINAS',
                description: "Soy Enric Corominas (o Heini), una persona bastante inquieta a la que le gusta hacer y probar cosas nuevas. Me muevo en todo tipo de proyectos, pero sobre todo del ámbito digital: webs, web apps, aplicaciones móviles, ecommerce, etc. ¡Todo lo que se me pasa por la cabeza, lo pruebo!\n\n¡Creo firmamente que salir de la zona de confort es la mejor manera de crecer como persona, y que lo peor que puede pasar si te atreves a hacer cosas es que aprendas!",
                button: 'Sobre mí',
                values: {
                    innovation: 'Innovación',
                    leadership: 'Liderazgo',
                    adaptability: 'Adaptabilidad',
                    communication: 'Comunicación',
                    problemSolving: 'Resolución de problemas',
                },
            },
            services: {
                subtitle: 'ÁMBITOS',
                title: 'En qué trabajo?',
                description: 'Acompaño a personas y equipos en la definición, diseño y lanzamiento de productes digitals. Desde la idea inicial hasta la seva posada en producció, m\'agrada estar a totes les fases del procés.\n\nCombino una visió estratègica amb un enfocament molt pràctic: prioritzar, coordinar equips i transformar idees en experiències digitals clares, útils i orientades a resultats.',
                items: {
                    projectManagement: 'Gestión de proyectos digitales',
                    webDesign: 'Creación y diseño web',
                    appCreation: 'Creación de apps',
                    saasCreation: 'Creación de Saas y web apps',
                    seoConsulting: 'Consultoría e implementación SEO',
                },
            },
            projects: {
                title: 'Hago cosas, alguna sale bien',
                subtitle: 'PROYECTOS',
                description: 'Una selección de proyectos en los que he trabajado, desde desarrollo web hasta aplicaciones móviles.',
                viewMore: 'Ver más',
                cards: {
                    eleus: 'Marca de productos que luchan contra el cáncer',
                    kodi: 'Agencia de comunicación digital',
                    ejercicios: 'Directorio de ejercicios de baloncesto: Descubre ejercicios probados, crea los tuyos propios y comparte con una comunidad activa.',
                    finance: 'Toma el control de tus finanzas personales.',
                    rumate: 'Organiza tu piso compartido en una única app',
                    heini: 'Proyecto de creación de un web personal.',
                },
            },
            contact: {
                title: '¿Hablamos?',
                subtitle: 'Contacta conmigo',
                email: 'info@heinicoro.com',
            },
        },
    },
    ca: {
        translation: {
            nav: {
                about: 'About',
                projects: 'Projectes',
                cv: 'CV',
                contact: 'Contacte',
            },
            hero: {
                title1: 'Hola,',
                title2: 'Sóc en Heini!',
                subtitle: 'Project Manager, explorador digital i cul inquiet.',
            },
            about: {
                title: 'Sobre mi',
                name: 'Enric Corominas',
                description: "Sóc l'Enric Corominas (o Heini), una persona bastant inquieta que li agrada fer i provar coses noves. Em moc en tot tipus de projectes, però sobretot del caire digital: webs, web apps, aplicacions mòbil, ecommerce, etc. Tot allò que em passi pel cap, ho provo!\n\nCrec fermament que sortir de la zona de confort és la millor manera de créixer com a persona, i que el pitjor que pot passar si t'atreveixes a fer coses és que aprenguis!",
                button: 'Sobre mi',
                values: {
                    innovation: 'Innovació',
                    leadership: 'Lideratge',
                    adaptability: 'Adaptabilitat',
                    communication: 'Comunicació',
                    problemSolving: 'Resolució de problemes',
                },
            },
            services: {
                subtitle: 'ÀMBITS',
                title: 'En què treballo?',
                description: 'Ajudo persones i equips a donar forma, estructurar i fer realitat projectes digitals. Des de la idea inicial fins al llançament, m\'agrada estar a prop de tot el procés perquè res es quedi a mig camí.\n\nCombino una mirada estratègica amb una forma de treballar molt pràctica: prioritzar bé, coordinar equips i convertir idees en experiències digitals clares, útils i que realment aportin valor.',
                items: {
                    projectManagement: 'Gestió de projectes digitals',
                    webDesign: 'Creació i disseny web',
                    appCreation: 'Creació d\'apps',
                    saasCreation: 'Creació de Saas i web apps',
                    seoConsulting: 'Consultoria i implementació SEO',
                },
            },
            projects: {
                title: 'Faig coses, alguna surt bé',
                subtitle: 'PROJECTES',
                description: 'Una selecció de projectes en els quals he treballat, des de desenvolupament web fins a aplicacions mòbils.',
                viewMore: 'Veure més',
                cards: {
                    eleus: 'Marca de productes que lluiten contra el càncer',
                    kodi: 'Agència de comunicació digital',
                    ejercicios: 'Directori d\'exercicis de bàsquet: Descobreix exercicis provats, crea els teus propis i comparteix amb una comunitat activa.',
                    finance: 'Pren el control de les teves finances personals.',
                    rumate: 'Organitza el teu pis compartit en una única app',
                    heini: 'Projecte de creació d\'un web personal.',
                },
            },
            contact: {
                title: 'Parlem?',
                subtitle: 'Contacte amb mi',
                email: 'info@heinicoro.com',
            },
        },
    },
    en: {
        translation: {
            nav: {
                about: 'About',
                projects: 'Projects',
                cv: 'CV',
                contact: 'Contact',
            },
            hero: {
                title1: 'Hello,',
                title2: "I'm Heini!",
                subtitle: 'Project Manager. Entrepreneur. Restless mind.',
            },
            about: {
                title: 'About me',
                name: 'ENRIC COROMINAS',
                description: "I'm Enric Corominas (or Heini), a quite restless person who likes to do and try new things. I work on all kinds of projects, but especially digital ones: websites, web apps, mobile applications, ecommerce, etc. Everything that comes to mind, I try it!\n\nI firmly believe that stepping out of your comfort zone is the best way to grow as a person, and that the worst that can happen if you dare to do things is that you learn!",
                button: 'About me',
                values: {
                    innovation: 'Innovation',
                    leadership: 'Leadership',
                    adaptability: 'Adaptability',
                    communication: 'Communication',
                    problemSolving: 'Problem Solving',
                },
            },
            services: {
                subtitle: 'AREAS',
                title: 'What I work on?',
                description: 'I help people and teams shape, structure and launch digital projects. From the first idea to the moment it goes live, I like to be involved in every step of the journey.\n\nI combine a strategic mindset with a very hands-on way of working: setting the right priorities, coordinating teams and turning ideas into clear, useful and value-driven digital experiences.',
                items: {
                    projectManagement: 'Digital project management',
                    webDesign: 'Web creation and design',
                    appCreation: 'App creation',
                    saasCreation: 'SaaS and web apps creation',
                    seoConsulting: 'SEO consulting and implementation',
                },
            },
            projects: {
                title: 'I do things, some turn out well',
                subtitle: 'PROJECTS',
                description: 'A selection of projects I have worked on, from web development to mobile applications.',
                viewMore: 'View more',
                cards: {
                    eleus: 'Brand of products that fight against cancer',
                    kodi: 'Digital communication agency',
                    ejercicios: 'Basketball exercises directory: Discover proven exercises, create your own and share with an active community.',
                    finance: 'Take control of your personal finances.',
                    rumate: 'Organize your shared apartment in a single app',
                    heini: 'Personal website creation project.',
                },
            },
            contact: {
                title: 'Let\'s talk?',
                subtitle: 'Contact me',
                email: 'info@heinicoro.com',
            },
        },
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        supportedLngs: ['ca', 'es', 'en'],
        detection: {
            order: ['navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
