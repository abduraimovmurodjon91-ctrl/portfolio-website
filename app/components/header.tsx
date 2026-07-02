"use client"
import { Link } from "react-scroll"
import Logo from "../favicon copy.png"
import Image from "next/image"
import { Menu, Moon, Sun, X } from "lucide-react"
import useTheme from "../hooks/useTheme"
import { useState } from "react"
const Header = () => {
  const [open, setOpen] = useState<boolean>(false)
  const { theme, toggleTheme } = useTheme()
  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]
  return (
    <header className="sticky relative top-0 z-50 bg-background">
      <div className="container flex justify-between items-center">
        <a href="#">
          <Image className="w-10 h-10 rounded-full" src={Logo} alt="" />
        </a>
        <ul className="hidden lg:flex gap-7">
          {navLinks.map((link) => (
            <Link key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-blue font-bold"
              className="relative cursor-pointer text-foreground after:content-['']  after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-blue after:transition-all after:duration-300 hover:after:w-full">{link.label}</Link>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button className="" onClick={toggleTheme}>
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div>
          <ul className="lg:hidden flex flex-col items-center gap-7">
            {navLinks.map((link) => (
              <Link key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-blue font-bold "
                className="relative cursor-pointer text-foreground after:content-['']  after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-blue after:transition-all after:duration-300 hover:after:w-full">{link.label}</Link>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header