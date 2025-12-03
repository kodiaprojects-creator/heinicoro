import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
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
                description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s.',
                viewMore: 'Veure més',
            },
            contact: {
                title: 'Parlem?',
                subtitle: 'Contacte amb mi',
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
                description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s.',
                viewMore: 'Veure més',
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
                description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s.',
                viewMore: 'View more',
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
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ca',
        fallbackLng: 'ca',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
