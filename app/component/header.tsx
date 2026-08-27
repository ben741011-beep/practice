function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d="M12 4v15m0 0 6-6m-6 6-6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-3 z-30 mx-3 mt-3 flex max-w-7xl items-center justify-between gap-3 rounded-full border border-white/80 bg-white/55 px-3 py-2.5 shadow-[inset_0_1px_1px_white,0_18px_50px_rgba(45,70,60,.12)] backdrop-blur-2xl sm:top-4 sm:mx-6 sm:mt-4 sm:px-5 sm:py-3 lg:mx-auto lg:px-6">
      <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="四時之島首頁">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/80 bg-white/45 text-sm font-bold shadow-[inset_0_1px_1px_white,0_10px_30px_rgba(45,70,60,.1)] backdrop-blur-xl sm:h-10 sm:w-10">
          四
        </span>
        <span className="truncate text-[13px] font-semibold tracking-[.14em] sm:text-sm sm:tracking-[.22em]">四時之島</span>
      </a>
      <nav
        className="hidden items-center gap-2 rounded-full border border-white/65 bg-white/30 p-1 text-sm text-slate-600 md:flex"
        aria-label="主要導覽"
      >
        <a className="rounded-full px-4 py-2 transition hover:bg-white/70 hover:text-slate-950" href="#top">
          首頁
        </a>
        <a className="rounded-full px-4 py-2 transition hover:bg-white/70 hover:text-slate-950" href="#seasons">
          四大節氣
        </a>
        <a className="rounded-full px-4 py-2 transition hover:bg-white/70 hover:text-slate-950" href="#story">
          島嶼與時序
        </a>
      </nav>
      <a
        href="#seasons"
        className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/80 bg-white/45 px-3 py-2.5 text-[11px] font-semibold shadow-[inset_0_1px_1px_white,0_10px_30px_rgba(45,70,60,.08)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/70 sm:gap-2 sm:px-4 sm:text-xs"
      >
        探索節氣 <Arrow />
      </a>
    </header>
  );
}
