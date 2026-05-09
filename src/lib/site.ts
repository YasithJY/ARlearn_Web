import compLife from "@/assets/comp-life.jpg";
import compMeasure from "@/assets/comp-measure.jpg";
import compPhysics from "@/assets/comp-physics.jpg";
import compNumbers from "@/assets/comp-numbers.jpg";

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
};

export const COMPONENTS: ComponentItem[] = [
  {
    slug: "life-science",
    title: "AR Life Science Storybook",
    short: "Bringing biology to life through immersive narrative AR for plant cycles, food chains and ecosystems.",
    topics: ["Plant life cycles", "Food chains", "Ecosystems", "Biological processes"],
    tech: ["Unity", "AR Foundation", "Vuforia", "Blender"],
    author: "Yasith Jayasundara",
    image: compLife,
    accent: "from-emerald-400/30 to-lime-400/10",
  },
  {
    slug: "measurement",
    title: "AR Measurement Storybook",
    short: "Hands-on AR experiences for length, mass, capacity, time and data interpretation.",
    topics: ["Length", "Mass", "Capacity", "Time", "Data interpretation"],
    tech: ["Unity", "ARCore", "Firebase", "Figma"],
    author: "Bandara M.R.J.K",
    image: compMeasure,
    accent: "from-amber-400/30 to-orange-400/10",
  },
  {
    slug: "physical-science",
    title: "AR Physical Science Storybook",
    short: "Exploring forces, energy, simple machines and light through interactive AR narratives.",
    topics: ["Forces", "Energy", "Simple machines", "Light and shadow"],
    tech: ["Unity", "AR Foundation", "Shader Graph", "C#"],
    author: "Ilayperuma M.I",
    image: compPhysics,
    accent: "from-yellow-400/30 to-amber-500/10",
  },
  {
    slug: "number-concepts",
    title: "AR Number Concepts Storybook",
    short: "Visualising fractions, decimals, place value and operations through tangible AR play.",
    topics: ["Fractions", "Decimals", "Place value", "Basic operations"],
    tech: ["Unity", "Vuforia", "TensorFlow Lite", "Adobe XD"],
    author: "Mendis B.M.U.I",
    image: compNumbers,
    accent: "from-teal-400/30 to-cyan-400/10",
  },
];

export const TEAM = [
  {
    name: "Yasith Jayasundara",
    role: "Project Lead · AR Engineer",
    component: "AR Life Science Storybook",
    skills: ["Unity", "AR Foundation", "Research Design", "UX"],
    initials: "YJ",
  },
  {
    name: "Bandara M.R.J.K",
    role: "AR Developer · UX Researcher",
    component: "AR Measurement Storybook",
    skills: ["ARCore", "Firebase", "Figma", "User Testing"],
    initials: "BR",
  },
  {
    name: "Ilayperuma M.I",
    role: "Interaction Designer · Developer",
    component: "AR Physical Science Storybook",
    skills: ["Unity", "Shader Graph", "Motion", "C#"],
    initials: "IM",
  },
  {
    name: "Mendis B.M.U.I",
    role: "AR Engineer · Data Analyst",
    component: "AR Number Concepts Storybook",
    skills: ["Vuforia", "TFLite", "Analytics", "Visual Design"],
    initials: "MU",
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
