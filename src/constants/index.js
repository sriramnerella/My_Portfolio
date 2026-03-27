const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Education", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const education = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    institution: "Indian Institute of Information Technology Sricity",
    location: "Andhra Pradesh",
    cgpa: "9.2",
    level: "Undergraduate",
    years: "2023 - Present",
  },
  {
    id: 2,
    degree: "Intermediate",
    institution: "Srichaitanya Junior College",
    location: "Vijayawada",
    marks: "984/1000",
    level: "Higher Secondary",
    years: "2021 - 2023",
  },
  {
    id: 3,
    degree: "Secondary School Certificate",
    institution: "Montessori English Medium School",
    location: "Guntur, Andhra Pradesh",
    cgpa: "10/10",
    level: "Secondary",
  },
];

const techStack = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "Java", "C"],
  },
  {
    category: "Frontend",
    items: ["React.js", "HTML", "CSS"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB", "SQL"],
  },
  {
    category: "Data Science",
    items: ["Python", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/sriramnerella",
  },


  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/venkata-sri-ram-nerella-67428628b",
  },
];



export {
  navLinks,
  navIcons,
  dockApps,
  education,
  techStack,
  socials,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Nutri Connect",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "NutriConnect Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Nutri Connect is a full-stack web application built to connect clients with dieticians through a clean, modern platform.",
            "It includes a two-way chat interface (client ↔ dietician), allowing real-time style conversations with proper message storage and retrieval.",
            "The platform also features a dynamic blog module, where posts can be created and viewed, helping dieticians share useful nutrition content.",
            "Built using the MERN stack (MongoDB, Express, React, Node.js) with strong focus on scalable backend structure and clean UI experience.",
          ],
        },
        {
          id: 2,
          name: "nutri-connect.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://nutri-connect-frontend.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "nutriconnect.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/NutriConnect.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "BTP: Image Copy Detection",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Image Copy Detection Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Image Copy Detection is a research-focused BTP project that identifies visually similar or duplicated images, even when they are resized, cropped, compressed, or slightly edited.",
            "Instead of relying only on file-level matching, the system uses feature-based similarity to detect near-duplicate content more accurately.",
            "The project focuses on building strong fundamentals in Computer Vision, similarity search, and constraint-based reasoning for reliable matching.",
            "Designed to support real-world use cases like plagiarism detection, content moderation, and duplicate filtering in large image datasets.",
          ],
        },
        {
          id: 2,
          name: "btp-image-copy-detection.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://google.com",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "image-copy-detection.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "IoT Based Smart Jacket for Real-Time Health Monitoring",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Smart Jacket Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "IoT Based Smart Jacket is a wearable health monitoring system designed to track a person's vital signals in real time.",
            "Instead of manual checkups, the jacket continuously monitors health parameters and sends the data for live viewing and analysis.",
            "The system helps in early detection of abnormalities by providing instant updates and tracking trends over time.",
            "Built using IoT sensors + microcontroller integration with a focus on real-time monitoring, safety, and practical wearable design.",
          ],
        },
        {
          id: 2,
          name: "smart-jacket-iot.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/saketh169/IOT_Based_Smart_Jacket",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "smart-jacket.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/IoT_Smart_Jacket.jpeg",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/Sriram.jpeg",
      description: [
        "Hey! I'm Sriram , a B.Tech student at IIIT Sricity who loves building real-world web apps and exploring AI problem solving.",
        "I work mostly with the MERN stack (MongoDB, Express, React, Node.js) and I enjoy building projects that feel smooth, fast, and practical.",
        "Currently, I'm also working on a BTP project in Computer Vision — Image Copy Detection — where I'm learning how similarity matching works beyond simple duplicates.",
        "I care about clean UI, structured backend design, and writing code that's easy to maintain and scale.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };