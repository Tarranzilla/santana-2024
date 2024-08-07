import { WebStructure } from "@/types/WebStructure";

import teamList_EN from "@/content_lists/english/team_list_en";
import expertiseList_EN from "@/content_lists/english/expertise_list_en";
import bannerList_EN from "@/content_lists/english/banner_list_en";
import privacyList_EN from "@/content_lists/english/privacy_list_en";
import termsList_EN from "@/content_lists/english/terms_list_en";

const englishWebStructure: WebStructure = {
    common: {
        customScheduleText: "Schedule an Appointment",
        returnToAreasOfExpertise: "Return to Areas of Expertise",
        customTitle: "Sant'Ana | Advocacy",
        customDescription:
            "Law Firm in Curitiba with over 30 years of experience in the market and a solid academic background. We offer a wide range of legal services, including civil, criminal, labor, administrative, and tax law, with a commitment to providing reliable and personalized legal guidance to meet the individual needs of our clients.",
        customWebsiteURL: "https://limasantana.vercel.com",
    },
    navbar: {
        logo: {
            pathURL: "/brand_imgs/new_era/logo_new_era.png",
            title: "Sant'Ana | Advocacy",
            width: 100,
            height: 100,
            alt: "Logotipo Sant'Ana | Advocacy",
        },

        navLinks: [
            {
                path: "/",
                name: "Home",
            },
            {
                path: "/#quem-somos",
                name: "About Us",
            },
            {
                path: "/#areas-de-atuacao",
                name: "Areas of Expertise",
            },
            {
                path: "/#contato",
                name: "Contact",
            },
        ],
    },
    menu: {
        title: "Menu",
        links: [
            {
                path: "/",
                name: "Home",
            },
            {
                path: "/#quem-somos",
                name: "About Us",
            },
            {
                path: "/#areas-de-atuacao",
                name: "Areas of Expertise",
            },
            {
                path: "/#contato",
                name: "Contact",
            },
            {
                path: "/privacidade",
                name: "Privacy",
            },
            {
                path: "/termos-de-uso",
                name: "Terms of Use",
            },
        ],
    },
    cookies: {
        title: "Cookies",
        paragraphs: [
            "This website use cookies to guarantee that you get the best experience.",
            "By continuing to use this site, you agree to the use of cookies.",
        ],
        btnText: "Understood",
    },
    privacy: {
        title: "Privacy Policy",
        paragraphs: privacyList_EN,
    },
    terms: {
        title: "Terms of Use",
        paragraphs: termsList_EN,
    },
    landingPage: {
        sections: {
            home: {
                key: "inicio",
                title: "Home",

                scheduleBtn: {
                    title: "Schedule an Appointment",
                    label: "Schedule an Appointment",
                },

                bannerList: bannerList_EN,
            },
            about: {
                key: "quem-somos",
                title: "About the Firm",
                paragraphs: [
                    "Since 1992, Elza and her team have established a reputation for excellence, ethics, and respect. The office is recognized for its commitment to compliance with standards and regulations, ensuring that ethics, quality, and respect are always at the forefront of every interaction.",
                    "We offer a wide range of legal services, from consultancy and advisory to litigation in both judicial and administrative arenas. Known for our competence and expertise across various areas of law, with associated offices throughout the state, we continue to be a benchmark in the legal field, providing effective and reliable solutions for our clients.",
                    "Our commitment to excellence and integrity is paramount in every aspect of our work. Not only do we vigorously advocate for the interests of our clients, but we also do so within the highest ethical standards. This ensures not only satisfactory outcomes but also lasting trust and satisfaction from those who rely on our services.",
                ],
            },

            team: {
                key: "equipe",
                title: "Curriculum",
                members: teamList_EN,
            },

            expertise: {
                key: "areas-de-atuacao",
                title: "Areas of Expertise",
                expertiseList: expertiseList_EN,
            },

            contact: {
                key: "contato",
                title: "Contact",

                telephone: {
                    title: "Telephone",
                },

                functioningHours: {
                    title: "Functioning Hours",
                    schedule: "Monday to Friday: 09:00 - 12:00 | 13:00 - 18:00",
                },

                adress: {
                    key: "endereco",
                    title: "Address",
                    adress: "Avenida Manoel Ribas, nº 507 - Sala 05 - Mercês Curitiba - PR 80510-346 Brazil",
                },
            },
        },
    },

    pages: [],
    footer: {
        privacyBtn: {
            title: "Privacy Policy",
            label: "Privacy Policy",
        },
        termsBtn: {
            title: "Terms of Use",
            label: "Terms of Use",
        },
        langBtn: {
            text: "Português",
            label: "Change to Portuguese",
            availableLangs: ["en", "pt-BR"],
        },
        copyRight: "© 2024 Santana Lima",

        scheduleBtn: {
            title: "Schedule an Appointment",
            label: "Schedule an Appointment",
        },

        telephoneBtn: {
            title: "Call Us",
            label: "Call us",
        },

        emailBtn: {
            title: "Send us an Email",
            label: "Send us an Email",
        },
    },
};

export default englishWebStructure;
