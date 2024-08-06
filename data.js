export const bio = [
    "Hello there, This is Healix Loo.",
    `Experienced Bioinformatician with a strong track record of successfully implemented projects of both in science and in industry.`,
    `Eager to apply my technical expertise and in-depth understanding to drive impactful contributions and exceed expectations in challenging projects.`,
    "Thanks for taking the time to learn a little about me!",
];

export const skills = [
    {
        title: "Languages",
        skillName: "English, German, Japanese, Chinese",
        color: "1",
        percentage: "80",
    },
    {
        title: "Frameworks",
        skillName: "Nextflow, Snakemake",
        color: "6",
        percentage: "70",
    },
    {
        title: "Programming",
        skillName: "Shell, Perl, Python, R",
        color: "4",
        percentage: "70",
    },
    {
        title: "Version Control",
        skillName: "GitHub, GitLab",
        color: "7",
        percentage: "70",
    },
    {
        title: "Tools",
        skillName: "Docker, Podman, Singularity",
        color: "3",
        percentage: "80",
    },
    {
        title: "Soft Skills",
        skillName: "Communication, Chat",
        color: "5",
        percentage: "50",
    },
    {
        title: "IDE",
        skillName: "VS Code",
        color: "6",
        percentage: "70",
    },
];

export const projects = {
    webProjects: [
        {
            projectName: "Senescence Atlas",
            image: "images/programmingdiaries.png",
            summary:
                "This project introduces a machine learning-based method for classifying senescence in single-cell RNA sequencing data, utilizing the SPiDER technique, which significantly enhances identification accuracy and provides new biological insights, particularly highlighting the role of IGF signaling in cellular senescence.",
            preview: "",
            techStack: ["scRNAseq", "Machine Learning", "Bioinformatics"],
        },
        {
            projectName: "Ifng-Stat1 Axis in Intestine Aging",
            image: "images/findyourbank.png",
            summary:
                "Aging disrupts intestinal stem cell function by upregulating antigen presenting and secretory lineage genes, driven by increased interferon gamma from proinflammatory cells, but can be reversed by inhibiting IFNγ-signaling.",
            preview: "https://www.nature.com/articles/s41467-023-41683-y",
            techStack: ["scRNAseq", "Organoids", "Bioinformatics", "R"],
        },
        {
            projectName: "COAD Prognosis Model",
            image: "images/portfolio.png",
            summary:
                "Our study provides a novel tool that may contribute to the optimization of risk stratification for survival and personalized management of COAD.",
            preview: "https://link.springer.com/article/10.1186/s12929-022-00867-2",
            techStack: ["Data Analysis", "Data Curation", "Writing"],
        },
        {
            projectName: "Resume Builder",
            image: "images/resume-builder.png",
            summary:
                "Organoid cultures offer valuable insights into human diseases by mimicking in vivo tissue organization, though some niche or systemic factors are lost, with RNA-seq analysis revealing that in vitro culture significantly alters the transcriptome of intestinal epithelial cells.",
            preview: "https://www.nature.com/articles/s41598-021-96321-8",
            techStack: ["Organoids", "Crypts", "Data Analysis", "R"],
        },
    ],
    softwareProjects: [
        {
            projectName: "Meta-data App",
            image: "images/pizzaorderchatbot.png",
            summary:
                "A meta-data app used for managing your big data.",
            preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
            techStack: ["R", "Shinyapp"],
        },
        {
            projectName: "Atlas Interaction App",
            image: "images/whatsappbot.jpg",
            summary:
                "An app to interact with the single cell intestine atlas.",
            preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
            techStack: ["R", "Shinyapp", "Data Analysis"],
        },
        {
            projectName: "Regeneration App",
            image: "images/billgenerator.png",
            summary:
                "An app to visualize the molecular process in intestine regeneration.",
            preview: "https://github.com/vinaysomawat/Bill-Generator",
            techStack: ["R", "Shinyapp", "Data Analysis"],
        },
    ],
    androidProjects: [
        {
            projectName: "Precision Medicine",
            image: "images/nitwcse.jpg",
            summary:
                "A tumore mutation load research",
            preview: "https://jamanetwork.com/journals/jamaoncology/article-abstract/2726029",
            techStack: ["Medicine", "Diagnosis", "Clinical", "Prediction"],
        },
        {
            projectName: "Immune Therapy",
            image: "images/carrerhigh.png",
            summary:
                "An research development on neoantigen vaccine therapy.",
            preview: "",
            techStack: ["Shell", "Pipeline", "Medicine", "Clinical"],
        },
    ],
    freelanceProjects: [
        {
            projectName: "Individual Identification",
            image: "images/snylloair.png",
            summary:
                "Developed many applications regarding individual identification.",
            preview: "",
            techStack: ["Wafergen", "Amplicon Sequencing", "Pipeline", "Low Cost"],
        },
        {
            projectName: "Single Cell RNA Sequencing Technology Development",
            image: "images/AM-Logo-.png",
            summary: "Single cell RNAseq technology development based on micro amount system from scratch.",
            preview:
                "",
            techStack: ["System Determination", "Wet Lab", "Tiny Amount"],
        },
    ],
};

export const experience = [
    {
        title: "Shiprocket (Bigfoot Solution Private Limited)",
        duration: "September 2022 - Present",
        subtitle: "Software Engineer",
        details: [
            "Working in support and escalation team."
        ],
        tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
        icon: "truck ",
    },
    {
        title: "Biofourmis India Private Limited",
        duration: "April 2022 - Jul 2023",
        subtitle: "Software Engineer",
        details: [
            `Implemented microfrontends using the Module Federation Plugin in Angular.
            Rendered components from remote modules/repositories, enabling a modular and scalable architecture`,
            `Upgraded application with a dynamic base URL for flexible operation across multiple regions and verticals, leading to
            recognition with the Biofourmis Bravo award in Q1, 2023.`,
            `Implemented RxState for managing local state in components, resulting in elegant and reactive facades.`,
            `Utilized Twilio-Video for group video call rooms and Countly for Web Analytics.`,
            `Integrated NGXS WebSocket, enhancing state management and replacing legacy service injections.`,
            `Implemented extensive RxJS usage for reactive programming, resulting in efficient data handling, improved state
            management, and enhanced application performance.`,
            `Dramatically optimized load time and performance through code splitting, lazy loading, caching, and preload`,
            `Enhanced video call experience by implementing real-time switching of I/O devices and audio level indicators,
            resulting in reduced audio issues and increased user satisfaction.`,
            `Owned and led successful Angular application upgrades from version 12 to 13 and 14, improving performance
            and enhancing features.`,
        ],
        tags: ["JavaScript", "Angular", "RxJS", "NGXS", "TypeScript", "RxState", "Webpack", "Optimization"],
        icon: "heartbeat",
    },
    {
        title: "Novopay Solutions Private Limited",
        duration: "June 2020 - April 2022",
        subtitle: "Software Engineer",
        details: [
            `Implemented AePS Services, including Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements,
            and Money transfer.`,
            `Implemented QR Code integration for retailer wallet money loading, Clevertap events for user action tracking,
            Freshdesk ticketing, Chatbot services, and Retailer onboarding/admin interfaces.`,
            `Developed retailer QR code system for seamless money loading into wallets, resulting in improved user transactions.`,
            `Achieved 70 percent code coverage of the entire application by writing unit tests for legacy code.`,
        ],
        tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
        icon: "qrcode",
    },
    {
        title: "ThinkPedia LLP",
        duration: "May 2019 - June 2019",
        subtitle: "SDE Intern",
        details: [
            `Developed a customer web application for social media management, supporting the advertisement domain.`,
        ],
        tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
        icon: "group",
    },
];

export const education = [
    {
        title: "B.Tech. in Computer Science and Engineering",
        duration: "2016 - 2020",
        subtitle: "National Institute of Technology, Warangal",
        details: [],
        tags: [
            "Data Structures & Algorithms",
            "Operating Systems",
            "Database Management System",
            "Computer Networks",
            "Compiler Designing",
            "Cloud Computing",
        ],
        icon: "graduation-cap",
    },
    {
        title: "Class 12th in Science and Mathematics",
        duration: "",
        subtitle: "Board of Secondary Education, Rajasthan",
        details: [],
        tags: ["Physics", "Chemistry", "Mathematics"],
        icon: "book",
    },
];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "Stackoverflow",
                link: "https://stackoverflow.com/users/8461233/vinay-somawat",
            },
            {
                text: "GitHub",
                link: "https://github.com/vinaysomawat",
            },
            {
                text: "LeetCode",
                link: "https://leetcode.com/somawatvinay/",
            },
        ],
    },
    {
        label: "Resources",
        data: [
            {
                text: "Enable Dark/Light Mode",
                func: "enableDarkMode()",
            },
            {
                text: "Print this page",
                func: "window.print()",
            },
            {
                text: "Clone this page",
                link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
            },
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "Linkedin",
                link: "https://www.linkedin.com/in/vinaysomawat/",
            },
            {
                text: "Twitter",
                link: "https://twitter.com/thesigmakid",
            },
            {
                text: "Buy me a coffee",
                link: "https://www.buymeacoffee.com/r194dME8y",
            },
        ],
    },
    {
        label: "copyright-text",
        data: [
            "Made with &hearts; by Vinay Somawat.",
            "&copy; No Copyrights. Feel free to use this template.",
        ],
    },
];