import { ReactNode } from "react"

interface PropsButton {
    icon: ReactNode,
    text: string,
    subtitle: string
}
const AboutButton = ({ icon, text, subtitle }: PropsButton) => {
    return (
        <div className="border-2 border-blue w-40 h-17 rounded-2xl px-2 py-2">
            <div className="flex gap-3 items-center">
                <span>{icon}</span>
                <div className="flex flex-col ">
                    <h3 className='text-foreground'>{text}</h3>
                    <p className='text-foreground/80 text-[14px] font-normal'>{subtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutButton