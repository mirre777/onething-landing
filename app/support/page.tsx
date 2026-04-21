import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — OneThing",
  description: "Get in touch with the OneThing team.",
};

const CONTACT = "mirresnelting@gmail.com";

export default function SupportPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundBlobs />

      <nav className="relative z-20 mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7B61FF] text-white shadow-[0_0_24px_rgba(123,97,255,0.6)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 12h8M4 7h12M4 17h6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-lg">OneThing</span>
        </a>
        <a
          href="/"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
        >
          Home
        </a>
      </nav>

      <section className="relative z-10 mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Support</h1>
        <p className="mt-4 text-white/70 md:text-lg">
          Something broken, confusing, or missing? Email us. One person reads every message, usually
          replies within two working days.
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7B61FF]">
            Contact
          </div>
          <a
            href={`mailto:${CONTACT}?subject=OneThing%20support`}
            className="mt-3 inline-block text-2xl font-bold text-white hover:text-[#7B61FF] transition"
          >
            {CONTACT}
          </a>
          <p className="mt-4 text-sm text-white/60">
            Include your OneThing account email, the device (web / iPhone / Android), and a short
            description of what happened. Screenshots help.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card title="Bug report">
            Tell us what you were doing, what you expected, and what actually happened. If it
            crashed, the timestamp helps us find it in logs.
          </Card>
          <Card title="Feature request">
            We read every idea. The ones that make it in tend to be specific — "I want X when Y
            happens" beats "please add AI".
          </Card>
          <Card title="Account or billing">
            Include the email on the account. We can delete your data on request; confirmation
            takes under 24 hours.
          </Card>
          <Card title="Privacy & data">
            <a href="/privacy" className="text-[#7B61FF] hover:underline">
              Read the privacy policy
            </a>{" "}
            or email us to request an export or deletion of everything tied to your account.
          </Card>
        </div>

        <div className="mt-10 text-sm text-white/40">
          <a href="/privacy" className="hover:text-white/70">Privacy</a>
          <span className="mx-3">·</span>
          <a href="/terms" className="hover:text-white/70">Terms</a>
        </div>
      </section>
    </main>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <div className="text-base font-bold">{title}</div>
      <div className="mt-2 text-sm text-white/60">{children}</div>
    </div>
  );
}

function BackgroundBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-[#7B61FF] opacity-20 blur-[140px]" />
      <div className="absolute right-[-200px] top-[10%] h-[440px] w-[440px] rounded-full bg-[#00D1C1] opacity-[0.14] blur-[160px]" />
    </div>
  );
}
