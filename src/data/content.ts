// All proposal content lives here. Placeholder content is clearly marked with
// "[Placeholder ...]" patterns so it is trivial to find and replace later.

import firstAvertoImage from '../../Images/first.jpeg';
import avertoImg2 from '../../Images/img 2.jpeg';
import avertoImg2_1 from '../../Images/img 2.1.jpeg';
import avertoImg3 from '../../Images/img 3.jpeg';
import avertoImg3_1 from '../../Images/img 3.1.jpeg';
import avertoImg4 from '../../Images/img 4.jpeg';
import avertoImg4_1 from '../../Images/img 4.1.jpeg';
import avertoImg5 from '../../Images/img 5.jpeg';
import avertoImg6 from '../../Images/img 6.jpeg';
import avertoImg7 from '../../Images/img 7.jpeg';
import avertoImg7_1 from '../../Images/img 7.1.jpeg';
import avertoImg7_2 from '../../Images/img 7.2.jpeg';
import avertoImg7_3 from '../../Images/img 7.3.jpeg';
import avertoImg7_4 from '../../Images/img 7.4.jpeg';
import avertoImg8 from '../../Images/img 8.jpeg';
import avertoImg8_1 from '../../Images/img 8.1.jpeg';
import avertoImg8_2 from '../../Images/img 8.2.jpeg';
import avertoImg9 from '../../Images/img 9.jpeg';
import avertoImg10 from '../../Images/img 10.jpeg';
import avertoImg11 from '../../Images/img 11.jpeg';
import avertoImg12 from '../../Images/img 12.jpeg';
import avertoImg15 from '../../image/ideas/img-15.jpeg';
import avertoImg16 from '../../image/ideas/img-16.jpeg';
import avertoImg from '../../image/ideas/img.png';



export type IdeaType =
  | 'AR'
  | 'VR'
  | 'Video'
  | 'Gamification'
  | '3D content'
  | '3D content - AR'
  | 'Series Of Webinars'
  | 'Digital Material'
  | 'Event activity'
  | 'Activation'
  | 'ecosystem platform'
  | 'Interactive Web'
  | 'AI Chatbot';

export type IdeaAudience = 'Patient' | 'HCP' | 'Both';

export interface Idea {
  id: string;
  name: string;
  type: IdeaType;
  audience: IdeaAudience;
  shortDescription: string;
  briefDescription: string;
  objectives: string[];
  expectedOutcome: string;
  Images: string[]; // 1+ image seeds; each renders a distinct placeholder
  imageUrl?: string;
  imageUrls?: string[];
}

export interface Product {
  id: string;
  name: string;
  positioning: string;
  ideas: Idea[];
}

export interface TherapyArea {
  id: string;
  name: string;
  tagline: string;
  description: string;
  available: boolean;
  products?: Product[];
}

const idea = (
  id: string,
  name: string,
  type: IdeaType,
  audience: IdeaAudience,
  shortDescription: string,
  briefDescription: string,
  objectives: string[],
  expectedOutcome: string,
  Images: string[],
  imageUrl?: string | string[],
): Idea => ({
  id,
  name,
  type,
  audience,
  shortDescription,
  briefDescription,
  objectives,
  expectedOutcome,
  Images,
  imageUrl: Array.isArray(imageUrl) ? undefined : imageUrl,
  imageUrls: Array.isArray(imageUrl) ? imageUrl : undefined,
});

export const therapyAreas: TherapyArea[] = [
  {
    id: 'cardiovascular',
    name: 'Cardiovascular',
    tagline: '2 Products · 15 Ideas',
    description:
      'Two products, one shared insight: physicians don\'t need more data .  they need to see the problem before they see the product. From statin intolerance to adherence, every idea starts with that gap.',
    available: true,
    products: [
      {
        id: 'averto',
        name: 'Averto',
        positioning:`This is an early-stage market. physician perception hasn't yet formed around this space, which makes now the right moment to lead with insight rather than product. That's why insight carries the greatest strategic weight: physicians need to recognize the treatment discontinuation pattern themselves before any product enters the conversation. Earn the insight first; earn the prescription second.`,
          
        ideas: [
          idea(
              'av-pre-2',
              'Behind the Number',
              'AR',
              'Both',
              'AR Experience / Interactive Web Experience / Patient Education Material',
              'The patient scans a QR code and sees a 3D coronary artery appear in AR. LDL-C gradually enters the artery wall and builds into plaque. As the plaque grows, the artery visibly narrows and blood flow becomes restricted. turning an invisible cholesterol number into a visible cardiovascular risk.\nThe experience then reinforces the importance of knowing and managing LDL-C before the silent progression of atherosclerosis becomes a serious event.',
              [
                'Make LDL-C visible: Turn an abstract number into a tangible disease process.',
                'Build risk awareness: Show how LDL-C contributes to plaque formation and arterial narrowing.',
                'Drive action: Encourage patients to know their numbers and discuss LDL-C management with their',
              ],
              'Patients understand what their LDL-C number means inside their arteries and why controlling it matters before cardiovascular risk progresses.',
              ['av-pre-2-a','av-pre-2-b'],
              [avertoImg2, avertoImg2_1],
            ),
            idea(
              'av-launch-1',
              'Every Choice Counts',
              'Gamification',
              'Patient',
              'Gamification / Patient Engagement / Web Experience',
              'A quick interactive game where patients catch falling food and lifestyle choices. Each choice immediately changes a live Heart Health Bar: healthier foods and physical activity move it toward the healthy zone, while fast food, smoking, and inactivity move it toward the risk zone.\nThe goal is simple: make the right choices and keep your Heart Health Bar healthy.',
              [
                'Make healthy choices interactive: Learn by playing.',
                'Show immediate impact: Every choice visibly changes the health bar.',
                'Build awareness: Connect daily habits with lipid and cardiovascular health.',
              ],
              'Patients see how everyday choices can influence their heart health and are encouraged to make healthier decisions.',
              ['av-launch-1-a'],
              avertoImg6,
            ),
            idea(
              'av-launch-4',
              'Build Your Heart-Healthy Day',
              'Gamification',
              'Patient',
              'Patient Web Experience / Gamification / Interactive Web Experience',
              'The patient enters the experience and chooses a part of their day Breakfast, Lunch, Dinner, or Snack. They are then presented with a virtual plate and several food choices to build their meal.\nOnce the meal is complete, the experience instantly reveals a meal score, highlights the better and less healthy choices, and suggests simple swaps to make the meal more heart-friendly. Short tips then explain how choices such as fiber-rich foods, saturated fat, and healthier cooking options can support better lipid and cardiovascular health.\nThe patient can repeat the journey across different meals to build a healthier day, one choice at a time.',
              [
                'Personalize healthy eating: Let patients build their own meals.',
                'Turn choices into learning: Show the immediate impact of each meal.',
                'Encourage better swaps: Provide simple, practical alternatives.',
              ],
              'Patients learn how to make more heart-friendly food choices through a simple, personalized, and engaging daily journey.',
              ['av-launch-4-a'],
              avertoImg9,
            ),
            idea(
              'av-pre-1',
              'Inside the Mechanism: From Muscle to Liver',
              'AR',
              'HCP',
              'AR Experience / Interactive Web Experience / Medical Rep Material',
              'An interactive journey starts with the HCP exploring a 3D muscle model, visualizing how statin-associated muscle symptoms can affect muscle function and treatment continuity. The journey then shifts to the liver, where the HCP follows Bempedoic Acid to its site of action.\n At the liver, the molecule is activated by ACSVL, enabling it to inhibit ACL, reduce cholesterol synthesis, and ultimately increase hepatic LDL uptake and lower LDL-C. \nThe experience makes the liver-focused activation and mechanism visually clear, while reinforcing why Bempedoic Acid offers a different approach for appropriate patients.',
              [
                'Make the mechanism visual: From muscle considerations to liver-focused action.',
                'Differentiate Bempedoic Acid: Highlight its liver-focused activation and ACL inhibition.',
                'Simplify the science: Turn a complex MOA into an intuitive HCP experience.',
              ],
              'HCPs clearly understand where Bempedoic Acid acts, how it lowers LDL-C, and how its mechanism differentiates it from statin therapy.',
              ['av-pre-1-a'],
              firstAvertoImage,
            ),
            idea(
              'av-pre-4',
              'Averto: Target the Source',
              'Gamification',
              'HCP',
              'VR Game / Gamification / Medical Rep Material / Interactive Web Experience',
              'A fast-paced MOA shooting game where the HCP guides Averto into the liver and activates it through ACSVL1. Once activated, Averto targets ACL, reducing hepatic cholesterol synthesis. The liver then increases LDL receptors, which capture more LDL from the bloodstream.\n\nThe player progresses through four simple stages: Activate → Target ACL → Unlock LDL Receptors → Clear LDL, turning the complete MOA into an interactive challenge.',
              [
                'Gamify the MOA: Turn a complex mechanism into an engaging experience.',
                'Reinforce differentiation: Highlight liver activation and ACL inhibition.',
                'Visualize the outcome: Show increased LDL clearance and reduced circulating LDL-C.',
              ],
              'Physicians confront a real gap between what they assume and actual patient behavior, creating a personal "ah" moment that primes them for the product conversation ahead.',
              ['av-pre-4-a','av-pre-4-b'],
            [avertoImg4,avertoImg4_1],
            ),
            idea(
              'av-pre-3',
              'Averto Clinical Companion',
              'AI Chatbot',
              'HCP',
              'AI Chatbot / WhatsApp / Web Platform',
              'An AI-powered clinical companion for HCPs, offering quick, conversational access to approved Averto information through:\n\n1- Averto in 60 Seconds: Key dosing, indication, and relevant patient profile.\n2- MOA Explorer: Simple walkthrough of liver activation, ACL inhibition, and LDL-C reduction.\n3- Evidence at a Glance: Quick access to key efficacy, cardiovascular outcomes, and clinical data.\n4- Safety & Monitoring: Concise access to key safety information and monitoring considerations.\n5- Ask Averto: HCPs ask clinical questions and receive concise, referenced answers.\n6- Challenge Me: Short clinical cases and MCQs to reinforce key Averto messages.',
              
              [
                'Instant access: Key Averto information in seconds.',
                'Simplify the science: Make complex MOA and evidence easy to explore.',
                'Evidence-led: Provide approved, referenced scientific information.',
              ],
              'HCPs can quickly access, understand, and apply relevant Averto information during their clinical decision-making',
              ['av-pre-3-a', 'av-pre-3-b'],
              [avertoImg3, avertoImg3_1],
            ),
            idea(
              'av-pre-5',
              'Two Paths. One Goal',
              'Interactive Web',
              'HCP',
              'Interactive Web Experience / 3D Experience / Medical Rep Material',
              'An interactive 3D journey where the HCP chooses between Statin and Bempedoic Acid. A patient climbs a flight of stairs as each pathway visualizes the different treatment journeys. The Statin path highlights how muscle-related symptoms may affect tolerability and daily activity, while the Bempedoic Acid path illustrates a different, liver-focused mechanism without the same muscle-related impact.\n\nAlong the journey, short clinical insights reveal the key differences and the potential role of Bempedoic Acid in appropriate patients.',
              [
                'Make the difference visible: Compare the two treatment journeys.',
                'Highlight differentiation: Connect mechanism with the patient experience.',
                'Support HCP understanding: Reinforce the potential role of Bempedoic Acid in appropriate patients.',
              ],
              'HCPs visualize the treatment difference and better understand where Bempedoic Acid may fit for appropriate patients.',
              ['av-pre-5-a', 'av-pre-5-b'],
              avertoImg5,
            ),
            idea(
              'av-launch-2',
              'Inside the Mechanism',
              'Interactive Web',
              'HCP',
              'Interactive Web Experience / Medical Rep Material / Gamification',
              'The experience begins with a realistic patient case: a patient reports muscle cramps, fatigue, soreness, or weakness during daily activities. The HCP reviews the treatment history, symptom timing, CK results, and relevant clinical factors before choosing a treatment pathway.\nThe screen then splits into two parallel worlds. On the Statin pathway, the patient attempts to climb a flight of stairs but struggles to continue, while the other half of the screen visualizes the treatment’s mechanism. Key clinical insights then appear, connecting muscle-related symptoms, tolerability, and treatment continuity.\nThe HCP returns to the same patient and selects Averto. The screen splits again: this time, the patient climbs the stairs confidently, while the other half reveals Averto’s liver-focused mechanism, showing activation by ACSVL1, ACL inhibition, and LDL-C reduction. The journey closes with key clinical evidence and insights reinforcing the potential role of Bempedoic Acid in appropriate patients.',
              [
                'Start with the patient: Turn a clinical scenario into a relatable treatment journey.',
                'Make the difference visible: Show the patient experience and MOA side-by-side.',
                'Connect science to clinical value: Reinforce Averto’s liver-focused mechanism, LDL-C lowering, and potential role in appropriate patients.',
              ],
              'HCPs experience the difference between treatment pathways through one patient story, connecting muscle-related concerns, mechanism, and the potential role of Averto.',
              ['av-launch-2-a'],
              [avertoImg7,avertoImg7_3,avertoImg7_4,avertoImg7_2]
            ),
            idea(
              'av-launch-3',
              'Two Patient Pathways',
              'Interactive Web',
              'HCP',
              'Interactive Web Experience / 3D Experience / Medical Rep Material',
              'The HCP chooses between two journeys for the same patient.\n\nOn the first path, a father walks with his child but slows down, distracted by treatment concerns. Another patient watches his family preparing for a gathering but stays on the sidelines, worried about continuing his treatment. The journey then moves beneath the surface, revealing the silent progression of LDL-C and plaque inside the artery.\n\nOn the second path, the same patients continue their everyday moments with greater confidencethe father keeps walking with his child, while the other patient actively joins his family. The experience then moves inside the body to reveal Averto’s liver-focused mechanism, connecting the treatment journey to LDL-C reduction.\n\nThe two paths ultimately reveal how treatment choices can shape both what happens inside the body and how patients experience their everyday lives.',
              [
                'Make the patient journey relatable: Connect treatment concerns with real-life moments.',
                'Make silent risk visible: Reveal what is happening inside the artery beyond symptoms.',
                'Connect Averto to the journey: Show its mechanism and LDL-C-lowering effect.',
              ],
              'HCPs see the human and clinical impact of an unresolved treatment journeyand the potential of a supported journey with Averto.',
              ['av-launch-3-a','av-launch-3-a'],
              [avertoImg8,avertoImg8_1,avertoImg8_2],
            ),
            idea(
              'av-launch-5',
              'The Decathlon',
              'Interactive Web',
              'HCP',
              'Interactive Web Experience / 3D Experience / Medical Rep Material',
              'The HCP enters a scientific decathlon where Averto is tested across several evidence-based events including LDL-C reduction, mechanism of action, cardiovascular outcomes, tolerability, and clinical fit. Instead of viewing a static comparison, the physician interacts with each event to unlock the supporting clinical evidence and complete Averto’s overall treatment profile.',
              [
                'Highlight Averto’s strong LDL-C–lowering efficacy while moving the discussion beyond LDL-C alone.',
                'Demonstrate Averto’s differentiation through its liver-activated MOA, cardiovascular evidence, tolerability, and clinical role.',
                'Transform clinical data into a memorable, gamified HCP experience that encourages active exploration rather than passive detailing.',
              ],
              'Build stronger HCP understanding of why Averto stands out beyond LDL-C reduction, by highlighting the complete clinical value behind the treatment..',
              ['av-launch-5-a', 'av-launch-5-b'],
              avertoImg10,
            ),

            idea(
              'av-post-1',
              'The Two Faucets; Control Cholesterol ',
              'Interactive Web',
              'HCP',
              'Interactive Web Experience / 3D Experience / Medical Rep Material',
              'The HCP enters an interactive “Two Faucets” challenge, where a central tank represents the body’s cholesterol pool. Two active faucets continuously feed the tank: one represents hepatic cholesterol synthesis, while the other represents intestinal cholesterol absorption. The physician interacts with each faucet to restrict the flow and reveal how bempedoic acid acts on cholesterol synthesis in the liver, while ezetimibe reduces intestinal cholesterol absorption. Activating both mechanisms demonstrates the complementary dual-action concept behind Averto Plus.',
              [
                'Simplify the dual mechanism of action into an intuitive, memorable visual experience.',
                'Demonstrate how bempedoic acid and ezetimibe target two different contributors to the cholesterol pool.',
                'Help HCPs understand the rationale of combining hepatic synthesis inhibition + intestinal absorption inhibition within one treatment approach.',
              ],
              'Build a clear and memorable understanding of Averto Plus as a complementary dual-mechanism approach that controls cholesterol through two different pathways.',
              ['av-post-1-a','av-post-1-b'],
              avertoImg11
            ),
            idea(
              'av-post-2',
              'The Cholesterol Factory',
              'Interactive Web',
              'HCP',
              'Interactive Web Experience / 3D Experience / Medical Rep Material',
              'The HCP enters a gamified cholesterol-synthesis factory, where cholesterol is shown as the final product moving through an assembly line. The physician taps different machines to discover where lipid-lowering therapies act. Bempedoic acid/Averto is revealed at an earlier stage of the pathway, while statins act further downstream, visually demonstrating that bempedoic acid works two steps upstream from statins in hepatic cholesterol synthesis.',
              [
                'Make Averto’s upstream mechanism of action simple and immediately understandable.',
                'Visually differentiate where bempedoic acid and statins act within the cholesterol-synthesis pathway.',
                'Turn a complex biochemical pathway into a short, memorable, interactive learning experience.',
              ],
              'Help HCPs clearly remember where Averto acts in the hepatic cholesterol pathway and why its earlier ACL inhibition represents a distinct mechanism of action.',
              ['av-post-1-a','av-post-1-b'],
              avertoImg12
            ),
          ],
      },
      {
        id: 'rosuvastatin-ezetimibe',
        name: 'Rosuvastatin + Ezetimibe',
        positioning:
          `A mature category, an entrenched habit. This isn't about introducing something new. it's about creating a small, honest doubt in what already feels settled. We focus on new patients where no habit exists yet, while opening a quieter conversation with existing ones already comfortable with their routine, so the strategy leads with simplicity rather than disruption.`,
        ideas: [
          idea(
            're-1',
            'The Waiting Room Clock',
            '3D content',
            'HCP',
            'Motion graphic video · Waiting room screens · Social media content',
            'A short visual experience that turns the invisible challenge of daily adherence into a memorable patient story.\n\nAs a timer runs, patients gradually disappear from a waiting room, symbolizing missed doses and interruptions in their treatment journey.\n\nThe experience ends with:\n\n"While you watched this screen, another patient may have missed today\'s dose."\n\nFollowed by:\n\n"Adherence is a daily decision, not only a prescription.\n\n Refrence https://pubmed.ncbi.nlm.nih.gov/34203226/',
            [
              'Makes an invisible adherence problem visible and felt',
              'No product mention .  pure problem-recognition, ahead of the FDC\'s Pre-Launch entry',
              'Short, simple format .  easy to localize and scale across MENA',
            ],
            'Physicians and patients register adherence as an ongoing daily behavior rather than a one-time prescription decision, setting up the case for a simpler regimen.',
            ['re-1-a'],
            avertoImg15,
          ),
          idea(
            're-2',
            'The Adherence Guess',
            'Interactive Web',
            'HCP',
            'QR/personalized link · Medical rep visit asset · Standalone digital tool',
            'Interactive Assessment Experience\n\nThe physician answers one quick question:\n\nOut of 10 patients taking two separate cholesterol medications, how many do you think remain fully adherent after several months?\n\nWith one tap, the platform compares their prediction with published evidence, revealing how adherence may be overestimated and opening the conversation around treatment simplicity.\n\nThe experience concludes with:\n\n"Small treatment decisions can shape long-term adherence."',
            [
              'Self-discovery format .  physicians confront the gap themselves',
              'One-tap, fits busy physician schedules',
              'Opens the door to "simplicity" messaging ahead of product reveal',
            ],
            'Physicians realize they overestimate real-world adherence on multi-pill regimens, creating an opening for the case toward a simpler, single-pill approach.',
            ['re-2-a'],
            avertoImg16,
          ),
          idea(
            're-3',
            'The Pill Count Challenge',
            'Gamification',
            'HCP',
            'Interactive touchscreen game · Congress booth · Medical rep visit asset',
            'The Pill Count Challenge\n\nShort Interactive Touchscreen Game\n\nPhysicians have 30 seconds to catch as many falling virtual pills as possible, representing the daily burden of taking multiple medications. As the number of pills increases, the challenge becomes harder to manage.\n\nThe game ends with:\n\n"Hard to keep up, right? Now imagine your patient doing this every day."\n\nThe product is then introduced as a simplified option that combines rosuvastatin and ezetimibe in one tablet, supporting a more convenient treatment routine.',
            [
              'Gamified format, under-1-min',
              'Physically simulates the burden the product solves',
              'Product introduced only after the felt experience, not before',
            ],
            'Physicians feel the real burden of a multi-pill routine firsthand, making the single-tablet combination feel like an obvious, welcome relief rather than a marketing claim.',
            ['re-3-a'],
            avertoImg,
          ),
        ],
      },
    ],
  },
  {
    id: 'diabetes',
    name: 'Diabetes',
    tagline: 'Coming Soon',
    description:
      'An active area of exploration. A dedicated digital strategy for our diabetes portfolio is currently in development.',
    available: false,
  },
];

export function getTherapyArea(id: string) {
  return therapyAreas.find((t) => t.id === id);
}

export function getProduct(therapyId: string, productId: string) {
  return getTherapyArea(therapyId)?.products?.find((p) => p.id === productId);
}
