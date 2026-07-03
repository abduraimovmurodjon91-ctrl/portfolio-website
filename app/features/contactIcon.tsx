import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'

interface ContactProps {
    image: string,
    name: string,
    link: string,
}
const ContactIcon = ({ image, name, link, }: ContactProps) => {
    return (
        <div className='flex items-center gap-5 w-full'>
            <div className='flex gap-3 items-center'>
                <div className='w-11 bg-foreground h-11 rounded-full bg-card flex items-center justify-center'>
                    <Image className='bg-white rounded-full ' width={20} height={20} alt='image' src={image} />
                </div>
                <p className='capitalize text-foreground font-semibold text-lg'>{name}</p>
            </div>
            <a className='w-10
h-10
rounded-full
bg-blue
text-white
flex
items-center
justify-center
transition-all
duration-300
hover:scale-110
hover:rotate-12' target='_blank' href={link}><MoveUpRight className='hover:translate-x-0.5 duration-300' /></a>
        </div>
    )
}

export default ContactIcon