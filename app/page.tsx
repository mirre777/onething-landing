import { Waitlist } from "./waitlist";

const APP_URL = "https://1thing.day";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundBlobs />

      <Nav />

      <Hero />

      <Demo />

      <HowItWorks />

      <Features />

      <SwipeMap />

      <FinalCta />

      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <nav className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <a href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7B61FF] text-white shadow-[0_0_24px_rgba(123,97,255,0.6)]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 12h8M4 7h12M4 17h6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </span>
        <span className="text-lg">OneThing</span>
      </a>
      <a
        href={APP_URL}
        className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
      >
        Open app
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 pt-12 pb-24 md:grid-cols-[1.15fr_1fr] md:pt-20 md:pb-32">
      <div className="fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00D1C1]" />
          For ADHD brains
        </div>

        <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
          One card.
          <br />
          <span className="bg-gradient-to-r from-[#7B61FF] via-[#A855F7] to-[#00D1C1] bg-clip-text text-transparent">
            One decision.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
          OneThing reads your Todoist, Gmail, and Google Calendar, scores every item with AI, and
          hands you the single most important thing to do right now. Swipe it. Move on.
        </p>

        <div className="mt-10">
          <Waitlist />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/50">
          <Tick /> No feeds. No streaks. No nagging.
          <a href="#how" className="underline-offset-4 hover:text-white hover:underline">
            How it works
          </a>
        </div>
      </div>

      <HeroCard />
    </section>
  );
}

function HeroCard() {
  return (
    <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
      <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-[#7B61FF]/25 via-transparent to-[#00D1C1]/20 blur-3xl" />

      <div className="relative h-[520px] w-full">
        <div className="absolute inset-x-6 top-8 h-[440px] rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur" />
        <div className="absolute inset-x-3 top-4 h-[440px] rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur" />

        <div className="card-demo absolute inset-x-0 top-0 h-[440px] rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#1C1C2E] via-[#141420] to-[#0A0A10] p-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-white/50">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F47D31]" />
              Todoist
            </span>
            <span>Score 94</span>
          </div>

          <div className="mt-6 text-2xl font-bold leading-tight">
            Finish Q2 onboarding deck
          </div>
          <div className="mt-3 text-sm text-white/60">
            Due today -- 2h left on your calendar after lunch.
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Chip color="#7B61FF">urgent</Chip>
            <Chip color="#00D1C1">work</Chip>
            <Chip color="#A855F7">deep focus</Chip>
          </div>

          <div className="mt-auto flex h-28 flex-col justify-end pt-8">
            <div className="flex items-center justify-between text-xs text-white/40">
              <span className="flex items-center gap-1.5">
                <Arrow dir="left" /> Later
              </span>
              <span className="flex items-center gap-1.5">
                <Arrow dir="down" /> Done
              </span>
              <span className="flex items-center gap-1.5">
                Do now <Arrow dir="right" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type DemoCard = {
  source: "Todoist" | "Gmail" | "Calendar";
  sourceColor: string;
  score: number;
  title: string;
  body: string;
  chips: { label: string; color: string }[];
  swipe: "right" | "left" | "down" | "up";
};

const DEMO_CARDS: DemoCard[] = [
  {
    source: "Todoist",
    sourceColor: "#F47D31",
    score: 94,
    title: "Finish Q2 onboarding deck",
    body: "Due today. 2h free on your calendar after lunch.",
    chips: [
      { label: "urgent", color: "#7B61FF" },
      { label: "deep focus", color: "#A855F7" },
    ],
    swipe: "right",
  },
  {
    source: "Gmail",
    sourceColor: "#FF6B6B",
    score: 72,
    title: "Re: dinner Tuesday?",
    body: "Lena Ross — waiting on your reply since Friday.",
    chips: [
      { label: "reply needed", color: "#FF6B6B" },
      { label: "personal", color: "#00D1C1" },
    ],
    swipe: "left",
  },
  {
    source: "Calendar",
    sourceColor: "#00D1C1",
    score: 61,
    title: "Team standup — 10:00",
    body: "Just finished. Mark done to clear from today.",
    chips: [
      { label: "recurring", color: "#00D1C1" },
      { label: "15 min", color: "#6A6A7A" },
    ],
    swipe: "down",
  },
  {
    source: "Todoist",
    sourceColor: "#F47D31",
    score: 18,
    title: "Tidy old pinned notes",
    body: "Added 3 months ago. Never touched. Still matters?",
    chips: [
      { label: "stale", color: "#6A6A7A" },
      { label: "low effort", color: "#A855F7" },
    ],
    swipe: "up",
  },
];

const SWIPE_META = {
  right: { label: "Do now", color: "#00D1C1", anim: "swipe-right", hintAnim: "hint-right", glowAnim: "glow-right" },
  left:  { label: "Later",  color: "#F47D31", anim: "swipe-left",  hintAnim: "hint-left",  glowAnim: "glow-left"  },
  down:  { label: "Done",   color: "#7B61FF", anim: "swipe-down",  hintAnim: "hint-down",  glowAnim: "glow-down"  },
  up:    { label: "Delete", color: "#FF6B6B", anim: "swipe-up",    hintAnim: "hint-up",    glowAnim: "glow-up"    },
} as const;

function Demo() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-[1fr_auto]">
        <div>
          <SectionLabel>Watch it work</SectionLabel>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
            Four swipes.
            <br />
            <span className="bg-gradient-to-r from-[#7B61FF] to-[#00D1C1] bg-clip-text text-transparent">
              Inbox zero-ish.
            </span>
          </h2>
          <p className="mt-5 max-w-lg text-white/70 md:text-lg">
            Each card comes from a real source — a Todoist task, a Gmail thread, a Calendar event.
            OneThing picks the order. You pick the direction.
          </p>
          <ul className="mt-8 space-y-3 text-white/70">
            {(["right", "left", "down", "up"] as const).map((dir) => {
              const m = SWIPE_META[dir];
              return (
                <li key={dir} className="flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold"
                    style={{ backgroundColor: m.color + "20", color: m.color }}
                  >
                    <Arrow dir={dir} />
                  </span>
                  <span className="font-semibold text-white">{m.label}</span>
                  <span className="text-white/50">— {demoActionHint(dir)}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <DemoPhone />
      </div>
    </section>
  );
}

function demoActionHint(dir: "right" | "left" | "down" | "up") {
  switch (dir) {
    case "right": return "adds to focus, stars in Gmail";
    case "left":  return "reschedules to tomorrow";
    case "down":  return "completes in Todoist, archives in Gmail";
    case "up":    return "deletes, archives, removes from calendar";
  }
}

function DemoPhone() {
  return (
    <div className="relative mx-auto">
      <div className="absolute -inset-10 -z-10 rounded-[4rem] bg-gradient-to-br from-[#7B61FF]/25 via-transparent to-[#00D1C1]/20 blur-3xl" />

      <div className="relative h-[640px] w-[320px] rounded-[3rem] border border-white/15 bg-[#05050A] p-3 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]">
        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.3rem] bg-gradient-to-b from-[#0A0A10] to-[#141420]">
          {/* Notch */}
          <div className="absolute left-1/2 top-0 z-30 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-[#05050A]" />

          {/* Status bar */}
          <div className="relative z-20 flex items-center justify-between px-6 pt-3 text-[10px] font-semibold text-white/70">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-white/70" />
              <span className="h-2 w-3 rounded-sm bg-white/70" />
              <span className="h-2.5 w-5 rounded-sm border border-white/70" />
            </span>
          </div>

          {/* App header */}
          <div className="relative z-20 flex items-center justify-between px-5 pt-6">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#7B61FF]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12h8M4 7h12M4 17h6" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-xs font-bold tracking-wide">Focus</span>
            </div>
            <div className="rounded-full border border-white/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-white/50">
              Swipe / Tiles
            </div>
          </div>

          {/* Card stack area */}
          <div className="relative mt-6 flex h-[400px] items-start justify-center px-4">
            {/* Background static cards for depth */}
            <div className="absolute inset-x-8 top-4 h-[360px] rounded-[1.5rem] border border-white/5 bg-white/[0.02]" />
            <div className="absolute inset-x-6 top-2 h-[360px] rounded-[1.5rem] border border-white/10 bg-white/[0.04]" />

            {/* Directional glows */}
            {(["right", "left", "down", "up"] as const).map((dir) => (
              <div
                key={"glow-" + dir}
                className="demo-hint pointer-events-none absolute inset-x-4 top-0 h-[360px] rounded-[1.5rem] blur-2xl"
                style={{
                  animationName: SWIPE_META[dir].glowAnim,
                  backgroundColor: SWIPE_META[dir].color,
                  opacity: 0,
                  mixBlendMode: "screen",
                }}
              />
            ))}

            {/* Active swiping cards */}
            {DEMO_CARDS.map((card, i) => (
              <DemoCardView key={i} card={card} />
            ))}

            {/* Hint overlays */}
            {(["right", "left", "down", "up"] as const).map((dir) => {
              const m = SWIPE_META[dir];
              return (
                <div
                  key={"hint-" + dir}
                  className="demo-hint pointer-events-none absolute top-[38%] z-20 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em]"
                  style={{
                    animationName: m.hintAnim,
                    backgroundColor: m.color,
                    color: "#0A0A10",
                    boxShadow: `0 0 40px ${m.color}`,
                    opacity: 0,
                    left: dir === "right" ? "auto" : dir === "left" ? "12%" : "50%",
                    right: dir === "right" ? "12%" : "auto",
                    top: dir === "down" ? "78%" : dir === "up" ? "8%" : "38%",
                    transform: dir === "down" || dir === "up" ? "translateX(-50%)" : undefined,
                  }}
                >
                  {m.label}
                </div>
              );
            })}
          </div>

          {/* Bottom nav */}
          <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/5 bg-black/40 px-4 py-3 backdrop-blur">
            <div className="flex items-center justify-around text-[10px] text-white/50">
              {["Focus", "List", "Day", "Universe", "Settings"].map((t, i) => (
                <span
                  key={t}
                  className={
                    i === 0
                      ? "flex flex-col items-center gap-0.5 text-[#7B61FF]"
                      : "flex flex-col items-center gap-0.5"
                  }
                >
                  <span
                    className="h-1 w-1 rounded-full"
                    style={{ backgroundColor: i === 0 ? "#7B61FF" : "transparent" }}
                  />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DemoCardView({ card }: { card: DemoCard }) {
  const m = SWIPE_META[card.swipe];
  return (
    <div
      className="demo-card absolute inset-x-4 top-0 z-10 flex h-[360px] flex-col rounded-[1.5rem] border border-white/15 bg-gradient-to-br from-[#1C1C2E] via-[#141420] to-[#0A0A10] p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]"
      style={{ animationName: m.anim }}
    >
      <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest text-white/60">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: card.sourceColor }} />
          {card.source}
        </span>
        <span>Score {card.score}</span>
      </div>

      <div className="mt-4 text-[17px] font-bold leading-tight">{card.title}</div>
      <div className="mt-2 text-xs text-white/60">{card.body}</div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {card.chips.map((c) => (
          <span
            key={c.label}
            className="rounded-full border px-2 py-0.5 text-[10px] font-semibold"
            style={{ borderColor: c.color + "55", color: c.color, backgroundColor: c.color + "15" }}
          >
            {c.label}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between text-[9px] uppercase tracking-wider text-white/30">
        <span className="flex items-center gap-1"><Arrow dir="left" /> Later</span>
        <span className="flex items-center gap-1"><Arrow dir="down" /> Done</span>
        <span className="flex items-center gap-1">Do now <Arrow dir="right" /></span>
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Connect your sources",
      body: "Todoist, Gmail, Google Calendar. One tap each. Your data stays yours — no noisy feeds, no reshuffling.",
    },
    {
      n: "02",
      title: "AI scores everything",
      body: "Claude ranks every task, email, and event by urgency × importance × effort. You see one card: the top one.",
    },
    {
      n: "03",
      title: "Swipe. That's it.",
      body: "Right to do now, left for tomorrow, down to complete, up to delete. Double-tap to break a task into subtasks.",
    },
  ];
  return (
    <section id="how" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <SectionLabel>How it works</SectionLabel>
      <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
        Three steps between you and the <span className="text-[#00D1C1]">next right thing</span>.
      </h2>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7 transition hover:border-[#7B61FF]/40 hover:bg-white/[0.05]"
          >
            <div className="font-mono text-sm text-[#7B61FF]">{s.n}</div>
            <div className="mt-4 text-xl font-bold">{s.title}</div>
            <p className="mt-3 text-white/60">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      title: "Ramble",
      tag: "Brain dump",
      body: "Tap the mic. Talk, don't think. OneThing figures out if you're creating tasks, asking a question, or just venting — then acts.",
      color: "#FF6B6B",
    },
    {
      title: "Focus tiles",
      tag: "After triage",
      body: "Your DO NOW items as a glowing grid. Pick one, finish it, tap done. Nothing else on screen to distract.",
      color: "#00D1C1",
    },
    {
      title: "Chat coach",
      tag: "With 19 tools",
      body: "Open any card into a chat drawer. Claude edits tasks, sends emails, schedules events — all while coaching you through it.",
      color: "#7B61FF",
    },
    {
      title: "Universe view",
      tag: "Life areas",
      body: "A force-directed bubble map of everything you're juggling. See where your attention is really going.",
      color: "#A855F7",
    },
    {
      title: "Personal memory",
      tag: "Learns you",
      body: "Scans your recent data overnight and remembers contacts, routines, and what makes you procrastinate.",
      color: "#F47D31",
    },
    {
      title: "Weekly review",
      tag: "Every Friday",
      body: "AI writes you a one-page summary of the week: wins, patterns, and the three things worth carrying forward.",
      color: "#7B61FF",
    },
  ];

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <SectionLabel>What's inside</SectionLabel>
      <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
        Built for the way an ADHD brain <span className="text-[#7B61FF]">actually</span> works.
      </h2>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <div
            key={f.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-30 blur-3xl transition group-hover:opacity-60"
              style={{ backgroundColor: f.color }}
            />
            <div
              className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-widest"
              style={{ borderColor: f.color + "55", color: f.color }}
            >
              {f.tag}
            </div>
            <div className="mt-4 text-xl font-bold">{f.title}</div>
            <p className="mt-2 text-white/60">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SwipeMap() {
  const rows = [
    { dir: "Right", icon: "→", label: "Do now", tone: "#00D1C1", body: "Added to focus tiles. Starred in Gmail. Kept on today's calendar." },
    { dir: "Left", icon: "←", label: "Later", tone: "#F47D31", body: "Rescheduled tomorrow in Todoist. Snoozed in Gmail." },
    { dir: "Down", icon: "↓", label: "Done", tone: "#7B61FF", body: "Completed in Todoist. Archived in Gmail." },
    { dir: "Up", icon: "↑", label: "Delete", tone: "#FF6B6B", body: "Removed from Todoist. Archived in Gmail. Deleted from Calendar." },
  ];
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <SectionLabel>One gesture, four outcomes</SectionLabel>
      <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
        Every swipe writes back to the source.
      </h2>
      <p className="mt-4 max-w-2xl text-white/60">
        No duplicate to-do lists to maintain. OneThing isn't a new place to put things. It's a new
        way to move through what you already have.
      </p>

      <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
        {rows.map((r, i) => (
          <div
            key={r.dir}
            className={`grid grid-cols-[72px_1fr] items-center gap-5 p-5 md:grid-cols-[90px_200px_1fr] md:p-6 ${
              i !== rows.length - 1 ? "border-b border-white/5" : ""
            }`}
          >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-bold md:h-16 md:w-16"
              style={{ backgroundColor: r.tone + "20", color: r.tone }}
            >
              {r.icon}
            </div>
            <div className="font-bold text-lg md:text-xl">{r.label}</div>
            <div className="col-span-2 text-white/60 md:col-span-1">{r.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#1C1C2E] to-[#0A0A10] p-10 md:p-16">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#7B61FF] opacity-30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#00D1C1] opacity-20 blur-3xl" />

        <div className="relative">
          <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Stop choosing.
            <br />
            <span className="bg-gradient-to-r from-[#7B61FF] to-[#00D1C1] bg-clip-text text-transparent">
              Start moving.
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-white/70 md:text-lg">
            Open OneThing on your phone or laptop. Two minutes later your head is clearer than it's
            been all week.
          </p>
          <div className="mt-8">
            <Waitlist />
          </div>
          <p className="mt-4 text-sm text-white/50">Web today. iOS & Android soon.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 mx-auto flex max-w-6xl flex-col gap-3 px-6 pb-10 pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
      <div>OneThing — made for people with too many tabs open.</div>
      <div className="flex gap-5">
        <a href={APP_URL} className="hover:text-white/80">App</a>
        <a href="#how" className="hover:text-white/80">How it works</a>
      </div>
    </footer>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#7B61FF]">
      <span className="h-px w-8 bg-[#7B61FF]/50" />
      {children}
    </div>
  );
}

function Chip({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span
      className="rounded-full border px-2.5 py-1 text-xs font-semibold"
      style={{ borderColor: color + "55", color, backgroundColor: color + "15" }}
    >
      {children}
    </span>
  );
}

function Arrow({ dir }: { dir: "left" | "right" | "up" | "down" }) {
  const rotate = { left: 180, right: 0, up: -90, down: 90 }[dir];
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ transform: `rotate(${rotate}deg)` }}>
      <path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Tick() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#00D1C1]">
      <path d="m5 12 4 4 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BackgroundBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="blob-1 absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-[#7B61FF] opacity-20 blur-[140px]" />
      <div className="blob-2 absolute right-[-200px] top-[10%] h-[440px] w-[440px] rounded-full bg-[#00D1C1] opacity-[0.14] blur-[160px]" />
      <div className="blob-1 absolute -left-20 top-[60%] h-[380px] w-[380px] rounded-full bg-[#A855F7] opacity-[0.12] blur-[140px]" />
    </div>
  );
}
