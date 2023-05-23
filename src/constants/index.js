import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    jquery,
    html,
    css,
    reactjs,
    nextjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    photoshop,
    meta,
    leadspectr,
    vedita,
    SEMPROGROUP,
    mgt,
    zvezda,
    bdf,
    notes,
    bagno,
    keune,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "Обо мне",
    },
    {
        id: "work",
        title: "Работы",
    },
    {
        id: "contact",
        title: "Контакты",
    },
];

const services = [
    {
        title: "Веб разработчик",
        icon: web,
    },
    {
        title: "React разработчик",
        icon: mobile,
    },
    {
        title: "Фронтенд Developer",
        icon: backend,
    },
    {
        title: "Верстальщик",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "jquery",
        icon: jquery,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next js",
        icon: nextjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "photoshop",
        icon: photoshop,
    },
];

const experiences = [
    {
        title: "Frontend-разработчик",
        company_name: " leadspectrum",
        icon: leadspectr,
        iconBg: "#383E56",
        date: "Июнь 2017 - май 2019",
        points: [
            "разработка проектов (frontend-части) с нуля.",
            "кроссбраузерная и адаптивная верстка HTML5/CSS3.",
            "доработка существующих проектов.",
            "редактирование и изменение шаблонов 1С-Битрикс, ModX, Wordpress.",
        ],
    },
    {
        title: "Веб-разработчик",
        company_name: "Vedita",
        icon: vedita,
        iconBg: "#DDDDDD",
        date: "Июнь 2019 - август 2020",
        points: [
            "участие в разработке интернет-проектов (сайтов, CRM, интернет-магазинов) для известных брендов.",
            "участие в разработке внутренних веб-сервисов компании.",
            "поддержка и развитие интернет-проектов ключевых клиентов компании.",
            "вёрстка PSD-макетов сайтов.",
        ],
    },
    {
        title: "Frontend-разработчик",
        company_name: "SEMPROGROUP",
        icon: SEMPROGROUP,
        iconBg: "#383E56",
        date: "Сентябрь 2020 - июль 2022",
        points: [
            "разработка проектов (frontend-части) с нуля.",
            "кроссбраузерная и адаптивная верстка HTML5/CSS3.",
            "доработка существующих проектов.",
            "редактирование и изменение шаблонов 1С-Битрикс.",
        ],
    },
    {
        title: "Фрилансер",
        company_name: "Home",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "июль 2022 - по настоящее время",
        points: [
            "Верстка макетов любой сложности.",
            "Размещение сайта на хостинге.",
            "Подключение дополнительных плагинов.",
            "Настройка целей Яндекс.Метрики и Google Analytics.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Московский губернский театр",
        description:
            "Веб-платформа, которая позволяет пользователям искать, бронировать и покупать билеты на различные театральные постановки.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "animation",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: mgt,
        source_code_link: "https://m-g-t.ru/",
    },
    {
        name: "Безымянная звезда",
        description:
            "Проект посвященный одному из лучших спектаклей Московского губернского театра  - Безымянная звезда. Авторское современное прочтение знакомого сюжета. По мотивам пьесы Михаила Себастьяна",
        tags: [
            {
                name: "html5",
                color: "blue-text-gradient",
            },
            {
                name: "animation",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: zvezda,
        source_code_link: "https://zvezda.m-g-t.ru/",
    },
    {
        name: "БДФ",
        description:
            "Ежегодный международный фестиваль, в рамках которого представлены творческие проекты для детей и подростков, созданные профессиональными коллективами в различных жанрах искусства.",
        tags: [
            {
                name: "html5",
                color: "blue-text-gradient",
            },
            {
                name: "animation",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: bdf,
        source_code_link: "https://grandkidsfest.ru/",
    },
    {
        name: "Notes parfum",
        description:
            "Магазин эксклюзивных парфюмов Notes. Мы все сотканы из полотна маленьких историй, которые с нами случились или которые нам рассказали.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "nextjs",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: notes,
        source_code_link: "https://notes-parfum.com",
    },
    {
        name: "Bagno Più",
        description:
            "Магазин производства итальянской мебели ручной работы из мастерских провинции Пезаро и Урбино с 1985 года, изготовленная в основном из массива дерева.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "nextjs",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: bagno,
        source_code_link: "https://bagnopiu.com/",
    },
    {
        name: "Академия KEUNE DESIGN",
        description:
            "Обучает парикмахеров, визажистов, администраторов, управляющих и руководителей салонов красоты. Сопровождение профессионального развития",
        tags: [
            {
                name: "html5",
                color: "blue-text-gradient",
            },
            {
                name: "animation",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: keune,
        source_code_link: "https://academykeune.ru/",
    },
];

export { services, technologies, experiences, testimonials, projects };