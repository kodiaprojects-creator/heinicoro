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
                description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
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
                description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
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
                description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
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
