import Ping from "@/registry/foliokit/ping";

export function PingDemo() {
  return (
    <div className="flex gap-4">
      <Ping state="active" />
      <Ping state="down" />
      <Ping state="idle" />
      <Ping state="fixing" />
      <Ping state="active" size="sm" />
      <Ping state="fixing" size="lg" />
    </div>
  );
}
