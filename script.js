/* ================================
   PathFinder - JavaScript
   ================================ */

// Course Data with Skills
const courseData = {
    courses: [
        // Technical Courses
        {
            id: "web-development",
            name: "Web Development",
            category: "technical",
            description: "Master front-end and back-end technologies to build modern, responsive websites and web applications.",
            difficulty: "Beginner",
            skills: {
                core: ["HTML5", "CSS3", "JavaScript", "ES6+"],
                tools: ["Git", "VS Code", "Chrome DevTools"],
                optional: ["SASS", "TypeScript", "jQuery"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "HTML & CSS Fundamentals",
                    description: "Learn the building blocks of the web. Understand semantic HTML, CSS selectors, box model, flexbox, and grid layout.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/uDtpMIONz3E"
                },
                {
                    step: 2,
                    title: "JavaScript Essentials",
                    description: "Master JavaScript fundamentals including variables, functions, DOM manipulation, and ES6+ features.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/W6NZfCO5SIk"
                },
                {
                    step: 3,
                    title: "Responsive Design & CSS Frameworks",
                    description: "Learn to create mobile-first responsive designs and master CSS frameworks like Tailwind CSS or Bootstrap.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/srvUrASNj0s"
                },
                {
                    step: 4,
                    title: "Version Control with Git",
                    description: "Understand Git basics, branching, merging, and collaboration workflows using GitHub.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/RGOj5yH7evk"
                },
                {
                    step: 5,
                    title: "React.js Fundamentals",
                    description: "Learn React components, state management, hooks, and build interactive user interfaces.",
                    duration: "4 weeks",
                    video: "https://www.youtube.com/embed/Tn6-PIqc4UM"
                },
                {
                    step: 6,
                    title: "Backend Basics & Deployment",
                    description: "Introduction to Node.js, Express, and deploying your applications to platforms like Vercel or Netlify.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/Oe421EPjeBE"
                }
            ]
        },
        {
            id: "data-science",
            name: "Data Science",
            category: "technical",
            description: "Extract insights from data using statistics, programming, and machine learning techniques.",
            difficulty: "Intermediate",
            skills: {
                core: ["Python", "Statistics", "Pandas", "NumPy"],
                tools: ["Jupyter", "Matplotlib", "Scikit-learn"],
                optional: ["TensorFlow", "PyTorch", "SQL"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "Python Programming Basics",
                    description: "Learn Python fundamentals including data types, control flow, functions, and object-oriented programming.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/_uQrJ0TkZlc"
                },
                {
                    step: 2,
                    title: "Statistics & Probability",
                    description: "Master essential statistical concepts including distributions, hypothesis testing, and probability theory.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/VmyTo1Ggfls"
                },
                {
                    step: 3,
                    title: "Data Analysis with Pandas",
                    description: "Learn data manipulation, cleaning, and analysis using the Pandas library for Python.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/vmEHCJofslg"
                },
                {
                    step: 4,
                    title: "Data Visualization",
                    description: "Create compelling visualizations using Matplotlib, Seaborn, and interactive dashboards.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/0z_44bwqVTM"
                },
                {
                    step: 5,
                    title: "Machine Learning Fundamentals",
                    description: "Understand supervised and unsupervised learning, regression, classification, and model evaluation.",
                    duration: "4 weeks",
                    video: "https://www.youtube.com/embed/i_LwzRVP7bg"
                },
                {
                    step: 6,
                    title: "Deep Learning & Neural Networks",
                    description: "Introduction to neural networks, deep learning frameworks, and building AI models.",
                    duration: "4 weeks",
                    video: "https://www.youtube.com/embed/aircAruvnKk"
                }
            ]
        },
        {
            id: "mobile-development",
            name: "Mobile App Development",
            category: "technical",
            description: "Build native and cross-platform mobile applications for iOS and Android using modern frameworks.",
            difficulty: "Intermediate",
            skills: {
                core: ["JavaScript", "React Native", "Mobile UI", "APIs"],
                tools: ["Xcode", "Android Studio", "Expo"],
                optional: ["Swift", "Kotlin", "Flutter"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "JavaScript Fundamentals",
                    description: "Master JavaScript basics including ES6+ features, async programming, and DOM manipulation.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/W6NZfCO5SIk"
                },
                {
                    step: 2,
                    title: "React Native Setup & Basics",
                    description: "Set up your development environment and learn React Native core concepts and components.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/0imtn1nGc7A"
                },
                {
                    step: 3,
                    title: "React Native Components & Styling",
                    description: "Learn to build UI components, handle user input, and style your mobile apps effectively.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/N8Mg64yBfr4"
                },
                {
                    step: 4,
                    title: "Navigation & State Management",
                    description: "Implement navigation patterns and manage application state with Context API or Redux.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/MjA3_6Z76P4"
                },
                {
                    step: 5,
                    title: "Working with APIs & Backend",
                    description: "Connect your app to REST APIs, handle authentication, and manage data storage.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/ecT42O4My-w"
                },
                {
                    step: 6,
                    title: "App Deployment & Publishing",
                    description: "Build, test, and publish your app to Apple App Store and Google Play Store.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/yJoH8Ilq7yE"
                }
            ]
        },
        {
            id: "cloud-computing",
            name: "Cloud Computing",
            category: "technical",
            description: "Master cloud platforms and services to deploy, manage, and scale applications in the cloud.",
            difficulty: "Intermediate",
            skills: {
                core: ["AWS", "Docker", "Kubernetes", "Linux"],
                tools: ["Terraform", "CloudFormation", "CI/CD"],
                optional: ["Azure", "GCP", "Ansible"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "Cloud Computing Fundamentals",
                    description: "Understand cloud concepts, service models (IaaS, PaaS, SaaS), and deployment strategies.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/SqcX-4eWBw4"
                },
                {
                    step: 2,
                    title: "AWS Core Services",
                    description: "Learn essential AWS services including EC2, S3, Lambda, and VPC networking.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/SClGzXvG_7g"
                },
                {
                    step: 3,
                    title: "Containerization with Docker",
                    description: "Master Docker for containerizing applications, creating Dockerfiles, and managing containers.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/fqMOX6JJhGo"
                },
                {
                    step: 4,
                    title: "Kubernetes Basics",
                    description: "Learn container orchestration with Kubernetes, deployments, services, and scaling.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/H0cKbZeqfbM"
                },
                {
                    step: 5,
                    title: "Infrastructure as Code",
                    description: "Use Terraform and CloudFormation to automate infrastructure provisioning and management.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/V53ch5C8DcI"
                },
                {
                    step: 6,
                    title: "CI/CD & Cloud DevOps",
                    description: "Implement continuous integration and deployment pipelines in the cloud.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/nyK-MI一有"
                }
            ]
        },
        {
            id: "cybersecurity",
            name: "Cybersecurity",
            category: "technical",
            description: "Learn to protect systems, networks, and data from cyber threats through ethical hacking and security practices.",
            difficulty: "Advanced",
            skills: {
                core: ["Networking", "Linux", "Python", "Security+"],
                tools: ["Wireshark", "Metasploit", "Nmap"],
                optional: ["CEH", "CISSP", "OSCP"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "Networking Fundamentals",
                    description: "Understand TCP/IP, OSI model, network protocols, and security fundamentals.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/qiQR5rTSshw"
                },
                {
                    step: 2,
                    title: "Linux for Security",
                    description: "Master Linux command line, file system, permissions, and security configurations.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/v_1zB2O0jRSk"
                },
                {
                    step: 3,
                    title: "Python for Security",
                    description: "Learn Python scripting for security automation, packet analysis, and building security tools.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/6dXIWJ-RqEQ"
                },
                {
                    step: 4,
                    title: "Network Security & Firewalls",
                    description: "Implement network security, configure firewalls, and understand intrusion detection systems.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/9GZGv2gP3lU"
                },
                {
                    step: 5,
                    title: "Ethical Hacking",
                    description: "Learn penetration testing methodologies, vulnerability assessment, and exploit development.",
                    duration: "4 weeks",
                    video: "https://www.youtube.com/embed/3Kq1MIfbCEk"
                },
                {
                    step: 6,
                    title: "Incident Response & Forensics",
                    description: "Master incident response procedures, digital forensics, and threat hunting techniques.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/yr2mBuqZ8pY"
                }
            ]
        },
        {
            id: "ai-ml",
            name: "AI/ML Engineering",
            category: "technical",
            description: "Build intelligent systems and machine learning models to solve complex real-world problems.",
            difficulty: "Advanced",
            skills: {
                core: ["Python", "TensorFlow", "PyTorch", "Neural Networks"],
                tools: ["Jupyter", "Keras", "OpenCV"],
                optional: ["NLP", "Computer Vision", "RL"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "Python & Math Foundations",
                    description: "Master Python programming and essential mathematics including linear algebra and calculus.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/_uQrJ0TkZlc"
                },
                {
                    step: 2,
                    title: "Machine Learning Basics",
                    description: "Understand supervised and unsupervised learning, feature engineering, and model evaluation.",
                    duration: "4 weeks",
                    video: "https://www.youtube.com/embed/i_LwzRVP7bg"
                },
                {
                    step: 3,
                    title: "Deep Learning Networks",
                    description: "Learn neural networks, backpropagation, and training deep learning models.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/aircAruvnKk"
                },
                {
                    step: 4,
                    title: "Computer Vision",
                    description: "Master image processing, CNN architectures, and object detection techniques.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/d2XB5-tuCWU"
                },
                {
                    step: 5,
                    title: "Natural Language Processing",
                    description: "Learn text processing, transformers, and building language models.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/CMrHM8a3hqw"
                },
                {
                    step: 6,
                    title: "MLOps & Deployment",
                    description: "Deploy machine learning models to production and implement MLOps best practices.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        },
        // Non-Technical Courses
        {
            id: "digital-marketing",
            name: "Digital Marketing",
            category: "non-technical",
            description: "Master online marketing strategies including SEO, social media, content marketing, and paid advertising.",
            difficulty: "Beginner",
            skills: {
                core: ["SEO", "Content Marketing", "Social Media", "Analytics"],
                tools: ["Google Analytics", "Google Ads", "Hootsuite"],
                optional: ["Mailchimp", "HubSpot", "Semrush"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "Digital Marketing Fundamentals",
                    description: "Understand the digital marketing landscape, customer journey, and marketing funnel.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/DuXo4eHt4bE"
                },
                {
                    step: 2,
                    title: "Search Engine Optimization (SEO)",
                    description: "Learn on-page and off-page SEO techniques to improve organic search rankings.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/X7r8FlZ7p9E"
                },
                {
                    step: 3,
                    title: "Social Media Marketing",
                    description: "Master content strategies for major platforms including Instagram, LinkedIn, and Twitter.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/sVTy_w8Ufjw"
                },
                {
                    step: 4,
                    title: "Content Marketing",
                    description: "Create compelling content strategies, blogs, videos, and marketing collateral.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/EgDmWUf2uFw"
                },
                {
                    step: 5,
                    title: "Paid Advertising (PPC)",
                    description: "Run effective Google Ads and social media advertising campaigns.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/vN8dV7G8i0M"
                },
                {
                    step: 6,
                    title: "Analytics & Measurement",
                    description: "Track performance with Google Analytics and make data-driven marketing decisions.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/uhR4Fs8qR8g"
                }
            ]
        },
        {
            id: "product-management",
            name: "Product Management",
            category: "non-technical",
            description: "Learn to build and manage successful products from ideation to launch and iteration.",
            difficulty: "Intermediate",
            skills: {
                core: ["Product Strategy", "User Research", "Agile", "Analytics"],
                tools: ["Jira", "Figma", "Miro", "Notion"],
                optional: ["A/B Testing", "SQL", "Tableau"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "Product Management Overview",
                    description: "Understand the role of a product manager, product lifecycle, and stakeholder management.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/2KxK3LkT1Lg"
                },
                {
                    step: 2,
                    title: "User Research & Discovery",
                    description: "Conduct user interviews, surveys, and analyze market research to identify opportunities.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/lI2Phg2S2vA"
                },
                {
                    step: 3,
                    title: "Product Strategy & Roadmapping",
                    description: "Define product vision, create roadmaps, and prioritize features using various frameworks.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/3mJqQv8jYHw"
                },
                {
                    step: 4,
                    title: "Agile & Scrum for PMs",
                    description: "Master Agile methodologies, sprint planning, and running effective ceremonies.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/ac7JfnqngNw"
                },
                {
                    step: 5,
                    title: "Metrics & Analytics",
                    description: "Track key product metrics, A/B testing, and make data-driven product decisions.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/Z8t17pLSW0E"
                },
                {
                    step: 6,
                    title: "Product Launch & Growth",
                    description: "Plan and execute product launches, measure success, and iterate based on feedback.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/kPV7LkQXa7U"
                }
            ]
        },
        {
            id: "ui-ux-design",
            name: "UX/UI Design",
            category: "non-technical",
            description: "Create user-centered designs for digital products through research, prototyping, and visual design.",
            difficulty: "Beginner",
            skills: {
                core: ["Figma", "User Research", "Wireframing", "Prototyping"],
                tools: ["Adobe XD", "Sketch", "Miro", "Hotjar"],
                optional: ["Illustrator", "Photoshop", "Framer"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "Design Thinking Fundamentals",
                    description: "Learn the design thinking process, empathy mapping, and user-centered design principles.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/_r0VX-aU_T8"
                },
                {
                    step: 2,
                    title: "User Research Methods",
                    description: "Conduct user interviews, usability testing, and gather actionable insights.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/Q9CNM34q6Dw"
                },
                {
                    step: 3,
                    title: "Wireframing & Prototyping",
                    description: "Create low-fidelity wireframes and interactive prototypes using Figma.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/htJJJ6eO3vQ"
                },
                {
                    step: 4,
                    title: "UI Design Principles",
                    description: "Master typography, color theory, visual hierarchy, and layout design.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/YqQx75OPRa0"
                },
                {
                    step: 5,
                    title: "Figma Mastery",
                    description: "Become proficient in Figma for creating high-fidelity designs and design systems.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/4W-5OJH-yJQ"
                },
                {
                    step: 6,
                    title: "Design Handoff & Collaboration",
                    description: "Effectively collaborate with developers and prepare designs for implementation.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/6qA8KfAOpoE"
                }
            ]
        },
        {
            id: "content-writing",
            name: "Content Writing",
            category: "non-technical",
            description: "Develop professional writing skills for blogs, websites, marketing copy, and technical documentation.",
            difficulty: "Beginner",
            skills: {
                core: ["Copywriting", "SEO Writing", "Editing", "Research"],
                tools: ["Grammarly", "Hemingway", "WordPress", "Notion"],
                optional: ["Google Docs", "Copyscape", "Canva"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "Fundamentals of Writing",
                    description: "Master grammar, style, tone, and different writing formats for various platforms.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/AOO6aWWfDmQ"
                },
                {
                    step: 2,
                    title: "Blog Writing & SEO",
                    description: "Write engaging blog posts optimized for search engines and reader engagement.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/ZyG1Jd2FigI"
                },
                {
                    step: 3,
                    title: "Copywriting for Marketing",
                    description: "Learn persuasive copywriting techniques for ads, landing pages, and email campaigns.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/8ZIlVflMF1U"
                },
                {
                    step: 4,
                    title: "Technical Writing",
                    description: "Create clear technical documentation, user guides, and API documentation.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/bJrT6fVQfmI"
                },
                {
                    step: 5,
                    title: "Social Media Content",
                    description: "Craft compelling social media posts and content strategies for various platforms.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/K4TOrB7at0Y"
                },
                {
                    step: 6,
                    title: "Building Your Portfolio",
                    description: "Create a professional portfolio and start finding clients as a content writer.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/QY7X6f6XMxA"
                }
            ]
        },
        {
            id: "project-management",
            name: "Project Management",
            category: "non-technical",
            description: "Lead projects successfully using proven methodologies, tools, and leadership skills.",
            difficulty: "Intermediate",
            skills: {
                core: ["Agile", "Scrum", "Risk Management", "Leadership"],
                tools: ["Jira", "Asana", "Trello", "MS Project"],
                optional: ["PMP", "CAPM", "PRINCE2"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "Project Management Fundamentals",
                    description: "Understand project lifecycle, stakeholder management, and PM fundamentals.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/9KkB3vYT8HQ"
                },
                {
                    step: 2,
                    title: "Project Planning & Scheduling",
                    description: "Create project plans, timelines, and work breakdown structures (WBS).",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/i4vY6bCQZMQ"
                },
                {
                    step: 3,
                    title: "Agile & Scrum Methodologies",
                    description: "Master Agile practices, sprint planning, and iterative project delivery.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/ac7JfnqngNw"
                },
                {
                    step: 4,
                    title: "Risk Management",
                    description: "Identify, analyze, and mitigate project risks to ensure successful delivery.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/Zp2VJ7dQ1qM"
                },
                {
                    step: 5,
                    title: "Team Leadership & Communication",
                    description: "Lead cross-functional teams and communicate effectively with stakeholders.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/JqoZoh5f1Ec"
                },
                {
                    step: 6,
                    title: "Project Management Tools",
                    description: "Master tools like Jira, Trello, Asana, and MS Project for efficient management.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/B22F2gP4cT4"
                }
            ]
        },
        {
            id: "business-analysis",
            name: "Business Analysis",
            category: "non-technical",
            description: "Bridge business needs with technology solutions through analysis, modeling, and requirements.",
            difficulty: "Intermediate",
            skills: {
                core: ["Requirements", "Process Modeling", "SQL", "Excel"],
                tools: ["Tableau", "Power BI", "Visio", "Jira"],
                optional: ["BA II Plus", "Python", "R"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "Business Analysis Foundations",
                    description: "Understand the role of a business analyst and core business analysis concepts.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/gNP9HXCU2gM"
                },
                {
                    step: 2,
                    title: "Requirements Gathering",
                    description: "Learn techniques for eliciting and documenting business requirements.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/SxgY3z7Q4xA"
                },
                {
                    step: 3,
                    title: "Process Modeling",
                    description: "Create process flows, BPMN diagrams, and analyze business processes.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/3Y1vZ5qX9wM"
                },
                {
                    step: 4,
                    title: "Data Analysis for Business",
                    description: "Analyze business data, create reports, and derive actionable insights.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/x_sHnFV-bqA"
                },
                {
                    step: 5,
                    title: "Solution Evaluation",
                    description: "Evaluate proposed solutions, conduct gap analysis, and recommend improvements.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/9LvIkK4zQ8w"
                },
                {
                    step: 6,
                    title: "Business Analysis Tools",
                    description: "Master tools like Excel, SQL, Tableau, and requirements management software.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/L6C2Mvnv2lM"
                }
            ]
        },
        // Additional Technical Courses
        {
            id: "devops-engineering",
            name: "DevOps Engineering",
            category: "technical",
            description: "Master CI/CD pipelines, automation, and infrastructure to accelerate software delivery.",
            difficulty: "Intermediate",
            skills: {
                core: ["Linux", "Docker", "Kubernetes", "CI/CD"],
                tools: ["Jenkins", "GitLab", "Terraform", "Ansible"],
                optional: ["AWS", "Azure", "Prometheus"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "Linux Fundamentals",
                    description: "Master Linux command line, file system, permissions, and shell scripting.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/v_1zB2O0jRSk"
                },
                {
                    step: 2,
                    title: "Containerization with Docker",
                    description: "Learn Docker basics, creating Dockerfiles, and managing containers.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/fqMOX6JJhGo"
                },
                {
                    step: 3,
                    title: "Container Orchestration with Kubernetes",
                    description: "Master Kubernetes clusters, deployments, services, and scaling.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/H0cKbZeqfbM"
                },
                {
                    step: 4,
                    title: "CI/CD Pipelines",
                    description: "Build continuous integration and deployment pipelines using Jenkins or GitLab CI.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/nyK-MI一有"
                },
                {
                    step: 5,
                    title: "Infrastructure as Code",
                    description: "Automate infrastructure with Terraform and configuration management with Ansible.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/V53ch5C8DcI"
                },
                {
                    step: 6,
                    title: "Monitoring & Logging",
                    description: "Set up Prometheus, Grafana, and ELK stack for observability.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/bM4M8X6XvxM"
                }
            ]
        },
        {
            id: "blockchain-development",
            name: "Blockchain Development",
            category: "technical",
            description: "Build decentralized applications and smart contracts using blockchain technology.",
            difficulty: "Advanced",
            skills: {
                core: ["Solidity", "Ethereum", "Smart Contracts", "Web3"],
                tools: ["Hardhat", "MetaMask", "OpenZeppelin"],
                optional: ["Solana", "NFTs", "DeFi"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "Blockchain Fundamentals",
                    description: "Understand blockchain architecture, consensus mechanisms, and cryptography basics.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/Ssooge5L5BU"
                },
                {
                    step: 2,
                    title: "Ethereum & Smart Contracts",
                    description: "Learn Ethereum virtual machine and write your first smart contracts.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/gyMwXuJrbJQ"
                },
                {
                    step: 3,
                    title: "Solidity Programming",
                    description: "Master Solidity for writing secure and efficient smart contracts.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/ipwxYa-F1gY"
                },
                {
                    step: 4,
                    title: "Testing & Deployment",
                    description: "Test smart contracts and deploy to testnet and mainnet.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/62m4EbjzLJZ4"
                },
                {
                    step: 5,
                    title: "Building DApps",
                    description: "Create decentralized applications with React and Web3.js.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/3-XmLqJ1cIY"
                },
                {
                    step: 6,
                    title: "NFTs & DeFi",
                    description: "Explore NFT standards and decentralized finance protocols.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/neM4kqLZ6-s"
                }
            ]
        },
        {
            id: "qa-engineering",
            name: "QA Engineering",
            category: "technical",
            description: "Learn software testing methodologies and automation to ensure software quality.",
            difficulty: "Beginner",
            skills: {
                core: ["Manual Testing", "Test Cases", "Bug Tracking", "Selenium"],
                tools: ["Jira", "Postman", "Cypress", "Jest"],
                optional: ["Performance Testing", "Security Testing", "API Testing"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "Software Testing Fundamentals",
                    description: "Learn testing concepts, methodologies, and the QA lifecycle.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/u6Qaf3yWgA"
                },
                {
                    step: 2,
                    title: "Writing Test Cases",
                    description: "Create effective test cases, test plans, and test scenarios.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/tC0和技术"
                },
                {
                    step: 3,
                    title: "Bug Reporting & Tracking",
                    description: "Master bug lifecycle, reporting, and using Jira for tracking.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/Z8t17pLSW0E"
                },
                {
                    step: 4,
                    title: "Introduction to Automation Testing",
                    description: "Learn automation basics and set up your first test script.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/hKx1qJ8gMSk"
                },
                {
                    step: 5,
                    title: "Selenium WebDriver",
                    description: "Build automated test scripts using Selenium with Java/Python.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/j8B7r5ZG8nM"
                },
                {
                    step: 6,
                    title: "API Testing",
                    description: "Test REST APIs using Postman and automate API tests.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/qbN2A3rQr1A"
                }
            ]
        },
        {
            id: "game-development",
            name: "Game Development",
            category: "technical",
            description: "Create engaging games using Unity or Unreal Engine and game design principles.",
            difficulty: "Intermediate",
            skills: {
                core: ["Unity/C#", "Game Design", "3D Math", "Physics"],
                tools: ["Blender", "Adobe Substance", "Git"],
                optional: ["Unreal Engine", "VR Development", "Multiplayer"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "Game Development Basics",
                    description: "Understand game loops, entities, and development workflow.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/9bKpV02d8vQ"
                },
                {
                    step: 2,
                    title: "Unity Fundamentals",
                    description: "Learn Unity interface, GameObjects, and component system.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/IlKaB1MktLA"
                },
                {
                    step: 3,
                    title: "C# Programming for Games",
                    description: "Master C# scripting for game mechanics and interactions.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/pTR2m0xm19U"
                },
                {
                    step: 4,
                    title: "Game Physics & AI",
                    description: "Implement game physics and basic AI behaviors.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/1ph6qf0aR9w"
                },
                {
                    step: 5,
                    title: "Level Design",
                    description: "Create engaging game levels, environments, and user experiences.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/dRnM0、技术"
                },
                {
                    step: 6,
                    title: "Publishing Your Game",
                    description: "Build, test, and publish your game to platforms like Steam.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/GerLvhw1"
                }
            ]
        },
        // Additional Non-Technical Courses
        {
            id: "data-analytics",
            name: "Data Analytics",
            category: "non-technical",
            description: "Transform raw data into actionable insights using analytics tools and techniques.",
            difficulty: "Beginner",
            skills: {
                core: ["Excel", "SQL", "Data Visualization", "Statistics"],
                tools: ["Tableau", "Power BI", "Python"],
                optional: ["R Programming", "Google Analytics", "Looker"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "Excel for Data Analysis",
                    description: "Master pivot tables, VLOOKUP, and data analysis functions.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/OlsG1jQ2pPs"
                },
                {
                    step: 2,
                    title: "SQL Fundamentals",
                    description: "Learn database queries, joins, and data manipulation.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/HXV3zeQKqTY"
                },
                {
                    step: 3,
                    title: "Data Cleaning & Preparation",
                    description: "Techniques for cleaning and preparing data for analysis.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/0HN_k97DjRk"
                },
                {
                    step: 4,
                    title: "Data Visualization with Tableau",
                    description: "Create interactive dashboards and visualizations.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/JL_grSUnn3A"
                },
                {
                    step: 5,
                    title: "Statistical Analysis",
                    description: "Apply statistical methods to derive insights from data.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/vspoN2tDGQQ"
                },
                {
                    step: 6,
                    title: "Power BI & Storytelling",
                    description: "Build reports and tell compelling data stories.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/i7JWNmNmqeM"
                }
            ]
        },
        {
            id: "social-media-management",
            name: "Social Media Management",
            category: "non-technical",
            description: "Build and manage social media presence for brands and businesses.",
            difficulty: "Beginner",
            skills: {
                core: ["Content Creation", "Social Strategy", "Community Management", "Analytics"],
                tools: ["Hootsuite", "Buffer", "Canva", "Later"],
                optional: ["Video Editing", "Influencer Marketing", "TikTok"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "Social Media Fundamentals",
                    description: "Understand different platforms and their audiences.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/sVTy_w8Ufjw"
                },
                {
                    step: 2,
                    title: "Content Strategy",
                    description: "Create a content calendar and posting strategy.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/EgDmWUf2uFw"
                },
                {
                    step: 3,
                    title: "Content Creation",
                    description: "Learn to create engaging posts, images, and captions.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/K4TOrB7at0Y"
                },
                {
                    step: 4,
                    title: "Social Media Tools",
                    description: "Master scheduling tools and analytics platforms.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/6w2n 技术"
                },
                {
                    step: 5,
                    title: "Community Engagement",
                    description: "Build and engage with your online community.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/8r7技術"
                },
                {
                    step: 6,
                    title: "Analytics & Optimization",
                    description: "Track performance and optimize your strategy.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/uhR4Fs8qR8g"
                }
            ]
        },
        {
            id: "financial-analysis",
            name: "Financial Analysis",
            category: "non-technical",
            description: "Analyze financial data to help businesses make informed decisions.",
            difficulty: "Intermediate",
            skills: {
                core: ["Financial Modeling", "Excel", "Valuation", "Budgeting"],
                tools: ["Bloomberg Terminal", "FactSet", "SQL"],
                optional: ["Python for Finance", "Tableau", "ERP Systems"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "Finance Fundamentals",
                    description: "Understand financial statements, ratios, and concepts.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/A3uoV3技術"
                },
                {
                    step: 2,
                    title: "Excel for Finance",
                    description: "Master Excel functions and formulas for financial analysis.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/OlsG1jQ2pPs"
                },
                {
                    step: 3,
                    title: "Financial Modeling",
                    description: "Build three-statement models and DCF analysis.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/M6技術"
                },
                {
                    step: 4,
                    title: "Valuation Techniques",
                    description: "Learn company valuation methods and multiples.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/FC@技術"
                },
                {
                    step: 5,
                    title: "Budgeting & Forecasting",
                    description: "Create budgets and financial forecasts.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/i4vY6bCQZMQ"
                },
                {
                    step: 6,
                    title: "Presentation & Reporting",
                    description: "Present findings effectively to stakeholders.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/Zp2VJ7dQ1qM"
                }
            ]
        },
        {
            id: "human-resources",
            name: "Human Resources",
            category: "non-technical",
            description: "Manage recruitment, employee relations, and HR operations effectively.",
            difficulty: "Intermediate",
            skills: {
                core: ["Recruitment", "Employee Relations", "HR Policies", "Payroll"],
                tools: ["Workday", "BambooHR", "LinkedIn Recruiter"],
                optional: ["HR Analytics", "Change Management", "Labor Law"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "HR Fundamentals",
                    description: "Understand HR roles, responsibilities, and functions.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/9KkB3vYT8HQ"
                },
                {
                    step: 2,
                    title: "Recruitment & Selection",
                    description: "Master hiring流程, interviewing, and onboarding.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/lI2Phg2S2vA"
                },
                {
                    step: 3,
                    title: "Employee Relations",
                    description: "Build positive workplace relationships and handle conflicts.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/JqoZoh5f1Ec"
                },
                {
                    step: 4,
                    title: "Compensation & Benefits",
                    description: "Design and manage employee compensation packages.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/3mJqQv8jYHw"
                },
                {
                    step: 5,
                    title: "HR Policies & Compliance",
                    description: "Create policies and ensure legal compliance.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/Zp2VJ7dQ1qM"
                },
                {
                    step: 6,
                    title: "HR Technology",
                    description: "Use HRIS systems and data-driven HR practices.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/B22F2gP4cT4"
                }
            ]
        },
        {
            id: "video-editing",
            name: "Video Editing",
            category: "non-technical",
            description: "Create professional videos for YouTube, social media, and marketing.",
            difficulty: "Beginner",
            skills: {
                core: ["Premiere Pro", "Color Grading", "Audio Editing", "Motion Graphics"],
                tools: ["After Effects", "DaVinci Resolve", "Audition"],
                optional: ["3D Animation", "Visual Effects", "Color Theory"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "Video Editing Basics",
                    description: "Learn editing terminology, timeline, and workflow.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/3、技術"
                },
                {
                    step: 2,
                    title: "Adobe Premiere Pro",
                    description: "Master Premiere Pro interface and essential tools.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/w2L技術"
                },
                {
                    step: 3,
                    title: "Cutting & Transitions",
                    description: "Learn professional cutting techniques and transitions.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/4-技術"
                },
                {
                    step: 4,
                    title: "Color Grading",
                    description: "Master color correction and grading for cinematic look.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/5-技術"
                },
                {
                    step: 5,
                    title: "Audio & Sound Design",
                    description: "Edit audio, add music, and create sound effects.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/6-技術"
                },
                {
                    step: 6,
                    title: "Motion Graphics Basics",
                    description: "Add text animations and motion graphics.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/7-技術"
                }
            ]
        },
        {
            id: "consulting",
            name: "Management Consulting",
            category: "non-technical",
            description: "Help organizations solve business challenges and improve performance.",
            difficulty: "Advanced",
            skills: {
                core: ["Problem Solving", "Case Analysis", "Presentation", "Project Management"],
                tools: ["PowerPoint", "Excel", "Miro", "Notion"],
                optional: ["Market Research", "Six Sigma", "Agile"]
            },
            roadmap: [
                {
                    step: 1,
                    title: "Consulting Fundamentals",
                    description: "Understand consulting industry and methodologies.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/9KkB3vYT8HQ"
                },
                {
                    step: 2,
                    title: "Problem-Solving Frameworks",
                    description: "Learn McKinsey, BCG, and Bain problem-solving methods.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/3mJqQv8jYHw"
                },
                {
                    step: 3,
                    title: "Case Interview Preparation",
                    description: "Practice business cases and quantitative problems.",
                    duration: "3 weeks",
                    video: "https://www.youtube.com/embed/2KxK3LkT1Lg"
                },
                {
                    step: 4,
                    title: "Market Analysis",
                    description: "Conduct market research and competitive analysis.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/SxgY3z7Q4xA"
                },
                {
                    step: 5,
                    title: "Slide Decks & Presentations",
                    description: "Create compelling consulting-quality presentations.",
                    duration: "2 weeks",
                    video: "https://www.youtube.com/embed/Zp2VJ7dQ1qM"
                },
                {
                    step: 6,
                    title: "Client Communication",
                    description: "Master stakeholder management and communication.",
                    duration: "1 week",
                    video: "https://www.youtube.com/embed/JqoZoh5f1Ec"
                }
            ]
        }
    ]
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const difficultyFilter = document.getElementById('difficultyFilter');
const filterPills = document.querySelectorAll('.filter-pill');
const coursesGrid = document.getElementById('coursesGrid');
const noResults = document.getElementById('noResults');
const categoryCards = document.querySelectorAll('.category-card');
const themeToggle = document.getElementById('themeToggle');
const coursesSection = document.getElementById('courses');
const filtersSection = document.getElementById('filters');
const roadmapSection = document.getElementById('roadmap');
const backToCourses = document.getElementById('backToCourses');
const timeline = document.getElementById('timeline');
const roadmapTitle = document.getElementById('roadmapTitle');
const roadmapDifficulty = document.getElementById('roadmapDifficulty');
const progressFill = document.getElementById('progressFill');
const progressPercent = document.getElementById('progressPercent');
const skillsTreeSection = document.getElementById('skillsTreeSection');

// State
let currentCategory = 'all';
let currentDifficulty = 'all';
let searchQuery = '';
let currentCourseId = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderCourses();
    setupEventListeners();
});

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('pathfinder-theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('pathfinder-theme', newTheme);
});

// Event Listeners
function setupEventListeners() {
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            renderCourses();
        });
    }

    if (difficultyFilter) {
        difficultyFilter.addEventListener('change', (e) => {
            currentDifficulty = e.target.value;
            renderCourses();
        });
    }

    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentCategory = pill.dataset.filter;
            renderCourses();
        });
    });

    categoryCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const category = card.dataset.category;
            window.location.href = category + '.html';
        });
    });

    if (backToCourses) {
        backToCourses.addEventListener('click', () => {
            roadmapSection.style.display = 'none';
            if (skillsTreeSection) skillsTreeSection.style.display = 'none';
            coursesSection.style.display = 'block';
            if (filtersSection) filtersSection.style.display = 'block';
            currentCourseId = null;
        });
    }
}

// Render Courses
function renderCourses() {
    if (!coursesGrid) return;

    const filteredCourses = courseData.courses.filter(course => {
        const matchesCategory = currentCategory === 'all' || course.category === currentCategory;
        const matchesDifficulty = currentDifficulty === 'all' || course.difficulty === currentDifficulty;
        const matchesSearch = course.name.toLowerCase().includes(searchQuery) || 
                             course.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesDifficulty && matchesSearch;
    });

    if (filteredCourses.length === 0) {
        coursesGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    
    coursesGrid.innerHTML = filteredCourses.map((course, index) => `
        <div class="course-card" data-course-id="${course.id}" style="animation-delay: ${index * 0.1}s">
            <div class="course-image">
                <div class="course-image-placeholder">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                </div>
                <span class="difficulty-badge ${course.difficulty}">${course.difficulty}</span>
            </div>
            <div class="course-content">
                <h3 class="course-title">${course.name}</h3>
                <p class="course-description">${course.description}</p>
                <button class="view-roadmap-btn" onclick="viewRoadmap('${course.id}')">
                    View Roadmap
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
            </div>
        </div>
    `).join('');

    setTimeout(() => {
        document.querySelectorAll('.course-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100);
        });
    }, 100);
}

// View Roadmap
window.viewRoadmap = function(courseId) {
    const course = courseData.courses.find(c => c.id === courseId);
    if (!course) return;

    currentCourseId = courseId;
    
    roadmapTitle.textContent = course.name;
    roadmapDifficulty.textContent = course.difficulty;
    roadmapDifficulty.className = `roadmap-difficulty ${course.difficulty}`;
    
    renderSkillsTree(course);
    renderTimeline(course);
    updateProgress(courseId, course.roadmap.length);
    
    coursesSection.style.display = 'none';
    if (filtersSection) filtersSection.style.display = 'none';
    roadmapSection.style.display = 'block';
    if (skillsTreeSection) {
        skillsTreeSection.style.display = 'block';
        skillsTreeSection.scrollIntoView({ behavior: 'smooth' });
    }
};

// Render Skills Tree
function renderSkillsTree(course) {
    if (!skillsTreeSection) return;
    
    const skills = course.skills;
    
    skillsTreeSection.innerHTML = `
        <div class="skills-tree-header">
            <h3 class="skills-tree-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                Skills Required for ${course.name}
            </h3>
            <p class="skills-tree-subtitle">Master these skills to become proficient in this career path</p>
        </div>
        <div class="skills-tree">
            <div class="skill-node">
                <div class="skill-level">
                    <span class="level-label">Core Skills</span>
                    <div class="skill-badges">
                        ${skills.core.map(s => `<span class="skill-badge core">${s}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="skill-node">
                <div class="skill-level">
                    <span class="level-label">Tools & Technologies</span>
                    <div class="skill-badges">
                        ${skills.tools.map(s => `<span class="skill-badge tools">${s}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="skill-node">
                <div class="skill-level">
                    <span class="level-label">Optional / Advanced</span>
                    <div class="skill-badges">
                        ${skills.optional.map(s => `<span class="skill-badge optional">${s}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render Timeline
function renderTimeline(course) {
    if (!timeline) return;
    
    timeline.innerHTML = course.roadmap.map((step, index) => {
        const isCompleted = isStepCompleted(course.id, step.step);
        return `
            <div class="timeline-item ${isCompleted ? 'completed' : ''}" data-step="${step.step}">
                <div class="timeline-node">${step.step}</div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <h3 class="timeline-step-title">${step.title}</h3>
                        <span class="timeline-duration">${step.duration}</span>
                    </div>
                    <p class="timeline-description">${step.description}</p>
                    <div class="timeline-video">
                        <iframe 
                            src="${step.video}" 
                            title="${step.title}"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <label class="timeline-checkbox">
                        <input 
                            type="checkbox" 
                            class="checkbox-input" 
                            ${isCompleted ? 'checked' : ''}
                            onchange="toggleStep('${course.id}', ${step.step})"
                        >
                        <span class="checkbox-custom">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </span>
                        <span class="checkbox-label">${isCompleted ? 'Completed' : 'Mark as Complete'}</span>
                    </label>
                </div>
            </div>
        `;
    }).join('');

    setTimeout(() => {
        document.querySelectorAll('.timeline-item').forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 150);
        });
    }, 100);
}

// Toggle Step Completion
window.toggleStep = function(courseId, stepNumber) {
    const key = `pathfinder_progress_${courseId}_${stepNumber}`;
    const isChecked = localStorage.getItem(key) === 'true';
    
    if (isChecked) {
        localStorage.removeItem(key);
    } else {
        localStorage.setItem(key, 'true');
    }
    
    const timelineItem = document.querySelector(`.timeline-item[data-step="${stepNumber}"]`);
    const checkbox = timelineItem.querySelector('.checkbox-input');
    const label = timelineItem.querySelector('.checkbox-label');
    
    timelineItem.classList.toggle('completed', checkbox.checked);
    label.textContent = checkbox.checked ? 'Completed' : 'Mark as Complete';
    
    const course = courseData.courses.find(c => c.id === courseId);
    updateProgress(courseId, course.roadmap.length);
};

function isStepCompleted(courseId, stepNumber) {
    return localStorage.getItem(`pathfinder_progress_${courseId}_${stepNumber}`) === 'true';
}

function updateProgress(courseId, totalSteps) {
    let completedSteps = 0;
    for (let i = 1; i <= totalSteps; i++) {
        if (isStepCompleted(courseId, i)) {
            completedSteps++;
        }
    }
    
    const percentage = Math.round((completedSteps / totalSteps) * 100);
    if (progressFill) progressFill.style.width = `${percentage}%`;
    if (progressPercent) progressPercent.textContent = `${percentage}%`;
}