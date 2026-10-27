import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import logoImage from "../assets/brand-logo.svg";
import { useI18n } from "../i18n";
import type { RoutePath } from "../types";
import { RouteLink } from "./RouteLink";
import { bodyCopyClass, primaryButtonClass, shellClass } from "./ui/ui";

type SiteShellProps = {
  children: ReactNode;
  currentPath: RoutePath;
  navigate: (path: RoutePath) => void;
};

const languageOptions = [
  { code: "ku", label: "KU" },
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
] as const;

export function SiteShell({ children, currentPath, navigate }: SiteShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { content, language, setLanguage, isRTL } = useI18n();
  const { shell, site } = content;

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath, language]);

  return (
    <div className="min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      <header className="site-header sticky top-0 z-40 backdrop-blur-xl">
        <div className="w-full px-4 py-2.5 sm:px-6 lg:px-10">
          <div className="grid min-w-0 gap-3">
            <div className="flex min-w-0 items-center justify-between gap-3 py-1 xl:hidden">
              <button
                type="button"
                className={`inline-flex min-w-0 items-center gap-3 bg-transparent p-0 ${isRTL ? "text-right" : "text-left"}`}
                onClick={() => navigate("/")}
                aria-label="Go to home page"
              >
                <span className="flex brand-logo h-12 w-14 shrink-0 items-center justify-center">
                  <img
                    src={logoImage}
                    alt={shell.brand}
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="min-w-0">
                  <strong className="block truncate text-sm font-semibold text-[color:var(--brand-ink)]">
                    {shell.brand}
                  </strong>
                  <span className="block truncate text-xs text-[color:var(--brand-muted)]">
                    {shell.mobileTagline}
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-cream)]"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>

            <div className="hidden min-h-16 items-center gap-8 xl:flex">
              <button
                type="button"
                className="flex shrink-0 items-center gap-3 bg-transparent p-0"
                onClick={() => navigate("/")}
                aria-label="Go to home page"
              >
                <span className="brand-logo block h-14 w-16">
                  <img src={logoImage} alt={shell.brand} />
                </span>
                <strong className="whitespace-nowrap text-base font-semibold text-[color:var(--brand-ink)]">
                  {shell.brand}
                </strong>
              </button>

              <nav className="flex flex-1 flex-nowrap items-center justify-center gap-7" aria-label="Primary">
                {site.siteNavigation.map((item) => (
                  <RouteLink
                    key={item.path}
                    className={`header-nav-link inline-flex min-h-11 shrink-0 items-center whitespace-nowrap text-sm font-medium transition-colors ${
                      currentPath === item.path
                        ? "text-[color:var(--brand-green)]"
                        : "text-[color:var(--brand-muted)] hover:text-[color:var(--brand-green)]"
                    }`}
                    currentPath={currentPath}
                    path={item.path}
                    navigate={navigate}
                  >
                    {item.label}
                  </RouteLink>
                ))}
              </nav>

              <div className="flex shrink-0 items-center gap-5">
                <div className="flex items-center gap-0.5" role="group" aria-label={shell.language}>
                  {languageOptions.map((option) => (
                    <button
                      key={option.code}
                      type="button"
                      onClick={() => setLanguage(option.code)}
                      className={`inline-flex h-8 min-w-8 items-center justify-center rounded-md px-1.5 text-[0.7rem] font-semibold transition-colors ${
                        language === option.code
                          ? "bg-[color:var(--brand-green)]/8 text-[color:var(--brand-green)]"
                          : "text-[color:var(--brand-muted)] hover:text-[color:var(--brand-green)]"
                      }`}
                      aria-label={`${shell.language}: ${option.label}`}
                      aria-pressed={language === option.code}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                <RouteLink
                  className="inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[color:var(--brand-primary)] px-4 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--brand-primary-deep)]"
                  currentPath={currentPath}
                  path="/contact"
                  navigate={navigate}
                >
                  {shell.bookAppointment}
                </RouteLink>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 xl:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-slate-950/35 transition duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation menu"
        />

        <aside
          className={`absolute top-0 h-full w-[min(360px,88vw)] border-l border-[color:var(--brand-line)] bg-[color:var(--brand-cream)] overflow-y-auto px-5 py-5 shadow-[-24px_0_50px_rgba(14,55,39,0.18)] transition duration-300 ${
            isRTL ? "left-0 border-l-0 border-r" : "right-0"
          } ${menuOpen ? "translate-x-0" : isRTL ? "-translate-x-full" : "translate-x-full"}`}
        >
          <div className="flex h-full flex-col gap-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex brand-logo h-16 w-18 shrink-0 items-center justify-center overflow-hidden rounded-[18px] border border-[color:var(--brand-line)] bg-white shadow-[0_14px_24px_rgba(14,55,39,0.1)]">
                  <img
                    src={logoImage}
                    alt={shell.brand}
                    className="h-full w-full object-contain"
                  />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[color:var(--brand-ink)]">
                    {shell.brand}
                  </p>
                  <p className="mt-1 text-xs text-[color:var(--brand-muted)]">
                    {shell.mobileTagline}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--brand-line)] bg-white text-[color:var(--brand-ink)] shadow-[0_10px_22px_rgba(14,55,39,0.08)]"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="rounded-[24px] border border-[color:var(--brand-line)] bg-white/84 p-4 shadow-[0_14px_28px_rgba(14,55,39,0.08)]">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">
                {shell.specialtyScope}
              </p>
              <p className="mt-2 text-sm text-[color:var(--brand-copy)]">
                {shell.specialtySummary}
              </p>
              <div className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-[color:var(--brand-line)] bg-[color:var(--brand-primary)]/6 px-3.5 text-sm text-[color:var(--brand-copy)]">
                <Phone className="h-4 w-4 text-[color:var(--brand-primary)]" />
                <span>{shell.phone}</span>
              </div>
              <div className="mt-4 inline-flex items-center gap-1 rounded-full border border-[color:var(--brand-line)] bg-white p-1">
                {languageOptions.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => setLanguage(option.code)}
                    className={`inline-flex h-9 min-w-10 items-center justify-center rounded-full px-3 text-xs font-semibold transition duration-200 ${
                      language === option.code
                        ? "bg-[color:var(--brand-green)] text-white"
                        : "text-[color:var(--brand-copy)] hover:bg-[color:var(--brand-primary)]/8"
                    }`}
                    aria-label={`${shell.language}: ${option.label}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <nav className="grid gap-2" aria-label="Mobile primary">
              {site.siteNavigation.map((item) => {
                const isActive = currentPath === item.path;

                return (
                  <RouteLink
                    key={item.path}
                    className={`grid gap-1 rounded-[22px] border px-4 py-3.5 transition duration-200 ${
                      isActive
                        ? "border-transparent bg-[color:var(--brand-green)] text-white shadow-[0_16px_28px_rgba(192,34,39,0.18)]"
                        : "border-[color:var(--brand-line)] bg-white/84 text-[color:var(--brand-ink)] shadow-[0_10px_24px_rgba(14,55,39,0.06)]"
                    }`}
                    currentPath={currentPath}
                    path={item.path}
                    navigate={navigate}
                  >
                    <span className="font-semibold">{item.label}</span>
                    <small
                      className={`leading-[1.55] ${
                        isActive ? "text-white/82" : "text-[color:var(--brand-muted)]"
                      }`}
                    >
                      {item.summary}
                    </small>
                  </RouteLink>
                );
              })}
            </nav>

            <div className="mt-auto grid gap-3">
              <RouteLink
                className={`${primaryButtonClass} w-full`}
                currentPath={currentPath}
                path="/contact"
                navigate={navigate}
              >
                {shell.bookAppointment}
              </RouteLink>
            </div>
          </div>
        </aside>
      </div>

      <main>{children}</main>

      <footer className="border-t border-white/30 bg-[color:var(--brand-ink)] border-t-4 border-t-[color:var(--brand-primary)] py-14 text-white md:py-16">
        <div className={`${shellClass} grid gap-10`}>
          <div className="grid gap-5">
            <div className="flex items-center gap-4">
              <span className="flex brand-logo h-24 w-28 shrink-0 items-center justify-center overflow-hidden rounded-[22px] border border-white/10 bg-white shadow-[0_18px_36px_rgba(7,17,32,0.2)]">
                <img
                  src={logoImage}
                  alt={shell.brand}
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <p className="m-0 text-[0.84rem] font-bold uppercase tracking-[0.18em] text-[#cadaae]">
                  {shell.brand}
                </p>
                <p className="mt-1 text-sm text-white/75">
                  {shell.footerTagline}
                </p>
              </div>
            </div>
            <p className={`${bodyCopyClass} max-w-125 text-white/75`}>
              {shell.footerBody}
            </p>
            <RouteLink
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition duration-200 hover:text-[#cadaae]"
              currentPath={currentPath}
              path="/contact"
              navigate={navigate}
            >
              {shell.footerCta}
              <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
            </RouteLink>
          </div>
        </div>
        <div className={`${shellClass} mt-8 text-xs text-white/50`}>
          <a href="/models/credits.html" target="_blank" rel="noreferrer" className="hover:text-white/80">3D: BodyParts3D / DBCLS · CC BY 4.0</a>
        </div>
      </footer>
    </div>
  );
}
