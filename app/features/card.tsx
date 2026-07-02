
interface Props {
    image: StaticImageData,
    title: string,
    subtitle: string
    links: {
        github: {
            title: string,
            href: string
        },
        demo: {
            title: string,
            href: string
        }
    }
    technologies: string[]
}
import Image, { StaticImageData } from 'next/image'
const Card = ({ image, title, subtitle, links, technologies }: Props) => {
    return (
        <div className='w-100 h-100 rounded-xl bg-card  duration-300'>
            <Image className='w-full rounded-xl h-50' src={image} alt='image' />
            <div className='px-3'>
                <div className='mt-3'>
                    <h3 className='text-foreground font-medium text-[24px]'>{title}</h3>
                    <p className='text-[14px] font-normal text-foreground/80'>{subtitle}</p>
                </div>
                <div className='flex gap-3 mt-5 items-center'>
                    {technologies.map((tech) => (
                        <button className='text-foreground rounded-xl font-normal text-[14px] border border-blue px-2 py-1' key={tech}>{tech}</button>
                    ))}
                </div>
                <div className='flex gap-3 items-center mt-7'>
                    <a target='_blank' href={links.demo.href} className='border-2 rounded-xl text-foreground border-blue px-3 py-1'>{links.demo.title}</a>
                    <a target='_blank' href={links.github.href} className='border-2 rounded-xl text-foreground border-blue px-3 py-1'>{links.github.title}</a>
                </div>
            </div>
        </div>
    )
}

export default Card