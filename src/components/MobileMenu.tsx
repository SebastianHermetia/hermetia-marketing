"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";

export type NavItem = { href: string; label: string; key: string };

type Props = {
  items: NavItem[];
  loginLabel: string;
  loginHref: string;
  menuOpenLabel: string;
  menuCloseLabel: string;
  locale: Locale;
};

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileMenu({ items, loginLabel, loginHref, menuOpenLabel, menuCloseLabel, locale }: Props) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname() || `/${locale}/`;

  function swapLocale(target: Locale): string {
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length === 0) return `/${target}/`;
    parts[0] = target;
    return "/" + parts.join("/") + "/";
  }

  function closeMenu() {
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }

  // Close drawer when viewport reaches lg breakpoint (1024px)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) closeMenu();
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Focus trap + Escape key when drawer is open
  useEffect(() => {
    if (!open) return;
    const drawer = document.getElementById("mobile-menu-drawer");

    // Move focus to first focusable element in drawer
    const firstFocusable = drawer?.querySelector<HTMLElement>(FOCUSABLE);
    firstFocusable?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }
      if (e.key !== "Tab" || !drawer) return;
      const focusable = Array.from(drawer.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      {/* Hamburger button — visible only below lg, toggles drawer open/closed */}
      <button
        ref={triggerRef}
        type="button"
        className="flex flex-col items-center justify-center gap-[5px] rounded-lg p-2.5 text-aubergine lg:hidden"
        aria-label={open ? menuCloseLabel : menuOpenLabel}
        aria-expanded={open}
        aria-controls="mobile-menu-drawer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="block h-0.5 w-5 bg-aubergine" />
        <span className="block h-0.5 w-5 bg-aubergine" />
        <span className="block h-0.5 w-5 bg-aubergine" />
      </button>

      {/* Backdrop — closes drawer on click */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-aubergine/40 lg:hidden"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}

      {/* Drawer — inert when closed to remove from tab order */}
      <div
        id="mobile-menu-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        // @ts-expect-error — inert is a valid HTML attribute, TS DOM types lag behind
        inert={open ? undefined : ""}
        className={`fixed inset-y-0 right-0 z-50 flex w-4/5 max-w-xs flex-col bg-creme shadow-soft transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header — title is used as aria-labelledby target */}
        <div className="flex shrink-0 items-center justify-between border-b border-sand px-5 py-4">
          <span id="mobile-menu-title" className="font-serif text-[18px] text-aubergine">
            Hermetia
          </span>
          <button
            type="button"
            className="min-h-[44px] min-w-[44px] rounded-lg p-2.5 text-tinte/60 hover:bg-sand/40 hover:text-aubergine"
            aria-label={menuCloseLabel}
            onClick={closeMenu}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4" aria-label="Hauptnavigation">
          {items.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="rounded-lg px-4 py-3 text-[15px] font-medium text-aubergine no-underline hover:bg-sand/40"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Drawer footer: locale chips + login */}
        <div className="shrink-0 border-t border-sand px-4 pb-6 pt-4">
          <div className="mb-3 flex flex-wrap gap-1.5">
            {locales.map((l) => (
              <Link
                key={l}
                href={swapLocale(l)}
                title={localeNames[l]}
                hrefLang={l}
                className={`rounded-md px-2 py-1 text-[11px] font-semibold uppercase no-underline ${
                  l === locale
                    ? "bg-aubergine text-gold-weich"
                    : "text-tinte/60 hover:bg-sand/40 hover:text-aubergine"
                }`}
                onClick={closeMenu}
              >
                {l}
              </Link>
            ))}
          </div>
          <a
            href={loginHref}
            className="btn btn-ghost w-full text-center"
            onClick={closeMenu}
          >
            {loginLabel}
          </a>
        </div>
      </div>
    </>
  );
}
