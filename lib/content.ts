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
