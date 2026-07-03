import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'

interface ContactProps {
    image: string,
    name: string,
    link: string,
}
const ContactIcon = ({ image, name, link, }: ContactProps) => {
    return (
        <div className='flex gap-5 w-120 items-center justify-center'>
            <div className='flex gap-3 items-center'>
                <Image className='bg-foreground rounded-full' width={20} height={20} alt='image' src={image} />
                <p className='capitalize font-medium text-[16px]'>{name}</p>
            </div>
            <a className='bg-foreground text-background rounded-full w-8 flex items-center justify-center h-8 ' target='_blank' href={link}><MoveUpRight className='hover:translate-x-0.5 duration-300'/></a>
        </div>
    )
}

export default ContactIcon