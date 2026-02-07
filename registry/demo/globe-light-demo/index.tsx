import { Globe } from "@/registry/foliokit/globe";

export function GlobeDemo() {
  return (
    <div className="bg-background relative flex size-2/3 max-h-[400px] aspect-square items-center justify-center overflow-hidden rounded-lg border px-40 pt-8 pb-40 md:pb-60">
      <span className=" text-5xl text-center font-semibold">
        Interactive Globe
      </span>
      <Globe className="top-[50%]" mode="light" />
    </div>
  );
}
