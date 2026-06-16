window.PORTFOLIO_DATA = {
  "projects": [
    {
      "id": "agile",
      "title": "AgileNavigator",
      "category": "Robotics",
      "description": "Developed a remote control 2-wheeled robot that can navigate inaccessible locations and stream video of its surroundings.\n\nThe project is a compact two-wheeled self-balancing robot intended as an embedded controls and robotics platform. The robot combines a custom mechanical assembly, battery power distribution, motor driver communication, inertial sensing, STM32 firmware, and a Wi-Fi joystick interface. The goal is not only to make the wheels spin, but to close the loop around body angle, wheel motion, and user commands so the robot can stand, recover, and move as a real electromechanical system.",
      "image": "assets/agile-navigator-project.jpg",
      "modalVideo": "assets/agile-navigator-video.mp4",
      "modalMedia": [
        {
          "type": "video",
          "src": "assets/agile-navigator-video.mp4",
          "poster": "assets/agile-navigator-project.jpg"
        },
        {
          "type": "video",
          "src": "assets/agile-navigator-video-2.mp4",
          "poster": "assets/agile-navigator-project.jpg",
          "muted": false
        },
        {
          "type": "video",
          "src": "assets/agile-navigator-video-3.mp4",
          "poster": "assets/agile-navigator-project.jpg"
        },
        {
          "type": "image",
          "src": "assets/agile-navigator-project.jpg"
        }
      ],
      "tech": [
        "STM32",
        "ESP32",
        "PID Control"
      ],
      "status": "completed",
      "url": "https://github.com/SammySuliman",
      "extraLinks": [
        {
          "label": "Engineering Report",
          "url": "assets/self-balancing-robot-project-report.pdf"
        }
      ]
    },
    {
      "id": "beamhear",
      "title": "BeamHear",
      "category": "Embedded DSP",
      "description": "Designed an STM32-based assistive listening device that streams audio and applies real-time DSP to improve speech clarity.\n\nSince the beamforming capabilities of a STM32 MCU with only 2 microphones is limited, I am now working on developing a custom PCB solution that can more accurately eliminate background audio and isolate individual speech tracks. Stay tuned.",
      "image": "assets/beamhear-project.jpg",
      "modalMedia": [
        {
          "type": "video",
          "src": "assets/beamhear-video.mp4",
          "poster": "assets/beamhear-project.jpg",
          "muted": false
        },
        {
          "type": "image",
          "src": "assets/beamhear-slide-2.png"
        }
      ],
      "tech": [
        "C",
        "STM32",
        "DSP"
      ],
      "status": "in progress",
      "url": "https://github.com/SammySuliman/BeamHear"
    },
    {
      "id": "ntt",
      "title": "NTT ASIC",
      "category": "ASIC / RTL",
      "description": "Designing a fully-functioning custom hardware to efficiently perform the Number Theoretic Transform for use in accelerating implementation of cryptographic protocols such as Kyber.",
      "image": "assets/coming-soon-placeholder.svg",
      "tech": [
        "SystemVerilog",
        "ASIC",
        "RTL"
      ],
      "status": "in progress",
      "url": "https://github.com/SammySuliman/NTT-ASIC"
    },
    {
      "id": "immersion",
      "title": "Immersion.AI",
      "category": "AI Education",
      "description": "Developing a voice-based chatbot to immerse language learners in a second language through code-switching.\n\nSo far, I have successfully fine-tuned an mBART model on a bilingual custom dataset and deployed on my AWS server, as well as developed the eventual user interface. This project is on hold for now, but I look forward to resuming work on it shortly, once I have more avaliable time.",
      "image": "assets/immersion-ai-thumbnail.png",
      "modalVideo": "assets/immersion-ai-video.mp4",
      "tech": [
        "Python",
        "mBART",
        "AWS"
      ],
      "status": "in progress",
      "url": "https://github.com/SammySuliman/immersion"
    },
    {
      "id": "adverserial-sim",
      "title": "Adversarial Sim",
      "category": "Robotics / Reinforcement Learning",
      "description": "Helping a 3D excavator find the optimal path to goal while avoiding all obstacles using reinforcement learning.\n\nSo far, I have validated the first part with a 2D representation of an excavator using a genetic algorithm, demoed in PyGame. Stay tuned.",
      "image": "assets/adverserial-sim-thumbnail.jpg",
      "modalMedia": [
        {
          "type": "video",
          "src": "assets/adverserial-sim-video.mp4",
          "poster": "assets/adverserial-sim-thumbnail.jpg"
        }
      ],
      "tech": [
        "Python",
        "PyGame",
        "Reinforcement Learning"
      ],
      "status": "in progress",
      "url": "https://github.com/SammySuliman/adversarial-sim"
    },
    {
      "id": "em-info-geometry",
      "title": "The EM Algorithm in Information Geometry",
      "category": "Mathematics",
      "description": "To complete my Bachelors degree in Applied Mathematics, I studied the use of ideas from the field of Riemannian geometry to solve applied problems in statistics under the supervision of Dr. Gunhee Cho, a field known as information geometry. As part of my work on this thesis, I became the first to implement a novel approach to natural gradient descent based on ideas presented by Dr. Van Sang at the University of Tokyo and submitted my work for consideration for inclusion into the Geomstats library for computations on manifolds being developed by the Geometric Intelligence Lab in the Electrical & Computer Engineering Department at UCSB. For my efforts on this thesis I received the award of Distinction in the Major upon graduation.",
      "cardTags": [
        "Senior Thesis"
      ],
      "image": "assets/em-info-geometry-torus.webp",
      "modalMedia": [
        {
          "type": "image",
          "src": "assets/em-info-geometry-slide-1.png"
        },
        {
          "type": "image",
          "src": "assets/em-info-geometry-slide-2.png"
        }
      ],
      "tech": [
        "Python",
        "Optimization",
        "Research"
      ],
      "status": "completed",
      "url": "https://github.com/SammySuliman/The-EM-Algorithm-in-Information-Geometry",
      "extraLinks": [
        {
          "label": "Read on arXiV",
          "url": "https://arxiv.org/abs/2406.15398"
        },
        {
          "label": "Geomstats",
          "url": "https://github.com/SammySuliman/geomstats/tree/sammy"
        }
      ]
    }
  ],
  "additional": [
    {
      "name": "zkPHIRE",
      "description": "This repository implements and verifies a programmable FPGA accelerator for one SumCheck round over the BN254 scalar field. The design follows the zkPHIRE paper's SumCheck datapath: table-pair reads, affine extension, product-lane multiplication, accumulation into a univariate round polynomial, and challenge-based table update.",
      "image": "assets/zkphire-pynq-running.png",
      "modalImages": [
        "assets/zkphire-pynq-running.png",
        "assets/zkphire-card.png"
      ],
      "language": "C++ / HLS",
      "url": "https://github.com/SammySuliman/zkPHIRE-A-Programmable-Accelerator-for-ZKPs",
      "status": "completed",
      "detail": "This repository implements and verifies a programmable FPGA accelerator for one SumCheck round over the BN254 scalar field. The design follows the zkPHIRE paper's SumCheck datapath: table-pair reads, affine extension, product-lane multiplication, accumulation into a univariate round polynomial, and challenge-based table update.",
      "extraLinks": [
        {
          "label": "Read Original Paper",
          "url": "https://arxiv.org/abs/2508.16738"
        }
      ]
    },
    {
      "name": "Threshold LED Logic Controller",
      "description": "Potentiometer/button LED control using a 1.65V voltage-divider threshold.",
      "image": "assets/threshold-led-thumbnail.jpg",
      "modalVideo": "assets/threshold-led-video.mp4",
      "language": "C / STM32",
      "url": "https://github.com/SammySuliman/mechatronics-projects/tree/assignment3",
      "status": "completed",
      "detail": "The LED is normally off when the potentiometer voltage-divider output is below 1.65V, and pressing the button turns it on. Above 1.65V, the LED is normally on, and pressing the button turns it off."
    },
    {
      "name": "Traffic Light LED Control",
      "description": "Wired 3 LEDs with a resistor in series to GPIO pins on the STM32 Nucleo board. Wired a button with a pull up resistor a GPIO pin on the Nucleo.\n\nThe red LED stays on until the button is pressed, then the green turns on for 3 seconds. Then the yellow LED flashes 3 times in 3 seconds before going back to the red LED.",
      "image": "assets/traffic-light-led-control-thumbnail.jpg",
      "modalVideo": "assets/traffic-light-led-control-video.mp4",
      "language": "C / STM32",
      "status": "completed",
      "detail": "Wired 3 LEDs with a resistor in series to GPIO pins on the STM32 Nucleo board. Wired a button with a pull up resistor a GPIO pin on the Nucleo.\n\nThe red LED stays on until the button is pressed, then the green turns on for 3 seconds. Then the yellow LED flashes 3 times in 3 seconds before going back to the red LED."
    },
    {
      "name": "Direct Shear Device",
      "description": "Arduino-based direct shear device using a motor driver, linear actuator, and power supply to test soil quality.",
      "image": "assets/direct-shear-1.jpg",
      "modalImages": [
        "assets/direct-shear-1.jpg",
        "assets/direct-shear-2.jpg",
        "assets/direct-shear-3.png"
      ],
      "language": "C++ / Hardware",
      "url": "https://github.com/SammySuliman/Direct-Shear-Device",
      "status": "completed",
      "detail": "Arduino-based direct shear device using a motor driver, linear actuator, and power supply to test soil quality."
    },
    {
      "name": "SLAM Experiments",
      "description": "This is work that I did when I was first trying to understand what SLAM was for my first role in robotics. I expanded an existing 2D EKF-SLAM implementation into 3D, and fine-tuned the PointNetClassifier model to distinguish between LiDAR point clouds representing undisturbed earth and heaped raw material.\n\nThe ideal workflow is that the 3D EKF-SLAM will be able to localize the agent using LiDAR data and extract the point clouds of interests which can be classified as being part of the \"ground\" or \"mounds\" by the PointNetClassiifer.",
      "image": "assets/slam-experiments-1.png",
      "modalImages": [
        "assets/slam-experiments-1.png",
        "assets/slam-experiments-2.webp"
      ],
      "language": "Python / SLAM",
      "url": "https://github.com/SammySuliman/SLAM/tree/main",
      "status": "completed",
      "detail": "This is work that I did when I was first trying to understand what SLAM was for my first role in robotics. I expanded an existing 2D EKF-SLAM implementation into 3D, and fine-tuned the PointNetClassifier model to distinguish between LiDAR point clouds representing undisturbed earth and heaped raw material.\n\nThe ideal workflow is that the 3D EKF-SLAM will be able to localize the agent using LiDAR data and extract the point clouds of interests which can be classified as being part of the \"ground\" or \"mounds\" by the PointNetClassiifer."
    },
    {
      "name": "Serial Mode Cycling Blinker",
      "description": "Serial communication project with button-controlled mode switching and LED timing modes.",
      "image": "assets/serial-mode-cycling-blinker-thumbnail.jpg",
      "modalVideo": "assets/serial-mode-cycling-blinker-video.mp4",
      "language": "C / STM32",
      "url": "https://github.com/SammySuliman/mechatronics-projects/tree/assignment5",
      "status": "completed",
      "detail": "Uses the board to send serial data to a computer through CoolTerm/PuTTY. The onboard button cycles through four modes: print elapsed milliseconds every second, blink the onboard light at 1 Hz, blink at 10 Hz, and sweep blink speed between 1 Hz and 10 Hz while printing state changes."
    },
    {
      "name": "Advanced Tremor Detection",
      "description": "STM32 embedded firmware for Parkinson’s-related tremor, dyskinesia, and freezing-of-gait detection.",
      "image": "assets/tremors.png",
      "modalVideo": "assets/tremors-gif.mp4",
      "language": "Embedded Systems",
      "url": "https://github.com/SammySuliman/Advanced-Tremor-Detection",
      "status": "completed",
      "detail": "STM32 embedded firmware for Parkinson’s-related tremor, dyskinesia, and freezing-of-gait detection."
    },
    {
      "name": "PWM Dimmer, Tone Generator & 555 Timer",
      "description": "First I wired a potentiometer in voltage-divider mode to an analog input, then used PWM to vary LED duty cycle and buzzer frequency, then I put a 555 timer in astable mode with resistor/capacitor values chosen to blink an LED around 1 Hz.",
      "image": "assets/pwm-dimmer-tone-555-thumbnail.jpg",
      "modalVideo": "assets/pwm-dimmer-tone-555-video.mp4",
      "modalMuted": false,
      "modalVolume": 0.6,
      "language": "C / STM32 / Circuits",
      "url": "https://github.com/SammySuliman/mechatronics-projects/tree/assignment6",
      "status": "completed",
      "detail": "First I wired a potentiometer in voltage-divider mode to an analog input, then used PWM to vary LED duty cycle and buzzer frequency, then I put a 555 timer in astable mode with resistor/capacitor values chosen to blink an LED around 1 Hz."
    },
    {
      "name": "ModAlg",
      "description": "Scripted an open-source Python package that enables a user to explore the basic structures of abstract algebra, such as groups, rings, and fields, and use the natural operations of these structures (commutative addition, multiplication, etc.), for the purposes of mathematical research.",
      "image": "assets/modalg-slide-1.png",
      "modalImages": [
        "assets/modalg-slide-1.png",
        "assets/modalg-thumbnail.png"
      ],
      "language": "Python",
      "url": "https://github.com/SammySuliman/ModAlg",
      "status": "completed",
      "detail": "Scripted an open-source Python package that enables a user to explore the basic structures of abstract algebra, such as groups, rings, and fields, and use the natural operations of these structures (commutative addition, multiplication, etc.), for the purposes of mathematical research.",
      "extraLinks": [
        {
          "label": "Install from PyPi",
          "url": "https://pypi.org/project/modalg/"
        }
      ]
    },
    {
      "name": "Ultrasonic LCD Distance Reader",
      "description": "Ultrasonic sensor and LCD project that displays object distance and response time.",
      "image": "assets/ultrasonic-lcd-thumbnail.jpg",
      "modalVideo": "assets/ultrasonic-lcd-video.mp4",
      "language": "C / STM32 / Sensors",
      "url": "https://github.com/SammySuliman/mechatronics-projects/tree/assignment7",
      "status": "completed",
      "detail": "Connects an ultrasonic sensor and LCD to the board. Reads ultrasonic measurements and prints both object distance and response time onto the LCD."
    },
    {
      "name": "ReducedGridSearchCV",
      "description": "Scripted an open-source Python package to improve scikit-learn's GridSearchCV algorithm for use in training my ML models that operates in less than half of the time as GridSsearchCV with almost equal performance.",
      "image": "assets/reduced-grid-search-cv-thumbnail.jpg",
      "modalMedia": [
        {
          "type": "video",
          "src": "assets/reduced-grid-search-cv-video.mp4",
          "poster": "assets/reduced-grid-search-cv-thumbnail.jpg"
        },
        {
          "type": "image",
          "src": "assets/reduced-grid-search-cv-slide-2.png"
        }
      ],
      "language": "Python",
      "url": "https://github.com/SammySuliman/ReducedGridSearchCV",
      "status": "completed",
      "detail": "Scripted an open-source Python package to improve scikit-learn's GridSearchCV algorithm for use in training my ML models that operates in less than half of the time as GridSsearchCV with almost equal performance.",
      "extraLinks": [
        {
          "label": "Install from PyPi",
          "url": "https://pypi.org/project/reduced-grid-search-cv/"
        }
      ]
    },
    {
      "name": "Potentiometer Servo Controller",
      "description": "Servo motor control using a potentiometer input.",
      "image": "assets/potentiometer-servo-thumbnail.jpg",
      "modalVideo": "assets/potentiometer-servo-video.mp4",
      "language": "C / STM32 / Mechatronics",
      "url": "https://github.com/SammySuliman/mechatronics-projects/tree/assignment8",
      "status": "completed",
      "detail": "Uses a potentiometer to control a servo motor, mapping analog input position to servo angle for a basic mechatronic control interface."
    },
    {
      "name": "Music Recommender System",
      "description": "A Dockerized recommendation system for music listeners.",
      "image": "assets/music-recommender-1.png",
      "modalImages": [
        "assets/music-recommender-1.png",
        "assets/music-recommender-2.png",
        "assets/music-recommender-3.png",
        "assets/music-recommender-4.png"
      ],
      "language": "Jupyter Notebook",
      "url": "https://github.com/SammySuliman/Music-Recommender-System",
      "status": "completed",
      "detail": "Dockerized recommendation system for music listeners."
    },
    {
      "name": "PowerNap",
      "description": "PowerNap is an adaptive, multi-peripheral power management and clock-gating subsystem designed and developed using the CogniChip hardware design platform.\n\nThe project demonstrates an end-to-end RTL design flow — from AI-assisted module generation to system-level simulation and synthesis — with a strong focus on reducing switching activity and dynamic power in SoC peripherals.\n\nAll modules were developed, integrated, simulated, and synthesized inside CogniChip, leveraging its OpenCOS-based simulation flow and Yosys-driven synthesis backend. Built for the CogniChip x NYU Tandon Spring 2026 hackathon event.",
      "image": "assets/adaptive-power-control.png",
      "language": "Hardware Design",
      "url": "https://github.com/SammySuliman/Adaptive_Power_Control_for_SoC_Peripherals",
      "status": "completed",
      "detail": "PowerNap is an adaptive, multi-peripheral power management and clock-gating subsystem designed and developed using the CogniChip hardware design platform.\n\nThe project demonstrates an end-to-end RTL design flow — from AI-assisted module generation to system-level simulation and synthesis — with a strong focus on reducing switching activity and dynamic power in SoC peripherals.\n\nAll modules were developed, integrated, simulated, and synthesized inside CogniChip, leveraging its OpenCOS-based simulation flow and Yosys-driven synthesis backend. Built for the CogniChip x NYU Tandon Spring 2026 hackathon event."
    }
  ],
  "skills": [
    {
      "id": "programming",
      "title": "Programming",
      "cardImageUrl": "https://api.iconify.design/mdi/code-braces.svg",
      "items": [
        {
          "name": "Python",
          "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          "description": "I have been writing in Python almost daily since 2020! Nowadays, I use Python mostly for machine learning applications (training models), or to implement an algorithm in robotics such as the Extended Kalman Filter or PID control."
        },
        {
          "name": "C++",
          "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
          "description": "I learned C++ in 2024 in order to implement a SLAM algorithm to chart the pose & orientation of an excavator as part of my role as a Robotics Software Engineer at Singularity Solutions. Since then, I have used C & C++ extensively, particularly in embedded systems development and for HLS in hardware design."
        },
        {
          "name": "SQL",
          "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
          "description": "I learned SQL as part of my degree in Data Science. Nowadays, I mostly use SQL-esque functionality in pandas to sort, classify, and orgnaize data for machine learning purposes."
        },
        {
          "name": "MATLAB",
          "imageUrl": "assets/matlab-logo.svg",
          "description": "I have mainly used Matlab in an academic context to implement algorithms in digital signal processing."
        },
        {
          "name": "SystemVerilog",
          "imageUrl": "assets/systemverilog-logo.svg",
          "description": "I first learned SystemVerilog for my Masters in Electrical Engineering, and I now use it to validate the results of my high-level synthesis for my projects in FPGA & ASIC design."
        }
      ]
    },
    {
      "id": "software-ml",
      "title": "Software, ML\n& Data",
      "cardImageUrl": "https://api.iconify.design/mdi/brain.svg",
      "items": [
        {
          "name": "AWS",
          "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          "description": "I deployed the first version of my immersion.AI language learning app to a t3.medium server on an AWS EC2 instance."
        },

        {
          "name": "Docker",
          "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
          "description": "As the CV team lead for NYU RoboMaster Ultraviolet, I worked within an entirely Dockerized environment to manage packages and installs and improve our CV pipeline for armor plate detection & tracking."
        },
        {
          "name": "Flask",
          "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
          "description": "I used Flask to build my first ever web app for a ML diabetes risk assesement based on user inputted health & lifestyle history, hosted through Heroku."
        },

        {
          "name": "PyTorch",
          "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
          "description": "I have used PyTorch extensively throughout nearly every one of my professional experiences, and many of my personal projects, for all of my model training needs. Currently, I am using PyTorch to fine-tune a mBART model to code-switch fluently between English and a secondary language to help 2nd language learners achieve fluency."
        },
        {
          "name": "PySpark",
          "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg",
          "description": "I used PySpark to process and perform data analysis on very large data (500K+ rows) of American voter data."
        },
        {
          "name": "Kivy",
          "imageUrl": "assets/kivy-logo.webp",
          "description": "I used Kivy extensively for my role as a Contract Systems Software Engineer at the Vermeer Corporation, to develop the UI for viewing drill excavations. I implemented many features in Kivy to help the customer interact in real time with drill visualizations, all with minimal latency."
        },
        {
          "name": "Git",
          "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
          "description": "I have used Git daily since 2021! I use Git CLI to collaborate on large team projects, as well as to organize all my personal repositories."
        },
        {
          "name": "Linux",
          "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
          "description": "I use either Linux or WSL not only for work, but for the majority of my personal computing needs (including making this website!)"
        }
      ]
    },
    {
      "id": "robotics-simulation",
      "title": "Robotics\n& Simulation",
      "cardImageUrl": "https://api.iconify.design/mdi/robot-industrial.svg",
      "items": [
        {
          "name": "ROS2",
          "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ros/ros-original.svg",
          "description": "I have used ROS2 extensively, first in my prior role as a Robotics Software Engineer, and currently on the NYU Ultraviolet RoboMaster team to integrate data from different sensors, run SLAM workflows, process TF frames, and more."
        },
        {
          "name": "SUMO",
          "imageUrl": "assets/sumo-logo.webp",
          "description": "I used SUMO during my internships in the national security sector to model traffic flow across land border ports under various vehicle densities, and simulate the effect of different traffic configurations."
        },
        {
          "name": "Velodyne VLP-16",
          "imageUrl": "assets/velodyne-vlp16.webp",
          "description": "I used this unit extensively during my work at Singularity Solutions, processing raw LiDAR data from the unit on my computer via Ethernet."
        },
        {
          "name": "Livox Mid-360",
          "imageUrl": "assets/livox-mid360.webp",
          "description": "I used this unit during my work on the NYU Ultraviolet team in order to run SLAM workflows."
        },
        {
          "name": "IMU",
          "imageUrl": "assets/imu-logo.webp",
          "description": "Integrated orientation data from an IMU with my LiDAR point cloud data from my VLP-16 unit in a single ROS2 node to gather more accurate information on robot's pose & orientation as part of my work for Singularity Solutions."
        },
        {
          "name": "RViz",
          "imageUrl": "assets/rviz-logo.webp",
          "description": "I've used RViz throughout my different experiences in robotics in order to visualize raw streaming data from my various LiDAR units."
        },
        {
          "name": "Gazebo",
          "imageUrl": "assets/gazebo-logo.webp",
          "description": "I use Gazebo for testing 3D SLAM and integrating simulated sensor workflows."
        },
        {
          "name": "RealSense",
          "imageUrl": "https://realsenseai.com/wp-content/uploads/2025/07/D435i.png",
          "description": "Used the RealSense camera to validate and correct bugs in YOLO-based CV pipeline for NYU Ultraviolet."
        }
      ]
    },
    {
      "id": "hardware-design",
      "title": "Hardware\nDesign",
      "cardImageUrl": "https://api.iconify.design/mdi/integrated-circuit-chip.svg",
      "items": [
        {
          "name": "PYNQ-Z2",
          "imageUrl": "assets/pynq-z2.webp",
          "description": "Me and my team worked on a Pynq-Z2 FPGA board to implement the programmable SumCheck accelerator module of the zkPHIRE cryptographic ZKP protocol, before having to find an alternative after our accelerator exceeded the total number of DSP blocks on the board."
        },
        {
          "name": "Vitis & Vivado",
          "imageUrl": "assets/vitis-vivado-logo.png",
          "description": "For my zkPHIRE accelerator project and in designing an ASIC to perform the NTT, I use Vitis HLS to convert my C++ with pragmas into Verilog RTL, then Vivado to build the FPGA hardware from the RTL."
        },
        {
          "name": "Yosys",
          "imageUrl": "assets/yosys-logo.png",
          "description": "After converting FPGA-synthesizable RTL to ASIC-compatible RTL for my part on the NTT ASIC team, I use Yosys to synthesize to gate-level for OpenLane to produce a GDSII file."
        }
      ]
    },
    {
      "id": "embedded-systems",
      "title": "Embedded\nSystems",
      "cardImageUrl": "https://api.iconify.design/mdi/chip.svg",
      "items": [
        {
          "name": "STM32",
          "imageUrl": "https://aadhavsivakumar.github.io/Media/skills/STM32.webp",
          "description": "I use the STM32L4 most often for my work in embedded systems, including developing a Parkinson's symptoms detector, and designing an assistive listening device for people with auditory processing disorders. For AgileNavigator, the PID control to enable the robot to balance on 2 wheels was flashed onto a STM32H7."
        },
        {
          "name": "FreeRTOS",
          "imageUrl": "assets/freertos-logo.svg",
          "description": "We used a FreeRTOS scheduler for AgileNavigator to run 3 tasks in parallel: The balance loop, IMU reading and angle/orientation estimation, and serial logging/debugging through UART."
        },
        {
          "name": "ESP32",
          "imageUrl": "https://aadhavsivakumar.github.io/Media/skills/ESP32.jpg",
          "description": "We used the ESP32-CAM to stream video of AgileNavigator's surroundings. By flashing our joystick code to the ESP32, we integrated the streaming video in the background of our joystick controller, enabling the user to see from the robot's perspective as he pilots it."
        },
        {
          "name": "Arduino Uno",
          "imageUrl": "https://aadhavsivakumar.github.io/Media/skills/Arduino.jpg",
          "description": "I wrote the code to drive a linear actuator to test soil quality on an Arduino Uno."
        },
        {
          "name": "Raspberry Pi",
          "imageUrl": "https://aadhavsivakumar.github.io/Media/skills/raspberrypi.webp",
          "description": "I used a RaspberryPi within a laptop chassis for my role as a Robotics Software Engineer at Singularity Solutions, flashing it with a Linux OS and setting up a ROS2 workflow, before switching to an alternate computing platform for expanded RAM."
        },
        {
          "name": "NVIDIA Jetson",
          "imageUrl": "https://aadhavsivakumar.github.io/Media/skills/jetsonnano.jpg",
          "description": "As the CV team lead for NYU RoboMaster Ultraviolet, we run our entire YOLO-based pipeline for armor plate detection & tracking on a Jetson Nano, and our SLAM pipeline on a Jetson AGX Orin."
        }
      ]
    },
    {
      "id": "design-fabrication",
      "title": "Design\n& Fabrication",
      "cardImageUrl": "https://api.iconify.design/mdi/printer-3d-nozzle-outline.svg",
      "items": [
        {
          "name": "OnShape CAD",
          "imageUrl": "assets/onshape-logo.svg",
          "description": "I used OnShape to design a 3D model of an excavator's bucket for use in 3D simulations, and to design a chassis for a small, powered model car."
        },
        {
          "name": "Bambu Printer",
          "imageUrl": "https://aadhavsivakumar.github.io/Media/skills/bambu.webp",
          "description": "I used a Bambu printer to manufacture components for the architectural stability of our AgileNavigator robot. I also use it just for fun!"
        },
        {
          "name": "Cadence Virtuoso",
          "imageUrl": "assets/cadence-virtuoso-logo.webp",
          "description": "I have used Cadence Virtuoso mainly in an academic context. Most notably, I designed a folded cascode operational transconductance amplifier with 15 NMOS/PMOS transistors, using a biasing current to achieve a 70 dB gain."
        },
        {
          "name": "Soldering",
          "imageUrl": "assets/soldering.webp",
          "description": "I soldered the battery switch and the necessary wires to PCBs to bring the motors online for our AgileNavigator project. I also soldered wires to power & ground on the armor plate for the NYU Ultraviolet sentry robot."
        }
      ]
    },
    {
      "id": "electronics-specialized-tools",
      "title": "Electronics\n& Specialized Tools",
      "cardImageUrl": "https://api.iconify.design/mdi/toolbox-outline.svg",
      "items": [
        {
          "name": "Potentiometer",
          "imageUrl": "assets/potentiometers.webp",
          "description": "I have used potentiometers to create tunable voltage dividers whenever I need to vary the input voltage of my circuit, for example, to change the duty cycle of a blinking LED or the frequency of a passive buzzer."
        },
        {
          "name": "Passive Buzzer",
          "imageUrl": "assets/passive-buzzer.webp",
          "description": "Passive buzzer component used with PWM signals to generate tunable tones and audible feedback in embedded circuits."
        },
        {
          "name": "555 Timer",
          "imageUrl": "assets/timer-555.webp",
          "description": "I use a 555 timer to make my circuits change their behavior at different times, for example, wiring my timer to astable mode so that differents components come online at fixed intervals."
        },
        {
          "name": "Multimeter",
          "imageUrl": "assets/multimeter.webp",
          "description": "Used a multimeter to debug why no current was flowing through my motor driver, pinpointed issue (wrong terminals connected) and fixed the circuit. I frequently use multimeters to validate voltage, continuity, resistance, and basic circuit behavior while debugging electronics."
        },
        {
          "name": "Motor Driver",
          "imageUrl": "assets/motor-driver.webp",
          "description": "I used an IBT-2 motor driver to drive a 1 foot linear actuator from microcontroller instructions to test soil quality."
        },
        {
          "name": "Ultrasonic",
          "imageUrl": "assets/ultrasonic.webp",
          "description": "Measures distance by emitting/receiving ultrasonic waves for object detection/avoidance."
        },
        {
          "name": "LCD / OLED",
          "imageUrl": "assets/lcd-oled.webp",
          "description": "I have used OLED screens to print out messages from my code as a debugging strategy when working with mechatronic systems."
        },
        {
          "name": "Oscilloscope",
          "imageUrl": "assets/oscilloscope.webp",
          "description": "Used an oscilloscope to validate the motor control signal being sent through Vlink, so that our team could successfully rotate a motor through Vlink Basic2."
        }
      ]
    }
  ]
};
