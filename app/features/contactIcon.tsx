import Image from 'next/image'

interface ContactProps {
    image: string,
    name: string,
    link: string,
    linkName: string
}
const ContactIcon = ({ image, name, link, linkName }: ContactProps) => {
    return (
        <div className='flex gap-5 items-center'>
            <div className='flex gap-3 items-center'>
                <Image width={20} height={20} alt='image' src={image} />
                <p>{name}</p>
            </div>
            <a target='_blank' href={link}>{linkName}</a>
        </div>
    )
}

export default ContactIcon