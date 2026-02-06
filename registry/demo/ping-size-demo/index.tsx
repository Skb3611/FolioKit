import Ping from "@/registry/foliokit/ping";

export function PingDemo() {
  return (
    <div className="flex flex-col">
      <Ping state="active" label="Active Ping" size="sm" />
      <Ping state="active" label="Active Ping" size="md" />
      <Ping state="active" label="Active Ping" size="lg" />
    </div>
  );
}
