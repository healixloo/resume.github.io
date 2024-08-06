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
            image: "images/sc.png",
            summary:
                "This project introduces a machine learning-based method for classifying senescence in single-cell RNA sequencing data, utilizing the SPiDER technique, which significantly enhances identification accuracy and provides new biological insights, particularly highlighting the role of IGF signaling in cellular senescence.",
            preview: "https://github.com/donertas-group/senescence_atlas",
            techStack: ["scRNAseq", "Machine Learning", "Bioinformatics"],
        },
        {
            projectName: "Ifng-Stat1 Axis in Intestine Aging",
            image: "images/sc.png",
            summary:
                "Aging disrupts intestinal stem cell function by upregulating antigen presenting and secretory lineage genes, driven by increased interferon gamma from proinflammatory cells, but can be reversed by inhibiting IFNγ-signaling.",
            preview: "https://www.nature.com/articles/s41467-023-41683-y",
            techStack: ["scRNAseq", "Organoids", "Bioinformatics", "R"],
        },
        {
            projectName: "COAD Prognosis Model",
            image: "images/sc.png",
            summary:
                "Our study provides a novel tool that may contribute to the optimization of risk stratification for survival and personalized management of COAD.",
            preview: "https://link.springer.com/article/10.1186/s12929-022-00867-2",
            techStack: ["Data Analysis", "Data Curation", "Writing"],
        },
        {
            projectName: "Organoids Aging Model",
            image: "images/sc.png",
            summary:
                "Organoid cultures offer valuable insights into human diseases by mimicking in vivo tissue organization, though some niche or systemic factors are lost, with RNA-seq analysis revealing that in vitro culture significantly alters the transcriptome of intestinal epithelial cells.",
            preview: "https://www.nature.com/articles/s41598-021-96321-8",
            techStack: ["Organoids", "Crypts", "Data Analysis", "R"],
        },
    ],
    softwareProjects: [
        {
            projectName: "Meta-data App",
            image: "images/shiny.png",
            summary:
                "A meta-data app used for managing your big data.",
            preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
            techStack: ["R", "Shinyapp"],
        },
        {
            projectName: "Atlas Interaction App",
            image: "images/shiny.png",
            summary:
                "An app to interact with the single cell intestine atlas.",
            preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
            techStack: ["R", "Shinyapp", "Data Analysis"],
        },
        {
            projectName: "Regeneration App",
            image: "images/shiny.png",
            summary:
                "An app to visualize the molecular process in intestine regeneration.",
            preview: "https://github.com/vinaysomawat/Bill-Generator",
            techStack: ["R", "Shinyapp", "Data Analysis"],
        },
    ],
    androidProjects: [
        {
            projectName: "Precision Medicine",
            image: "images/medicine.jpg",
            summary:
                "A tumore mutation load research",
            preview: "https://jamanetwork.com/journals/jamaoncology/article-abstract/2726029",
            techStack: ["Medicine", "Diagnosis", "Clinical", "Prediction"],
        },
        {
            projectName: "Immune Therapy",
            image: "images/medicine.jpg",
            summary:
                "An research development on neoantigen vaccine therapy.",
            preview: "",
            techStack: ["Shell", "Pipeline", "Medicine", "Clinical"],
        },
    ],
    freelanceProjects: [
        {
            projectName: "Individual Identification",
            image: "images/snp.png",
            summary:
                "Developed many applications regarding individual identification.",
            preview: "",
            techStack: ["Wafergen", "Amplicon Sequencing", "Pipeline", "Low Cost"],
        },
        {
            projectName: "Single Cell RNA Sequencing Technology Development",
            image: "images/snp.png",
            summary: "Single cell RNAseq technology development based on micro amount system from scratch.",
            preview:
                "",
            techStack: ["System Determination", "Wet Lab", "Tiny Amount"],
        },
    ],
};

export const experience = [
    {
        title: "Leibniz Institute on Aging",
        duration: "Jan 2023 - Present",
        subtitle: "Postdoctoral Researcher",
        details: [
            `Pipeline framework and datamanagement.`,
            `Machine learning on senescent cells' classification.`,
            `Bioinformatics on senescent cells' deconvolution.`,
            `Data mining on single cell RNA sequencing data.`,
            `A new method development for gene causal network.`,
            `A new method development for microbiome interaction analysis.`,
        ],
        tags: ["AI", "ML", "HPC", "Bioinformatics", "Computational bilogy", "Platform biology"],
        icon: "truck ",
    },
    {
        title: "Leibniz Institute on Aging",
        duration: "Jan 2019 - Dec 2022",
        subtitle: "PhD Student",
        details: [
            `Characterized aging changes in stem cells of the mouse intestine both in vivo crypts and in vitro organoids at the transcriptome level.`,
            `Conducted multi-omics bioinformatic analysis including DNAseq, RNAseq, scRNAseq, ChIPseq, Metagenomics, and 16S.`,
            `Investigated conservation of functional modules during embryonic development in mice and humans.`,
            `Developed a new gene panel for colon cancer diagnosis.`,
            `Developed all varieties of shiny application related to scientific projects.`,
        ],
        tags: ["RNAseq", "Mice", "Organoids", "Intestine", "COAD", "Atlas", "Shinyapp", "R"],
        icon: "heartbeat",
    },
    {
        title: "3DMed Company",
        duration: "Oct 2015 - Dec 2018",
        subtitle: "Research Scientist",
        details: [
            `Bioinformatics Analysis for Precision Oncology: Conducted bioinformatics analysis for precise clinical diagnosis of tumor patients.`,
            `NGS Variants Detection Pipeline Development: Developed and optimized NGS variants detection pipelines, including software testing, database construction, and product integration.`,
            `Immunotherapy Product Development: Created bioinformatics pipelines for tumor immunotherapy, managed collaborations, and supported product commercialization.`,
            `Biomolecular Marker Development: Developed markers for tumor mutation load, neoantigen load, MSI, and TCR detection, aiding targeted and immunotherapy treatments.`,
            `IVD Medical Device Registration: Managed the registration process for IVD medical device software, including design, communication, and implementation.`,
        ],
        tags: ["Precision Medicine", "Pipeline", "Clinical Prodcut", "Product Registration", "Oncology", "Shell"],
        icon: "qrcode",
    },
    {
        title: "Novogene Company",
        duration: "Feb 2015 - Oct 2015",
        subtitle: "Bioinformatics Engineer",
        details: [
            `WGS and WES Bioinformatics Analysis: Conducted comprehensive bioinformatics analysis on the Xten platform for human genome resequencing, focusing on genetic diseases and tumor samples. Responsibilities included data pre-processing, filtering, alignment, quality control, and variation detection and analysis.`,
            `Pipeline Automation and Database Research: Gained extensive experience in bioinformatics pipeline automation and conducted in-depth research and application of various third-party databases.`,
        ],
        tags: ["Python", "Genome Analysis", "Disease", "Database", "Pipeline"],
        icon: "group",
    },
    {
        title: "BGI",
        duration: "Feb 2013 - Feb 2015",
        subtitle: "Bioinformatian Researcher",
        details: [
            `Tumor Single Cell RNA-seq Technology Development: Independently developed experimental technology for tumor single-cell RNA sequencing.`,
            `Bioinformatics Pipeline Construction and Mitochondrial Genome Analysis: Constructed bioinformatics pipelines for genetic markers and conducted mitochondrial genome analysis.`,
            `Forensic Science Product Development: Developed forensic science products on the proton platform, including individual identification, blood type identification, and HLA typing.`,
            `Sequencing and Experimental Techniques Research: Gained experience with various sequencing techniques (mainly NGS) and experimental techniques, including traditional molecular biology techniques, single-cell amplification, and PGD prenatal screening.`,
        ],
        tags: ["SNP", "High-throughput", "Forensic", "Sequencing", "Single Cell", "Perl"],
        icon: "group",
    },
];

export const education = [
    {
        title: "Friedrich Schiller University Jena",
        duration: "2019 - 2022",
        subtitle: "PhD in Bioinformatics",
        details: [],
        tags: [
            "Bioinformatics Degree",
            "Molecular Biology",
        ],
        icon: "graduation-cap",
    },
    {
        title: "University of Chinese Academy of Sciences",
        duration: "2012-2015",
        subtitle: "Master in Genetics",
        details: [],
        tags: ["Genetics Degree", "Sequencing", "Technology Development"],
        icon: "book",
    },
];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "Stackoverflow",
                link: "https://stackoverflow.com/users/26665009/healix-avid-loo",
            },
            {
                text: "GitHub",
                link: "https://github.com/healixloo",
            },
            {
                text: "Google Scholar",
                link: "https://scholar.google.com/citations?hl=en&user=1W_3YjAAAAAJ",
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
                link: "https://www.linkedin.com/in/healixloo/",
            },
            {
                text: "X",
                link: "https://x.com/HealixLoo",
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