import uviduImg from "@/assets/Uvidu.jpeg";
import yasithImg from "@/assets/Yasith.png";
import mithulaImg from "@/assets/Mithula.jpeg";
import janithImg from "@/assets/Janith.jpeg";

import yasithUiImg from "@/assets/Yasith_UI.png";
import janithUiImg from "@/assets/Janith_UI.jpeg";
import mithulaUiImg from "@/assets/Mithula_UI.jpeg";
import uvinduUiImg from "@/assets/Uvidu_UI.jpeg";
import supervisorImg from "@/assets/supervisor-DGfLxHSu.jpg";
import coSupervisorImg from "@/assets/co_supervisor-W2da3Fhl.png";
import pdfLife from "@/assets/R26-IM-003_IT22136374_JAYASUNDARA_R.K.M.J.Y.pdf";
import pdfMeasure from "@/assets/R26-IM-003_IT22100498_BANDARA M.R.J.K.pdf";
import pdfPhysics from "@/assets/R26-IM-003_IT22128072_Ilayperuma_M_I.pdf";
import pdfNumbers from "@/assets/R26-IM-003_IT22177100_Mendis_B.M.U.I.pdf";

export const SITE = {
  projectId: "R26-IM-003",
  title: "Narrative AR for STEAM",
  full: "Evaluating the Impact of Narrative-Based Augmented Reality on Early STEAM Learning Outcomes in Sri Lankan Primary Education",
  github: "https://github.com",
  email: "research@ar-steam.lk",
};

export type ComponentItem = {
  slug: "life-science" | "measurement" | "physical-science" | "number-concepts";
  title: string;
  short: string;
  topics: string[];
  tech: string[];
  author: string;
  image: string;
  accent: string;
  pdf: string;
};

export const COMPONENTS: ComponentItem[] = [
  {
    slug: "life-science",
    title: "AR Life Science Storybook",
    short: "Bringing biology to life through immersive narrative AR for plant cycles, food chains and ecosystems.",
    topics: ["Plant life cycles", "Food chains", "Ecosystems", "Biological processes"],
    tech: ["Unity", "AR Foundation", "Vuforia", "Blender"],
    author: "Yasith Jayasundara",
    image: yasithUiImg,
    accent: "from-emerald-400/30 to-lime-400/10",
    pdf: pdfLife,
  },
  {
    slug: "measurement",
    title: "AR Measurement Storybook",
    short: "Hands-on AR experiences for length, mass, capacity, time and data interpretation.",
    topics: ["Length", "Mass", "Capacity", "Time", "Data interpretation"],
    tech: ["Unity", "ARCore", "Firebase", "Figma"],
    author: "Bandara M.R.J.K",
    image: janithUiImg,
    accent: "from-amber-400/30 to-orange-400/10",
    pdf: pdfMeasure,
  },
  {
    slug: "physical-science",
    title: "AR Physical Science Storybook",
    short: "Exploring forces, energy, simple machines and light through interactive AR narratives.",
    topics: ["Forces", "Energy", "Simple machines", "Light and shadow"],
    tech: ["Unity", "AR Foundation", "Shader Graph", "C#"],
    author: "Ilayperuma M.I",
    image: mithulaUiImg,
    accent: "from-yellow-400/30 to-amber-500/10",
    pdf: pdfPhysics,
  },
  {
    slug: "number-concepts",
    title: "AR Number Concepts Storybook",
    short: "Visualising fractions, decimals, place value and operations through tangible AR play.",
    topics: ["Fractions", "Decimals", "Place value", "Basic operations"],
    tech: ["Unity", "Vuforia", "TensorFlow Lite", "Adobe XD"],
    author: "Uvindu Mendis",
    image: uvinduUiImg,
    accent: "from-teal-400/30 to-cyan-400/10",
    pdf: pdfNumbers,
  },
];

export const SUPERVISORS = [
  {
    name: "Aruna Ishara Gamage",
    role: "Supervisor",
    component: "Research Direction",
    skills: ["Academic Guidance", "Research Design"],
    initials: "AG",
    image: supervisorImg,
  },
  {
    name: "Nushkan Nizmi",
    role: "Co-Supervisor",
    component: "Research Direction",
    skills: ["Academic Guidance", "Methodology"],
    initials: "NN",
    image: coSupervisorImg,
  },
];

export const TEAM = [
  {
    name: "Uvindu Mendis",
    role: "Team Leader",
    component: "AR Number Concepts Storybook",
    skills: ["Vuforia", "TFLite", "Analytics", "Visual Design"],
    initials: "UM",
    image: uviduImg,
  },
  {
    name: "Yasith Jayasundara",
    role: "",
    component: "AR Life Science Storybook",
    skills: ["Unity", "AR Foundation", "Research Design", "UX"],
    initials: "YJ",
    image: yasithImg,
  },
  {
    name: "Janith Bandara",
    role: "",
    component: "AR Measurement Storybook",
    skills: ["ARCore", "Firebase", "Figma", "User Testing"],
    initials: "JB",
    image: janithImg,
  },
  {
    name: "Mithula Ilayperuma",
    role: "",
    component: "AR Physical Science Storybook",
    skills: ["Unity", "Shader Graph", "Motion", "C#"],
    initials: "MI",
    image: mithulaImg,
  },
];

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/components", label: "Components" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
  { to: "/commercialization", label: "Commercialization" },
  { to: "/downloads", label: "Downloads" },
  { to: "/contact", label: "Contact" },
] as const;
