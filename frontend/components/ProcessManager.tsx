import { ProcessData } from "@/types";
import { profileEnd } from "console";

type ProcessManagerProps = {
    processes: ProcessData[] | undefined,
    onKill: (pid: number) => void,
}

export default function ProcessManager({ processes, onKill} : ProcessManagerProps){
    if (!processes) return null;

    return (
        <div className="absolute right-5 bottom-3 text-sm flex flex-col items-center bg-black/0 p-4 border-zinc-800 rounded-md">
            <h2 className="text-xl font-semibold mb-3 text-[#bcc4bc]">Top Background Processes</h2>
      
        <div className="flex flex-col gap-2 w-full">
            {processes.map((proc) => (
            <div key={proc.pid} className="flex justify-between min-w-xs items-center gap-6 p-2 bg-zinc-900 rounded border border-zinc-700">
                <div className="flex flex-col">
                <span className="font-mono text-zinc-200">{proc.name}</span>
                <span className="text-xs text-zinc-500">PID: {proc.pid} | CPU: {proc.cpu_percent.toFixed(1)}%</span>
                </div>
                
                <button 
                onClick={() => onKill(proc.pid)}
                className="bg-rose-900/50 hover:bg-rose-600 text-rose-200 border border-rose-700 px-3 py-1 rounded transition-colors text-xs"
                >
                Kill
                </button>
            </div>
            ))}
        </div>
    </div>
  );
}