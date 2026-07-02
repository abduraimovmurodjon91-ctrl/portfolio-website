"use client"
import Button from '../features/button'
import { TypeAnimation } from 'react-type-animation'
import Terminal from '../features/terminal'
const Hero = () => {
  const socialLinks = [
    {
      href: "https://github.com/abduraimovmurodjon91-ctrl", icon: (<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>)
    },
    {
      href: "https://t.me/murod_abduraimov", icon: (<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>)
    },
    {
      href: "https://linkedin.com/in/...", icon: (<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>)
    },
  ]
  return (
    <section id='hero' className='container'>
      <div className='flex flex-col gap-10 justify-center items-center lg:flex-row lg:justify-between'>
        <div className='flex flex-col gap-3 justify-center lg:justify-start'>
          <div>
            <h1 className='text-foreground w-[410px] lg:leading-18 lg:w-[750px] font-semibold font-medium capitalize text-[26px] lg:text-[45px] break-words'>
              hello I'am  {""}
              <TypeAnimation sequence={[
                "Murod Abduraimov", 2000,
                "Frontend Developer", 2000,
                "React Developer", 2000,
                "next Developer", 2000
              ]} repeat={Infinity} className='text-blue capitalize' />
            </h1>
          </div>
          <span className='text-foreground text-[14px] font-medium w-100'>I build responsive and user-interface web application using React Next.js and other modern technologies</span>
          <div className='flex gap-3 '>
            <Button btnText='View Projects' variant='primary' />
            <Button btnText='Contact Me' variant='outline' />
          </div>
          <div className='flex gap-2 items-center mt-3'>
            {socialLinks.map((link) => (
              <a key={link.href} className='text-foreground hover:text-blue duration-300 transition-colors'
                rel='noopener noreferror'
                target='_blank'
                href={link.href}>{link.icon}</a>
            ))}
          </div>
        </div>
        <div className='relative'>
          <Terminal />
          <div className='absolute inset-0 bg-gradient-to-r from-background/30 to-transparent'></div>
        </div>
      </div>
    </section>
  )
}

export default Hero