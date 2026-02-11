import FallingText from "@/registry/foliokit/falling-text";

export default function FallingTextHighlightDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center">
      <FallingText
        text="Create amazing effects with gradient highlights!"
        highlightWords={["amazing", "gradient", "highlights!"]}
        highlightClassName="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold"
        trigger="auto"
        fontSize="1.8rem"
        minHeight="250px"
      />
    </div>
  );
}
