import { CopyButton } from "@/components/CopyButton";
import {
  buildSpecText,
  links,
  resources,
  roomObjectives,
  zoomQuestion,
} from "@/lib/content";

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {children && <p className="mt-3 text-neutral-400">{children}</p>}
    </div>
  );
}

const pillars = [
  { label: "Persona", prompt: "Who is experiencing this?" },
  { label: "Scenario", prompt: "What exact friction, fear, or roadblock are they facing right now?" },
  { label: "Experience", prompt: "What does success look like, and what gives them their next best step?" },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-5 sm:px-8">
      {/* 1. Hero */}
      <section className="py-20 sm:py-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Being built live
        </p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Princeton Agility: <span className="text-emerald-400">Live AI Experiment</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-300">
          No slides. This page is being built in real time from the room&apos;s Zoom Chat: your input
          becomes a prioritized backlog, each item ships through a pull request and a preview review,
          and then it goes live.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 transition hover:border-emerald-400 hover:text-emerald-300"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </section>

      {/* 2. Room Objectives (Live Backlog) */}
      <section id="room-objectives" className="border-t border-neutral-800 py-16">
        <SectionHeading eyebrow="Live backlog" title="Room Objectives">
          Every card here started as a message in Zoom Chat, framed as Persona, Scenario, and
          Experience, then prioritized on the board.
        </SectionHeading>

        <blockquote className="mb-8 rounded-2xl border-l-4 border-emerald-400 bg-neutral-900 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">The question in Zoom Chat</p>
          <p className="mt-2 text-xl font-medium text-neutral-100">&ldquo;{zoomQuestion}&rdquo;</p>
        </blockquote>

        {roomObjectives.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-neutral-700 p-10 text-center text-neutral-400">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Waiting for live Zoom Chat intake...
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {roomObjectives.map((o) => (
              <article key={o.id} className="flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{o.title}</h3>
                  {o.priority && (
                    <span className="shrink-0 rounded-full bg-emerald-400/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                      {o.priority}
                    </span>
                  )}
                </div>
                <dl className="mt-4 space-y-3 text-sm">
                  {[
                    ["Persona", o.persona],
                    ["Scenario", o.scenario],
                    ["Experience", o.experience],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="font-semibold text-emerald-400">{k}</dt>
                      <dd className="text-neutral-300">{v}</dd>
                    </div>
                  ))}
                </dl>
                {(o.trelloUrl || o.prUrl) && (
                  <div className="mt-auto flex gap-4 pt-5 text-xs text-neutral-500">
                    {o.trelloUrl && <a className="hover:text-emerald-300" href={o.trelloUrl} target="_blank" rel="noreferrer">Trello card ↗</a>}
                    {o.prUrl && <a className="hover:text-emerald-300" href={o.prUrl} target="_blank" rel="noreferrer">Pull request ↗</a>}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </section>

      {/* 3. The Agnostic Build Spec (Takeaway) */}
      <section id="build-spec" className="border-t border-neutral-800 py-16">
        <SectionHeading eyebrow="Takeaway" title="The Agnostic AI Build Spec">
          Use it with any AI tool and any team. Before you ask AI to build, write, or decide anything,
          answer these three questions.
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.label} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <p className="font-mono text-sm text-neutral-500">0{i + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-emerald-400">{p.label}</h3>
              <p className="mt-2 text-sm text-neutral-300">{p.prompt}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-950">
          <div className="flex items-center justify-between border-b border-neutral-800 px-5 py-3">
            <span className="font-mono text-xs text-neutral-500">build-spec.txt</span>
            <CopyButton text={buildSpecText} />
          </div>
          <pre className="overflow-x-auto whitespace-pre-wrap p-5 font-mono text-sm leading-relaxed text-neutral-300">
            {buildSpecText}
          </pre>
        </div>
      </section>

      {/* 4. Resources & Experiments */}
      <section id="resources" className="border-t border-neutral-800 py-16">
        <SectionHeading eyebrow="Mentioned live" title="Resources & Experiments" />
        <div className="grid gap-4 sm:grid-cols-2">
          {resources.map((r) => {
            const body = (
              <>
                <h3 className="font-semibold">{r.title}{r.href && " ↗"}</h3>
                <p className="mt-2 text-sm text-neutral-400">{r.description}</p>
              </>
            );
            return r.href ? (
              <a key={r.title} href={r.href} target="_blank" rel="noreferrer" className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-emerald-400">
                {body}
              </a>
            ) : (
              <div key={r.title} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">{body}</div>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-neutral-800 py-10 text-sm text-neutral-500">
        Built live with Princeton Agility · Persona → Scenario → Experience
      </footer>
    </main>
  );
}
