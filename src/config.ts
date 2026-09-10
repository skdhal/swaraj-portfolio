export const config = {
    // Desktop hero visual: an animated 3D node-topology (see
    // Character/Scene.tsx), original and license-free. Set to false to
    // disable it entirely and fall back to the typography-only hero.
    features: {
        character3D: true
    },
    developer: {
        name: "Swaraj",
        fullName: "Swaraj Kumar Dhal",
        title: "Salesforce Solution Architect",
        description: "Senior Salesforce Developer and Solution Architect building enterprise-scale platforms across public sector, automotive, financial services, and commerce. Specialising in multi-tenant data architecture, Apex at scale, and spec-driven development."
    },
    social: {
        github: "swarajkumardhal",
        email: "skdhal7901@gmail.com",
        location: "Bhubaneswar, India"
    },
    about: {
        title: "About Me",
        description: "I am a Senior Salesforce Developer and Solution Architect based in India, currently at The KSquare Group. Over the past five years I have designed and delivered enterprise Salesforce implementations spanning loan origination, multi-dealer automotive platforms, and global B2B commerce. My work centres on the hard parts: row-level data segregation in shared orgs, Apex that stays inside governor limits at scale, and integration architecture that survives contact with real systems. I champion Spec Driven Development at my organisation, because the most expensive defects are the ones written into the requirements."
    },
    experiences: [
        {
            position: "Senior Salesforce Developer / Solution Architect",
            company: "The KSquare Group",
            period: "2026 - Present",
            location: "India",
            description: "Architecting enterprise Salesforce solutions across lending and automotive domains. Leading technical design decisions, engaging directly with client stakeholders, and driving Spec Driven Development adoption across engineering teams.",
            responsibilities: [
                "Architecting a loan origination platform spanning ~430 Apex classes and ~108 Lightning Web Components",
                "Designing single-org data segregation for independent dealership partners with strict row-level isolation",
                "Leading Automotive Cloud migration including vehicle inventory and dealer data models",
                "Championing Spec Driven Development practices and technical governance standards"
            ],
            technologies: ["Apex", "LWC", "Automotive Cloud", "CPQ", "SFDX", "Flows"]
        },
        {
            position: "Software Engineer - Salesforce",
            company: "Rafterone (An IPG Company)",
            period: "2021 - 2026",
            location: "India",
            description: "Delivered B2B Commerce, CPQ, and integration solutions for global enterprise clients. Built storefronts serving multiple regions, subscription and pricing frameworks, and multi-carrier logistics integrations.",
            responsibilities: [
                "Built end-to-end B2B Commerce storefronts across US, Japan, and Brazil markets",
                "Integrated CPQ with Subscription Management including a dynamic discount and coupon framework",
                "Implemented multi-carrier shipping with mixed-cart handling and Dynamics 365 synchronisation",
                "Developed order management, invoicing, and abandoned cart recovery flows"
            ],
            technologies: ["B2B Commerce", "CPQ", "LWC", "Apex", "OMS", "REST APIs"]
        },
        {
            position: "Bachelor of Technology, Computer Science",
            company: "GIET University, Odisha",
            period: "2018 - 2022",
            location: "Odisha, India",
            description: "Computer Science and Engineering. Built the programming and systems foundation that underpins my platform work: data structures, databases, distributed systems, and software design.",
            responsibilities: [
                "Core computer science: algorithms, data structures, operating systems",
                "Database systems and relational data modelling",
                "Object-oriented software design and engineering practice",
                "Independent projects in web development and automation"
            ],
            technologies: ["Java", "SQL", "Data Structures", "OOP", "Web Development"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Loan Origination Platform",
            category: "Financial Services",
            technologies: "Apex, LWC, Salesforce CPQ, DocuSign, Flows, Platform Events",
            image: "/images/project-lending.svg",
            description: "Enterprise lending platform spanning roughly 430 Apex classes and 108 Lightning Web Components. Implements defense-in-depth record locking, multi-stage compliance workflows, CPQ-driven quote generation, and DocuSign envelope orchestration for loan documentation.",
            link: ""
        },
        {
            id: 2,
            title: "Multi-Dealer Data Segregation",
            category: "Automotive Cloud",
            technologies: "Automotive Cloud, Apex, Sharing Rules, SFDX, Flows",
            image: "/images/project-automotive.svg",
            description: "Data segregation architecture allowing independent dealership partners to operate within a single Salesforce org under strict row-level isolation. Combined organisation-wide defaults, criteria-based sharing, and Apex sharing recalculation, alongside a full vehicle inventory migration to Automotive Cloud.",
            link: ""
        },
        {
            id: 3,
            title: "Global B2B Commerce Platform",
            category: "Commerce",
            technologies: "B2B Commerce, LWC, Order Management, Apex, REST",
            image: "/images/project-commerce.svg",
            description: "Multi-region commerce platform serving US, Japan, and Brazil storefronts. Multilingual Lightning Web Components, localised invoicing, Order Management integration, and abandoned cart recovery flows built on a shared component architecture.",
            link: ""
        },
        {
            id: 4,
            title: "Subscription & Pricing Engine",
            category: "CPQ",
            technologies: "Salesforce CPQ, Subscription Management, Apex, B2B Commerce",
            image: "/images/project-cpq.svg",
            description: "Integration layer connecting B2B Commerce, CPQ, and Subscription Management. Delivered a dynamic discount framework and flexible coupon system supporting stacked promotions, tiered pricing, and recurring subscription amendments.",
            link: ""
        },
        {
            id: 5,
            title: "Distributor Locator",
            category: "Integration",
            technologies: "LWC, Google Maps API, Apex REST, Experience Cloud",
            image: "/images/project-locator.svg",
            description: "Real-time distributor lookup for a global HVAC manufacturer. Lightning Web Component with Google Maps integration, dynamic identifier capture from external pages, and geospatial querying against distributor records.",
            link: ""
        },
        {
            id: 6,
            title: "Multi-Carrier Shipping Integration",
            category: "Logistics",
            technologies: "Apex, REST APIs, Dynamics 365, B2B Commerce",
            image: "/images/project-shipping.svg",
            description: "Freight and parcel shipping integration supporting multiple carriers with intelligent item grouping for mixed carts. Rate shopping across carriers, label generation, and bidirectional synchronisation with Dynamics 365 ERP.",
            link: ""
        },
        {
            id: 7,
            title: "Workforce Enablement Module",
            category: "Public Sector",
            technologies: "Apex, LWC, Flows, Experience Cloud, Custom Objects",
            image: "/images/project-publicsector.svg",
            description: "Contract and workforce enablement module for a national government ministry. Custom object model covering contract lifecycle, approval routing across departments, and role-based access for public sector governance requirements.",
            link: ""
        },
        {
            id: 8,
            title: "Headless Document Intelligence",
            category: "AI / MCP",
            technologies: "Model Context Protocol, Apex, REST, Salesforce Files",
            image: "/images/project-mcp.svg",
            description: "Headless document intelligence layer exposing Salesforce document content to AI agents over the Model Context Protocol. Enables natural language querying of contracts and records without a UI surface.",
            link: ""
        }
    ],
    contact: {
        email: "skdhal7901@gmail.com",
        github: "https://github.com/swarajkumardhal",
        linkedin: "https://linkedin.com/in/swaraj-kumardhal-85b6081b3",
        twitter: "",
        facebook: "",
        instagram: ""
    },
    skills: {
        develop: {
            title: "PLATFORM ARCHITECT",
            description: "Enterprise Salesforce architecture at scale",
            details: "Designing data models, sharing architecture, and Apex frameworks that hold up under enterprise load. Multi-tenant segregation, governor limit engineering, asynchronous processing patterns, and the trade-offs behind declarative versus programmatic solutions.",
            tools: ["Apex", "LWC", "SOQL", "Flows", "Sharing Rules", "Platform Events", "Async Apex", "Data Modelling", "Governor Limits", "SFDX"]
        },
        design: {
            title: "SOLUTION DESIGN",
            description: "Commerce, CPQ, and integration engineering",
            details: "Building the connective tissue between Salesforce and everything else. B2B Commerce storefronts, CPQ pricing engines, subscription lifecycles, and integration architecture spanning ERP, logistics, and document systems.",
            tools: ["B2B Commerce", "Salesforce CPQ", "Subscription Mgmt", "Automotive Cloud", "REST APIs", "MuleSoft", "Dynamics 365", "DocuSign", "OMS", "Experience Cloud"]
        }
    },
    certifications: [
        "Salesforce Certified Administrator",
        "Platform Developer I",
        "JavaScript Developer I",
        "Salesforce Certified Associate",
        "AI Associate",
        "AI Specialist",
        "B2B Commerce Accredited Professional",
        "CPQ Specialist"
    ]
};
