import { div } from "framer-motion/client"

const Title = ({title}: {title:string}) => {
  return (
    <div className="flex gap-3 items-center">
        <div className="w-2 h-2 rounded-full bg-blue"></div>
        <h1 className="text-[20px] lg:text-3xl font-semibold text-foreground">{title}</h1>
        <div className="w-2 h-2 rounded-full bg-blue"></div>
    </div>
  )
}

export default Title