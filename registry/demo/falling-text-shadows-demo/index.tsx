import FallingText from "@/registry/foliokit/falling-text";

export default function FallingTextShadowsDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center">
      <FallingText
        text="Watch the light shadows fall beneath"
        trigger="auto"
        fontSize="2rem"
        enableShadows={true}
        shadowColor="rgba(255, 255, 255, 0.25)"
        shadowIntensity={0.6}
        minHeight="300px"
      />
    </div>
  );
}
