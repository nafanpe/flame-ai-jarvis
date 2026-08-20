type TerminalProps = {
    logs: String[]
}

export default function Terminal({logs}: TerminalProps){
    return (
        <div className="absolute top-0 left-0 p-4 rounded-md w-[600px] h-[270px] overflow-y-auto font-mono text-sm text-green-400">
            <p className="text-zinc-500 mb-2">// System Logs stream initialized...</p>
            {logs.map((log, index) => (
                <div key={index}>{log}</div>
            ))}
        </div>
    )
}