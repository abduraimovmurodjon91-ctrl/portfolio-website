
import Image from "next/image"
import AboutImage from "../coding.jpg"
import Title from "../features/title"
import { BriefcaseBusiness, Check, Terminal } from "lucide-react"
import AboutButton from "../features/aboutButton"
const About = () => {
  const checkList = [
    { id: 1, icon: <Check />, text: "Responsive Design" },
    { id: 2, icon: <Check />, text: "Clean Code" },
    { id: 3, icon: <Check />, text: "Performance" },
    { id: 4, icon: <Check />, text: "REST APIs" },
    { id: 5, icon: <Check />, text: "Firebase" },
    { id: 6, icon: <Check />, text: "UI Animation" },
  ]
  return (
    <section id='about' className="container flex flex-col gap-5 items-center lg:flex-row lg:justify-between ">
      <div className="w-auto h-auto lg:w-140 lg:h-120 relative">
        <Image src={AboutImage} className="w-full h-full object-cover rounded-xl" alt={""} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent"></div>
      </div>
      <div>
        <Title title="About Me" />
        <p className="font-medium text-foreground mt-3 text-[14px] w-80 lg:w-120">I'm a frontend developer focused on creating clean, responsive and user-friendly web applications. I enjoy solving real-world problems with modern technologies and continuously improving my skills.</p>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {checkList.map((check) => (
            <div key={check.id} className="flex gap-2 items-center">
              <span className="text-blue">{check.icon}</span>
              <p className="text-foreground font-medium capitalize text-[14px]">{check.text}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-5">
          <AboutButton icon={<Terminal />} text="2+" subtitle="Years Learning" />
          <AboutButton icon={<BriefcaseBusiness />} text="10+" subtitle="Project Built" />
        </div>
      </div>
    </section>
  )
}

export default About