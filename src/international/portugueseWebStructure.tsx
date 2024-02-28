import { WebStructure } from "@/types/WebStructure";

import teamList from "@/content_lists/team_list";
import expertiseList from "@/content_lists/expertise_list";
import bannerList from "@/content_lists/banner_list";
import privacyList from "@/content_lists/privacy_list";
import termsList from "@/content_lists/terms_list";

const portugueseWebStructure: WebStructure = {
    common: {
        customScheduleText: "Agende uma Consulta",
        returnToAreasOfExpertise: "Voltar para Áreas de Atuação",
        customTitle: "Santana Lima | Advocacia & Consultoria",
        customDescription:
            "Escritório de Advocacia em Curitiba com mais de 30 anos de atuação no mercado e sólida formação acadêmica. Oferecemos uma ampla gama de serviços jurídicos, incluindo direito civil, criminal, trabalhista, administrativo e tributário, com compromisso de fornecer orientação jurídica confiável e personalizada para atender às necessidades individuais de nossos clientes.",
        customWebsiteURL: "https://limasantana.vercel.com",
    },
    navbar: {
        logo: {
            pathURL: "/brand_imgs/Icone_Alt_512.png",
            title: "Santana Lima | Advocacia & Consultoria",
            width: 100,
            height: 100,
            alt: "Logotipo Santana Lima",
        },

        navLinks: [
            {
                path: "/",
                name: "Início",
            },
            {
                path: "/#quem-somos",
                name: "Sobre",
            },
            {
                path: "/#areas-de-atuacao",
                name: "Áreas de Atuação",
            },
            {
                path: "/#contato",
                name: "Contato",
            },
        ],
    },
    menu: {
        title: "Menu",
        links: [
            {
                path: "/",
                name: "Início",
            },
            {
                path: "/#quem-somos",
                name: "Sobre",
            },
            {
                path: "/#areas-de-atuacao",
                name: "Áreas de Atuação",
            },
            {
                path: "/#contato",
                name: "Contato",
            },
            {
                path: "/privacidade",
                name: "Privacidade",
            },
            {
                path: "/termos-de-uso",
                name: "Termos de Uso",
            },
        ],
    },
    cookies: {
        title: "Cookies",
        paragraphs: [
            "Este site usa cookies para garantir que você obtenha a melhor experiência.",
            "Ao continuar a usar este site, você concorda com o uso de cookies.",
        ],
        btnText: "Entendi",
    },
    privacy: {
        title: "Política de Privacidade",
        paragraphs: privacyList,
    },
    terms: {
        title: "Termos de Uso",
        paragraphs: termsList,
    },
    landingPage: {
        sections: {
            home: {
                key: "inicio",
                title: "Início",

                scheduleBtn: {
                    title: "Agende uma Consulta",
                    label: "Agende uma Consulta",
                },

                bannerList: bannerList,
            },
            about: {
                key: "quem-somos",
                title: "Sobre o Escritório",
                paragraphs: [
                    "Atuando desde 1992, Elza e sua equipe estabeleceram uma reputação de excelência, ética e respeito. O escritório é reconhecido pelo seu compromisso com a conformidade com normas e regulamentos, garantindo que a ética, a qualidade e o respeito estejam sempre em primeiro plano em todas as interações.",
                    "Oferecemos uma ampla gama de serviços jurídicos, desde consultoria e assessoria até contencioso judicial e administrativo, somos conhecidos por sua competência e habilidade em diversas áreas do Direito. Com escritórios associados em todo o Estado, continuamos a ser uma referência no campo jurídico, fornecendo soluções eficazes e confiáveis para nossos clientes.",
                    "Nosso compromisso com a excelência e a integridade é essencial em cada aspecto de nosso trabalho. Não apenas defendemos os interesses de nossos clientes de forma vigorosa, mas também o fazemos dentro dos mais altos padrões éticos. Isso garante não apenas resultados satisfatórios, mas também a confiança e a satisfação duradouras daqueles que confiam em nossos serviços.",
                ],
            },

            team: {
                key: "equipe",
                title: "Curriculum",
                members: teamList,
            },

            expertise: {
                key: "areas-de-atuacao",
                title: "Áreas de Atuação",
                expertiseList: expertiseList,
            },

            contact: {
                key: "contato",
                title: "Contato",

                telephone: {
                    title: "Telefone",
                },

                functioningHours: {
                    title: "Horário de Funcionamento",
                    schedule: "Segunda a Sexta: 08:00 - 12:00 | 13:00 - 18:00",
                },

                adress: {
                    key: "endereco",
                    title: "Endereço",
                    adress: "Rua Comendador Araújo, nº 323 - Sala 84 - Centro - Curitiba - PR - Brasil",
                },
            },
        },
    },

    pages: [],
    footer: {
        privacyBtn: {
            title: "Política de Privacidade",
            label: "Política de Privacidade",
        },
        termsBtn: {
            title: "Termos de Uso",
            label: "Termos de Uso",
        },
        langBtn: {
            text: "English",
            label: "Mudar para Inglês",
            availableLangs: ["en", "pt-BR"],
        },
        copyRight: "© 2024 Santana Lima",

        scheduleBtn: {
            title: "Agende uma Consulta",
            label: "Agende uma Consulta",
        },

        telephoneBtn: {
            title: "Ligue para nós",
            label: "Ligue para nós",
        },

        emailBtn: {
            title: "Envie um Email",
            label: "Envie um Email",
        },
    },
};

export default portugueseWebStructure;
