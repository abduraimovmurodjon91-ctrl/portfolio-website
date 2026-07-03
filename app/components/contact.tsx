"use client"
import { ArrowRight } from "lucide-react"
import ContactIcon from "../features/contactIcon"
import Title from "../features/title"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { constactSchema } from "@/schema/contactSchema"
interface ContactForm {
  name: string,
  email: string,
  message: string
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({
    resolver: zodResolver(constactSchema)
  })
  const onSubmit = async(data: ContactForm) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const result = await response.json()

    console.log(result)
  }
  return (
    <section id='contact' className="container">
      <div className="flex flex-col gap-5 justify-center lg:flex-row items-center  lg:justify-between">
        <div className="flex flex-col text-center items-center ">
          <Title title="Let's Work Together" />
          <p className="w-100 mt-2">Have a project in mind? Feel free to reach out. I'm always open to discussing new opportunities.</p>
          <div className="mt-5 flex flex-col gap-3 justify-between">
            <ContactIcon image="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/mail.svg" name="email" link="abduraimovmurodjon91@gmail.com" />
            <ContactIcon image="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/telegram.svg" name="telegram" link="@Murod_iken" />
            <ContactIcon image="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" name="Github" link="https://github.com/abduraimovmurodjon91-ctrl" />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 items-center">
          <input {...register("name")} required className="border-2 w-90 border-blue lg:w-120 px-2 py-2 text-foreground rounded-xs" type="text" placeholder="Your Name" />
          <p>{errors.name?.message}</p>
          <input {...register("email")} required className="border-2 w-90 border-blue lg:w-120 px-2 py-2 rounded-xs text-foreground" type="email" placeholder="Your email" />
          {errors.email?.message}
          <textarea {...register("message")} required className="w-90 lg:w-full h-50 border-2 px-2 py-2 rounded-xs border-blue" placeholder="Enter Message"></textarea>
          {errors.message?.message}
          <button className="w-full h-12  flex items-center justify-center px-2 py-2 gap-3 rounded-xl bg-blue  text-button font-medium">Send Message <ArrowRight /></button>
        </form>
      </div>
    </section>
  )
}

export default Contact