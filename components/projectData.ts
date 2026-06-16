import { Project } from '../types';

export const MAJOR_PROJECTS_DATA: Project[] = [
    {
        id: 1,
        title: "AgileNavigator",
        category: "Robotics & Embedded Systems",
        description: "Developed a remote control 2-wheeled robot that can navigate inaccessible locations and stream video of its surroundings.",
        imageUrl: "https://aadhavsivakumar.github.io/Images/projectcovers/Millet.webp",
        technologies: ["STM32", "ESP32", "PID Control", "Embedded C"],
        status: "finished",
        modalContent: [
            { type: "text", value: "Developed a remote control 2-wheeled robot that can navigate inaccessible locations and stream video of its surroundings." },
            { type: "text", value: "Wired battery switch to UART pins on STM32, soldered wires to PCBs to bring motors online, wired ESP32 camera to STM32, wrote and fine-tuned PID control for two-wheel balancing, and integrated WiFi joystick control with streaming video." },
            { type: "button", text: "View GitHub", link: "https://github.com/SammySuliman" }
        ],
        media: [
            { type: "image", url: "https://aadhavsivakumar.github.io/Images/gallery/millet/1.webp" },
            { type: "image", url: "https://aadhavsivakumar.github.io/Images/gallery/millet/2.webp" }
        ]
    },
    {
        id: 2,
        title: "zkPHIRE",
        category: "FPGA / HLS Accelerator",
        description: "Built an FPGA/HLS accelerator for zero-knowledge proof SumCheck operations over the BN254 field.",
        imageUrl: "https://aadhavsivakumar.github.io/Images/projectcovers/fpgaVGA.png",
        technologies: ["C++", "HLS", "PYNQ-Z2", "AXI"],
        status: "finished",
        modalContent: [
            { type: "text", value: "Built zkPHIRE, an FPGA/HLS accelerator for zero-knowledge proof SumCheck operations over the BN254 field." },
            { type: "text", value: "Verified design correctness with Python golden models, C++ testbenches, and synthesis on PYNQ-Z2. Optimized hardware using AXI, BRAM/m_axi, loop unrolling, array partitioning, and multi-PE parallelism." },
            { type: "button", text: "View GitHub", link: "https://github.com/SammySuliman/zkPHIRE-A-Programmable-Accelerator-for-ZKPs" }
        ]
    },
    {
        id: 3,
        title: "BeamHear",
        category: "Embedded DSP",
        description: "Designed an STM32-based assistive listening device that streams audio and applies real-time DSP to improve speech clarity.",
        imageUrl: "https://aadhavsivakumar.github.io/Images/projectcovers/solegaitvidmute.mp4",
        technologies: ["C", "STM32", "DSP", "Audio"],
        status: "finished",
        modalContent: [
            { type: "text", value: "Designed an STM32-based assistive listening device that streams audio and applies real-time DSP to suppress non-speech background noise and enhance clarity for users with auditory processing disorders." },
            { type: "button", text: "View GitHub", link: "https://github.com/SammySuliman/BeamHear" }
        ]
    },
    {
        id: 4,
        title: "Embedded Parkinson’s Detector",
        category: "Biomedical Embedded",
        description: "Designed embedded STM32 firmware for a motion-sensing system that detects Parkinson’s-related motion events.",
        imageUrl: "https://aadhavsivakumar.github.io/Images/projectcovers/tacmanipHQ.gif",
        technologies: ["STM32", "IMU", "FFT", "FIR", "BLE"],
        status: "finished",
        modalContent: [
            { type: "text", value: "Designed embedded firmware on the STM32 B-L475 for a motion-sensing system that captures 52 Hz IMU data, performs real-time FFT/FIR feature extraction, and transmits Parkinson’s-related motion events via interrupt-driven BLE." },
            { type: "button", text: "View GitHub", link: "https://github.com/SammySuliman/Advanced-Tremor-Detection" }
        ]
    },
    {
        id: 5,
        title: "Immersion.AI",
        category: "AI / Language Learning",
        description: "Developed a voice-based chatbot to immerse language learners in a second language through code-switching.",
        imageUrl: "https://aadhavsivakumar.github.io/Images/projectcovers/glass2bot.gif",
        technologies: ["Python", "mBART", "AWS", "SpeechRecognition"],
        status: "finished",
        modalContent: [
            { type: "text", value: "Developed a voice-based chatbot to immerse language learners in a second language through code-switching." },
            { type: "text", value: "Fine-tuned mBART on custom code-switched datasets through AWS server and integrated with the SpeechRecognition API." },
            { type: "button", text: "View GitHub", link: "https://github.com/SammySuliman/immersion" }
        ]
    },
    {
        id: 6,
        title: "Direct Shear Device",
        category: "Hardware / Mechatronics",
        description: "Built a direct shear device using Arduino Uno, motor driver, linear actuator, and power supply to test soil quality.",
        imageUrl: "https://aadhavsivakumar.github.io/Images/projectcovers/mechcomp.mp4",
        technologies: ["Arduino", "C++", "Motor Driver", "Linear Actuator"],
        status: "finished",
        modalContent: [
            { type: "text", value: "Built direct shear device using Arduino Uno, motor driver, linear actuator, and power supply to test soil quality." },
            { type: "button", text: "View GitHub", link: "https://github.com/SammySuliman/Direct-Shear-Device" }
        ]
    }
];

export const ADDITIONAL_PROJECTS_DATA: Project[] = [
    {
        id: "ntt",
        title: "NTT-ASIC",
        category: "ASIC / RTL",
        description: "ASIC-oriented implementation of the Number Theoretic Transform, adapted from an FPGA design for synthesizable RTL handoff.",
        imageUrl: "https://aadhavsivakumar.github.io/Images/projectcovers/fpgaVGA.png",
        technologies: ["SystemVerilog", "ASIC RTL", "Synthesis"],
        status: "in-progress",
        modalContent: [
            { type: "text", value: "This is the source code for an ASIC implementation of the NTT (Number Theoretic Transform). I worked on making the FPGA implementation synthesizable for an ASIC." },
            { type: "button", text: "View GitHub", link: "https://github.com/SammySuliman/NTT-ASIC" }
        ]
    },
    {
        id: "adversarial",
        title: "Adversarial Excavator Simulation",
        category: "Simulation / Robotics",
        description: "Created a 2D PyGame simulation to model efficient path planning for an excavator using adversarial machine learning ideas.",
        imageUrl: "https://aadhavsivakumar.github.io/Images/projectcovers/stockbot.gif",
        technologies: ["Python", "PyGame", "Genetic Algorithm"],
        status: "finished",
        modalContent: [
            { type: "text", value: "Designed 2D simulation of an excavator environment using PyGame to find the optimal path to goal using a genetic algorithm." },
            { type: "button", text: "View GitHub", link: "https://github.com/SammySuliman/adversarial-sim" }
        ]
    },
    {
        id: "slam",
        title: "SLAM",
        category: "Robotics / Mapping",
        description: "SLAM and sensor-fusion work involving LiDAR, IMU data, pose estimation, and mapping workflows.",
        imageUrl: "https://aadhavsivakumar.github.io/Images/projectcovers/2dlidar.mp4",
        technologies: ["Python", "LiDAR", "IMU", "SLAM"],
        status: "finished",
        modalContent: [
            { type: "text", value: "Developed a SLAM system to graph the pose and orientation of an excavator in real time, integrating sensor data from a Velodyne LiDAR unit and IMU." },
            { type: "button", text: "View GitHub", link: "https://github.com/SammySuliman/SLAM" }
        ]
    },
    {
        id: "modalg",
        title: "ModAlg",
        category: "Mathematics / Software",
        description: "Source code for a Python library scripted for use in abstract algebra.",
        imageUrl: "https://aadhavsivakumar.github.io/Images/projectcovers/fruitninja.mp4",
        technologies: ["Python", "Abstract Algebra"],
        status: "finished",
        modalContent: [
            { type: "text", value: "Source code for a Python library scripted for use in abstract algebra." },
            { type: "button", text: "View GitHub", link: "https://github.com/SammySuliman/ModAlg" }
        ]
    },
    {
        id: "em",
        title: "The EM Algorithm in Information Geometry",
        category: "Research / Math",
        description: "Senior thesis work implementing a novel natural-gradient-descent algorithm from a theoretical paper.",
        imageUrl: "https://aadhavsivakumar.github.io/Images/projectcovers/deskrobarm.png",
        technologies: ["Python", "Optimization", "Information Geometry"],
        status: "finished",
        modalContent: [
            { type: "text", value: "Was the first to implement a novel algorithm for natural gradient descent from a theoretical paper as part of senior thesis work in information geometry." },
            { type: "button", text: "View GitHub", link: "https://github.com/SammySuliman/The-EM-Algorithm-in-Information-Geometry" }
        ]
    },
    {
        id: "voter",
        title: "Voter Data Analysis in Spark",
        category: "Data Engineering",
        description: "Analyzed voter patterns in big data using PySpark; originally created and deployed through Google Cloud Platform.",
        imageUrl: "https://aadhavsivakumar.github.io/Images/projectcovers/3dcamera.mp4",
        technologies: ["PySpark", "GCP", "Jupyter"],
        status: "finished",
        modalContent: [
            { type: "text", value: "Analyzing voter patterns in big data of all voters in a US state using PySpark. Originally created and deployed via Google Cloud Platform." },
            { type: "button", text: "View GitHub", link: "https://github.com/SammySuliman/Voter-Data-Analysis-in-Spark" }
        ]
    },
    {
        id: "reducedgrid",
        title: "ReducedGridSearchCV",
        category: "Machine Learning",
        description: "A modified version of scikit-learn GridSearchCV that operates faster with roughly equal performance.",
        imageUrl: "https://aadhavsivakumar.github.io/Images/projectcovers/smartsort.gif",
        technologies: ["Python", "scikit-learn", "ML"],
        status: "finished",
        modalContent: [
            { type: "text", value: "A modified version of the scikit-learn GridSearchCV algorithm that operates in significantly less time with roughly equal performance." },
            { type: "button", text: "View GitHub", link: "https://github.com/SammySuliman/ReducedGridSearchCV" }
        ]
    },
    {
        id: "music",
        title: "Music Recommender System",
        category: "Machine Learning",
        description: "A Dockerized music recommendation system built around artist recommendation data.",
        imageUrl: "https://aadhavsivakumar.github.io/Images/projectcovers/dogfeeder.webp",
        technologies: ["Docker", "Python", "Jupyter"],
        status: "finished",
        modalContent: [
            { type: "text", value: "A system built to offer artist recommendations to music enjoyers. Containerized with Docker." },
            { type: "button", text: "View GitHub", link: "https://github.com/SammySuliman/Music-Recommender-System" }
        ]
    }
];
