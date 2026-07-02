import { ArrowRight } from "lucide-react"
import ContactIcon from "../features/contactIcon"
import Title from "../features/title"

const Contact = () => {
  return (
    <section id='contact' className="container">
      <div className="flex flex-col gap-5 justify-center lg:flex-row items-center  lg:justify-between">
        <div>
          <Title title="Let's Work Together" />
          <p className="w-100 mt-2">Have a project in mind? Feel free to reach out. I'm always open to discussing new opportunities.</p>
          <div className="mt-5 flex flex-col gap-3">
            <ContactIcon image="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/mail.svg" name="email" link="abduraimovmurodjon91@gmail.com" linkName="abduraimovMurodjon91@gmail.com" />
            <ContactIcon image="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/map-pin.svg" name="location" link="" linkName="Uzbekistan, Jizzakh" />
            <ContactIcon image="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/telegram.svg" name="telegram" link="@Murod_iken" linkName="@Murod_iken" />
            <ContactIcon image="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" name="Github" link="https://github.com/abduraimovmurodjon91-ctrl" linkName="https://github.com/abduraimovmurodjon91-ctrl" />
          </div>
        </div>
        <form className="flex flex-col gap-3">
          <input className="border-2 border-blue w-120 px-2 py-2 text-foreground rounded-xs" type="text" placeholder="Your Name" />
          <input className="border-2 border-blue w-120 px-2 py-2 rounded-xs text-foreground" type="email" placeholder="Your Name" />
          <textarea className="w-full h-50 border-2 px-2 py-2 w-100 rounded-xs border-blue" placeholder="Enter Message"></textarea>
          <button className="w-full h-12  flex items-center justify-center px-2 py-2 gap-3 rounded-xl bg-blue  text-foreground font-medium">Send Message <ArrowRight /></button>
        </form>
      </div>
    </section>
  )
}

export default Contact