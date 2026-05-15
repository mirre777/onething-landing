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

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={APP_URL}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-[#0A0A10] shadow-[0_0_40px_rgba(255,255,255,0.25)] transition hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
          >
            Open OneThing
            <Arrow dir="right" />
          </a>
          <a
            href="#how"
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
          >
            How it works
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-white/50">
          <Tick /> No feeds. No streaks. No nagging.
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
      visual: <SourcesVisual />,
    },
    {
      n: "02",
      title: "AI scores everything",
      body: "Claude ranks every task, email, and event by urgency × importance × effort. You see one card: the top one.",
      visual: <ScoringVisual />,
    },
    {
      n: "03",
      title: "Swipe. That's it.",
      body: "Right to do now, left for tomorrow, down to complete, up to delete. Double-tap to break a task into subtasks.",
      visual: <SwipeVisual />,
    },
  ];
  return (
    <section id="how" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <SectionLabel>How it works</SectionLabel>
      <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
        Three steps between you and the <span className="text-[#00D1C1]">next right thing</span>.
      </h2>

      <div className="relative mt-16">
        {/* Connection line — only on md+ */}
        <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-[64px] hidden md:block">
          <div className="relative h-px w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7B61FF]/0 via-[#7B61FF]/60 to-[#7B61FF]/0" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A855F7]/40 to-transparent" />
            <div className="connection-flow absolute -inset-y-[3px] h-[7px] w-24 rounded-full bg-gradient-to-r from-transparent via-[#00D1C1] to-transparent blur-[2px]" />
          </div>
          {/* Connection nodes (dots above line at each step center) */}
          <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7B61FF] shadow-[0_0_12px_#7B61FF]" />
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A855F7] shadow-[0_0_12px_#A855F7]" />
          <div className="absolute right-0 top-1/2 h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00D1C1] shadow-[0_0_12px_#00D1C1]" />
        </div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative flex flex-col items-center text-center">
              <div className="relative flex h-[128px] w-[128px] items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7B61FF]/25 via-transparent to-[#00D1C1]/20 blur-2xl" />
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-[#1C1C2E] via-[#141420] to-[#0A0A10] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]">
                  {s.visual}
                </div>
              </div>

              <div className="mt-6 font-mono text-sm text-[#7B61FF]">{s.n}</div>
              <div className="mt-2 text-xl font-bold">{s.title}</div>
              <p className="mt-3 max-w-xs text-white/60">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SourcesVisual() {
  // Three stacked source chips with their brand dots
  const srcs = [
    { name: "Todoist", color: "#F47D31" },
    { name: "Gmail", color: "#FF6B6B" },
    { name: "Calendar", color: "#00D1C1" },
  ];
  return (
    <div className="flex flex-col gap-1.5">
      {srcs.map((s, i) => (
        <div
          key={s.name}
          className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1"
          style={{ animation: `source-pop 4s ${i * 0.2}s ease-in-out infinite` }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: s.color, boxShadow: `0 0 6px ${s.color}` }} />
          <span className="text-[9px] font-semibold tracking-wide text-white/80">{s.name}</span>
        </div>
      ))}
    </div>
  );
}

function ScoringVisual() {
  // Stacked tiny cards with score numbers — top one glows
  return (
    <div className="relative h-16 w-16">
      <div className="absolute left-1 top-3 h-10 w-14 rounded-md border border-white/10 bg-white/[0.04]" />
      <div className="absolute left-0 top-1.5 h-10 w-14 rounded-md border border-white/15 bg-white/[0.06]" />
      <div className="absolute left-[-2px] top-0 h-10 w-14 rounded-md border border-[#A855F7]/40 bg-gradient-to-br from-[#1C1C2E] to-[#0A0A10] shadow-[0_0_16px_rgba(168,85,247,0.4)]">
        <div className="flex h-full flex-col justify-between p-1.5">
          <div className="flex items-center justify-between text-[7px] font-bold uppercase tracking-wider text-white/50">
            <span className="flex items-center gap-0.5">
              <span className="h-1 w-1 rounded-full bg-[#F47D31]" />
              top
            </span>
          </div>
          <div className="text-[13px] font-extrabold leading-none text-[#00D1C1]">94</div>
        </div>
      </div>
    </div>
  );
}

function SwipeVisual() {
  // Mini card with directional arrows on four sides
  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 text-[#FF6B6B]/70" style={{ animation: "swipe-hint-up 3.2s ease-in-out infinite" }}>
        <Arrow dir="up" />
      </div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[#F47D31]/70" style={{ animation: "swipe-hint-left 3.2s 0.8s ease-in-out infinite" }}>
        <Arrow dir="left" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[#00D1C1]/80" style={{ animation: "swipe-hint-right 3.2s 1.6s ease-in-out infinite" }}>
        <Arrow dir="right" />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[#7B61FF]/70" style={{ animation: "swipe-hint-down 3.2s 2.4s ease-in-out infinite" }}>
        <Arrow dir="down" />
      </div>
      <div className="relative h-9 w-7 rounded-md border border-white/20 bg-gradient-to-br from-[#1C1C2E] to-[#0A0A10] shadow-[0_4px_12px_rgba(0,0,0,0.6)]" />
    </div>
  );
}

function Features() {
  const items = [
    {
      title: "Ramble",
      tag: "Brain dump",
      body: "Tap the mic. Talk, don't think. OneThing figures out if you're creating tasks, asking a question, or just venting — then acts.",
      color: "#FF6B6B",
      visual: <RambleMini />,
    },
    {
      title: "Focus tiles",
      tag: "After triage",
      body: "Your DO NOW items as a glowing grid. Pick one, finish it, tap done. Nothing else on screen to distract.",
      color: "#00D1C1",
      visual: <FocusTilesMini />,
    },
    {
      title: "Chat coach",
      tag: "With 19 tools",
      body: "Open any card into a chat drawer. Claude edits tasks, sends emails, schedules events — all while coaching you through it.",
      color: "#7B61FF",
      visual: <ChatCoachMini />,
    },
    {
      title: "Universe view",
      tag: "Life areas",
      body: "A force-directed bubble map of everything you're juggling. See where your attention is really going.",
      color: "#A855F7",
      visual: <UniverseMini />,
    },
    {
      title: "Personal memory",
      tag: "Learns you",
      body: "Scans your recent data overnight and remembers contacts, routines, and what makes you procrastinate.",
      color: "#F47D31",
      visual: <MemoryMini />,
    },
    {
      title: "Weekly review",
      tag: "Every Friday",
      body: "AI writes you a one-page summary of the week: wins, patterns, and the three things worth carrying forward.",
      color: "#7B61FF",
      visual: <WeeklyReviewMini />,
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
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-white/20"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-30 blur-3xl transition group-hover:opacity-60"
              style={{ backgroundColor: f.color }}
            />

            {/* Visual preview */}
            <div
              className="relative h-[180px] overflow-hidden border-b border-white/5"
              style={{
                background: `linear-gradient(135deg, ${f.color}10 0%, transparent 60%), radial-gradient(ellipse at top right, ${f.color}18, transparent 65%)`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {f.visual}
              </div>
            </div>

            <div className="relative p-6">
              <div
                className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-widest"
                style={{ borderColor: f.color + "55", color: f.color }}
              >
                {f.tag}
              </div>
              <div className="mt-4 text-xl font-bold">{f.title}</div>
              <p className="mt-2 text-white/60">{f.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RambleMini() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#A855F7] shadow-[0_0_30px_rgba(255,107,107,0.5)]">
        <div className="absolute inset-0 rounded-full bg-[#FF6B6B] opacity-40" style={{ animation: "mic-pulse 1.8s ease-in-out infinite" }} />
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="relative z-10 text-white">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" fill="currentColor" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" x2="12" y1="19" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex items-end gap-0.5">
        {[14, 28, 42, 22, 36, 18, 32, 24, 12, 30, 20].map((h, i) => (
          <span
            key={i}
            className="w-[3px] rounded-full bg-gradient-to-t from-[#FF6B6B] to-[#A855F7]"
            style={{
              height: `${h}px`,
              animation: `wave 1.2s ${i * 0.07}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function FocusTilesMini() {
  const tiles = [
    { label: "Q2 deck", color: "#00D1C1", lit: true },
    { label: "Email mum", color: "#7B61FF", lit: false },
    { label: "Standup", color: "#F47D31", lit: false },
    { label: "Review PR", color: "#A855F7", lit: true },
  ];
  return (
    <div className="grid grid-cols-2 gap-2">
      {tiles.map((t, i) => (
        <div
          key={t.label}
          className="flex h-14 w-20 items-center justify-center rounded-xl border text-[10px] font-bold"
          style={{
            borderColor: t.color + (t.lit ? "AA" : "30"),
            backgroundColor: t.color + (t.lit ? "25" : "08"),
            color: t.lit ? "#fff" : t.color + "AA",
            boxShadow: t.lit ? `0 0 20px ${t.color}55, inset 0 0 12px ${t.color}25` : "none",
            animation: `tile-glow 3s ${i * 0.4}s ease-in-out infinite`,
          }}
        >
          {t.label}
        </div>
      ))}
    </div>
  );
}

function ChatCoachMini() {
  return (
    <div className="flex w-full max-w-[240px] flex-col gap-1.5">
      <div className="self-end rounded-2xl rounded-tr-sm bg-white/10 px-3 py-1.5 text-[10px] text-white/80">
        Help me get unstuck.
      </div>
      <div className="self-start rounded-2xl rounded-tl-sm bg-[#7B61FF]/20 px-3 py-1.5 text-[10px] text-white/90">
        Splitting into 3 subtasks…
      </div>
      <div className="mt-1 flex gap-1.5 self-start">
        <span className="rounded-full border border-[#7B61FF]/40 bg-[#7B61FF]/10 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[#7B61FF]">
          edit task
        </span>
        <span className="rounded-full border border-[#00D1C1]/40 bg-[#00D1C1]/10 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[#00D1C1]">
          send email
        </span>
      </div>
    </div>
  );
}

function UniverseMini() {
  const nodes = [
    { x: 50, y: 30, r: 14, color: "#A855F7", label: "Work" },
    { x: 22, y: 60, r: 10, color: "#00D1C1", label: "Home" },
    { x: 78, y: 62, r: 12, color: "#F47D31", label: "Family" },
    { x: 38, y: 88, r: 8, color: "#FF6B6B", label: "Health" },
    { x: 66, y: 90, r: 7, color: "#7B61FF" },
  ];
  return (
    <svg viewBox="0 0 100 110" className="h-[140px] w-[180px]">
      {/* Connection lines */}
      <line x1="50" y1="30" x2="22" y2="60" stroke="#ffffff20" strokeWidth="0.5" />
      <line x1="50" y1="30" x2="78" y2="62" stroke="#ffffff20" strokeWidth="0.5" />
      <line x1="22" y1="60" x2="38" y2="88" stroke="#ffffff20" strokeWidth="0.5" />
      <line x1="78" y1="62" x2="66" y2="90" stroke="#ffffff20" strokeWidth="0.5" />
      <line x1="38" y1="88" x2="66" y2="90" stroke="#ffffff20" strokeWidth="0.5" />
      {nodes.map((n, i) => (
        <g key={i} style={{ animation: `bubble-drift 6s ${i * 0.5}s ease-in-out infinite`, transformOrigin: `${n.x}px ${n.y}px` }}>
          <circle cx={n.x} cy={n.y} r={n.r + 2} fill={n.color} opacity="0.15" />
          <circle cx={n.x} cy={n.y} r={n.r} fill={n.color} opacity="0.55" />
          {n.label && (
            <text x={n.x} y={n.y + 1} textAnchor="middle" fontSize="4" fontWeight="700" fill="#fff">
              {n.label}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}

function MemoryMini() {
  const facts = [
    { label: "Mum → Sundays only", color: "#F47D31" },
    { label: "Standup at 10:00", color: "#00D1C1" },
    { label: "Procrastinates on decks", color: "#A855F7" },
  ];
  return (
    <div className="flex flex-col gap-1.5">
      {facts.map((f, i) => (
        <div
          key={f.label}
          className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.05] px-2.5 py-1.5 backdrop-blur"
          style={{ animation: `fact-fade 4s ${i * 0.3}s ease-in-out infinite` }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: f.color, boxShadow: `0 0 6px ${f.color}` }} />
          <span className="text-[10px] font-medium text-white/85">{f.label}</span>
        </div>
      ))}
    </div>
  );
}

function WeeklyReviewMini() {
  return (
    <div className="relative h-[140px] w-[110px] rounded-md border border-white/15 bg-gradient-to-br from-[#1C1C2E] to-[#0A0A10] p-2.5 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between text-[7px] font-bold uppercase tracking-wider text-[#7B61FF]">
        <span>Week 19</span>
        <span className="text-white/30">Fri</span>
      </div>
      <div className="mt-1.5 text-[9px] font-extrabold leading-tight text-white">Your week, summed</div>
      <div className="mt-2 space-y-1">
        <div className="flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-[#00D1C1]" />
          <span className="h-[3px] w-12 rounded-full bg-white/40" />
        </div>
        <div className="flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-[#00D1C1]" />
          <span className="h-[3px] w-16 rounded-full bg-white/40" />
        </div>
        <div className="flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-[#F47D31]" />
          <span className="h-[3px] w-10 rounded-full bg-white/30" />
        </div>
        <div className="flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-[#F47D31]" />
          <span className="h-[3px] w-14 rounded-full bg-white/30" />
        </div>
      </div>
      <div className="mt-2 border-t border-white/10 pt-1.5">
        <div className="text-[6px] font-bold uppercase tracking-wider text-[#7B61FF]/80">Carry forward</div>
        <div className="mt-1 space-y-0.5">
          <span className="block h-[3px] w-full rounded-full bg-white/30" />
          <span className="block h-[3px] w-3/4 rounded-full bg-white/30" />
          <span className="block h-[3px] w-2/3 rounded-full bg-white/30" />
        </div>
      </div>
    </div>
  );
}

function SwipeMap() {
  const outputs = [
    {
      kind: "Task",
      kindColor: "#F47D31",
      title: "Call mum about Sunday",
      meta: "Todoist · personal",
      chips: [{ label: "personal", color: "#00D1C1" }, { label: "today", color: "#FF6B6B" }],
    },
    {
      kind: "Task",
      kindColor: "#F47D31",
      title: "Finish Q2 deck",
      meta: "Todoist · work · 2h",
      chips: [{ label: "deep focus", color: "#A855F7" }, { label: "deadline", color: "#7B61FF" }],
    },
    {
      kind: "Email draft",
      kindColor: "#FF6B6B",
      title: "Re: Thursday meeting — Pieter",
      meta: "Gmail · draft ready",
      chips: [{ label: "ready to send", color: "#00D1C1" }],
    },
  ];

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <SectionLabel>Just talk</SectionLabel>
      <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
        Ramble it out. We turn it into <span className="bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] bg-clip-text text-transparent">cards</span>.
      </h2>
      <p className="mt-4 max-w-2xl text-white/60">
        Tap the mic and say what's in your head. OneThing figures out what's a task, what's an email
        to draft, what's just venting — then makes the cards. No typing. No structuring. Just talk.
      </p>

      <div className="relative mt-16 grid items-center gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-6">
        {/* Left — Ramble sheet */}
        <div className="relative mx-auto w-full max-w-[360px]">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-[#FF6B6B]/20 via-transparent to-[#A855F7]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#1C1C2E] via-[#141420] to-[#0A0A10] p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-white/60">Ramble</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-[#FF6B6B]/40 bg-[#FF6B6B]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FF6B6B]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B6B]" style={{ animation: "mic-pulse 1.4s ease-in-out infinite" }} />
                rec
              </div>
            </div>

            {/* Waveform */}
            <div className="mt-6 flex h-16 items-end justify-center gap-[3px]">
              {[18, 32, 50, 26, 44, 22, 56, 38, 48, 28, 42, 30, 52, 24, 36, 20, 46, 34, 40, 26].map((h, i) => (
                <span
                  key={i}
                  className="w-[3px] rounded-full bg-gradient-to-t from-[#FF6B6B] via-[#A855F7] to-[#7B61FF]"
                  style={{
                    height: `${h}px`,
                    animation: `wave 1.4s ${i * 0.05}s ease-in-out infinite`,
                  }}
                />
              ))}
            </div>

            {/* Live transcript */}
            <div className="mt-6 space-y-2 text-sm leading-relaxed text-white/85">
              <p>
                <span className="text-white/50">"Okay so</span> I need to call mum back about Sunday,
                <span className="text-white/50"> and</span> finish the Q2 deck today<span className="text-white/50">,</span>
              </p>
              <p>
                also email Pieter about the Thursday meeting<span className="text-white/50">,</span>
                <span className="text-white/40"> ugh I always forget that one</span><span className="text-white/50">…"</span>
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">0:14</span>
              <span className="rounded-full bg-[#7B61FF] px-4 py-1.5 text-xs font-bold text-white shadow-[0_0_24px_rgba(123,97,255,0.6)]">
                Sort it
              </span>
            </div>
          </div>
        </div>

        {/* Middle — animated connector */}
        <div className="relative flex h-full items-center justify-center">
          {/* Horizontal arrow (md+) */}
          <div className="relative hidden h-px w-24 md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/40 via-[#A855F7] to-[#00D1C1]/40" />
            <div className="connection-flow absolute -inset-y-[3px] h-[7px] w-12 rounded-full bg-gradient-to-r from-transparent via-[#00D1C1] to-transparent blur-[2px]" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="absolute -right-2 -top-[7px] text-[#00D1C1]">
              <path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {/* Vertical arrow on mobile */}
          <div className="flex flex-col items-center gap-2 md:hidden">
            <div className="h-12 w-px bg-gradient-to-b from-[#FF6B6B]/40 via-[#A855F7] to-[#00D1C1]/40" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#00D1C1]" style={{ transform: "rotate(90deg)" }}>
              <path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Right — output cards */}
        <div className="relative mx-auto w-full max-w-[380px] space-y-3">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-[#00D1C1]/20 via-transparent to-[#7B61FF]/20 blur-3xl" />

          {outputs.map((c, i) => (
            <div
              key={c.title}
              className="relative rounded-2xl border border-white/15 bg-gradient-to-br from-[#1C1C2E] via-[#141420] to-[#0A0A10] p-4 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.7)]"
              style={{
                animation: `card-arrive 4s ${i * 0.5}s ease-out infinite`,
                opacity: 0,
              }}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c.kindColor, boxShadow: `0 0 6px ${c.kindColor}` }} />
                  {c.kind}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-white/30">from ramble</span>
              </div>

              <div className="mt-2 text-sm font-bold leading-tight">{c.title}</div>
              <div className="mt-1 text-[11px] text-white/50">{c.meta}</div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.chips.map((chip) => (
                  <span
                    key={chip.label}
                    className="rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                    style={{ borderColor: chip.color + "55", color: chip.color, backgroundColor: chip.color + "12" }}
                  >
                    {chip.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Below — the four swipe actions, compact */}
      <div className="mt-20">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">And every swipe writes back to the source</div>
        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { dir: "right" as const, label: "Do now", tone: "#00D1C1", body: "Focus tiles · Starred · Kept on calendar" },
            { dir: "left" as const,  label: "Later",  tone: "#F47D31", body: "Rescheduled · Snoozed in Gmail" },
            { dir: "down" as const,  label: "Done",   tone: "#7B61FF", body: "Completed · Archived" },
            { dir: "up" as const,    label: "Delete", tone: "#FF6B6B", body: "Removed · Archived · Cleared" },
          ].map((r) => (
            <div
              key={r.label}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{ backgroundColor: r.tone + "20", color: r.tone }}
              >
                <Arrow dir={r.dir} />
              </div>
              <div className="mt-3 text-sm font-bold">{r.label}</div>
              <div className="mt-1 text-[11px] text-white/50">{r.body}</div>
            </div>
          ))}
        </div>
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
            <a
              href={APP_URL}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-extrabold text-[#0A0A10] shadow-[0_0_50px_rgba(255,255,255,0.3)] transition hover:scale-[1.02] hover:shadow-[0_0_70px_rgba(255,255,255,0.45)]"
            >
              Open OneThing
              <Arrow dir="right" />
            </a>
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
      <div className="flex flex-wrap gap-5">
        <a href={APP_URL} className="hover:text-white/80">App</a>
        <a href="#how" className="hover:text-white/80">How it works</a>
        <a href="https://1thing.day/privacy" className="hover:text-white/80">Privacy</a>
        <a href="https://1thing.day/terms" className="hover:text-white/80">Terms</a>
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
