/* =========================================================
   LAKOU HAITI
   Main JavaScript
========================================================= */


/* =========================================================
   1. PROGRAM DATA
   Public summary only.
   Sensitive technical / financial / operational details
   remain outside the public website.
========================================================= */

const programs = [

    {
        id: "agriculture",

        icon: "🌾",

        title: {
            fr: "Agriculture & Agribusiness",
            ht: "Agrikilti & Agribiznis",
            en: "Agriculture & Agribusiness"
        },

        description: {
            fr: "Production alimentaire, élevage, pêche, aquaculture, transformation, stockage et accès aux marchés.",
            ht: "Pwodiksyon manje, elvaj, lapèch, akwakilti, transfòmasyon, stokaj ak aksè sou mache.",
            en: "Food production, livestock, fisheries, aquaculture, processing, storage and market access."
        },

        image:
            "assets/agriculture.jpg",

        components: {
            fr: [
                "Production agricole",
                "Élevage",
                "Pêche et aquaculture",
                "Irrigation et mécanisation",
                "Transformation et stockage",
                "Accès aux marchés"
            ],

            ht: [
                "Pwodiksyon agrikòl",
                "Elvaj",
                "Lapèch ak akwakilti",
                "Irigasyon ak mekanizasyon",
                "Transfòmasyon ak stokaj",
                "Aksè sou mache"
            ],

            en: [
                "Agricultural production",
                "Livestock",
                "Fisheries and aquaculture",
                "Irrigation and mechanization",
                "Processing and storage",
                "Market access"
            ]
        },

        impact: {
            fr: "Renforcer la production locale et mieux relier les producteurs aux services, à la transformation et aux marchés.",
            ht: "Ranfòse pwodiksyon lokal epi konekte pwodiktè yo pi byen ak sèvis, transfòmasyon ak mache.",
            en: "Strengthen local production and better connect producers with services, processing and markets."
        }
    },


    {
        id: "human-capital",

        icon: "🎓",

        title: {
            fr: "Capital Humain",
            ht: "Kapital Imen",
            en: "Human Capital"
        },

        description: {
            fr: "Éducation, formation technique et professionnelle, apprentissage, certification, emploi et entrepreneuriat.",
            ht: "Edikasyon, fòmasyon teknik ak pwofesyonèl, aprantisaj, sètifikasyon, travay ak antreprenarya.",
            en: "Education, technical and vocational training, apprenticeships, certification, employment and entrepreneurship."
        },

        image:
            "assets/human-capital.jpg",

        components: {
            fr: [
                "Éducation",
                "Formation technique",
                "Formation professionnelle",
                "Apprentissage",
                "Certification",
                "Emploi et entrepreneuriat"
            ],

            ht: [
                "Edikasyon",
                "Fòmasyon teknik",
                "Fòmasyon pwofesyonèl",
                "Aprantisaj",
                "Sètifikasyon",
                "Travay ak antreprenarya"
            ],

            en: [
                "Education",
                "Technical training",
                "Vocational training",
                "Apprenticeships",
                "Certification",
                "Employment and entrepreneurship"
            ]
        },

        impact: {
            fr: "Développer les compétences nécessaires pour soutenir l’emploi, l’entreprise et les secteurs productifs.",
            ht: "Devlope konpetans ki nesesè pou soutni travay, antrepriz ak sektè pwodiktif yo.",
            en: "Develop the skills needed to support employment, enterprise and productive sectors."
        }
    },


    {
        id: "sports",

        icon: "⚽",

        title: {
            fr: "Pwojè Espò Pou Richès",
            ht: "Pwojè Espò Pou Richès",
            en: "Sports for Prosperity"
        },

        description: {
            fr: "Sport, développement des jeunes, infrastructures, compétitions et opportunités liées à l’économie du sport.",
            ht: "Espò, devlopman jèn, enfrastrikti, konpetisyon ak opòtinite nan ekonomi espò.",
            en: "Sports, youth development, facilities, competition and opportunities connected to the sports economy."
        },

        image:
            "assets/sports.jpg",

        components: {
            fr: [
                "Développement des jeunes",
                "Installations sportives",
                "Formation",
                "Compétitions",
                "Parcours professionnels",
                "Économie du sport"
            ],

            ht: [
                "Devlopman jèn",
                "Enstalasyon espòtif",
                "Fòmasyon",
                "Konpetisyon",
                "Chemen pwofesyonèl",
                "Ekonomi espò"
            ],

            en: [
                "Youth development",
                "Sports facilities",
                "Training",
                "Competition",
                "Professional pathways",
                "Sports economy"
            ]
        },

        impact: {
            fr: "Créer davantage de parcours pour la jeunesse à travers le sport, la formation et les activités économiques associées.",
            ht: "Kreye plis chemen pou jèn yo atravè espò, fòmasyon ak aktivite ekonomik ki asosye yo.",
            en: "Create more pathways for young people through sports, training and related economic activity."
        }
    },


    {
        id: "trees",

        icon: "🌳",

        title: {
            fr: "Pwojè Pyebwa",
            ht: "Pwojè Pyebwa",
            en: "Pwojè Pyebwa"
        },

        description: {
            fr: "Reboisement, restauration des bassins versants, agroforesterie, biodiversité et foresterie communautaire.",
            ht: "Rebwazman, restorasyon basen vèsan, agroforè, divèsite biyolojik ak forè kominotè.",
            en: "Reforestation, watershed restoration, agroforestry, biodiversity and community forestry."
        },

        image:
            "assets/trees.jpg",

        components: {
            fr: [
                "Reboisement",
                "Bassins versants",
                "Agroforesterie",
                "Biodiversité",
                "Foresterie communautaire",
                "Restauration environnementale"
            ],

            ht: [
                "Rebwazman",
                "Basen vèsan",
                "Agroforè",
                "Divèsite biyolojik",
                "Forè kominotè",
                "Restorasyon anviwònman"
            ],

            en: [
                "Reforestation",
                "Watersheds",
                "Agroforestry",
                "Biodiversity",
                "Community forestry",
                "Environmental restoration"
            ]
        },

        impact: {
            fr: "Protéger les ressources naturelles tout en soutenant l’agriculture, l’eau, la résilience et les communautés.",
            ht: "Pwoteje resous natirèl pandan n ap soutni agrikilti, dlo, rezilyans ak kominote yo.",
            en: "Protect natural resources while supporting agriculture, water, resilience and communities."
        }
    },


    {
        id: "water",

        icon: "💧",

        title: {
            fr: "Pwojè Dlo",
            ht: "Pwojè Dlo",
            en: "Pwojè Dlo"
        },

        description: {
            fr: "Eau potable, assainissement, gestion des ressources en eau et usages productifs.",
            ht: "Dlo potab, sanitasyon, jesyon resous dlo ak itilizasyon dlo pou pwodiksyon.",
            en: "Drinking water, sanitation, water-resource management and productive water use."
        },

        image:
            "assets/water.jpg",

        components: {
            fr: [
                "Eau potable",
                "Assainissement",
                "Gestion de l’eau",
                "Eaux usées",
                "Irrigation",
                "Usages productifs"
            ],

            ht: [
                "Dlo potab",
                "Sanitasyon",
                "Jesyon dlo",
                "Dlo ize",
                "Irigasyon",
                "Itilizasyon pwodiktif"
            ],

            en: [
                "Drinking water",
                "Sanitation",
                "Water management",
                "Wastewater",
                "Irrigation",
                "Productive water use"
            ]
        },

        impact: {
            fr: "Améliorer l’accès à l’eau et mieux connecter la gestion de l’eau à la santé, l’agriculture et le développement local.",
            ht: "Amelyore aksè ak dlo epi konekte jesyon dlo pi byen ak sante, agrikilti ak devlopman lokal.",
            en: "Improve water access and better connect water management with health, agriculture and local development."
        }
    },


    {
        id: "waste",

        icon: "♻️",

        title: {
            fr: "Pwojè Aba Fatra",
            ht: "Pwojè Aba Fatra",
            en: "Pwojè Aba Fatra"
        },

        description: {
            fr: "Gestion des déchets solides, recyclage, compostage, assainissement et récupération de ressources.",
            ht: "Jesyon fatra solid, resiklaj, konpòs, sanitasyon ak rekiperasyon resous.",
            en: "Solid-waste management, recycling, composting, sanitation and resource recovery."
        },

        image:
            "assets/waste.jpg",

        components: {
            fr: [
                "Collecte des déchets",
                "Tri",
                "Recyclage",
                "Compostage",
                "Assainissement",
                "Économie circulaire"
            ],

            ht: [
                "Koleksyon fatra",
                "Tri",
                "Resiklaj",
                "Konpòs",
                "Sanitasyon",
                "Ekonomi sikilè"
            ],

            en: [
                "Waste collection",
                "Sorting",
                "Recycling",
                "Composting",
                "Sanitation",
                "Circular economy"
            ]
        },

        impact: {
            fr: "Améliorer l’environnement et l’assainissement tout en créant des possibilités de récupération et de valorisation des ressources.",
            ht: "Amelyore anviwònman ak sanitasyon pandan n ap kreye posiblite pou rekipere ak valorize resous yo.",
            en: "Improve environmental sanitation while creating opportunities for resource recovery and productive reuse."
        }
    },


    {
        id: "health",

        icon: "❤",

        title: {
            fr: "Pwojè Sante",
            ht: "Pwojè Sante",
            en: "Pwojè Sante"
        },

        description: {
            fr: "Santé communautaire, santé publique, nutrition, soins et systèmes de référence.",
            ht: "Sante kominotè, sante piblik, nitrisyon, swen ak sistèm referans.",
            en: "Community health, public health, nutrition, care and referral systems."
        },

        image:
            "assets/health.jpg",

        components: {
            fr: [
                "Santé communautaire",
                "Prévention",
                "Nutrition",
                "Soins",
                "Médicaments",
                "Systèmes de référence"
            ],

            ht: [
                "Sante kominotè",
                "Prevansyon",
                "Nitrisyon",
                "Swen",
                "Medikaman",
                "Sistèm referans"
            ],

            en: [
                "Community health",
                "Prevention",
                "Nutrition",
                "Care",
                "Medicines",
                "Referral systems"
            ]
        },

        impact: {
            fr: "Renforcer la prévention, la santé communautaire et la connexion avec les services de soins.",
            ht: "Ranfòse prevansyon, sante kominotè ak koneksyon ak sèvis swen yo.",
            en: "Strengthen prevention, community health and connections to care services."
        }
    },


    {
        id: "energy",

        icon: "⚡",

        title: {
            fr: "Pwojè Aba Fè Nwa",
            ht: "Pwojè Aba Fè Nwa",
            en: "Pwojè Aba Fè Nwa"
        },

        description: {
            fr: "Électricité, énergies renouvelables, stockage, distribution et sécurité énergétique.",
            ht: "Elektrisite, enèji renouvlab, stokaj, distribisyon ak sekirite enèji.",
            en: "Electricity, renewable energy, storage, distribution and energy security."
        },

        image:
            "assets/energy.jpg",

        components: {
            fr: [
                "Électricité",
                "Énergie renouvelable",
                "Stockage",
                "Distribution",
                "Énergie productive",
                "Sécurité énergétique"
            ],

            ht: [
                "Elektrisite",
                "Enèji renouvlab",
                "Stokaj",
                "Distribisyon",
                "Enèji pou pwodiksyon",
                "Sekirite enèji"
            ],

            en: [
                "Electricity",
                "Renewable energy",
                "Storage",
                "Distribution",
                "Productive energy",
                "Energy security"
            ]
        },

        impact: {
            fr: "Soutenir les ménages, les services et les activités productives grâce à un meilleur accès à l’énergie.",
            ht: "Soutni fanmi, sèvis ak aktivite pwodiktif gras ak pi bon aksè ak enèji.",
            en: "Support households, services and productive activity through improved access to energy."
        }
    },


    {
        id: "housing",

        icon: "🏠",

        title: {
            fr: "Pwojè Kay",
            ht: "Pwojè Kay",
            en: "Pwojè Kay"
        },

        description: {
            fr: "Logement, résilience, infrastructures communautaires, accès à la propriété et création d’actifs.",
            ht: "Lojman, rezilyans, enfrastrikti kominotè, aksè ak pwopriyete ak kreyasyon byen.",
            en: "Housing, resilience, community infrastructure, homeownership and asset creation."
        },

        image:
            "assets/housing.jpg",

        components: {
            fr: [
                "Logement",
                "Construction résiliente",
                "Infrastructure communautaire",
                "Accès à la propriété",
                "Développement des communautés",
                "Création d’actifs"
            ],

            ht: [
                "Lojman",
                "Konstriksyon rezistan",
                "Enfrastrikti kominotè",
                "Aksè ak pwopriyete",
                "Devlopman kominote",
                "Kreyasyon byen"
            ],

            en: [
                "Housing",
                "Resilient construction",
                "Community infrastructure",
                "Homeownership",
                "Community development",
                "Asset creation"
            ]
        },

        impact: {
            fr: "Contribuer à des communautés plus résilientes et à la création d’actifs durables pour les ménages.",
            ht: "Kontribye nan kominote ki pi rezistan ak kreyasyon byen dirab pou fanmi yo.",
            en: "Support more resilient communities and durable household asset creation."
        }
    },


    {
        id: "transport",

        icon: "🚌",

        title: {
            fr: "Pwojè Transpò",
            ht: "Pwojè Transpò",
            en: "Pwojè Transpò"
        },

        description: {
            fr: "Routes, accès rural, transport public, fret, logistique et connectivité.",
            ht: "Wout, aksè riral, transpò piblik, machandiz, lojistik ak konektivite.",
            en: "Roads, rural access, public transport, freight, logistics and connectivity."
        },

        image:
            "assets/transport.jpg",

        components: {
            fr: [
                "Routes",
                "Accès rural",
                "Transport public",
                "Fret",
                "Logistique",
                "Connectivité territoriale"
            ],

            ht: [
                "Wout",
                "Aksè riral",
                "Transpò piblik",
                "Transpò machandiz",
                "Lojistik",
                "Konektivite teritoryal"
            ],

            en: [
                "Roads",
                "Rural access",
                "Public transport",
                "Freight",
                "Logistics",
                "Territorial connectivity"
            ]
        },

        impact: {
            fr: "Mieux connecter les personnes, les services, la production et les marchés.",
            ht: "Konekte moun, sèvis, pwodiksyon ak mache pi byen.",
            en: "Better connect people, services, production and markets."
        }
    },


    {
        id: "digital",

        icon: "📶",

        title: {
            fr: "Pwojè Dijital",
            ht: "Pwojè Dijital",
            en: "Digital Haiti"
        },

        description: {
            fr: "Télécommunications, connectivité, inclusion numérique, services digitaux, innovation et compétences.",
            ht: "Telekominikasyon, konektivite, enklizyon dijital, sèvis dijital, inovasyon ak konpetans.",
            en: "Telecommunications, connectivity, digital inclusion, digital services, innovation and skills."
        },

        image:
            "assets/digital.jpg",

        components: {
            fr: [
                "Télécommunications",
                "Connectivité",
                "Inclusion numérique",
                "Services digitaux",
                "Innovation",
                "Compétences numériques"
            ],

            ht: [
                "Telekominikasyon",
                "Konektivite",
                "Enklizyon dijital",
                "Sèvis dijital",
                "Inovasyon",
                "Konpetans dijital"
            ],

            en: [
                "Telecommunications",
                "Connectivity",
                "Digital inclusion",
                "Digital services",
                "Innovation",
                "Digital skills"
            ]
        },

        impact: {
            fr: "Connecter les communautés à l’information, aux services, aux compétences et aux opportunités.",
            ht: "Konekte kominote yo ak enfòmasyon, sèvis, konpetans ak opòtinite.",
            en: "Connect communities with information, services, skills and opportunities."
        }
    },


    {
        id: "tourism",

        icon: "🌴",

        title: {
            fr: "Tourisme, Culture & Économie Créative",
            ht: "Touris, Kilti & Ekonomi Kreyatif",
            en: "Tourism, Culture & Creative Economy"
        },

        description: {
            fr: "Tourisme, hospitalité, patrimoine, cuisine, arts, artisanat, musique et industries créatives.",
            ht: "Touris, ospitalite, eritaj, kuizin, atizay, atizana, mizik ak endistri kreyatif.",
            en: "Tourism, hospitality, heritage, cuisine, arts, crafts, music and creative industries."
        },

        image:
            "assets/tourism.jpg",

        components: {
            fr: [
                "Tourisme",
                "Hospitalité",
                "Patrimoine",
                "Cuisine",
                "Arts et artisanat",
                "Industries créatives"
            ],

            ht: [
                "Touris",
                "Ospitalite",
                "Eritaj",
                "Kuizin",
                "Atizay ak atizana",
                "Endistri kreyatif"
            ],

            en: [
                "Tourism",
                "Hospitality",
                "Heritage",
                "Cuisine",
                "Arts and crafts",
                "Creative industries"
            ]
        },

        impact: {
            fr: "Valoriser les ressources culturelles et territoriales afin de soutenir les entreprises, l’emploi et les communautés.",
            ht: "Valorize resous kiltirèl ak teritoryal pou soutni antrepriz, travay ak kominote yo.",
            en: "Leverage cultural and territorial assets to support enterprise, employment and communities."
        }
    },


    /* =====================================================
       13th COMPONENT
       Economic Empowerment / Enterprise & Industry
    ===================================================== */

    {
        id: "enterprise",

        icon: "🏭",

        title: {
            fr: "Autonomisation Économique & Entreprises",
            ht: "Otonomi Ekonomik & Antrepriz",
            en: "Economic Empowerment & Enterprise"
        },

        description: {
            fr: "PME, coopératives, entrepreneuriat, production, industrie, investissement, commerce et accès aux marchés.",
            ht: "Ti ak mwayen antrepriz, koperativ, antreprenarya, pwodiksyon, endistri, envestisman, komès ak aksè sou mache.",
            en: "SMEs, cooperatives, entrepreneurship, production, industry, investment, trade and market access."
        },

        image:
            "assets/enterprise.jpg",

        components: {
            fr: [
                "PME",
                "Coopératives",
                "Entrepreneuriat",
                "Production et industrie",
                "Commerce",
                "Développement des marchés"
            ],

            ht: [
                "Ti ak mwayen antrepriz",
                "Koperativ",
                "Antreprenarya",
                "Pwodiksyon ak endistri",
                "Komès",
                "Devlopman mache"
            ],

            en: [
                "SMEs",
                "Cooperatives",
                "Entrepreneurship",
                "Production and industry",
                "Trade",
                "Market development"
            ]
        },

        impact: {
            fr: "Transformer les compétences et la production en entreprises, revenus, emplois et opportunités économiques.",
            ht: "Transfòme konpetans ak pwodiksyon an antrepriz, revni, travay ak opòtinite ekonomik.",
            en: "Turn skills and production into enterprise, income, employment and economic opportunity."
        }
    }

];



/* =========================================================
   2. TRANSLATIONS
========================================================= */

const translations = {

    /* =========================
       FRENCH
    ========================= */

    fr: {

        navHome: "Accueil",
        navAbout: "À propos",
        navPrograms: "Programmes",
        navModel: "Modèle intégré",
        navPrototype: "Prototype",
        navPartners: "Partenaires",
        navContact: "Contact",

        join: "S’impliquer",

        eyebrow:
            "Développement intégré • Communautés • Opportunités",

        heroTitle:
            "Lakou Haiti Solution",

        heroLead:
            "Une plateforme intégrée pour une Haïti durable, inclusive et prospère.",

        heroText:
            "Relier les communautés, les compétences, les services, la production et les marchés afin de créer des opportunités durables.",

        discover:
            "Découvrir nos programmes →",

        seeModel:
            "Voir le modèle intégré",

        strongCommunities:
            "Des communautés plus fortes",

        prosperousHaiti:
            "Un Haïti prospère",

        programEyebrow:
            "Une approche multisectorielle",

        programTitle:
            "Nos Programmes Principaux",

        programIntro:
            "Des composantes interconnectées pour renforcer les communautés et soutenir une économie productive.",

        viewAll:
            "Voir tous les programmes →",

        showLess:
            "Réduire ↑",

        privacyNote:
            "Ce site présente uniquement une synthèse publique. Les annexes techniques, données opérationnelles et informations sensibles restent dans la documentation interne.",

        aboutEyebrow:
            "À propos",

        aboutTitle:
            "À propos de Lakou Haiti",

        aboutText:
            "Lakou Haiti est une approche de développement intégré qui relie les investissements humains, productifs, sociaux et territoriaux plutôt que de les traiter séparément.",

        vision:
            "Notre vision",

        visionText:
            "Des communautés plus fortes et plus prospères.",

        approach:
            "Notre approche",

        approachText:
            "Intégrée, inclusive et orientée vers les résultats.",

        scope:
            "Notre portée",

        scopeText:
            "Une architecture pensée pour relier le local au national.",

        modelEyebrow:
            "Le système",

        modelTitle:
            "Le Modèle Intégré Lakou Haiti",

        modelText:
            "Chaque composante soutient les autres : les compétences renforcent la production, l’eau et l’énergie rendent les services possibles, le transport et le numérique connectent les marchés, et l’entrepreneuriat transforme ces liens en opportunités économiques.",

        exploreModel:
            "Explorer le modèle en détail →",

        integrated:
            "Développement intégré",

        prototypeEyebrow:
            "Prototype",

        prototypeTitle:
            "Prototype Colora – Belladère",

        prototypeText:
            "Un terrain d’apprentissage pour démontrer comment les composantes du modèle peuvent fonctionner ensemble, être mesurées, améliorées puis adaptées à d’autres territoires.",

        pilot:
            "Projet pilote",

        actionModel:
            "Modèle en action",

        measurable:
            "Résultats mesurables",

        replicable:
            "Approche reproductible",

        pilotMore:
            "En savoir plus sur le pilote →",

        partnerEyebrow:
            "Collaborer",

        partnerTitle:
            "Construire ensemble",

        partnerText:
            "Lakou Haiti accueille la collaboration des communautés, institutions, partenaires de développement, secteur privé, diaspora, universités et société civile.",

        p1:
            "Institutions publiques",

        p2:
            "Organisations internationales",

        p3:
            "Secteur privé",

        p4:
            "Diaspora",

        p5:
            "Universités & expertise",

        p6:
            "Société civile",

        contactEyebrow:
            "Contact & partenariat",

        contactTitle:
            "Vous souhaitez en savoir plus ?",

        contactText:
            "Utilisez ce formulaire pour préparer une demande de contact. Aucune information sensible du projet n’est publiée ici.",

        name:
            "Nom",

        email:
            "E-mail",

        message:
            "Message",

        send:
            "Préparer le message",

        overview:
            "Aperçu",

        objectives:
            "Objectifs",

        components:
            "Composantes",

        impacts:
            "Impacts",

        modalPrivacy:
            "Les détails techniques, financiers, opérationnels et autres informations sensibles restent dans la documentation interne.",

        details:
            "Voir les détails →"
    },


    /* =========================
       HAITIAN CREOLE
    ========================= */

    ht: {

        navHome:
            "Akèy",

        navAbout:
            "Konsènan",

        navPrograms:
            "Pwogram",

        navModel:
            "Modèl entegre",

        navPrototype:
            "Pwototip",

        navPartners:
            "Patnè",

        navContact:
            "Kontak",

        join:
            "Patisipe",

        eyebrow:
            "Devlopman entegre • Kominote • Opòtinite",

        heroTitle:
            "Lakou Haiti Solution",

        heroLead:
            "Yon platfòm entegre pou yon Ayiti dirab, enklizif ak pwospè.",

        heroText:
            "Konekte kominote, konpetans, sèvis, pwodiksyon ak mache pou kreye opòtinite ki dire.",

        discover:
            "Dekouvri pwogram yo →",

        seeModel:
            "Gade modèl entegre a",

        strongCommunities:
            "Kominote ki pi solid",

        prosperousHaiti:
            "Yon Ayiti pwospè",

        programEyebrow:
            "Yon apwòch plizyè sektè",

        programTitle:
            "Pwogram Prensipal Nou Yo",

        programIntro:
            "Konpozan ki konekte ansanm pou ranfòse kominote yo epi soutni yon ekonomi pwodiktif.",

        viewAll:
            "Gade tout pwogram yo →",

        showLess:
            "Montre mwens ↑",

        privacyNote:
            "Sit sa a prezante sèlman yon rezime piblik. Anèks teknik, done operasyonèl ak enfòmasyon sansib rete nan dokiman entèn yo.",

        aboutEyebrow:
            "Konsènan",

        aboutTitle:
            "Konsènan Lakou Haiti",

        aboutText:
            "Lakou Haiti se yon apwòch devlopman entegre ki konekte envestisman imen, pwodiktif, sosyal ak teritoryal olye pou trete yo apa.",

        vision:
            "Vizyon nou",

        visionText:
            "Kominote ki pi solid ak pi pwospè.",

        approach:
            "Apwòch nou",

        approachText:
            "Entegre, enklizif epi oryante sou rezilta.",

        scope:
            "Dimansyon nou",

        scopeText:
            "Yon achitekti ki konekte lokal ak nasyonal.",

        modelEyebrow:
            "Sistèm nan",

        modelTitle:
            "Modèl Entegre Lakou Haiti",

        modelText:
            "Chak konpozan soutni lòt yo: konpetans ranfòse pwodiksyon, dlo ak enèji pèmèt sèvis, transpò ak dijital konekte mache, epi antreprenarya transfòme lyen sa yo an opòtinite ekonomik.",

        exploreModel:
            "Eksplore modèl la an detay →",

        integrated:
            "Devlopman entegre",

        prototypeEyebrow:
            "Pwototip",

        prototypeTitle:
            "Pwototip Colora – Belladère",

        prototypeText:
            "Yon teren aprantisaj pou montre kijan konpozan yo ka fonksyone ansanm, mezire, amelyore epi adapte nan lòt teritwa.",

        pilot:
            "Pwojè pilòt",

        actionModel:
            "Modèl an aksyon",

        measurable:
            "Rezilta mezirab",

        replicable:
            "Apwòch ki ka repwodui",

        pilotMore:
            "Aprann plis sou pilòt la →",

        partnerEyebrow:
            "Kolabore",

        partnerTitle:
            "Konstwi ansanm",

        partnerText:
            "Lakou Haiti akeyi kolaborasyon kominote, enstitisyon, patnè devlopman, sektè prive, dyaspora, inivèsite ak sosyete sivil.",

        p1:
            "Enstitisyon piblik",

        p2:
            "Òganizasyon entènasyonal",

        p3:
            "Sektè prive",

        p4:
            "Dyaspora",

        p5:
            "Inivèsite & ekspètiz",

        p6:
            "Sosyete sivil",

        contactEyebrow:
            "Kontak & patenarya",

        contactTitle:
            "Ou vle konnen plis ?",

        contactText:
            "Itilize fòm sa a pou prepare yon demann kontak. Pa gen enfòmasyon sansib pwojè a ki pibliye isit la.",

        name:
            "Non",

        email:
            "Imèl",

        message:
            "Mesaj",

        send:
            "Prepare mesaj la",

        overview:
            "Apèsi",

        objectives:
            "Objektif",

        components:
            "Konpozan",

        impacts:
            "Enpak",

        modalPrivacy:
            "Detay teknik, finansye, operasyonèl ak lòt enfòmasyon sansib rete nan dokiman entèn yo.",

        details:
            "Gade detay →"
    },


    /* =========================
       ENGLISH
    ========================= */

    en: {

        navHome:
            "Home",

        navAbout:
            "About",

        navPrograms:
            "Programs",

        navModel:
            "Integrated model",

        navPrototype:
            "Prototype",

        navPartners:
            "Partners",

        navContact:
            "Contact",

        join:
            "Get involved",

        eyebrow:
            "Integrated development • Communities • Opportunity",

        heroTitle:
            "Lakou Haiti Solution",

        heroLead:
            "An integrated platform for a sustainable, inclusive and prosperous Haiti.",

        heroText:
            "Connecting communities, skills, services, production and markets to create durable opportunities.",

        discover:
            "Explore our programs →",

        seeModel:
            "View the integrated model",

        strongCommunities:
            "Stronger communities",

        prosperousHaiti:
            "A prosperous Haiti",

        programEyebrow:
            "A multisector approach",

        programTitle:
            "Our Core Programs",

        programIntro:
            "Interconnected components designed to strengthen communities and support a productive economy.",

        viewAll:
            "View all programs →",

        showLess:
            "Show less ↑",

        privacyNote:
            "This website presents only a public overview. Technical annexes, operational data and sensitive information remain in internal documentation.",

        aboutEyebrow:
            "About",

        aboutTitle:
            "About Lakou Haiti",

        aboutText:
            "Lakou Haiti is an integrated development approach that connects human, productive, social and territorial investments rather than treating them separately.",

        vision:
            "Our vision",

        visionText:
            "Stronger and more prosperous communities.",

        approach:
            "Our approach",

        approachText:
            "Integrated, inclusive and results-oriented.",

        scope:
            "Our reach",

        scopeText:
            "An architecture designed to connect local action to national development.",

        modelEyebrow:
            "The system",

        modelTitle:
            "The Lakou Haiti Integrated Model",

        modelText:
            "Each component supports the others: skills strengthen production, water and energy enable services, transport and digital systems connect markets, and entrepreneurship turns these links into economic opportunity.",

        exploreModel:
            "Explore the model →",

        integrated:
            "Integrated development",

        prototypeEyebrow:
            "Prototype",

        prototypeTitle:
            "Colora – Belladère Prototype",

        prototypeText:
            "A learning site to demonstrate how the model’s components can work together, be measured, improved and adapted to other territories.",

        pilot:
            "Pilot project",

        actionModel:
            "Model in action",

        measurable:
            "Measurable results",

        replicable:
            "Replicable approach",

        pilotMore:
            "Learn more about the pilot →",

        partnerEyebrow:
            "Collaborate",

        partnerTitle:
            "Build together",

        partnerText:
            "Lakou Haiti welcomes collaboration with communities, institutions, development partners, the private sector, diaspora, universities and civil society.",

        p1:
            "Public institutions",

        p2:
            "International organizations",

        p3:
            "Private sector",

        p4:
            "Diaspora",

        p5:
            "Universities & expertise",

        p6:
            "Civil society",

        contactEyebrow:
            "Contact & partnership",

        contactTitle:
            "Want to learn more?",

        contactText:
            "Use this form to prepare a contact request. No sensitive project information is published here.",

        name:
            "Name",

        email:
            "Email",

        message:
            "Message",

        send:
            "Prepare message",

        overview:
            "Overview",

        objectives:
            "Objectives",

        components:
            "Components",

        impacts:
            "Impacts",

        modalPrivacy:
            "Technical, financial, operational and other sensitive details remain in internal documentation.",

        details:
            "View details →"
    }

};



/* =========================================================
   3. APPLICATION STATE
========================================================= */

Object.assign(translations.fr, {modelShortTitle: "Le Modèle Intégré", prototypeShortText: "Un projet pilote pour démontrer comment les composantes du modèle fonctionnent ensemble sur le terrain.", partnersShortTitle: "Nos partenaires"});
Object.assign(translations.ht, {modelShortTitle: "Modèl entegre a", prototypeShortText: "Yon pwojè pilòt pou montre kijan konpozan modèl la fonksyone ansanm sou teren an.", partnersShortTitle: "Patnè nou yo"});
Object.assign(translations.en, {modelShortTitle: "The Integrated Model", prototypeShortText: "A pilot project demonstrating how the model’s components work together on the ground.", partnersShortTitle: "Our partners"});

/* Problem → Solution and Explore summaries (additive keys only) */
Object.assign(translations.fr, {
    psEyebrow: "Du constat à la réponse",
    problemTitle: "Le problème d’Haïti",
    problemLine: "Pauvreté et inégalités : un cercle vicieux de défis interconnectés.",
    solutionTitle: "La solution Lakou Haiti",
    solutionLine: "Une plateforme intégrée pour un Haïti durable, inclusif et prospère.",
    exploreTitle: "Découvrir Lakou Haiti",
    cardAboutLine: "Une plateforme nationale de développement intégrée et décentralisée.",
    cardModelLine: "Treize composantes conçues pour se renforcer mutuellement.",
    cardPrototypeTitle: "Prototype Colora",
    cardPrototypeLine: "Le site pilote de Colora, Belladère : carte, relevés et projets proposés.",
    realTitle: "Réalisations à Lakou Colora",
    cardRealLine: "Photos documentées du site : activités historiques et installations existantes.",
    cardPartnersLine: "Communautés, institutions, secteur privé, diaspora et société civile.",
    openInfographic: "Ouvrir l’infographie en taille réelle (nouvel onglet)"
});
Object.assign(translations.ht, {
    psEyebrow: "Soti nan pwoblèm nan rive nan solisyon an",
    problemTitle: "Pwoblèm Ayiti a",
    problemLine: "Povrete ak inegalite: yon sèk visye defi ki mare youn ak lòt.",
    solutionTitle: "Solisyon Lakou Haiti",
    solutionLine: "Yon platfòm entegre pou yon Ayiti dirab, enklizif e pwospè.",
    exploreTitle: "Dekouvri Lakou Haiti",
    cardAboutLine: "Yon platfòm nasyonal devlopman ki entegre e desantralize.",
    cardModelLine: "Trèz konpozan ki fèt pou youn ranfòse lòt.",
    cardPrototypeTitle: "Pwototip Colora",
    cardPrototypeLine: "Sit pilòt Colora, Belladère: kat, etid ak pwojè ki pwopoze.",
    realTitle: "Reyalizasyon nan Lakou Colora",
    cardRealLine: "Foto dokimante sit la: aktivite istorik ak enstalasyon ki egziste.",
    cardPartnersLine: "Kominote, enstitisyon, sektè prive, dyaspora ak sosyete sivil.",
    openInfographic: "Louvri enfografi a nan gwosè reyèl (nouvo onglè)"
});
Object.assign(translations.en, {
    psEyebrow: "From problem to solution",
    problemTitle: "The Haiti Problem",
    problemLine: "Poverty and inequality: a vicious cycle of interconnected challenges.",
    solutionTitle: "The Lakou Haiti Solution",
    solutionLine: "An integrated platform for a sustainable, inclusive and prosperous Haiti.",
    exploreTitle: "Explore Lakou Haiti",
    cardAboutLine: "An integrated, decentralized national development platform.",
    cardModelLine: "Thirteen components designed to reinforce one another.",
    cardPrototypeTitle: "Colora Prototype",
    cardPrototypeLine: "The Colora, Belladère pilot site: map, surveys and proposed plans.",
    realTitle: "Realizations at Lakou Colora",
    cardRealLine: "Documented site photos: historical activity and existing facilities.",
    cardPartnersLine: "Communities, institutions, private sector, diaspora and civil society.",
    openInfographic: "Open the infographic at full size (new tab)"
});

let currentLanguage = "fr";

let currentProgram = null;

let currentTab = "overview";

let lastFocusedElement = null;



/* =========================================================
   4. DOM ELEMENTS
========================================================= */

const programGrid =
    document.getElementById("programGrid");

const detailModal =
    document.getElementById("detailModal");

const modalContent =
    document.getElementById("modalContent");

const modalImage =
    document.getElementById("modalImage");

const modalIcon =
    document.getElementById("modalIcon");

const modalTitle =
    document.getElementById("modalTitle");

const mainNav =
    document.getElementById("mainNav");

const menuToggle =
    document.getElementById("menuToggle");

const languageSelector =
    document.getElementById("language");

const expandProgramsButton =
    document.getElementById("expandPrograms");

const contactForm =
    document.getElementById("contactForm");

const formStatus =
    document.getElementById("formStatus");



/* =========================================================
   5. TRANSLATION HELPER
========================================================= */

function translate(key) {

    return (
        translations[currentLanguage][key] ||
        translations.fr[key] ||
        key
    );

}



/* =========================================================
   6. PROGRAM CARDS
========================================================= */

function renderPrograms() {

    if (!programGrid) {
        return;
    }

    programGrid.innerHTML =
        programs
            .map((program, index) => {

                return `
                    <article
                        class="program-card"
                        tabindex="0"
                        role="button"
                        aria-haspopup="dialog"
                        data-program="${program.id}"
                        aria-label="${program.title[currentLanguage]}"
                    >

                        <div
                            class="program-photo"
                            style="
                                background-image:
                                url('${program.image}')
                            "
                        ></div>


                        <div class="program-card-body"><span class="program-icon" aria-hidden="true">${programSymbol(program.id)}</span>

                            <h3>
                                ${index + 1}.
                                ${program.title[currentLanguage]}
                            </h3>


                            <p>
                                ${program.description[currentLanguage]}
                            </p>


                            <span class="card-link" aria-hidden="true">&#8250;</span>

                        </div>

                    </article>
                `;

            })
            .join("");

}



/* =========================================================
   7. CHANGE LANGUAGE
========================================================= */

function setLanguage(language) {

    if (!translations[language]) {
        language = "fr";
    }

    currentLanguage = language;


    /* HTML language */

    document.documentElement.lang =
        language === "ht"
            ? "ht"
            : language;


    /* Static text */

    document
        .querySelectorAll("[data-i18n]")
        .forEach((element) => {

            const key =
                element.dataset.i18n;

            const value =
                translations[currentLanguage][key];

            if (value) {
                element.textContent = value;
            }

        });


    /* Rebuild program cards */

    renderPrograms();


    /* Keep button state correct */

    if (
        programGrid &&
        programGrid.classList.contains("expanded")
    ) {

        expandProgramsButton.textContent =
            translate("showLess");

    } else {

        expandProgramsButton.textContent =
            translate("viewAll");

    }


    /* If program modal is already open */

    if (
        currentProgram &&
        detailModal.classList.contains("open")
    ) {

        updateProgramModal();

    }

}



/* =========================================================
   8. PROGRAM MODAL CONTENT
========================================================= */

function getProgramModalContent(program, tab) {

    /* -------------------------
       OVERVIEW
    ------------------------- */

    if (tab === "overview") {

        return `
            <p>
                ${program.description[currentLanguage]}
            </p>

            <p>
                ${program.impact[currentLanguage]}
            </p>
        `;

    }


    /* -------------------------
       OBJECTIVES
    ------------------------- */

    if (tab === "objectives") {

        let objectiveText = "";

        if (currentLanguage === "ht") {

            objectiveText =
                "Objektif piblik la se konekte sektè sa a ak lòt konpozan Lakou Haiti yo pou ranfòse sèvis, kapasite lokal, travay ak opòtinite ekonomik.";

        } else if (currentLanguage === "en") {

            objectiveText =
                "The public objective is to connect this sector with the other Lakou Haiti components to strengthen services, local capacity, employment and economic opportunity.";

        } else {

            objectiveText =
                "L’objectif public est de relier ce secteur aux autres composantes de Lakou Haiti afin de renforcer les services, les capacités locales, l’emploi et les opportunités économiques.";

        }

        return `
            <p>
                ${program.description[currentLanguage]}
            </p>

            <p>
                ${objectiveText}
            </p>
        `;

    }


    /* -------------------------
       COMPONENTS
    ------------------------- */

    if (tab === "components") {

        const items =
            program.components[currentLanguage] ||
            program.components.fr;

        return `
            <ul>
                ${items
                    .map(
                        (item) =>
                            `<li>${item}</li>`
                    )
                    .join("")}
            </ul>
        `;

    }


    /* -------------------------
       IMPACT
    ------------------------- */

    if (tab === "impacts") {

        return `
            <p>
                ${program.impact[currentLanguage]}
            </p>
        `;

    }


    return "";

}



/* =========================================================
   9. UPDATE PROGRAM MODAL
========================================================= */

function updateProgramModal() {

    if (!currentProgram) {
        return;
    }


    modalImage.style.backgroundImage =
        `url('${currentProgram.image}')`;


    modalIcon.innerHTML = programSymbol(currentProgram.id);


    modalTitle.textContent = `${programs.indexOf(currentProgram) + 1}. ${currentProgram.title[currentLanguage]}`;


    modalContent.innerHTML =
        getProgramModalContent(
            currentProgram,
            currentTab
        );
    if (currentTab === "overview") {
        const tiles = document.createElement("div"); tiles.className = "modal-components";
        currentProgram.components[currentLanguage].forEach(text => { const tile = document.createElement("span"); tile.textContent = text; tiles.append(tile); });
        modalContent.append(tiles);
    }



    document
        .querySelectorAll(".tab")
        .forEach((tabButton) => {
            tabButton.setAttribute("role", "tab");
            tabButton.id = "tab-" + tabButton.dataset.tab;
            tabButton.setAttribute("aria-controls", "modalContent");
            tabButton.setAttribute("aria-selected", String(tabButton.dataset.tab === currentTab));
            tabButton.tabIndex = tabButton.dataset.tab === currentTab ? 0 : -1;
            modalContent.setAttribute("aria-labelledby", "tab-" + currentTab);

            tabButton.classList.toggle(
                "active",
                tabButton.dataset.tab === currentTab
            );

        });

}



/* =========================================================
   10. OPEN PROGRAM MODAL
========================================================= */

function openProgram(programId) {

    const program =
        programs.find(
            (item) =>
                item.id === programId
        );


    if (!program) {
        return;
    }


    lastFocusedElement =
        document.activeElement;


    currentProgram =
        program;


    currentTab =
        "overview";


    detailModal.classList.remove("modal-wide");

    modalImage.hidden = false;


    const tabs =
        document.querySelector(".tabs");


    if (tabs) {
        tabs.style.display = "flex";
    }


    updateProgramModal();


    openModal();

}



/* =========================================================
   11. OPEN GENERIC MODAL
   Used for integrated model and prototype.
========================================================= */

function openGenericModal(
    title,
    html,
    image,
    icon = "",
    options = {}
) {

    lastFocusedElement =
        document.activeElement;


    currentProgram =
        null;


    /* Wide panel for infographics; no header when no image */

    detailModal.classList.toggle(
        "modal-wide",
        Boolean(options.wide)
    );

    modalImage.hidden =
        !image;

    modalImage.style.backgroundImage =
        image ? `url('${image}')` : "none";


    modalIcon.textContent =
        icon;


    modalTitle.textContent =
        title;


    modalContent.innerHTML =
        html;


    const tabs =
        document.querySelector(".tabs");


    if (tabs) {
        tabs.style.display = "none";
    }


    openModal();

}



/* =========================================================
   11b. COLORA PROTOTYPE GALLERY
   Approved Colora source material, grouped so that
   study documents, historical photos, existing
   facilities and proposed concepts stay distinct.
========================================================= */

const coloraGallery = {

    fr: {
        intro: {
            prototype: "Documents d’étude et développement proposé. Les plans et rendus présentent des projets, pas des installations achevées.",
            realizations: "Photographies documentées du site Lakou Colora : activités historiques et installations existantes."
        },
        openMap: "Ouvrir la carte complète (nouvel onglet)",
        groups: [
            {
                key: "study",
                title: "Étude de faisabilité — levé du terrain",
                badge: "Document d’étude",
                items: [
                    ["colora-map.jpg", 570, 581, "Carte en couleur du projet Lakou Colora, Plateau Central, divisée en zones d’aménagement.", "Carte de zonage du site de Colora (étude de faisabilité). Les zones indiquent l’affectation prévue des terres.", "wide map"],
                    ["colora-topography.jpg", 390, 303, "Relevé du site Lakou Colora avec courbes de niveau et emplacements des composantes.", "Relevé topographique (courbes de niveau) du même secteur.", "wide"]
                ]
            },
            {
                key: "historic",
                title: "Site et activités antérieures",
                badge: "Historique",
                tone: "historic",
                items: [
                    ["colora-nursery.jpg", 179, 179, "Rangées de jeunes plants sur un terrain en pente.", "Pépinière — agriculture expérimentale, 2012."],
                    ["colora-crops-2011.jpg", 191, 175, "Champ de cultures basses entre des arbres.", "Soja, maïs haïtien local et moringa, septembre 2011."],
                    ["colora-lake.jpg", 227, 213, "Plan d’eau au pied d’une colline.", "Plan d’eau et relief du site (date non précisée)."]
                ]
            },
            {
                key: "existing",
                title: "Installations existantes",
                badge: "Existant",
                items: [
                    ["colora-health-center.jpg", 180, 191, "Bâtiment blanc et vert avec véranda couverte, entouré d’arbres.", "Centre de santé, d’assainissement et de nutrition."],
                    ["colora-nutrition-center.jpg", 246, 169, "Bâtiment au fond d’un terrain boisé et herbeux.", "Centre de nutrition, vu depuis le terrain."]
                ]
            },
            {
                key: "proposed",
                title: "Développement proposé",
                badge: "Proposé — non construit",
                tone: "proposed",
                items: [
                    ["colora-institute-plan.png", 455, 566, "Plan d’étage en L avec salles de cours, bureaux, salle informatique et laboratoire.", "Plan proposé du bâtiment des instituts (salles de cours, salle informatique, laboratoire).", "wide"],
                    ["colora-institute-concept.jpg", 593, 247, "Rendu 3D d’un bâtiment autour d’une cour arborée.", "Rendu conceptuel — illustration d’un projet, pas une installation achevée.", "wide"]
                ]
            }
        ]
    },

    ht: {
        intro: {
            prototype: "Dokiman etid ak devlopman ki pwopoze. Plan ak desen yo montre pwojè, se pa enstalasyon ki fini.",
            realizations: "Foto dokimante sit Lakou Colora a: aktivite istorik ak enstalasyon ki egziste."
        },
        openMap: "Louvri kat konplè a (nouvo onglè)",
        groups: [
            {
                key: "study",
                title: "Etid fezabilite — kat teren an",
                badge: "Dokiman etid",
                items: [
                    ["colora-map.jpg", 570, 581, "Kat an koulè pwojè Lakou Colora, Plato Santral, divize an zòn amenajman.", "Kat zonaj sit Colora a (etid fezabilite). Zòn yo montre kijan yo planifye pou itilize tè a.", "wide map"],
                    ["colora-topography.jpg", 390, 303, "Kat sit Lakou Colora ak liy nivo ak kote konpozan yo ap ye.", "Kat topografik (liy nivo) menm sektè a.", "wide"]
                ]
            },
            {
                key: "historic",
                title: "Sit la ak aktivite anvan yo",
                badge: "Istorik",
                tone: "historic",
                items: [
                    ["colora-nursery.jpg", 179, 179, "Ranje ti plant sou yon teren an pant.", "Pepinyè — agrikilti eksperimantal, 2012."],
                    ["colora-crops-2011.jpg", 191, 175, "Jaden ak plant ba ant pye bwa.", "Soya, mayi peyi ak pye moringa, septanm 2011."],
                    ["colora-lake.jpg", 227, 213, "Dlo nan pye yon ti mòn.", "Dlo ak relyèf sit la (dat pa presize)."]
                ]
            },
            {
                key: "existing",
                title: "Enstalasyon ki egziste",
                badge: "Egziste",
                items: [
                    ["colora-health-center.jpg", 180, 191, "Bilding blan ak vèt ak yon galri kouvri, pye bwa bò kote l.", "Sant sante, asenisman ak nitrisyon."],
                    ["colora-nutrition-center.jpg", 246, 169, "Bilding nan fon yon teren ak pye bwa ak zèb.", "Sant nitrisyon, wè soti nan teren an."]
                ]
            },
            {
                key: "proposed",
                title: "Devlopman ki pwopoze",
                badge: "Pwopoze — poko bati",
                tone: "proposed",
                items: [
                    ["colora-institute-plan.png", 455, 566, "Plan etaj an fòm L ak sal klas, biwo, sal enfòmatik ak laboratwa.", "Plan pwopoze pou bilding enstiti yo (sal klas, sal enfòmatik, laboratwa).", "wide"],
                    ["colora-institute-concept.jpg", 593, 247, "Desen 3D yon bilding otou yon lakou ak pye bwa.", "Desen konsèp — se yon ilistrasyon pwojè, se pa yon bilding ki fini.", "wide"]
                ]
            }
        ]
    },

    en: {
        intro: {
            prototype: "Study documents and proposed development. Plans and renderings show proposals, not completed infrastructure.",
            realizations: "Documented photographs of the Lakou Colora site: historical activity and existing facilities."
        },
        openMap: "Open the full map (new tab)",
        groups: [
            {
                key: "study",
                title: "Feasibility study — site survey",
                badge: "Study document",
                items: [
                    ["colora-map.jpg", 570, 581, "Colour map of the Lakou Colora project, Central Plateau, divided into development zones.", "Colora site zoning map (feasibility study). Zones show proposed land use.", "wide map"],
                    ["colora-topography.jpg", 390, 303, "Survey of the Lakou Colora site with contour lines and component locations.", "Topographic survey (contour lines) of the same sector.", "wide"]
                ]
            },
            {
                key: "historic",
                title: "Site and earlier activity",
                badge: "Historical",
                tone: "historic",
                items: [
                    ["colora-nursery.jpg", 179, 179, "Rows of young plants on sloping ground.", "Nursery — experimental agriculture, 2012."],
                    ["colora-crops-2011.jpg", 191, 175, "Field of low crops between trees.", "Soya, native Haitian corn and moringa, September 2011."],
                    ["colora-lake.jpg", 227, 213, "Body of water at the foot of a hill.", "Water and terrain on the site (date not specified)."]
                ]
            },
            {
                key: "existing",
                title: "Existing facilities",
                badge: "Existing",
                items: [
                    ["colora-health-center.jpg", 180, 191, "White and green building with a covered veranda, surrounded by trees.", "Health, sanitation and nutrition center."],
                    ["colora-nutrition-center.jpg", 246, 169, "Building at the far end of wooded, grassy grounds.", "Nutrition center, seen from the grounds."]
                ]
            },
            {
                key: "proposed",
                title: "Proposed development",
                badge: "Proposed — not built",
                tone: "proposed",
                items: [
                    ["colora-institute-plan.png", 455, 566, "L-shaped floor plan with classrooms, offices, a computer room and a laboratory.", "Proposed institute building plan (classrooms, computer room, laboratory).", "wide"],
                    ["colora-institute-concept.jpg", 593, 247, "3D rendering of a building around a tree-lined courtyard.", "Concept rendering — an illustration of a proposal, not completed infrastructure.", "wide"]
                ]
            }
        ]
    }

};


function buildColoraGallery(language, view = "prototype") {

    const copy =
        coloraGallery[language] ||
        coloraGallery.fr;


    /* Prototype: surveys and proposed plans.
       Realizations: documented site photographs. */

    const viewGroups =
        view === "realizations"
            ? ["historic", "existing"]
            : ["study", "proposed"];


    const groups =
        copy.groups.filter(
            (group) =>
                viewGroups.includes(group.key)
        ).map(
            (group) => {

                const figures =
                    group.items.map(
                        ([file, width, height, alt, caption, layout = ""]) => {

                            const src =
                                `assets/${file}`;

                            const mapLink =
                                layout.includes("map")
                                    ? ` <a class="colora-map-link" href="${src}" target="_blank" rel="noopener">${copy.openMap}</a>`
                                    : "";

                            return `
                                <figure class="${layout}">
                                    <img src="${src}" width="${width}" height="${height}" alt="${alt}" loading="lazy" decoding="async">
                                    <figcaption>${caption}${mapLink}</figcaption>
                                </figure>
                            `;

                        }
                    ).join("");

                return `
                    <section class="colora-group">
                        <h3>
                            ${group.title}
                            <span class="colora-badge ${group.tone || ""}">${group.badge}</span>
                        </h3>
                        <div class="colora-grid">${figures}</div>
                    </section>
                `;

            }
        ).join("");


    return `
        <div class="colora-gallery">
            <p class="colora-intro">${copy.intro[view]}</p>
            ${groups}
        </div>
    `;

}



/* =========================================================
   11c. SUMMARY PANELS
   Problem, Solution, About, Realizations and Partners
   open from short homepage summaries.
========================================================= */

const storyPanels = {

    problem: {
        fr: {
            intro: "La pauvreté et les inégalités se trouvent à la racine des défis de développement d’Haïti. Faibles revenus, opportunités inégales et exclusion alimentent un cercle vicieux où chaque défi renforce les autres.",
            listTitle: "Des défis interconnectés",
            items: ["Gouvernance et institutions faibles", "Insécurité et violence", "Chômage et sous-emploi", "Insécurité alimentaire et malnutrition", "Accès limité à une éducation et à des soins de qualité", "Infrastructures et services de base insuffisants", "Dégradation de l’environnement et vulnérabilité climatique", "Migration massive et fuite des cerveaux", "Faible investissement et stagnation économique"],
            closing: "Ce cercle maintient Haïti dans une pauvreté et des inégalités persistantes et empêche un développement durable.",
            alt: "Infographie « La pauvreté et les inégalités en Haïti » : neuf défis disposés en cercle autour de la pauvreté et des inégalités, reliés par des flèches formant un cercle vicieux."
        },
        ht: {
            intro: "Povrete ak inegalite se rasin defi devlopman Ayiti yo. Ti revni, opòtinite ki pa egal ak eksklizyon ap nouri yon sèk visye kote chak defi ranfòse lòt yo.",
            listTitle: "Defi ki mare youn ak lòt",
            items: ["Gouvènans ak enstitisyon ki fèb", "Ensekirite ak vyolans", "Chomaj ak souzanplwa", "Ensekirite alimantè ak malnitrisyon", "Aksè limite a bon edikasyon ak bon swen sante", "Enfrastrikti ak sèvis de baz ki fèb", "Degradasyon anviwònman ak vilnerabilite klimatik", "Migrasyon an mas ak fuit sèvo", "Ti envestisman ak ekonomi ki kanpe"],
            closing: "Sèk sa a kenbe Ayiti nan yon povrete ak inegalite ki dire, epi li anpeche yon devlopman dirab.",
            alt: "Enfografi « Povrete ak inegalite ann Ayiti »: nèf defi toutotou povrete ak inegalite, ak flèch ki fòme yon sèk visye."
        },
        en: {
            intro: "Poverty and inequality lie at the root of Haiti’s development challenges. Low income, unequal opportunities and exclusion fuel a vicious cycle in which each challenge reinforces the others.",
            listTitle: "Interconnected challenges",
            items: ["Weak governance and institutions", "Insecurity and violence", "Unemployment and underemployment", "Food insecurity and malnutrition", "Limited access to quality education and health care", "Weak infrastructure and basic services", "Environmental degradation and climate vulnerability", "Mass migration and brain drain", "Low investment and economic stagnation"],
            closing: "This cycle traps Haiti in persistent poverty and inequality and prevents sustainable development.",
            alt: "Infographic “Haiti’s Poverty and Inequality”: nine challenges arranged in a circle around poverty and inequality, linked by arrows into a vicious cycle."
        }
    },

    solution: {
        fr: {
            intro: "Lakou Haiti est une plateforme nationale de développement intégrée et décentralisée. Elle relie les communautés, l’État, le secteur privé, la société civile, les universités, les partenaires au développement et la diaspora haïtienne autour d’un cadre national commun.",
            system: "Au lieu de traiter séparément l’agriculture, l’éducation, la santé, l’eau, le logement, l’énergie, les transports, le numérique, l’environnement, l’entreprise, le tourisme, la culture et le sport, Lakou Haiti les intègre dans un système unique :",
            flow: "Capital humain → Infrastructures → Capacité productive → Financement → Entreprises → Marchés → Emplois → Revenus → Propriété → Richesse → Développement national durable",
            network: "La mise en œuvre s’appuie sur un réseau décentralisé de 46 pôles de développement de district (DDH), 145 centres communautaires communaux (CCC) et 572 centres communautaires de section communale (SCCC).",
            alt: "Infographie « Lakou Haiti Solution » : roue des composantes — agriculture, éducation, santé, environnement, eau, énergie, logement, transport, numérique, entreprise, finance, sport, recherche et gouvernance — autour de la plateforme nationale de développement Lakou Haiti."
        },
        ht: {
            intro: "Lakou Haiti se yon platfòm nasyonal devlopman ki entegre e desantralize. Li konekte kominote yo, Leta, sektè prive a, sosyete sivil la, inivèsite yo, patnè devlopman yo ak dyaspora ayisyen an nan yon menm kad nasyonal.",
            system: "Olye pou l trete agrikilti, edikasyon, sante, dlo, lojman, enèji, transpò, nimerik, anviwònman, antrepriz, touris, kilti ak espò apa, Lakou Haiti mete yo ansanm nan yon sèl sistèm:",
            flow: "Kapital imen → Enfrastrikti → Kapasite pwodiktif → Finansman → Antrepriz → Mache → Travay → Revni → Pwopriyete → Richès → Devlopman nasyonal dirab",
            network: "Aplikasyon an ap fèt atravè yon rezo desantralize: 46 pòl devlopman distri (DDH), 145 sant kominotè komin (CCC) ak 572 sant kominotè seksyon kominal (SCCC).",
            alt: "Enfografi « Lakou Haiti Solution »: yon wou konpozan — agrikilti, edikasyon, sante, anviwònman, dlo, enèji, lojman, transpò, nimerik, antrepriz, finans, espò, rechèch ak gouvènans — toutotou platfòm nasyonal devlopman Lakou Haiti."
        },
        en: {
            intro: "Lakou Haiti is an integrated, decentralized national development platform. It connects communities, government, the private sector, civil society, universities, development partners and the Haitian diaspora through a common national framework.",
            system: "Rather than treating agriculture, education, health, water, housing, energy, transportation, digital infrastructure, environmental restoration, enterprise, tourism, culture and sports as separate sectors, Lakou Haiti integrates them into one development system:",
            flow: "Human Capital → Infrastructure → Productive Capacity → Finance → Enterprise → Markets → Employment → Income → Ownership → Wealth → Sustainable National Development",
            network: "Implementation operates through a decentralized network of 46 District Development Hubs (DDHs), 145 Communal Community Centers (CCCs) and 572 Section Communal Community Centers (SCCCs).",
            alt: "Infographic “Lakou Haiti Solution”: a wheel of components — agriculture, education, health, environment, water, energy, housing, transport, digital, enterprise, finance, sports, research and governance — around the Lakou Haiti national development platform."
        }
    }

};


function infographicFigure(src, width, height, alt) {

    return `
        <figure class="info-figure">
            <img src="${src}" width="${width}" height="${height}" alt="${alt}" decoding="async">
            <figcaption><a href="${src}" target="_blank" rel="noopener">${translate("openInfographic")}</a></figcaption>
        </figure>
    `;

}


function modelOrbit() {

    const icons =
        ["🌾", "🎓", "⚽", "🌳", "💧", "♻️", "❤", "⚡", "🏠", "🚌", "📶", "🌴", "🤝"];

    return `
        <div class="orbit modal-orbit" role="img" aria-label="${translate("modelShortTitle")}">
            <div class="orbit-center">
                <strong>LAKOU HAITI</strong>
                <small>${translate("integrated")}</small>
            </div>
            ${icons.map((icon, index) => `<span style="--i:${index}" aria-hidden="true">${icon}</span>`).join("")}
        </div>
    `;

}


document.addEventListener(
    "click",
    (event) => {

        const trigger =
            event.target.closest(
                "[data-open-problem], [data-open-solution], [data-open-about], [data-open-realizations], [data-open-partners]"
            );


        if (!trigger) {
            return;
        }


        if (trigger.matches("[data-open-problem]")) {

            const copy =
                storyPanels.problem[currentLanguage] ||
                storyPanels.problem.fr;

            openGenericModal(
                translate("problemTitle"),
                `
                    <p>${copy.intro}</p>
                    ${infographicFigure("assets/haiti-problem.jpg", 659, 580, copy.alt)}
                    <section class="panel-group">
                        <h3 class="panel-subtitle">${copy.listTitle}</h3>
                        <ul class="panel-list">${copy.items.map((item) => `<li>${item}</li>`).join("")}</ul>
                    </section>
                    <p>${copy.closing}</p>
                `,
                null,
                "",
                { wide: true }
            );

        } else if (trigger.matches("[data-open-solution]")) {

            const copy =
                storyPanels.solution[currentLanguage] ||
                storyPanels.solution.fr;

            openGenericModal(
                translate("solutionTitle"),
                `
                    <p>${copy.intro}</p>
                    ${infographicFigure("assets/lakou-solution.jpg", 624, 530, copy.alt)}
                    <p>${copy.system}</p>
                    <p class="panel-flow">${copy.flow}</p>
                    <p class="panel-support">${copy.network}</p>
                `,
                null,
                "",
                { wide: true }
            );

        } else if (trigger.matches("[data-open-about]")) {

            const points =
                [["vision", "visionText"], ["approach", "approachText"], ["scope", "scopeText"]];

            openGenericModal(
                translate("aboutTitle"),
                `
                    <p>${translate("aboutText")}</p>
                    <ul class="panel-points">
                        ${points.map(([title, text]) => `<li><strong>${translate(title)}</strong> ${translate(text)}</li>`).join("")}
                    </ul>
                `,
                "assets/about.jpg",
                ""
            );

        } else if (trigger.matches("[data-open-realizations]")) {

            openGenericModal(
                translate("realTitle"),
                buildColoraGallery(currentLanguage, "realizations"),
                null,
                ""
            );

        } else if (trigger.matches("[data-open-partners]")) {

            const categories =
                [["🏛️", "p1"], ["🌐", "p2"], ["🏢", "p3"], ["👥", "p4"], ["🎓", "p5"], ["🤲", "p6"]];

            openGenericModal(
                translate("partnersShortTitle"),
                `
                    <p>${translate("partnerText")}</p>
                    <ul class="panel-partners">
                        ${categories.map(([icon, key]) => `<li><span aria-hidden="true">${icon}</span>${translate(key)}</li>`).join("")}
                    </ul>
                `,
                null,
                ""
            );

        }

    }
);



/* =========================================================
   12. OPEN MODAL
========================================================= */

function openModal() {

    closeNavigation(false);
    detailModal.classList.add("open");
    document.querySelectorAll("header, main, footer").forEach(el => el.inert = true);

    detailModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );


    const closeButton =
        document.querySelector(
            ".modal-close"
        );


    if (closeButton) {

        setTimeout(() => {
            closeButton.focus();
        }, 50);

    }

}



/* =========================================================
   13. CLOSE MODAL
========================================================= */

function closeModal() {

    document.querySelectorAll("header, main, footer").forEach(el => el.inert = false);
    detailModal.classList.remove("open");

    detailModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );


    currentProgram =
        null;


    currentTab =
        "overview";


    detailModal.classList.remove("modal-wide");

    modalImage.hidden = false;


    const tabs =
        document.querySelector(".tabs");


    if (tabs) {
        tabs.style.display = "flex";
    }


    if (
        lastFocusedElement &&
        typeof lastFocusedElement.focus === "function"
    ) {

        if (lastFocusedElement.isConnected && lastFocusedElement.getClientRects().length && !lastFocusedElement.closest("[inert], [hidden]")) lastFocusedElement.focus();
        else if (window.innerWidth <= 1100) menuToggle.focus();
        else document.querySelector(`[data-program="${lastFocusedElement.dataset.program}"]`)?.focus();

    }

}



/* =========================================================
   14. CLICK EVENTS
========================================================= */

document.addEventListener(
    "click",
    (event) => {


        /* -----------------------------------------
           PROGRAM CARD / DETAILS BUTTON
        ----------------------------------------- */

        const programTarget =
            event.target.closest(
                "[data-program]"
            );


        if (programTarget) {

            const programId =
                programTarget.dataset.program;


            openProgram(programId);

            return;
        }


        /* -----------------------------------------
           CLOSE MODAL
        ----------------------------------------- */

        if (
            event.target.closest(
                "[data-close-modal]"
            )
        ) {

            closeModal();

            return;
        }


        /* -----------------------------------------
           MODAL TABS
        ----------------------------------------- */

        if (
            event.target.matches(".tab") &&
            currentProgram
        ) {

            currentTab =
                event.target.dataset.tab;


            updateProgramModal();

            return;
        }


        /* -----------------------------------------
           INTEGRATED MODEL
        ----------------------------------------- */

        if (
            event.target.closest(
                "[data-open-model]"
            )
        ) {

            let modelDetails = "";


            if (currentLanguage === "ht") {

                modelDetails = `
                    <p>
                        ${translate("modelText")}
                    </p>

                    <p>
                        Modèl la chèche konekte devlopman moun,
                        pwodiksyon, dlo, enèji, transpò,
                        anviwònman, sante, lojman, teknoloji,
                        antreprenarya ak aksè sou mache.
                    </p>

                    <p>
                        Olye chak sektè fonksyone apa,
                        objektif la se fè yo sipòte youn lòt
                        nan menm ekosistèm devlopman an.
                    </p>
                `;

            } else if (
                currentLanguage === "en"
            ) {

                modelDetails = `
                    <p>
                        ${translate("modelText")}
                    </p>

                    <p>
                        The model connects human development,
                        production, water, energy, transport,
                        environment, health, housing, technology,
                        entrepreneurship and market access.
                    </p>

                    <p>
                        Rather than operating as isolated sectors,
                        the components are designed to reinforce
                        one another within the same development
                        ecosystem.
                    </p>
                `;

            } else {

                modelDetails = `
                    <p>
                        ${translate("modelText")}
                    </p>

                    <p>
                        Le modèle relie le développement humain,
                        la production, l’eau, l’énergie,
                        le transport, l’environnement, la santé,
                        le logement, la technologie,
                        l’entrepreneuriat et l’accès aux marchés.
                    </p>

                    <p>
                        Au lieu de fonctionner comme des secteurs
                        isolés, les composantes sont conçues pour
                        se renforcer mutuellement au sein du même
                        écosystème de développement.
                    </p>
                `;

            }


            openGenericModal(

                translate("modelTitle"),

                modelOrbit() + modelDetails,

                "assets/about.jpg",

                ""
            );


            resizeOrbit();


            return;
        }


        /* -----------------------------------------
           PROTOTYPE
        ----------------------------------------- */

        if (
            event.target.closest(
                "[data-open-prototype]"
            )
        ) {

            let prototypeDetails = "";


            if (currentLanguage === "ht") {

                prototypeDetails = `
                    <p>
                        ${translate("prototypeText")}
                    </p>

                    <p>
                        Colora – Belladère sèvi kòm yon espas
                        demonstrasyon ak aprantisaj pou teste
                        fason plizyè konpozan Lakou Haiti kapab
                        travay ansanm nan yon menm teritwa.
                    </p>

                    <p>
                        Sit piblik la prezante sèlman yon apèsi.
                        Done operasyonèl, planifikasyon entèn,
                        detay finansye ak lòt enfòmasyon sansib
                        pa pibliye isit la.
                    </p>
                `;

            } else if (
                currentLanguage === "en"
            ) {

                prototypeDetails = `
                    <p>
                        ${translate("prototypeText")}
                    </p>

                    <p>
                        Colora – Belladère serves as a
                        demonstration and learning environment
                        for testing how multiple Lakou Haiti
                        components can work together within the
                        same territory.
                    </p>

                    <p>
                        The public website provides only a
                        high-level overview. Operational data,
                        internal planning, financial details and
                        other sensitive information are not
                        published here.
                    </p>
                `;

            } else {

                prototypeDetails = `
                    <p>
                        ${translate("prototypeText")}
                    </p>

                    <p>
                        Colora – Belladère sert d’espace de
                        démonstration et d’apprentissage afin de
                        tester la manière dont plusieurs
                        composantes de Lakou Haiti peuvent
                        fonctionner ensemble sur un même
                        territoire.
                    </p>

                    <p>
                        Le site public présente uniquement une
                        vue d’ensemble. Les données
                        opérationnelles, la planification
                        interne, les détails financiers et les
                        autres informations sensibles ne sont
                        pas publiés ici.
                    </p>
                `;

            }


            openGenericModal(

                translate(
                    "prototypeTitle"
                ),

                prototypeDetails +
                    buildColoraGallery(currentLanguage, "prototype"),

                "assets/prototype.jpg",

                ""
            );


            return;
        }

    }
);



/* =========================================================
   15. KEYBOARD SUPPORT
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {


        /* Escape closes modal */

        if (
            event.key === "Escape" &&
            detailModal.classList.contains(
                "open"
            )
        ) {

            closeModal();

            return;
        }


        /*
            Allow keyboard users to open
            a program card with Enter / Space.
        */

        const focusedCard =
            document.activeElement;


        if (
            focusedCard &&
            focusedCard.classList.contains(
                "program-card"
            ) &&
            (
                event.key === "Enter" ||
                event.key === " "
            )
        ) {

            event.preventDefault();


            openProgram(
                focusedCard.dataset.program
            );

        }

    }
);



/* =========================================================
   16. MOBILE MENU
========================================================= */

if (
    menuToggle &&
    mainNav
) {

    menuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                mainNav.classList.toggle(
                    "open"
                );


            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Fermer le menu"
                    : "Ouvrir le menu"
            );

        }
    );


    /* Close menu when navigation link is selected */

    mainNav.addEventListener(
        "click",
        (event) => {

            if (
                event.target.tagName === "A"
            ) {

                mainNav.classList.remove(
                    "open"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    /*
        If user moves back to desktop width,
        reset mobile menu.
    */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 1100
            ) {

                mainNav.classList.remove(
                    "open"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

}



/* =========================================================
   17. LANGUAGE SELECTOR
========================================================= */

if (languageSelector) {

    languageSelector.addEventListener(
        "change",
        (event) => {

            setLanguage(
                event.target.value
            );

        }
    );

}



/* =========================================================
   18. SHOW / HIDE ALL PROGRAMS
========================================================= */

if (
    expandProgramsButton &&
    programGrid
) {

    expandProgramsButton.addEventListener(
        "click",
        () => {

            const isExpanded =
                programGrid.classList.toggle(
                    "expanded"
                );


            expandProgramsButton.textContent =
                isExpanded
                    ? translate("showLess")
                    : translate("viewAll");


            /*
                When collapsing, bring visitor
                back to program heading.
            */

            if (!isExpanded) {

                const section =
                    document.getElementById(
                        "programs"
                    );


                if (section) {

                    section.scrollIntoView({
                        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
                        block: "start"
                    });

                }

            }

        }
    );

}



/* =========================================================
   19. CONTACT FORM
========================================================= */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const formData =
                new FormData(
                    contactForm
                );


            const name =
                formData
                    .get("name")
                    ?.trim();


            const email =
                formData
                    .get("email")
                    ?.trim();


            const message =
                formData
                    .get("message")
                    ?.trim();


            if (
                !name ||
                !email ||
                !message
            ) {

                if (
                    currentLanguage === "ht"
                ) {

                    formStatus.textContent =
                        "Tanpri ranpli tout chan yo.";

                } else if (
                    currentLanguage === "en"
                ) {

                    formStatus.textContent =
                        "Please complete all fields.";

                } else {

                    formStatus.textContent =
                        "Veuillez remplir tous les champs.";

                }


                return;
            }


            /*
                We intentionally do NOT send data yet.

                Once an official contact email or backend
                endpoint is approved, this form can be
                connected to the real delivery system.
            */


            if (
                currentLanguage === "ht"
            ) {

                formStatus.textContent =
                    "Fòm nan pare. Lè adrès kontak ofisyèl la valide, nou ka konekte li ak sistèm mesaj la.";

            } else if (
                currentLanguage === "en"
            ) {

                formStatus.textContent =
                    "The form is ready. Once the official contact address is approved, it can be connected to message delivery.";

            } else {

                formStatus.textContent =
                    "Le formulaire est prêt. Dès que l’adresse de contact officielle sera validée, il pourra être connecté à l’envoi des messages.";

            }

        }
    );

}



/* =========================================================
   20. SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


/*
    If IntersectionObserver is available,
    reveal sections when they enter viewport.
*/

if (
    "IntersectionObserver" in window
) {

    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add(
                                    "visible"
                                );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.10
            }

        );


    revealElements.forEach(
        (element) => {

            observer.observe(
                element
            );

        }
    );

} else {

    /*
        Fallback for old browsers.
    */

    revealElements.forEach(
        (element) => {

            element.classList.add(
                "visible"
            );

        }
    );

}



/* =========================================================
   21. CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    (event) => {

        if (
            !mainNav ||
            !menuToggle
        ) {
            return;
        }


        const menuIsOpen =
            mainNav.classList.contains(
                "open"
            );


        if (!menuIsOpen) {
            return;
        }


        const clickedInsideMenu =
            mainNav.contains(
                event.target
            );


        const clickedMenuButton =
            menuToggle.contains(
                event.target
            );


        if (
            !clickedInsideMenu &&
            !clickedMenuButton
        ) {

            mainNav.classList.remove(
                "open"
            );


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);



/* =========================================================
   22. INITIALIZE WEBSITE
========================================================= */

function initializeWebsite() {

    /*
        Default public language:
        French
    */

    setLanguage("fr");


    /*
        Make sure selector agrees
        with current language.
    */

    if (languageSelector) {

        languageSelector.value =
            currentLanguage;

    }

}



/* =========================================================
   START
========================================================= */

initializeWebsite();/* Responsive navigation and keyboard support. Public program data stays above. */
function closeNavigation(restore = true) {
    mainNav.classList.remove('open');
    document.getElementById('programMenu').hidden = true;
    document.getElementById('programMenuToggle').setAttribute('aria-expanded','false');
    menuToggle.setAttribute('aria-expanded', 'false');
    syncNavigation();
    if (restore && window.innerWidth <= 1100) menuToggle.focus();
}
function syncNavigation() {
    const mobile = window.matchMedia('(max-width: 1100px)').matches;
    const open = mobile && mainNav.classList.contains('open');
    mainNav.inert = mobile && !open;
    document.getElementById('navBackdrop').hidden = !open;
    document.body.classList.toggle('nav-open', open);
    document.querySelector('main').inert = open || detailModal.classList.contains('open');
    document.querySelector('footer').inert = open || detailModal.classList.contains('open');
    const labels = {fr:['Ouvrir le menu','Fermer le menu'],ht:['Louvri meni an','Fèmen meni an'],en:['Open menu','Close menu']};
    menuToggle.setAttribute('aria-label', labels[currentLanguage][open ? 1 : 0]);
    document.getElementById('menuClose').setAttribute('aria-label',labels[currentLanguage][1]);
    document.querySelector('.modal-close').setAttribute('aria-label',{fr:'Fermer',ht:'Fèmen',en:'Close'}[currentLanguage]);
}
function refreshNavigation() {
    const menu = document.getElementById('programMenu');
    document.getElementById('programMenuToggle').setAttribute('aria-label', translate('navPrograms'));
    menu.replaceChildren();
    programs.forEach(program => {
        const button = document.createElement('button');
        button.type = 'button'; button.dataset.program = program.id;
        button.textContent = program.title[currentLanguage];
        menu.append(button);
    });
    document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === currentLanguage)));
    expandProgramsButton.setAttribute('aria-expanded', String(programGrid.classList.contains('expanded')));
    expandProgramsButton.setAttribute('aria-controls', 'programGrid');
    syncNavigation();
}
menuToggle.addEventListener('click', () => { syncNavigation(); if(mainNav.classList.contains('open')) document.getElementById('menuClose').focus(); });
document.getElementById('menuClose').addEventListener('click', () => closeNavigation());
document.getElementById('navBackdrop').addEventListener('click', () => closeNavigation());
mainNav.addEventListener('click', event => { if(event.target.closest('a')) closeNavigation(false); });
document.addEventListener('click', () => syncNavigation());
window.addEventListener('resize', () => { if(window.innerWidth > 1100) mainNav.classList.remove('open'); syncNavigation(); resizeOrbit(); });
document.getElementById('programMenuToggle').addEventListener('click', event => {
    const panel = document.getElementById('programMenu');
    panel.hidden = !panel.hidden;
    event.currentTarget.setAttribute('aria-expanded', String(!panel.hidden));
});
document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => { setLanguage(button.dataset.language); languageSelector.value = currentLanguage; refreshNavigation(); }));
languageSelector.addEventListener('change', refreshNavigation);
expandProgramsButton.addEventListener('click', refreshNavigation);
document.querySelectorAll('a[href="#contact"]').forEach(link => link.addEventListener('click', () => document.querySelector('.contact-disclosure').open = true));
document.addEventListener('keydown', event => {
    const modalOpen = detailModal.classList.contains('open');
    const navOpen = mainNav.classList.contains('open') && window.innerWidth <= 1100;
    if(event.key === 'Escape' && navOpen && !modalOpen) closeNavigation();
    if(event.key === 'Escape' && !modalOpen && !navOpen) {
        const menu = document.getElementById('programMenu');
        if(!menu.hidden) { menu.hidden = true; document.getElementById('programMenuToggle').setAttribute('aria-expanded','false'); document.getElementById('programMenuToggle').focus(); }
    }
    if(event.target.matches('.tab') && ['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) {
        event.preventDefault();
        const tabs = [...document.querySelectorAll('.tab')];
        let next = tabs.indexOf(event.target);
        next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length-1 : (next + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
        tabs[next].click(); tabs[next].focus();
    }
    if(event.key !== 'Tab' || (!modalOpen && !navOpen)) return;
    const scope = modalOpen ? detailModal : mainNav;
    const focusable = [...scope.querySelectorAll('a[href],button,input,select,textarea,[tabindex]')].filter(el => !el.disabled && el.tabIndex >= 0 && el.getClientRects().length && !el.closest('[hidden]'));
    const first = focusable[0], last = focusable.at(-1);
    if(event.shiftKey && (document.activeElement === first || !scope.contains(document.activeElement))) { event.preventDefault(); last?.focus(); }
    else if(!event.shiftKey && (document.activeElement === last || !scope.contains(document.activeElement))) { event.preventDefault(); first?.focus(); }
});
function resizeOrbit() {
    document.querySelectorAll('.orbit').forEach(orbit => orbit.style.setProperty('--orbit-radius', `${orbit.clientWidth * .39}px`));
}
new ResizeObserver(resizeOrbit).observe(detailModal);
refreshNavigation();
resizeOrbit();

function programSymbol(id) { return `<svg class="sector-icon" aria-hidden="true"><use href="assets/icons.svg#${id}"></use></svg>`; }

/* Hero brand: while the hero logo is visible, hide the header logo so branding is not duplicated */
(() => {
    const heroBrand = document.querySelector(".hero-brand");
    const header = document.querySelector(".site-header");
    if (!heroBrand || !header || !("IntersectionObserver" in window)) return;
    new IntersectionObserver(([entry]) => {
        header.classList.toggle("hero-brand-on-screen", entry.isIntersecting);
    }, { rootMargin: `-${header.offsetHeight}px 0px 0px 0px` }).observe(heroBrand);
})();
