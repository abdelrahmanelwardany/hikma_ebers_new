// Ebers partner page content. Sourced from ebers.uk — do not fabricate beyond
// what is listed here. Placeholder tone is paraphrased, not quoted.

export interface ServiceItem {
  name: string;
  desc: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  icon: string; // lucide icon name
  items: ServiceItem[];
}

export const ebersStats = [
  { value: 10, suffix: '+', label: 'Years of experience' },
  { value: 13, suffix: '+', label: 'Countries served' },
  { value: 5, suffix: '', label: 'Continents' },
  { value: 2014, suffix: '', label: 'Founded', raw: true },
];

export const servicePillars: ServicePillar[] = [
  {
    id: 'xr',
    title: 'Extended Reality Solutions',
    icon: 'Glasses',
    items: [
      { name: 'Virtual Reality (VR)', desc: 'Fully immersive environments that put users inside the experience.' },
      { name: 'Augmented Reality (AR)', desc: 'Layer digital content onto the real world for product and field use.' },
      { name: 'Mixed Reality (MR)', desc: 'Blend physical and digital so users interact with both at once.' },
    ],
  },
  {
    id: 'training',
    title: 'Interactive Training & Digital Solutions',
    icon: 'GraduationCap',
    items: [
      { name: 'Immersive training simulations', desc: 'Put trainees inside the experience so skills transfer instantly.' },
      { name: 'Interactive LMS & presentations', desc: 'Turn passive learning into active, measurable engagement.' },
      { name: 'AI-powered interactive systems', desc: 'Personalise every interaction and scale expertise across audiences.' },
    ],
  },
  {
    id: 'content',
    title: 'Content & Production',
    icon: 'Clapperboard',
    items: [
      { name: '3D animations & specialised models', desc: 'Scientifically accurate visuals that make the complex legible.' },
      { name: 'Motion graphics & CGI production', desc: 'Cinematic storytelling crafted to land a single clear message.' },
      { name: '360° experiences', desc: 'Let audiences explore a space or process on their own terms.' },
      { name: 'Interactive web content', desc: 'Browser-native experiences that engage without a download.' },
    ],
  },
];

export interface Industry {
  name: string;
  desc: string;
  icon: string;
}

export const industries: Industry[] = [
  { name: 'Healthcare & Medical', desc: 'Disease education, product launches, HCP engagement.', icon: 'HeartPulse' },
  { name: 'Basic Science & Education', desc: 'Making abstract concepts tangible and explorable.', icon: 'Atom' },
  { name: 'Events & Conferences', desc: 'Digital extensions that amplify physical presence.', icon: 'Calendar' },
  { name: 'Automotive & Industrial', desc: 'Product visualisation and operator training at scale.', icon: 'Cog' },
  { name: 'Home Appliances', desc: 'Interactive demos that close the understanding gap.', icon: 'Refrigerator' },
];

// Pharma/healthcare first, then broader roster for scale.
export const clients = {
  healthcare: ['AstraZeneca', 'Abbott', 'Merck', 'Organon', 'Roche', 'Sanofi', 'Janssen','Amgen'],
  broader: [ 'ADNOC', 'Audi', 'Dell', 'Al Araby'],
};

export interface WhyPillar {
  title: string;
  desc: string;
  icon: string;
}

export const whyEbers: WhyPillar[] = [
  {
    title: 'Proven Experience',
    desc: 'A decade delivering across industries and geographies, with measurable results.',
    icon: 'Award',
  },
  {
    title: 'Award-Winning Creativity',
    desc: 'Recognised globally for pushing boundaries in digital storytelling and immersive design.',
    icon: 'Trophy',
  },
  {
    title: 'Immersive Tech Expertise',
    desc: 'Deep fluency in VR, AR, MR, holograms, projection mapping, and next-gen digital experiences.',
    icon: 'Sparkles',
  },
  {
    title: 'Tailored Solutions',
    desc: 'No templates, no off-the-shelf answers — every project custom-crafted to specific goals and audience.',
    icon: 'Wrench',
  },
  {
    title: 'Long-Term Partnership',
    desc: 'Relationships, not just deliverables. We build for the long arc, not the single handoff.',
    icon: 'Handshake',
  },
];

export interface Testimonial {
  quote: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'The AR product visualisation exceeded our expectations — it became the centrepiece of the launch.',
    context: 'Product launch, AR visualisation',
  },
  {
    quote:
      'The VR training delivered measurable, repeatable results across our field teams.',
    context: 'Field training, VR simulation',
  },
];

export const ebersContact = {
  phone: '+971 52 227 0509',
  email: 'info@ebers.uk',
  website: 'ebers.uk',
  websiteUrl: 'https://ebers.uk',
};
