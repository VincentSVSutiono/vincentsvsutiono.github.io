// Personal projects content — drives Section 6 (Projects).
// Add/remove entries freely; the grid and modal adapt dynamically.

export interface Project {
  id: string; // unique, used for React keys — e.g. "proj-1"
  name: string; // project title
  subtitle: string; // concise category / functional summary
  thumbnail: string; // main card preview image path
  dateRange: string; // e.g. "May 2026 - Now (Ongoing)" or "2024"
  role: string; // e.g. "Full-Stack Developer"
  type: string; // e.g. "Individual Project" or "University Group Project"
  description: string; // full narrative breakdown (paragraphs separated by \n\n)
  tags: string[]; // tech stack chips
  images: string[]; // gallery screenshots / diagrams for the modal
  githubUrl?: string; // optional repository link
  liveUrl?: string; // optional live demo link
  docsUrl?: string; // optional documentation / PDF link
}

// Ordered oldest-first (chronological).
// The UI component automatically reverses this array so that the newest entry (at the end of the array) renders as the first card in the grid.
export const projects: Project[] = [
  {
    id: "proj-1",
    name: "CLIP (Carry List Item Partner)",
    subtitle: "RFID & Bluetooth Pervasive Item Tracking Web Interface",
    thumbnail: "./projects/CLIP/images/thumbnail.webp",
    dateRange: "2024",
    role: "Front-end Developer",
    type: "University Group Project",
    description: `CLIP is an embedded systems and mobile pervasive project designed to help users keep track of their belongings. The system uses RFID and Bluetooth to connect physical items with a web application, allowing users to organize and monitor them more easily.

In this project, I am responsible for developing the frontend web interface using React and Chakra UI to create a user-friendly experience. I also collaborate with the design team to translate UI/UX designs into functional components.`,
    tags: ["React.js", "Chakra UI", "Pervasive Systems"],
    images: ["./projects/CLIP/images/1.webp", "./projects/CLIP/images/2.webp"],
    githubUrl: "https://github.com/CLIP-Carry-List-Item-Partner",
    liveUrl: undefined,
    docsUrl: undefined,
  },
  {
    id: "proj-2",
    name: "Thyroid Cancer Tumor Segmentation",
    subtitle:
      "Deep Learning Pathology Image Segmentation for Oncology Diagnosis",
    thumbnail: "./projects/tumor_segmentation/images/thumbnail.webp",
    dateRange: "August 2025 - January 2026",
    role: "AI Engineer",
    type: "Bachelor Thesis Final Project",
    description: `Diagnosing certain aggressive variants of thyroid cancer involves several steps, including identifying tumor regions and measuring specific characteristics within them. Much of this process is performed manually by pathologists, making it time-consuming and prone to differences in interpretation. This project focused on automating the first stage of that workflow by developing a deep learning model that can accurately separate tumor tissue from healthy tissue in digital pathology images. The model was trained using expert-annotated pathology slides, allowing it to learn the visual differences between tumor and non-tumor tissue. Beyond the model itself, the project established a complete workflow for processing pathology images and serves as a building block for future research into a more objective and automated thyroid cancer assessment.

Working on this project also gave me experience in tackling a problem outside of my usual technical field. Collaborating with medical experts and learning about their workflow showed me that building effective AI solutions requires understanding of the real-world problem, not just the technology behind it. Breaking down medical process into smaller steps helped me design a solution that could contribute to a larger system, while reinforcing the importance of working closely with domain experts when developing software for specialized fields.`,
    tags: ["Python", "Deep Learning", "Computer Vision", "Digital Pathology"],
    images: ["./projects/tumor_segmentation/images/1.webp"],
    githubUrl: undefined,
    liveUrl: undefined,
    docsUrl: undefined,
  },
  {
    id: "proj-3",
    name: "AWBA (AC Water Bucket Alert)",
    subtitle: "Arduino Ultrasonic Condensation Level Monitoring & Alert System",
    thumbnail: "./projects/AWBA/images/thumbnail.webp",
    dateRange: "May 2026",
    role: "Embedded Systems Developer",
    type: "Individual Project",
    description: `My room's air conditioner drains condensation into a bucket placed on top of a cupboard, which needs to be emptied regularly to prevent it from overflowing. Because the bucket is out of sight, it was easy to forget about until it became heavy and difficult to move without spilling. As my first hands-on electronics project, I wanted to build a simple solution that could monitor the bucket and provide an early warning before it became a problem.

I developed an Arduino-based water level monitoring system that uses an ultrasonic sensor to continuously track the bucket's fill level and provide visual and audible alerts as it approaches capacity. Rather than relying on a single threshold, the system uses progressive warning stages and built-in cooldown periods to reduce unnecessary alarms while still drawing attention when action is needed. This project introduced me to embedded systems, sensors, and microcontroller programming, while teaching me the importance of designing solutions for problems in everyday situations.`,
    tags: [
      "Arduino",
      "C++",
      "Ultrasonic Sensor",
      "Hardware",
      "Embedded Systems",
    ],
    images: [
      "./projects/AWBA/images/1.webp",
      "./projects/AWBA/images/2.webp",
      "./projects/AWBA/images/3.webp",
      "./projects/AWBA/images/4.webp",
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    docsUrl: "./projects/AWBA/AWBA.pdf",
  },
  {
    id: "proj-4",
    name: "H&S Rajawali Motor Website",
    subtitle:
      "Digital Storefront & WhatsApp Inquiry Catalog for Automotive Accessories",
    thumbnail: "./projects/hs_motor/images/thumbnail.webp",
    dateRange: "May 2026 - August 2026",
    role: "Full-Stack Developer",
    type: "Individual Project",
    description: `This project aimed to help my parents' local car accessories shop establish a digital presence by developing an online product catalog website. The shop had traditionally relied on walk-in customers and word of mouth, which limited its ability to reach new customers. The website was developed to make the business more accessible online, improve customer convenience, and provide a foundation for reaching a wider audience.

The website was developed using the PERN stack and includes a public product catalog with search and category filtering, an admin panel that allows the owner to manage inventory independently, and a WhatsApp-integrated inquiry system that generates pre-filled messages based on the customer's selected product, brand, and car model.

The completed website serves as a digital storefront where customers can browse available products and access product information online. By making the catalog accessible at any time and streamlining inquiries through WhatsApp, the project provides customers with a more convenient way to find products and contact the shop, while helping the business establish an online presence beyond its traditional reliance on foot traffic.
`,
    tags: [
      "PostgreSQL",
      "Express.js",
      "React.js",
      "Node.js",
      "Prisma",
      "Tanstack React Query",
      "Tailwind CSS",
      "Neon DB",
    ],
    images: [
      "./projects/hs_motor/images/1.webp",
      "./projects/hs_motor/images/2.webp",
      "./projects/hs_motor/images/3.webp",
      "./projects/hs_motor/images/4.webp",
    ],
    githubUrl: undefined,
    liveUrl: "https://hs-motor.vercel.app",
    docsUrl: undefined,
  },
];
