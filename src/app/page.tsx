import { SITE } from "@/site.config";
import { StoreButtons } from "@/components/StoreButtons";
import { HeroBackground } from "@/components/HeroBackground";
import { Shot } from "@/components/Shot";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[88svh] items-center justify-center">
        <HeroBackground />

        <div className="relative z-10 flex flex-col items-center px-5 py-24 text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.4em] text-accent">
            iOS &amp; Android
          </p>

          <h1
            className="display mt-5 leading-[0.92] text-balance"
            style={{ fontSize: "clamp(2.75rem, 11vw, 6.5rem)" }}
          >
            {SITE.name}
          </h1>

          <div className="mt-12 flex justify-center">
            <StoreButtons />
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-8 pb-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {["shot-1.png", "shot-2.png", "shot-3.png", "shot-4.png"].map((s, i) => (
              <Shot
                key={s}
                src={s}
                alt={`${SITE.name} screenshot ${i + 1}`}
                width={540}
                height={960}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
