
const HACKATHONS = [
    {
        name: "BrainHack TIL-AI 2024",
        organiser: "DSTA",
        result: "Semi-Finalist",
        resultTier: "silver", // "gold" | "silver" | "bronze"
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
