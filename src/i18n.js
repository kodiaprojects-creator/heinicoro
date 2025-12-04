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
                name: 'ENRIC COROMINAS',
                description: "Soy Enric Corominas (o Heini), una persona bastante inquieta a la que le gusta hacer y probar cosas nuevas. Me muevo en todo tipo de proyectos, pero sobre todo del ámbito digital: webs, web apps, aplicaciones móviles, ecommerce, etc. ¡Todo lo que se me pasa por la cabeza, lo pruebo!\n\n¡Creo firmamente que salir de la zona de confort es la mejor manera de crecer como persona, y que lo peor que puede pasar si te atreves a hacer cosas es que aprendas!",
                button: 'Sobre mí',
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
                subtitle: 'Project Manager. Emprenedor. Cul inquiet.',
            },
            about: {
                name: 'ENRIC COROMINAS',
                description: "Sóc l'Enric Corominas (o Heini), una persona bastant inquieta que li agrada fer i provar coses noves. Em moc en tot tipus de projectes, però sobretot del caire digital: webs, web apps, aplicacions mòbil, ecommerce, etc. Tot allò que em passi pel cap, ho provo!\n\nCrec fermament que sortir de la zona de confort és la millor manera de créixer com a persona, i que el pitjor que pot passar si t'atreveixes a fer coses és que aprenguis!",
                button: 'Sobre mi',
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
                name: 'ENRIC COROMINAS',
                description: "I'm Enric Corominas (or Heini), a quite restless person who likes to do and try new things. I work on all kinds of projects, but especially digital ones: websites, web apps, mobile applications, ecommerce, etc. Everything that comes to mind, I try it!\n\nI firmly believe that stepping out of your comfort zone is the best way to grow as a person, and that the worst that can happen if you dare to do things is that you learn!",
                button: 'About me',
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
