import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { tr } from "@/i18n/html-translations";
import { localePath } from "@/lib/links";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ locale, items }: { locale: Locale; items: BreadcrumbItem[] }) {
  const trail: BreadcrumbItem[] = [{ label: "Astrakey", href: "/" }, ...items];

  return (
    <nav aria-label={tr(locale, "Seitenpfad")} className="mb-6 text-[13px] text-tinte/60">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {trail.map((item, index) => {
          const isLast = index === trail.length - 1;
          const href = item.href ? localePath(locale, item.href) : undefined;
          return (
            <li key={`${item.label}-${index}`} className="flex min-w-0 items-center gap-2">
              {index > 0 ? <span className="text-gold/70" aria-hidden>/</span> : null}
              {href && !isLast ? (
                <Link href={href} className="truncate no-underline hover:text-aubergine">
                  {item.label}
                </Link>
              ) : (
                <span className="truncate text-aubergine">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
