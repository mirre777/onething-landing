"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim() || status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setMessage(data?.error || "Could not save your email. Try again.");
        return;
      }
      setStatus("success");
      setMessage(data?.duplicate ? "You're already on the list." : "You're in. We'll email you when it's your turn.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-2">
      <div className="flex w-full flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          inputMode="email"
          autoComplete="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-base text-white placeholder-white/40 outline-none backdrop-blur transition focus:border-white/40 focus:bg-white/10"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-[#7B61FF] px-6 py-3.5 text-base font-bold text-white shadow-[0_10px_40px_-10px_rgba(123,97,255,0.9)] transition hover:shadow-[0_10px_60px_-5px_rgba(123,97,255,1)] disabled:opacity-60"
        >
          {status === "loading" ? "..." : "Join waitlist"}
        </button>
      </div>
      {message && (
        <p
          className={`text-sm ${status === "success" ? "text-[#00D1C1]" : "text-red-300"}`}
          role="status"
        >
          {message}
        </p>
      )}
    </form>
  );
}
