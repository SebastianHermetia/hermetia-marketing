"use client";

import { useState } from "react";
import { appUrl, type Locale } from "@/i18n/config";

type Copy = {
  emailLabel: string;
  emailPlaceholder: string;
  submit: string;
  loading: string;
  approved: string;
  requested: string;
  error: string;
  privacy: string;
};

export function BetaAccessForm({ locale, copy }: { locale: Locale; copy: Copy }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "approved" | "requested" | "error">("idle");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    try {
      const params = new URLSearchParams(window.location.search);
      const response = await fetch(`${appUrl}/api/beta/check`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          locale,
          source_path: window.location.pathname,
          utm_source: params.get("utm_source"),
          utm_medium: params.get("utm_medium"),
          utm_campaign: params.get("utm_campaign"),
        }),
      });
      if (!response.ok) throw new Error("beta_check_failed");
      const data = await response.json() as { status: string; beta_token?: string; locale?: string };
      if (data.status === "approved" && data.beta_token) {
        setStatus("approved");
        const onboarding = new URL(`${appUrl}/onboarding`);
        onboarding.searchParams.set("lang", data.locale ?? locale);
        onboarding.searchParams.set("beta_token", data.beta_token);
        window.location.href = onboarding.toString();
        return;
      }
      setStatus("requested");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="mt-8 rounded-2xl border border-sand bg-white p-5 shadow-sm">
      <label className="label" htmlFor="beta-email">{copy.emailLabel}</label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <input
          id="beta-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={copy.emailPlaceholder}
          className="min-h-12 flex-1 rounded-xl border border-sand px-4 text-[15px] outline-none focus:border-aubergine"
        />
        <button className="btn btn-primary min-h-12 justify-center" disabled={status === "loading"}>
          {status === "loading" ? copy.loading : copy.submit}
        </button>
      </div>
      <p className="mt-3 text-sm text-tinte/65">{copy.privacy}</p>
      {status === "approved" && <p className="mt-4 text-sm font-semibold text-aubergine">{copy.approved}</p>}
      {status === "requested" && <p className="mt-4 text-sm font-semibold text-aubergine">{copy.requested}</p>}
      {status === "error" && <p className="mt-4 text-sm font-semibold text-red-700">{copy.error}</p>}
    </form>
  );
}
