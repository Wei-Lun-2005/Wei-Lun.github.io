
const HACKATHONS = [
    {
        name: "BrainHack TIL-AI 2026",
        organiser: "DSTA",
        result: "Semi-Finalist",
        resultTier: "silver", // "gold" | "silver" | "bronze"
        date: "2026",
        location: "Marina Bay Sands, Singapore",
        description: "Multi-track AI competition spanning speech, vision, retrieval and reinforcement learning, with the finals played out live on a physical robot arena.",
        highlights: [
            "Built a multilingual Automatic Speech Recognition (ASR) model for robust transcription across languages",
            "Developed a computer vision model hardened against adversarial attacks",
            "Built a Retrieval-Augmented Generation (RAG) pipeline for information retrieval",
            "Trained a reinforcement learning agent to play Bomberman competitively against other teams",
            "Advanced through the Qualifier round to the Semi-Final at Marina Bay Sands"
        ],
        tags: ["ASR", "Adversarial Robustness", "RAG", "Reinforcement Learning", "Docker", "Python"],
        images: [
            { src: "images/brainhack2026-arena.jpg", caption: "TIL-AI 2026 finals arena at Marina Bay Sands" },
            { src: "images/brainhack2026-leaderboard.jpg", caption: "Our RL agent leading the Bomberman leaderboard" },
            { src: "images/brainhack2026-finals-setup.jpg", caption: "Running the finals stack locally before the match" }
        ]
    },
    {
        name: "BrainHack TIL-AI 2024",
        organiser: "DSTA",
        result: "Semi-Finalist",
        resultTier: "silver",
        date: "2024",
        location: "Marina Bay Sands, Singapore",
        description: "Competitive AI hackathon with qualifier and semi-final rounds. Built an end-to-end multi-modal AI system to locate physical targets using a rotating turret based on human verbal requests.",
        highlights: [
            "Developed Automatic Speech Recognition (ASR) pipeline to convert spoken commands to text",
            "Implemented NLP pipelines to extract intent and entities from transcribed speech",
            "Applied Vision-Language Models (VLMs) to identify and localise targets from visual inputs",
            "Advanced through Qualifier round to the Semi-Final at Marina Bay Sands"
        ],
        tags: ["ASR", "NLP", "VLM", "Computer Vision", "Python"],
        images: [
            { src: "images/DSTA Til AI competition Day.jpeg", caption: "Competition Day" },
            { src: "images/Training Model.jpeg", caption: "VLM Training" }
        ]
    }
];
