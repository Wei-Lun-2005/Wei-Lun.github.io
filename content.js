// Site content, synced to resume.tex (Oct 2026) plus true extras the resume has no room for.
const IMG = "images/";

const SITE = {
    name: "Ho Wei Lun",
    role: "AI Engineer",
    intro: [
        "Obstacles are a part of life. The challenges and conflicts along the way have helped me build resilience and driven me to do better. Where some see adversity as a wall, I see a stepping stone to becoming a better version of myself.",
        "Together with my problem-solving instincts, that has drawn me to the fast pace and growth of the Data and AI industry. Working in different environments has exposed me to a range of industry standards, tools, and frameworks, allowing me to confidently approach problems from more than one angle."
    ],
    email: "howeilun89@gmail.com",
    linkedin: "https://www.linkedin.com/in/ho-wei-lun-960207238/",
    github: "https://github.com/Wei-Lun-2005",

    experience: [
        {
            role: "AI Engineer",
            org: "OCBC Bank",
            period: "Jun 2026 – Present",
            stat: { value: "Agentic RAG", label: "AI that plans its own multi-step research" },
            highlights: [
                "Led the architecture and built an enterprise-grade Retrieval-Augmented Generation (RAG) system over a 400-document legal and compliance corpus, deployed across multiple departments to resolve complex cross-border advisory queries such as breach assessment, permissibility, and regulatory Q&A.",
                "Collaborated with department stakeholders to understand their requirements, deliverables and complex cases, presenting solutions and refining them through user testing.",
                "Extending the system into an agentic RAG harness that scales from 400 to 2,000 documents, in which the LLM plans its own multi-step research through tool calling and agent skills, enabling exhaustive comparison across documents and tracing of rules to their source, beyond single-pass retrieval.",
                "Developed the core retrieval pipeline with hybrid dense and sparse search, question classification and routing, and reranking.",
                "Designed an automated LLM-as-judge verification and self-correction loop that validates each answer against its sources before delivery, reducing unsupported claims and citation errors.",
                "Engineered a validated incremental ETL ingestion pipeline with data-quality safeguards and logging, resolving a silent failure that had excluded key documents from retrieval despite being marked as stored."
            ]
        },
        {
            role: "Undergraduate Researcher",
            org: "NTU",
            short: "URECA",
            period: "Aug 2026 – Present",
            stat: null,
            highlights: [
                "Researching whether an LLM agent can discover predictive alpha factors from historical stock price and volume data and turn them into tradeable single-asset and multi-asset strategies, evaluated after transaction costs.",
                "Working on one of the project's core challenges: overfitting, poor robustness across stocks and time periods, and alpha decay in LLM-discovered factors."
            ]
        },
        {
            role: "Research Intern (ANGEL)",
            org: "Alibaba-NTU Global e-Sustainability CorpLab",
            short: "Alibaba-NTU CorpLab",
            period: "Jun 2026 – Jul 2026",
            stat: { value: "8.2% → 72.6%", label: "diagnosis accuracy" },
            highlights: [
                "Fine-tuned a Qwen2.5-VL vision-language model with 4-bit QLoRA for explainable medical-imaging diagnosis, improving diagnosis accuracy from 8.2% to 72.6% on a held-out test split.",
                "Structured the model to read a medical scan and work through a diagnostic chain (imaging modality, organ, then lesion or finding) before reaching a diagnosis, producing a natural-language reasoning trace for each step."
            ]
        },
        {
            role: "Data and AI Engineer Intern",
            org: "NCS",
            period: "Sep 2024 – Apr 2025",
            stat: { value: "~30 min", label: "refresh over millions of rows" },
            highlights: [
                "Reviewed major ETL projects and documentation to identify reusable patterns and common practices, and evaluated a declarative ETL framework built on Apache Spark for building reproducible, reusable components across future projects.",
                "Built and hosted a Databricks environment on AWS for a healthcare client where AWS's default quick-start setup did not meet the domain's data-governance requirements, implementing a hardened, isolated setup with stricter networking and access controls.",
                "Built a Proof of Concept in Microsoft Fabric with an ETL pipeline that loads and transforms new data into a warehouse on a ~30-minute refresh cycle, powering a Power BI dashboard over millions of rows that the previous approach could neither load nor reliably transform at that volume."
            ]
        }
    ],

    projects: [
        {
            title: "Deregify",
            subtitle: "AI vehicle deregistration automation",
            context: "NP × NCS Capstone · 2nd Place",
            highlights: [
                "Developed an AI system to automate vehicle deregistration, extracting structured information from unstructured, multilingual documents (e.g., Japanese vehicle records) using OCR, document classification, and specialized NER models.",
                "Fine-tuned a PyTorch-based question-answering LLM to replace traditional NER pipelines, with a self-improving retraining pipeline.",
                "Containerized the stack with Docker and deployed ML models and API endpoints on Google Cloud Platform for production inference and integration.",
                "Selected to showcase the project at Singapore Week of Innovation and Technology (SWITCH 2024) to industry visitors."
            ],
            images: [
                { src: IMG + "ML Flow Deregify.png", caption: "ML pipeline architecture" },
                { src: IMG + "Deregify Cloud Architecture.png", caption: "Cloud architecture" },
                { src: IMG + "sharing Switch.jpeg", caption: "Presenting at SWITCH 2024" }
            ]
        }
    ],

    competitions: [
        {
            name: "BrainHack TIL-AI 2026",
            org: "DSTA",
            result: "Semi-Finalist",
            location: "Marina Bay Sands, Singapore",
            highlights: [
                "Built, in PyTorch, a multilingual Automatic Speech Recognition (ASR) model, a computer vision model hardened against adversarial attacks, and a RAG pipeline for information retrieval.",
                "Trained a reinforcement learning agent to play Bomberman competitively against other teams."
            ],
            images: [
                { src: IMG + "brainhack2026-arena.jpg", caption: "Finals arena at Marina Bay Sands" },
                { src: IMG + "brainhack2026-leaderboard.jpg", caption: "Our RL agent leading the Bomberman leaderboard" },
                { src: IMG + "brainhack2026-finals-setup.jpg", caption: "Agent in action" }
            ]
        },
        {
            name: "BrainHack TIL-AI 2024",
            org: "DSTA",
            result: "Semi-Finalist",
            location: "Marina Bay Sands, Singapore",
            highlights: [
                "Built, in PyTorch, an end-to-end multi-modal AI system to locate physical targets using a rotating turret based on human verbal requests.",
                "Integrated Automatic Speech Recognition to transcribe commands, NLP pipelines to extract intent and key entities, and Vision-Language Models to identify and localize requested targets."
            ],
            images: [
                { src: IMG + "DSTA Til AI competition Day.jpeg", caption: "Competition day" },
                { src: IMG + "Training Model.jpeg", caption: "VLM training" }
            ]
        }
    ],

    education: [
        {
            school: "Nanyang Technological University",
            degree: "Bachelor of Computing (Hons) in Data Science and Artificial Intelligence",
            period: "2025 – 2029 (Expected)",
            notes: ["CGPA 4.9 / 5.0 · First Class Honours"]
        },
        {
            school: "Ngee Ann Polytechnic",
            degree: "Diploma with Merit in Data Science",
            period: "2022 – 2025",
            notes: [
                "CGPA 3.9 / 4.0 · Director's List (3×) · Outstanding Performance Awards (2×) · Best Module Performance (3×)",
                "Diploma Plus: Certificate in Advanced Computing Mathematics"
            ]
        }
    ],

    scholarship: { name: "Turing AI Scholars Programme", detail: "NTU Scholars Track · since 2025" },

    skills: {
        "Languages & Tools": ["Python", "SQL", "PyTorch", "Docker", "Git", "Databricks", "Linux", "REST APIs", "Microsoft Excel", "PowerPoint", "Word"],
        "AI & Data": ["LLMs", "LLM Agents", "Agent Harnesses", "RAG", "Hybrid Retrieval", "Vector Search (FAISS)", "LLM-as-Judge Evaluation", "Vision-Language Models", "Fine-Tuning (QLoRA / PEFT)", "ETL Pipelines", "MLOps", "AWS", "GCP"]
    }
};
