import img1 from "../assets/About.png";
import img2 from "../assets/About_E2E.png";

const commonProcess = {
  tag: "Working Process",
  title: "Our Design Process",
  highlight: "What We Do",
  steps: [
    {
      title: "Research & Analysis",
      text: "Conduct user research, interviews, surveys, and analytics."
    },
    {
      title: "Design & Prototyping",
      text: "Transform wireframes into high-fidelity UI designs."
    },
    {
      title: "Testing & Iteration",
      text: "Conduct usability testing to gather user feedback."
    },
    {
      title: "Prepare for Delivery",
      text: "Track performance using analytics and user feedback."
    }
  ]
};

const services = {
  branding: {
    tagline: "Our Services",
    title: "Branding",
    highlight: "That Builds Strong Identities",
    description: "Full branding solutions including logo, identity & strategy.",
    image: img1,

    overview: [
      "Branding design is the process of creating a unique identity that visually and strategically represents a business.",
      "A strong brand shapes perception and builds trust."
    ],

    approachTitle: "Our Approach to Branding",
    approach: [
      { title: "Discovery & Research", text: "Understanding your business, audience, and competition." },
      { title: "Concept Development", text: "Creating initial branding concepts." },
      { title: "Refinement & Testing", text: "Perfecting visuals and ensuring they resonate." },
      { title: "Final Implementation", text: "Delivering all branding assets." }
    ],

    whatWeOfferTitle: "What We Offer",
    whatWeOffer: [
      {
        heading: "Brand Strategy & Positioning",
        items: ["Brand Discovery", "Brand Voice & Messaging"]
      },
      {
        heading: "Logo & Visual Identity",
        items: ["Logo Design", "Color Palette", "Typography System"]
      },
      {
        heading: "Logo & Visual Identity",
        items: ["Logo Design", "Color Palette", "Typography System"]
      }
    ],

    serviceProcess: commonProcess
  },

  "ui-ux-design": {
    tagline: "Our Services",
    title: "UI/UX Design",
    highlight: "That Users Love",
    description: "User-centric designs focused on usability & aesthetics.",
    image: img2,

    overview: [
      "UI/UX design focuses on intuitive and engaging digital experiences."
    ],

    approachTitle: "Our Approach to UI/UX Design",
    approach: [
      { title: "User Research", text: "Understanding user needs and pain points." },
      { title: "Wireframing & Prototyping", text: "Designing structured layouts." },
      { title: "Visual Design", text: "Creating clean and modern interfaces." },
      { title: "Usability Testing", text: "Validating designs through feedback." }
    ],

    whatWeOfferTitle: "What We Offer",
    whatWeOffer: [
      {
        heading: "UX Research",
        items: ["User Personas", "User Journeys"]
      },
      {
        heading: "UI Design",
        items: ["Design Systems", "Responsive Layouts"]
      },
      {
        heading: "UI Design",
        items: ["Design Systems", "Responsive Layouts"]
      }
    ],

    serviceProcess: commonProcess
  },

  "web-development": {
    tagline: "Our Services",
    title: "Web Development",
    highlight: "Built for Performance",
    description: "High performance websites & web apps.",
    image: img1,

    overview: [
      "Web development involves building fast and scalable applications."
    ],

    approachTitle: "Our Approach to Web Development",
    approach: [
      { title: "Planning & Architecture", text: "Defining requirements and stack." },
      { title: "Development", text: "Building responsive solutions." },
      { title: "Testing & Optimization", text: "Ensuring speed and security." },
      { title: "Deployment & Support", text: "Launching and maintaining product." }
    ],

    whatWeOfferTitle: "What We Offer",
    whatWeOffer: [
      {
        heading: "Website Development",
        items: ["Corporate Websites", "Landing Pages"]
      },
      {
        heading: "Web Applications",
        items: ["Custom Dashboards", "Admin Panels"]
      },
      {
        heading: "Web Applications",
        items: ["Custom Dashboards", "Admin Panels"]
      }
    ],

    serviceProcess: commonProcess
  },

  "digital-marketing": {
    tagline: "Our Services",
    title: "Digital Marketing",
    highlight: "That Drive Growth",
    description: "SEO, ads & conversion-focused marketing.",
    image: img2,

    overview: [
      "Digital marketing helps businesses grow visibility online."
    ],

    approachTitle: "Our Approach to Digital Marketing",
    approach: [
      { title: "Market Research", text: "Analyzing audience and competitors." },
      { title: "Strategy & Planning", text: "Creating growth-focused plans." },
      { title: "Execution", text: "Running campaigns across channels." },
      { title: "Analytics & Optimization", text: "Improving ROI continuously." }
    ],

    whatWeOfferTitle: "What We Offer",
    whatWeOffer: [
      {
        heading: "SEO",
        items: ["On-page SEO", "Technical SEO"]
      },
      {
        heading: "Paid Ads",
        items: ["Google Ads", "Social Media Ads"]
      },
      {
        heading: "Paid Ads",
        items: ["Google Ads", "Social Media Ads"]
      }
    ],

    serviceProcess: commonProcess
  }
};

export default services;
