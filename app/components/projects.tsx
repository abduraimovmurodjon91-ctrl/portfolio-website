import Card from "../features/card"
import Title from "../features/title"
import image from "../about.jpg"
import Button from "../features/button"

const Projects = () => {
  return (
    <section id='projects' className="container">
      <Title title="Feautured Projects" />
      <div className="grid grid-cols-3 mt-5">
        <Card image={image} title="Modern Web Apps" subtitle="Modern website with beautiful ui and animations" links={{ github: { title: "GitHub", href: "https://github.com/abduraimovmurodjon91-ctrl" }, demo: { title: "Demo", href: "https://weather-app-phi-nine-14.vercel.app/" } }} technologies={["React", "Tailwindcss", "Firebase"]} />
        <Card image={image} title="Modern Web Apps" subtitle="Modern website with beautiful ui and animations" links={{ github: { title: "GitHub", href: "https://github.com/abduraimovmurodjon91-ctrl" }, demo: { title: "Demo", href: "https://weather-app-phi-nine-14.vercel.app/" } }} technologies={["React", "Tailwindcss", "Firebase"]} />
        <Card image={image} title="Modern Web Apps" subtitle="Modern website with beautiful ui and animations" links={{ github: { title: "GitHub", href: "https://github.com/abduraimovmurodjon91-ctrl" }, demo: { title: "Demo", href: "https://weather-app-phi-nine-14.vercel.app/" } }} technologies={["React", "Tailwindcss", "Firebase"]} />
      </div>
      <div className="mt-10 text-center">
        <Button btnText="View All Projects" variant="primary" />
      </div>
    </section>
  )
}

export default Projects