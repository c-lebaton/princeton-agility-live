# Princeton Agility: Live AI Experiment

This page is built live during a 45-minute Princeton Agility hands-on workshop for Scrum Masters and Agile Coaches. Attendee input from Zoom Chat becomes prioritized Trello cards, each card ships through a PR and a Vercel Preview review, and then it goes to production.

**Question in Zoom Chat:** "What is your biggest roadblock, fear, or curiosity regarding AI in your day-to-day work?"

## The Agnostic AI Build Spec
- **Persona:** Who is experiencing this?
- **Scenario:** What exact friction, fear, or roadblock are they facing right now?
- **Experience:** What does success look like, and what is their next best step?

## Workflow
1. Never commit to `main`. Each change goes on a feature branch (`feat/room-objectives-1`).
2. Open a PR that references its Trello card, then review the Vercel Preview URL.
3. Merge to ship to production.

Live backlog content is in `lib/content.ts`. To add a card, append an object to `roomObjectives`.
