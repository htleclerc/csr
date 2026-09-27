/* ============================================================
   Cabinet Safiou Radji — contenus bilingues (FR / EN)
   ============================================================ */

export type Lang = 'fr' | 'en';

export type Expertise = { title: string; items: string[]; note?: string };
export type Value = { name: string; desc: string };
export type Reason = { title: string; desc: string };
export type Portal = { roman: string; title: string; items: string[] };

type ByLang<T> = Record<Lang, T>;

export const I18N = {
  fr: {
    navCabinet: 'Le cabinet', navExpertises: 'Expertises', navSecteurs: 'Secteurs', navFondateur: 'Fondateur', navRessources: 'Ressources',
    heroKicker: 'Cabinet Safiou Radji',
    heroTitle: "L'Excellence Financière au Service de la Performance Durable",
    heroTagline: 'Notre Expertise au Service de Votre Excellente Maîtrise',
    pillar1: 'Conseil stratégique', pillar2: 'Finance', pillar3: 'Investissement', pillar4: 'Développement durable',
    heroSub: "Nous accompagnons les entreprises, institutions financières, gouvernements, organisations internationales et investisseurs dans la conception et la mise en œuvre de stratégies créatrices de valeur durable.",
    heroCta1: 'Nos expertises', heroCta2: 'Nous contacter',
    whoKicker: 'Qui sommes-nous', whoTitle: 'Un cabinet indépendant de conseil stratégique, financier et organisationnel',
    whoText: "Le Cabinet Safiou Radji intervient auprès des entreprises, institutions publiques, organisations internationales, investisseurs et partenaires techniques et financiers. Notre vocation : aider les organisations à structurer leur croissance, renforcer leur gouvernance, mobiliser des financements, améliorer leur performance, intégrer les enjeux ESG et développer des projets à fort impact économique et social.",
    whoZone: "Le cabinet intervient principalement en Afrique de l'Ouest, en Afrique Centrale et auprès de partenaires internationaux.",
    visionLabel: 'Notre vision', visionText: "Être le cabinet de référence en Afrique francophone dans le domaine du conseil stratégique, de la finance durable, de l'investissement et de la transformation des organisations.",
    missionLabel: 'Notre mission', missionText: "Accompagner les organisations publiques et privées dans la création de valeur, l'amélioration de leur performance, la mobilisation de financements, la transformation durable, le développement de projets structurants et la mise en œuvre des meilleures pratiques de gouvernance.",
    valuesKicker: 'Nos valeurs',
    expKicker: 'Nos domaines', expTitle: "Six domaines d'expertise", expHint: 'Cliquez sur un domaine pour le détailler',
    sectKicker: "Secteurs d'intervention", sectTitle: 'Une connaissance fine des secteurs qui transforment l’Afrique',
    sectSub: 'De la mine aux infrastructures, de la banque aux collectivités territoriales.',
    founderKicker: 'Notre fondateur', founderRole: 'Fondateur & Directeur Général · Expert-comptable · 30 ans d’expérience de haut niveau',
    founderBio: "Expert-comptable, consultant international et spécialiste de la finance durable, Safiou Radji possède une expertise reconnue dans les domaines de la finance, de la gouvernance, de l'investissement, du développement durable et de la transformation des organisations.",
    founderConf: "Il intervient régulièrement dans des conférences, séminaires et programmes de formation consacrés aux enjeux de la finance durable, des indicateurs ESG, de la gouvernance et de la transformation financière.",
    founderQuote: "Dans un environnement économique en constante évolution, les organisations ont besoin d'un accompagnement stratégique, financier et humain capable de transformer les défis en opportunités. Notre ambition est de mettre notre expertise au service de la performance durable et de l'impact positif.",
    photoPlaceholder: 'Photo à fournir',
    whyKicker: 'Pourquoi nous choisir', whyTitle: 'Cinq raisons de travailler avec le cabinet',
    clientsKicker: 'Nos clients cibles',
    resKicker: 'Ressources & Programmes', resTitle: 'Publications, Académie, Investisseurs, Actualités', resSoon: 'Prochainement',
    contactTitle: 'Parlons de vos enjeux',
    contactSub: 'Décrivez-nous votre besoin — nous revenons vers vous rapidement pour un premier échange confidentiel.',
    labelSiege: 'Siège', labelPhone: 'Téléphone', labelSocial: 'Réseaux', toBeConfirmed: 'À préciser',
    formName: 'Nom complet', formOrg: 'Organisation', formMsg: 'Votre message', formSend: 'Envoyer',
    formThanks: 'Merci pour votre message', formThanksSub: 'Nous vous répondrons dans les plus brefs délais.',
    footerSlogan: '« Structurer aujourd’hui les organisations qui réussiront demain »',
  },
  en: {
    navCabinet: 'The firm', navExpertises: 'Expertise', navSecteurs: 'Sectors', navFondateur: 'Founder', navRessources: 'Resources',
    heroKicker: 'Cabinet Safiou Radji',
    heroTitle: 'Financial Excellence in the Service of Sustainable Performance',
    heroTagline: 'Our Expertise in the Service of Your Excellent Mastery',
    pillar1: 'Strategic advisory', pillar2: 'Finance', pillar3: 'Investment', pillar4: 'Sustainable development',
    heroSub: 'We support companies, financial institutions, governments, international organisations and investors in designing and implementing strategies that create sustainable value.',
    heroCta1: 'Our expertise', heroCta2: 'Contact us',
    whoKicker: 'Who we are', whoTitle: 'An independent strategic, financial and organisational advisory firm',
    whoText: 'Cabinet Safiou Radji works with companies, public institutions, international organisations, investors and technical and financial partners. Our vocation: helping organisations structure their growth, strengthen their governance, mobilise financing, improve their performance, integrate ESG issues and develop projects with strong economic and social impact.',
    whoZone: 'The firm operates mainly in West Africa, Central Africa and with international partners.',
    visionLabel: 'Our vision', visionText: 'To be the reference firm in French-speaking Africa for strategic advisory, sustainable finance, investment and organisational transformation.',
    missionLabel: 'Our mission', missionText: 'Supporting public and private organisations in value creation, performance improvement, financing mobilisation, sustainable transformation, the development of structuring projects and the implementation of governance best practices.',
    valuesKicker: 'Our values',
    expKicker: 'Our domains', expTitle: 'Six areas of expertise', expHint: 'Click a domain to expand it',
    sectKicker: 'Sectors', sectTitle: 'Deep knowledge of the sectors transforming Africa',
    sectSub: 'From mining to infrastructure, from banking to local governments.',
    founderKicker: 'Our founder', founderRole: 'Founder & CEO · Chartered accountant · 30 years of senior experience',
    founderBio: 'Chartered accountant, international consultant and sustainable finance specialist, Safiou Radji has recognised expertise in finance, governance, investment, sustainable development and organisational transformation.',
    founderConf: 'He regularly speaks at conferences, seminars and training programmes on sustainable finance, ESG indicators, governance and financial transformation.',
    founderQuote: 'In a constantly evolving economic environment, organisations need strategic, financial and human support capable of turning challenges into opportunities. Our ambition is to put our expertise at the service of sustainable performance and positive impact.',
    photoPlaceholder: 'Photo to be provided',
    whyKicker: 'Why choose us', whyTitle: 'Five reasons to work with the firm',
    clientsKicker: 'Our target clients',
    resKicker: 'Resources & Programmes', resTitle: 'Publications, Academy, Investors, News', resSoon: 'Coming soon',
    contactTitle: 'Let’s discuss your challenges',
    contactSub: 'Tell us about your needs — we will get back to you promptly for a confidential first exchange.',
    labelSiege: 'Head office', labelPhone: 'Phone', labelSocial: 'Social', toBeConfirmed: 'To be confirmed',
    formName: 'Full name', formOrg: 'Organisation', formMsg: 'Your message', formSend: 'Send',
    formThanks: 'Thank you for your message', formThanksSub: 'We will get back to you shortly.',
    footerSlogan: '“Structuring today the organisations that will succeed tomorrow”',
  },
} satisfies ByLang<Record<string, string>>;

export type I18nKey = keyof (typeof I18N)['fr'];

export const DATA: {
  expertises: ByLang<Expertise[]>;
  values: ByLang<Value[]>;
  sectors: ByLang<string[]>;
  skills: ByLang<string[]>;
  why: ByLang<Reason[]>;
  clients: ByLang<string[]>;
  portals: ByLang<Portal[]>;
} = {
  expertises: {
    fr: [
      { title: 'Finance durable, ESG & RSE', items: ["Stratégies et plans d'actions ESG et RSE", 'Reporting ESG et RSE', 'Certification ESG', 'Finance verte, climat et durable', 'Taxonomie verte', 'Évaluation et cartographie des risques ESG', 'Stratégie et mise en œuvre RSE', 'Accompagnement aux normes internationales RSE et ESG'], note: "Les normes ESG et la finance durable deviennent des éléments centraux de la gouvernance et de l'accès aux financements dans les marchés africains et internationaux." },
      { title: 'Stratégie & Gouvernance', items: ['Planification stratégique', "Élaboration de plans d'affaires", "Gouvernance d'entreprise", 'Gestion du changement', 'Restructuration organisationnelle', 'Transformation institutionnelle'] },
      { title: 'Finance & Investissement', items: ['Expertise-comptable', 'Commissariat aux comptes', 'Structuration et modélisation financières', 'Levée de fonds', 'Business plans', 'Études de rentabilité', 'Due diligence', "Évaluation d'entreprises", 'Ingénierie financière'] },
      { title: 'Formation & Renforcement des capacités', items: ['Comptabilité', "Finance durable et investissement d'impact", 'Audits (audit légal, interne et opérationnel)', 'Contrôle interne et contrôle de gestion', 'Restructuration des fonctions', 'Gouvernance', 'Leadership', 'Art oratoire et confiance en soi', 'Développement durable', 'Gestion des risques', 'Transformation digitale', 'Accompagnement à la montée en puissance de l’IA', 'Développement personnel ou professionnel'] },
      { title: 'Conseil aux institutions & bailleurs', items: ['Conseil Présidence et Gouvernement', 'Assistance technique & renforcement institutionnel', 'Gouvernance des projets et gestion axée sur les résultats', 'Suivi-évaluation'] },
      { title: 'Gestion de projets', items: ['Études de faisabilité', 'Montage de projets', 'Pilotage de projets', 'Audit de projet', 'Stratégie et gestion de Guichet Diaspora', 'Gestion de programmes', "Assistance à maîtrise d'ouvrage", 'Recherche de financement', 'Partenariats Public-Privé'] },
    ],
    en: [
      { title: 'Sustainable finance, ESG & CSR', items: ['ESG and CSR strategies and action plans', 'ESG and CSR reporting', 'ESG certification', 'Green, climate and sustainable finance', 'Green taxonomy', 'ESG risk assessment and mapping', 'CSR strategy and implementation', 'Support for international CSR and ESG standards'], note: 'ESG standards and sustainable finance are becoming central to governance and access to financing in African and international markets.' },
      { title: 'Strategy & Governance', items: ['Strategic planning', 'Business plan development', 'Corporate governance', 'Change management', 'Organisational restructuring', 'Institutional transformation'] },
      { title: 'Finance & Investment', items: ['Chartered accountancy', 'Statutory audit', 'Financial structuring and modelling', 'Fundraising', 'Business plans', 'Profitability studies', 'Due diligence', 'Business valuation', 'Financial engineering'] },
      { title: 'Training & Capacity building', items: ['Accounting', 'Sustainable finance and impact investing', 'Audits (statutory, internal and operational)', 'Internal control and management control', 'Function restructuring', 'Governance', 'Leadership', 'Public speaking and self-confidence', 'Sustainable development', 'Risk management', 'Digital transformation', 'Support for AI adoption and scale-up', 'Personal or professional development'] },
      { title: 'Advisory to institutions & donors', items: ['Advisory to Presidencies and Governments', 'Technical assistance & institutional strengthening', 'Project governance and results-based management', 'Monitoring and evaluation'] },
      { title: 'Project management', items: ['Feasibility studies', 'Project design', 'Project steering', 'Project audit', 'Diaspora Desk strategy and management', 'Programme management', "Owner's engineering assistance", 'Financing sourcing', 'Public-Private partnerships'] },
    ],
  },
  values: {
    fr: [
      { name: 'Excellence', desc: 'Recherche permanente de qualité.' },
      { name: 'Intégrité', desc: 'Respect des principes éthiques.' },
      { name: 'Innovation', desc: 'Solutions adaptées aux défis actuels.' },
      { name: 'Impact', desc: 'Résultats mesurables et durables.' },
      { name: 'Engagement', desc: 'Accompagnement de proximité.' },
      { name: 'Responsabilité', desc: 'Création de valeur économique, sociale et environnementale.' },
    ],
    en: [
      { name: 'Excellence', desc: 'A constant pursuit of quality.' },
      { name: 'Integrity', desc: 'Respect for ethical principles.' },
      { name: 'Innovation', desc: 'Solutions adapted to today’s challenges.' },
      { name: 'Impact', desc: 'Measurable, lasting results.' },
      { name: 'Commitment', desc: 'Close, hands-on support.' },
      { name: 'Responsibility', desc: 'Economic, social and environmental value creation.' },
    ],
  },
  sectors: {
    fr: ['Mines', 'Énergie', 'Agriculture', 'Agro-industrie', 'Banque', 'Assurance', 'Microfinance', 'Santé', 'Éducation', 'Infrastructures', 'PME-PMI', 'Collectivités territoriales', 'Organisations internationales'],
    en: ['Mining', 'Energy', 'Agriculture', 'Agro-industry', 'Banking', 'Insurance', 'Microfinance', 'Health', 'Education', 'Infrastructure', 'SMEs', 'Local governments', 'International organisations'],
  },
  skills: {
    fr: ['Expertise comptable', 'Audit financier', 'Conseil stratégique', 'Structuration financière', 'Développement durable', "Gouvernance d'entreprise", 'Évaluation de projets', 'Formation professionnelle', 'Mobilisation des investissements'],
    en: ['Chartered accountancy', 'Financial audit', 'Strategic advisory', 'Financial structuring', 'Sustainable development', 'Corporate governance', 'Project evaluation', 'Professional training', 'Investment mobilisation'],
  },
  why: {
    fr: [
      { title: 'Une expertise multidisciplinaire', desc: 'Finance, stratégie, gouvernance et développement durable.' },
      { title: 'Une vision internationale', desc: 'Compréhension des standards internationaux et des réalités africaines.' },
      { title: 'Une approche orientée résultats', desc: 'Solutions concrètes et opérationnelles.' },
      { title: 'Une forte expertise ESG', desc: 'Accompagnement des organisations dans leur transition durable.' },
      { title: 'Un réseau de partenaires', desc: 'Experts, investisseurs, institutions financières et organismes de développement.' },
    ],
    en: [
      { title: 'Multidisciplinary expertise', desc: 'Finance, strategy, governance and sustainable development.' },
      { title: 'An international outlook', desc: 'Understanding of international standards and African realities.' },
      { title: 'A results-driven approach', desc: 'Concrete, operational solutions.' },
      { title: 'Strong ESG expertise', desc: 'Supporting organisations through their sustainable transition.' },
      { title: 'A network of partners', desc: 'Experts, investors, financial institutions and development bodies.' },
    ],
  },
  clients: {
    fr: ['États et gouvernements', 'Agences publiques', 'Institutions financières', 'Banques', 'Assurances', "Fonds d'investissement", 'PME et grandes entreprises', 'ONG internationales', 'Organisations régionales', 'Partenaires techniques et financiers'],
    en: ['States and governments', 'Public agencies', 'Financial institutions', 'Banks', 'Insurance companies', 'Investment funds', 'SMEs and large companies', 'International NGOs', 'Regional organisations', 'Technical and financial partners'],
  },
  portals: {
    fr: [
      { roman: 'I', title: 'Espace Publications', items: ['Articles — finance durable, gouvernance, ESG, fiscalité', 'Analyses sectorielles et rapports de recherche', 'Notes de plaidoyer', 'Guides pratiques, livres blancs et outils de gestion'] },
      { roman: 'II', title: 'Académie Safiou Radji', items: ['Certificats professionnels', 'Masterclass et webinaires', 'Séminaires et congrès', 'Formations intra-entreprises'] },
      { roman: 'III', title: 'Espace Investisseurs & Projets', items: ["Opportunités d'investissement", 'Projets structurants et PPP', 'Projets miniers, énergie, agriculture', 'Infrastructures'] },
      { roman: 'IV', title: 'Actualités & Médias', items: ['Interviews et conférences', 'Publications et distinctions', 'Interventions internationales', 'Événements professionnels'] },
    ],
    en: [
      { roman: 'I', title: 'Publications', items: ['Articles — sustainable finance, governance, ESG, taxation', 'Sector analyses and research reports', 'Advocacy notes', 'Practical guides, white papers and management tools'] },
      { roman: 'II', title: 'Safiou Radji Academy', items: ['Professional certificates', 'Masterclasses and webinars', 'Seminars and congresses', 'In-company training'] },
      { roman: 'III', title: 'Investors & Projects', items: ['Investment opportunities', 'Structuring projects and PPPs', 'Mining, energy, agriculture projects', 'Infrastructure'] },
      { roman: 'IV', title: 'News & Media', items: ['Interviews and conferences', 'Publications and awards', 'International engagements', 'Professional events'] },
    ],
  },
};
