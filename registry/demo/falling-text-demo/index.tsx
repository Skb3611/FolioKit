import FallingText from "@/registry/foliokit/falling-text";

export default function FallingTextDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center">
      <FallingText
        text="Welcome to FolioKit!"
        highlightWords={["FolioKit"]}
        trigger="auto"
        fontSize="2rem"
        enableShadows={true}
        shadowIntensity={0.7}
      />
    </div>
  );
}
