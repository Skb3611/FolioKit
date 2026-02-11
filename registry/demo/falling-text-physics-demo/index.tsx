import FallingText from "@/registry/foliokit/falling-text";

export default function FallingTextPhysicsDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center">
      <FallingText
        text="Dead drop with no restitution"
        trigger="auto"
        fontSize="2rem"
        physicsOptions={{
          restitution: 0,
          frictionAir: 0.02,
          friction: 0.5,
        }}
        minHeight="300px"
      />
    </div>
  );
}
