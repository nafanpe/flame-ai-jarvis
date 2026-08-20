type ControlPanelProps = {
    onLaunch: (appName: String) => void;
}

export default function ControlPanel({onLaunch}: ControlPanelProps){
    return (
        <div className="CONTROL-BTN flex gap-3">
            <button
                onClick={() => onLaunch('code')} 
                className="border cursor-pointer rounded-sm border-white p-2 hover:bg-white hover:text-black transition-colors duration-200 transform" 
            >
                VsCode
            </button>
            <button
                onClick={() => onLaunch('brave-browser')} 
                className="border cursor-pointer rounded-sm border-white p-2 hover:bg-white hover:text-black transition-colors duration-200 transform" 
            >
                Brave Browser
            </button>
      </div>
    )
}