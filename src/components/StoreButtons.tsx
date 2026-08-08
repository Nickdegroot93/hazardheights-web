import { SITE } from "@/site.config";

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 shrink-0 fill-current">
      <path d="M16.4 12.8c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9s-1.8-.9-3-.8c-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.6 2.3 2.8 2.2 1.1 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.2.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.4-1-2.4-3.5zM14.2 5.9c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-.9 2.8 1 .1 2-.5 2.7-1.3z" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 shrink-0 fill-current">
      <path d="M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l.1.1 9.3-9.3v-.2L3.6 2.3zM16.2 15.6l-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1 .6 1 1.6 0 2.2l-3.8 2zM15.3 16.5L12 13.2l-9.3 9.3c.4.4 1 .4 1.7 0l10.9-6zM15.3 7.5L4.4 1.5c-.7-.4-1.3-.4-1.7 0L12 10.8l3.3-3.3z" />
    </svg>
  );
}

function StoreButton({
  href,
  live,
  mark,
  small,
  big,
}: {
  href: string;
  live: boolean;
  mark: React.ReactNode;
  small: string;
  big: string;
}) {
  const classes =
    "flex items-center gap-3 rounded-xl px-5 py-3 min-h-16 min-w-[13.5rem] transition-colors";

  if (!live) {
    return (
      <div
        className={`${classes} neon-edge cursor-default bg-surface text-muted`}
        aria-disabled="true"
      >
        {mark}
        <span className="text-left leading-tight">
          <span className="block text-[0.65rem] uppercase tracking-widest">{small}</span>
          <span className="block text-base font-semibold">Coming soon</span>
        </span>
      </div>
    );
  }

  return (
    <a
      href={href}
      className={`${classes} accent-edge bg-surface-2 text-foreground hover:bg-surface`}
    >
      {mark}
      <span className="text-left leading-tight">
        <span className="block text-[0.65rem] uppercase tracking-widest text-muted">
          {small}
        </span>
        <span className="block text-base font-semibold">{big}</span>
      </span>
    </a>
  );
}

export function StoreButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <StoreButton
        href={SITE.stores.ios.url}
        live={SITE.stores.ios.live}
        mark={<AppleMark />}
        small="Download on the"
        big="App Store"
      />
      <StoreButton
        href={SITE.stores.android.url}
        live={SITE.stores.android.live}
        mark={<PlayMark />}
        small="Get it on"
        big="Google Play"
      />
    </div>
  );
}
