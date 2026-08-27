import Image from "next/image";
import Footer from "./component/footer";
import Header from "./component/header";
import ScrollParallax from "./component/scroll-parallax";

const seasons = [
  {
    name: "春分", en: "SPRING EQUINOX", date: "3.20 — 3.21",
    glow: "bg-emerald-300/45", line: "from-emerald-400 via-lime-200 to-yellow-100",
    image: "/image/spring.png",
    alt: "晨霧中的台灣高山茶園與盛開櫻花",
    text: "晝夜等長，暖意沿著山稜與田野舒展。台灣百花漸盛，春茶萌芽，萬物正悄悄甦醒。",
    note: "賞花・春茶・播種",
  },
  {
    name: "夏至", en: "SUMMER SOLSTICE", date: "6.21 — 6.22",
    glow: "bg-cyan-300/45", line: "from-sky-400 via-cyan-200 to-white",
    image: "/image/summer.png",
    alt: "台灣盛夏山景前綻放的粉色荷花池",
    text: "一年中白晝最長的日子。南風、午後雷陣雨與蟬鳴，交織出台灣盛夏蓬勃的生命力。",
    note: "荷花・蟬鳴・消暑",
  },
  {
    name: "秋分", en: "AUTUMN EQUINOX", date: "9.22 — 9.23",
    glow: "bg-amber-300/45", line: "from-amber-400 via-orange-200 to-rose-100",
    image: "/image/autumn.png",
    alt: "暖陽下的台灣金黃稻田與遠方山巒",
    text: "日夜再次平分，暑氣漸退。稻浪轉金、柚香正濃，空氣裡開始有了清爽而溫柔的秋意。",
    note: "稻穗・柚香・望月",
  },
  {
    name: "冬至", en: "WINTER SOLSTICE", date: "12.21 — 12.23",
    glow: "bg-violet-300/45", line: "from-indigo-400 via-violet-200 to-fuchsia-100",
    image: "/image/winter.png",
    alt: "冬日窗邊冒著熱氣的繽紛湯圓",
    text: "黑夜最長，陽氣由此回返。台灣人以一碗暖暖的湯圓團聚，也為歲末添上圓滿祝福。",
    note: "湯圓・團聚・迎歲",
  },
];

export default function Home() {
  return (
    <ScrollParallax>
    <main className="relative min-h-screen overflow-hidden bg-[#eef2ee] text-slate-900 selection:bg-emerald-200">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div data-parallax="-0.035" className="parallax-layer absolute -left-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-emerald-200/60 blur-[120px]" />
        <div data-parallax="0.045" className="parallax-layer absolute -right-40 top-1/4 h-[38rem] w-[38rem] rounded-full bg-sky-200/65 blur-[130px]" />
        <div data-parallax="-0.03" className="parallax-layer absolute bottom-0 left-1/4 h-[36rem] w-[36rem] rounded-full bg-amber-200/55 blur-[130px]" />
        <div data-parallax="0.018" className="parallax-layer absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.28)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      </div>

      <Header />

      <section id="top" className="relative z-10 mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:gap-14 sm:px-6 sm:pb-24 sm:pt-14 lg:min-h-[82vh] lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:pt-0">
        <div data-parallax="0.035" className="parallax-layer min-w-0">
          <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold tracking-[.22em] text-slate-500 sm:mb-8 sm:text-xs sm:tracking-[.28em]">
            <span className="h-px w-10 bg-slate-500/50" /> TAIWAN IN FOUR MOMENTS
          </p>
          <h1 className="text-[clamp(3.8rem,18vw,9rem)] font-semibold leading-[.82] sm:leading-[.78] tracking-[-.09em] text-slate-950">
            四時
            <span className="block bg-gradient-to-r from-emerald-600 via-sky-600 to-violet-600 bg-clip-text pb-3 text-transparent sm:pb-5">有光</span>
          </h1>
          <div className="mt-7 max-w-xl border-l border-slate-900/15 pl-4 sm:mt-8 sm:pl-6">
            <p className="text-[15px] leading-7 text-slate-600 sm:text-base">跟著陽光移動的刻度，讀懂一座島嶼的呼吸。從春分到冬至，看見台灣四季最鮮明的瞬間。</p>
            <p className="mt-5 text-xs tracking-[.2em] text-slate-400">23.5° N · FORMOSA</p>
          </div>
        </div>

        <div data-parallax="-0.065" className="parallax-layer relative mx-auto aspect-square w-full max-w-[23rem] sm:max-w-[27rem] lg:max-w-[31rem]">
          <div className="absolute inset-[7%] overflow-hidden rounded-full border border-white/80 bg-white/25 shadow-[inset_18px_18px_50px_rgba(255,255,255,.7),inset_-20px_-20px_60px_rgba(61,105,92,.12),0_45px_100px_rgba(64,88,79,.16)] backdrop-blur-2xl">
            <div className="absolute inset-[12%] rounded-full border border-white/55" />
            <div className="absolute left-1/2 top-1/2 h-px w-[88%] -translate-x-1/2 -rotate-[23.5deg] bg-gradient-to-r from-transparent via-slate-600/30 to-transparent" />
            <div className="absolute left-1/2 top-1/2 h-[88%] w-px -translate-y-1/2 rotate-[23.5deg] bg-gradient-to-b from-transparent via-slate-600/20 to-transparent" />
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <p className="text-[4.5rem] font-light leading-none tracking-[-.08em] text-slate-800/85">23.5°</p>
                <p className="mt-3 text-[10px] tracking-[.32em] text-slate-500">EARTH&apos;S TILT</p>
              </div>
            </div>
            <div className="absolute left-[12%] top-[8%] h-[30%] w-[42%] -rotate-[28deg] rounded-full bg-white/55 blur-xl" />
          </div>
          <span className="absolute left-[19%] top-[21%] h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_25px_7px_rgba(52,211,153,.55)]" />
          <span className="absolute right-[18%] top-[31%] h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_25px_7px_rgba(56,189,248,.5)]" />
          <span className="absolute bottom-[20%] right-[25%] h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_25px_7px_rgba(251,191,36,.5)]" />
          <span className="absolute bottom-[29%] left-[16%] h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_25px_7px_rgba(167,139,250,.5)]" />
          <span className="absolute left-0 top-[20%] rounded-2xl border border-white/80 bg-white/50 px-3 py-2 text-[10px] shadow-lg backdrop-blur-xl sm:px-4 sm:py-3 sm:text-xs">一島 · 四時</span>
          <span className="absolute bottom-[13%] right-0 rounded-2xl border border-white/80 bg-white/50 px-3 py-2 text-[10px] shadow-lg backdrop-blur-xl sm:px-4 sm:py-3 sm:text-xs">二十四節氣</span>
        </div>
      </section>

      <section id="seasons" className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        <div data-parallax="0.025" className="parallax-layer mb-10 flex flex-col justify-between gap-6 sm:mb-14 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[.25em] text-slate-500">THE FOUR TURNING POINTS</p>
            <h2 className="text-[2.25rem] font-semibold tracking-[-.05em] sm:text-6xl">四季，四個轉身</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">節氣源自太陽運行的軌跡；在亞熱帶的台灣，它也化作雨、風、農作與餐桌上的生活記憶。</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {seasons.map((season, index) => (
            <article key={season.name} className="group relative isolate min-w-0 overflow-hidden rounded-[1.6rem] border border-white/75 bg-white/35 p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,.95),0_24px_70px_rgba(53,73,66,.1)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1.5 hover:bg-white/55 sm:rounded-[2rem] sm:p-7 lg:p-9">
              <div className={"absolute -right-16 -top-16 -z-10 h-72 w-72 rounded-full blur-[70px] transition-transform duration-700 group-hover:scale-125 " + season.glow} />
              <div className={"absolute inset-x-0 top-0 h-1 bg-gradient-to-r " + season.line} />
              <div className="flex items-center justify-between text-[10px] tracking-[.18em] text-slate-500">
                <span>0{index + 1} / 04</span>
                <span className="rounded-full border border-white/80 bg-white/45 px-3 py-1.5 shadow-inner">{season.date}</span>
              </div>
              <div className="relative mt-6 aspect-[3/2] overflow-hidden rounded-[1.35rem] border border-white/70 bg-white/30 shadow-[inset_0_1px_1px_white,0_18px_45px_rgba(40,60,52,.12)]">
                <div data-parallax={index % 2 === 0 ? "-0.045" : "0.045"} className="parallax-layer absolute -inset-6">
                  <Image
                    src={season.image}
                    alt={season.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="scale-110 object-cover transition duration-700 group-hover:scale-[1.15]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/10" />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/45 px-3 py-1.5 text-[10px] font-semibold tracking-[.16em] text-slate-700 shadow-lg backdrop-blur-xl">
                  {season.note}
                </span>
              </div>
              <div className="mt-6 flex items-end justify-between gap-3 sm:mt-7">
                <div className="min-w-0">
                  <p className="mb-3 text-[10px] font-semibold tracking-[.25em] text-slate-500">{season.en}</p>
                  <h3 className="text-5xl font-semibold tracking-[-.08em] sm:text-7xl">{season.name}</h3>
                </div>
                <span className="shrink-0 font-serif text-6xl font-light text-white/80 sm:text-8xl drop-shadow-sm">{season.name[0]}</span>
              </div>
              <div className="mt-6 border-t border-slate-900/10 pt-5 sm:mt-7 sm:pt-6">
                <p className="text-sm leading-6 text-slate-600">{season.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="relative z-10 mx-auto max-w-7xl px-5 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-28">
        <div data-parallax="-0.025" className="parallax-layer relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-slate-900 px-6 py-12 text-white shadow-[0_32px_90px_rgba(26,39,34,.24)] sm:rounded-[2.25rem] sm:px-12 sm:py-14 lg:px-16 lg:py-20">
          <div data-parallax="0.08" aria-hidden="true" className="parallax-layer pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-emerald-300/10 blur-[90px]" />
          <div className="relative grid gap-10 sm:gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-5 text-xs tracking-[.24em] text-emerald-200/70">ISLAND ALMANAC</p>
              <h2 className="text-[2.1rem] font-semibold leading-tight tracking-[-.05em] sm:text-6xl">時間不只流逝，<br />也在島上生長。</h2>
            </div>
            <div className="lg:border-l lg:border-white/15 lg:pl-12">
              <p className="text-base leading-8 text-white/65">二十四節氣把一年細分成二十四個段落，而春分、夏至、秋分、冬至是其中最清晰的四個座標。它們提醒我們仰望日光、感受風向，也記得生活與自然始終同行。</p>
              <aside className="mt-8 rounded-[1.4rem] border border-white/10 bg-white/[.06] p-5 backdrop-blur-sm sm:p-6" aria-label="北緯 23.5 度說明">
                <p className="text-[10px] font-semibold tracking-[.24em] text-emerald-200/65">WHY 23.5° N</p>
                <div className="mt-4 grid gap-5 sm:grid-cols-2 sm:gap-6">
                  <div>
                    <p className="text-sm font-semibold text-white/90">台灣的地理座標</p>
                    <p className="mt-2 text-sm leading-6 text-white/55">北緯 23.5° 接近北回歸線，而這條緯線正好穿過台灣，象徵島嶼所處的陽光位置與亞熱帶氣候。</p>
                  </div>
                  <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                    <p className="text-sm font-semibold text-white/90">也是四季的線索</p>
                    <p className="mt-2 text-sm leading-6 text-white/55">地球傾斜約 23.5° 運行，讓日照隨季節改變。兩個相近的數字，一個標記台灣的位置，一個解釋四季的形成。</p>
                  </div>
                </div>
              </aside>
              <div className="mt-8 flex items-center gap-4 text-xs tracking-[.2em] text-white/40"><span className="h-px flex-1 bg-white/15" /> FORMOSA · 2026</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
    </ScrollParallax>
  );
}
