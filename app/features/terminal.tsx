"use client"
import { TypeAnimation } from 'react-type-animation'

const Terminal = () => {
    return (
        <div className="w-[400px] lg:w-[500px] rounded-xl overflow-hidden font-mono">
            <div className="bg-[#1e1e1e] px-4 py-4 flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
            <div className="bg-[#0d0d0d] p-6 h-[200px] xl:h-[380px]">
                <p className="text-green-400 text-[16px] leading-8">
                    <span className="text-yellow-400">~ </span>
                    <TypeAnimation
                        sequence={[
                            "Murod Abduraimov\n> Frontend Developer\n> React | TypeScript | TailwindCSS\n> Available for work ✓",
                            3000,
                            "Building modern web apps...\n> Clean code\n> User-friendly UI\n> Performance focused",
                            3000,
                        ]}
                        repeat={Infinity}
                        style={{ whiteSpace: "pre-line" }}
                    />
                </p>
            </div>
        </div>
    )
}

export default Terminal