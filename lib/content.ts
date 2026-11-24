// Live content for the workshop. To add a card from Zoom Chat, append to
// `roomObjectives` — the page renders whatever is here, in order.

export const zoomQuestion =
  "What is your biggest roadblock, fear, or curiosity regarding AI in your day-to-day work?";

export type Priority = "P1" | "P2" | "P3";

export type RoomObjective = {
  id: string; // matches the Trello card / PR, e.g. "room-objectives-1"
  title: string;
  persona: string; // Who is experiencing this?
  scenario: string; // What friction, fear, or roadblock are they facing right now?
  experience: string; // What does success look like? What is their next best step?
  priority?: Priority;
  trelloUrl?: string;
  prUrl?: string;
};

export const roomObjectives: RoomObjective[] = [
  // Injected live from Zoom Chat during the workshop.
  {
    id: "room-objectives-1a",
    title: "\u201cNot knowing what I don\u2019t know\u201d",
    priority: "P1",
    persona:
      "A Scrum Master or Agile Coach who is curious about AI but doesn't have a technical background.",
    scenario:
      "They can't tell what AI can or can't do for their work, so they don't know what to ask, what to try, or which risks to watch for. The uncertainty keeps them from starting.",
    experience:
      "A short, safe map of the territory: three starter uses inside ceremonies they already run (refinement, retros, stakeholder updates), and one prompt to try today. The next best step is a 15-minute experiment, not a course.",
    trelloUrl: "https://trello.com/c/gbe62wYg",
  },
  {
    id: "room-objectives-1b",
    title: "Which industries will AI become effective for?",
    priority: "P2",
    persona:
      "An Agile Coach who works with clients across several industries (finance, healthcare, software, government).",
    scenario:
      "They're asked whether AI applies to their client's world and can't answer with confidence. They're worried about overpromising in regulated industries or underselling it in fast-moving ones.",
    experience:
      "A useful reframe: AI works where the work fits, whatever the industry (lots of text, repeatable decisions, tight feedback loops). The next best step is to score one client workflow against those three traits.",
    trelloUrl: "https://trello.com/c/aRPC80QN",
  },
];

export type Resource = {
  title: string;
  description: string;
  href?: string;
};

export const resources: Resource[] = [
  {
    title: "The 3D Pedal Board story",
    description: "Going from an idea to a physical product with AI in a tight feedback loop.",
  },
  {
    title: "Discord + Rawkn Betty workflow",
    description: "How a music community and an AI agent share one backlog.",
  },
];

export const links = [
  { label: "gigaton.ai", href: "https://gigaton.ai" },
  { label: "soshur.com", href: "https://soshur.com" },
  { label: "c-lebsounds.com", href: "https://c-lebsounds.com" },
];

export const buildSpecText = `AGNOSTIC AI BUILD SPEC

PERSONA
Who is experiencing this? (role, context, comfort with tech)

SCENARIO
What exact friction, fear, or roadblock are they facing right now?

EXPERIENCE (VALUE OUTCOME)
What does success look like, and what information or resource gives them their next best step?

Paste this into any AI tool before you ask it to build, write, or decide something.`;
