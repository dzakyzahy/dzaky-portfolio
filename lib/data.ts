import { Waves, Zap, BarChart3 } from "lucide-react";

export const projects = [
    {
        id: "ocean-wavetrap",
        title: "Ocean WaveTrap Simulation",
        description: "Acoustic wave-based microplastic collector system for Indonesian waters. Simulated efficiency using Python.",
        fullDescription: `
      This project addresses the critical issue of microplastic pollution in Indonesian waters. 
      Using Python and numerical modeling, we simulated an acoustic wave-based system designed to aggregate and collect microplastics.
      
      Key technical achievements include:
      - Developing a mathematical model for wave-particle interaction.
      - Simulating collector efficiency under various sea states.
      - Optimizing the acoustic frequency for maximum aggregation.
    `,
        tags: ["Oceanography", "Python", "Simulation", "Sustainability"],
        iconName: "Waves",
        size: "large",
        gradient: "from-blue-900/50 to-cyan-900/50",
        stats: [
            { label: "Efficiency", value: "85%" },
            { label: "Simulation Time", value: "120h" },
            { label: "Coverage", value: "50km²" },
        ]
    },
    {
        id: "pertamina-geothermal",
        title: "Pertamina Geothermal Energy",
        description: "Implemented Machine Learning models to optimize geothermal energy operations in Jakarta Pusat.",
        fullDescription: `
      Collaborated with Pertamina Geothermal Energy to enhance operational efficiency using data science.
      We developed machine learning models to predict well performance and optimize maintenance schedules.
      
      Key technologies:
      - Scikit-Learn for regression models.
      - Pandas for large-scale data processing.
      - Visualization dashboards for real-time monitoring.
    `,
        tags: ["MachineLearning", "Energy", "Pertamina"],
        iconName: "Zap",
        size: "medium",
        gradient: "from-orange-900/50 to-red-900/50",
        stats: [
            { label: "Accuracy", value: "92%" },
            { label: "Data Points", value: "1M+" },
            { label: "Cost Reduction", value: "15%" },
        ]
    },
    {
        id: "predictive-analysis",
        title: "Predictive Data Analysis",
        description: "Complex data processing and visualization case studies (Sales/Pricing Models).",
        fullDescription: `
      A comprehensive study on predictive analytics applied to business intelligence.
      This project involved cleaning complex datasets, building forecasting models, and creating interactive visualizations.
    `,
        tags: ["DataVisualization", "Analytics", "BI"],
        iconName: "BarChart3",
        size: "medium",
        gradient: "from-emerald-900/50 to-teal-900/50",
        stats: [
            { label: "Models", value: "5" },
            { label: "Datasets", value: "12" },
            { label: "Insights", value: "Infinite" },
        ]
    },
];
