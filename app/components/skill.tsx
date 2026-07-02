import { Play } from "lucide-react"
import { SkillCard } from "../features/skillCard"
import Title from "../features/title"

const Skill = () => {
  return (
    <section id='skills' className="container">
      <Title title="My Skills" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-6 justify-between mt-5">
        <SkillCard level="advanced" image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} name="React" percent={80} />
        <SkillCard level="middle" image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"} name="Next" percent={80} />
        <SkillCard level="middle" image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"} name="Typescript" percent={80} />
        <SkillCard level="advanced" image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"} name="Javascript" percent={80} />
        <SkillCard level="advanced" image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg"} name="Firebase" percent={80} />
        <SkillCard level="advanced" image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"} name="Git" percent={80} />
      </div>
    </section>
  )
}

export default Skill