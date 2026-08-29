"use client";

import { useSystemConnection } from "@/hooks/useSystemConnection";
import SystemStatus from "@/components/SystemStatus";
import ControlPanel from "@/components/ControlPanel";
import Terminal from "@/components/Terminal";
import ProcessManager from "@/components/ProcessManager";

export default function Home() {
  const { status, telemetryData, logs, launchApp, killApp } = useSystemConnection();

  return (
    <main className="min-h-screen text-[#c1c4bb] text-2xl w-full bg-[#1f1f1f] flex items-center justify-center" >
      <SystemStatus status={status} data={telemetryData} />
      <ControlPanel onLaunch={launchApp} />
      <Terminal logs={logs} />
      <ProcessManager processes={telemetryData.processes} onKill={killApp} />
    </main>
  );
}
