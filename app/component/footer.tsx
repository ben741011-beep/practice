export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-7xl px-5 pb-5 sm:px-6 sm:pb-8 lg:px-10">
      <div className="overflow-hidden rounded-[1.6rem] border border-white/80 bg-white/45 p-6 text-slate-600 shadow-[inset_0_1px_1px_white,0_24px_70px_rgba(53,73,66,.1)] backdrop-blur-2xl sm:rounded-[2rem] sm:p-9">
        <div className="grid gap-10 border-b border-slate-900/10 pb-9 md:grid-cols-[1.35fr_.65fr_.65fr]">
          <div className="max-w-md">
            <a href="#top" className="inline-flex items-center gap-3 text-slate-900" aria-label="四時之島首頁">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-white bg-white/60 text-sm font-bold shadow-inner">
                四
              </span>
              <span className="font-semibold tracking-[.22em]">四時之島</span>
            </a>
            <p className="mt-5 text-sm leading-7">循著日光與季風，收藏台灣春分、夏至、秋分與冬至的島嶼記憶。</p>
          </div>
          <div>
            <p className="mb-4 text-[10px] font-semibold tracking-[.22em] text-slate-400">EXPLORE</p>
            <nav className="flex flex-col items-start gap-3 text-sm" aria-label="頁尾導覽">
              <a href="#top" className="transition hover:text-slate-950">首頁</a>
              <a href="#seasons" className="transition hover:text-slate-950">四大節氣</a>
              <a href="#story" className="transition hover:text-slate-950">島嶼與時序</a>
            </nav>
          </div>
          <div>
            <p className="mb-4 text-[10px] font-semibold tracking-[.22em] text-slate-400">LOCATION</p>
            <p className="text-sm leading-7">
              Taiwan · 23.5° N
              <br />
              Asia / Taipei
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 四時之島 · Taiwan Seasonal Journal</p>
          <a href="#top" className="font-semibold text-slate-600 transition hover:text-slate-950">
            回到日光起點 ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
