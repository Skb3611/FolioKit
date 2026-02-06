import Ping from "@/registry/foliokit/ping";

export function PingDemo() {
  return (
    <div className="flex flex-col">
      <Ping state="active" label="Active Ping" />
      <Ping state="down" label="Down Ping" />
      <Ping state="idle" label="Idle Ping" />
      <Ping state="fixing" label="Fixing Ping" />
      <Ping state="active" size="sm" label="Small Active Ping" />
      <Ping state="fixing" size="lg" label="Large Fixing Ping" />
    </div>
  );
}
