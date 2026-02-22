
const PROJECTS = [
    {
        title: "AI Vehicle Deregistration Automation (Deregify)",
        context: "NP x NCS Capstone Project — 2nd Place",
        github: null,
        images: [
            { src: "images/ML Flow Deregify.png", caption: "ML Pipeline Architecture" },
            { src: "images/Deregify Cloud Architecture.png", caption: "Cloud Architecture" },
            { src: "images/sharing Switch.jpeg", caption: "Presented at SWITCH 2024" }
        ],
        highlights: [
            "Designed and developed an AI-powered system to automate vehicle deregistration by extracting structured information from unstructured documents.",
            "Trained and optimized OCR, document classification and specialized NER models on real-world multilingual datasets (e.g., Japanese vehicle records), improving extraction accuracy across diverse document structures and languages.",
            "Built and fine-tuned a PyTorch-based question-answering LLM to replace traditional Named Entity Recognition (NER) pipelines for document data extraction.",
            "Implemented a self-improving retraining pipeline to continuously refine model performance using newly processed documents.",
            "Containerized the full application stack using Docker for scalable and portable deployment.",
            "Deployed ML models and APIs on Google Cloud Platform, integrating cloud storage and compute services for production-ready inference.",
            "Developed API endpoints to serve model predictions and enable system integration.",
            "Selected to showcase the project at Singapore Week of Innovation and Technology (SWITCH 2024) and presented system architecture to conference attendees and industry visitors."
        ]
    }
];
