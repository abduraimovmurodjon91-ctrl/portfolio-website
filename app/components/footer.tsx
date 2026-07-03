import Image from "next/image"
import FooterImg from "../favicon .ico"
const Footer = () => {
  return (
    <footer className="mt-[50px] container">
      <div className="flex items-center gap-3">
        <Image alt="footer_image" width={30} height={30} className="rounded-full" src={FooterImg} />
        <div className="flex flex-col gap-0.5">
          <p className="text-foreground font-medium text-[16px]">© 2026 Murod Abduraimov</p>
          <span className="text-foreground/80 font-medium text-[14px]">Designed & Developed with Next.js</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer