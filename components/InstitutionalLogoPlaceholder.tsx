import Image from "next/image";

export function InstitutionalLogoPlaceholder() {
  return (
    <div className="inline-flex w-full max-w-[min(100%,28rem)] items-center justify-center rounded-2xl border border-white/30 bg-white/95 px-4 py-3 shadow-soft ring-1 ring-slate-200/70 sm:px-5 sm:py-4">
      <Image
        src="/logo-marea.png"
        alt="Logo del Grupo de Innovación Docente MARE-A"
        width={950}
        height={288}
        priority
        className="h-auto w-full max-w-[24rem] object-contain sm:max-w-[26rem] lg:max-w-[28rem]"
        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 26rem, 28rem"
      />
    </div>
  );
}
