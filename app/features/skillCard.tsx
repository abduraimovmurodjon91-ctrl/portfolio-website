"use client"
import { motion } from "framer-motion"
import Image from "next/image"
interface SkillProps {
    name: string
    percent: number
    image: string
    level: string
}

export const SkillCard = ({ name, percent, image, level }: SkillProps) => {
    return (
        <div className="bg-card rounded-xl w-35 h-45 p-4 flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-2">
                <Image width={40} height={40} src={image} alt="" />
                <div className="flex flex-col gap-2 text-center">
                    <span className="text-foreground text-[16px] font-medium capitalize">{name}</span>
                    <span className="text-foreground/70 text-[14px] font-normal capitalize">{level}</span>
                </div>
            </div>
            <div className="w-full h-1.5 bg-foreground/20 rounded-full">
                <motion.div
                    className="h-full bg-blue rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percent}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                />
            </div>

            <span className="text-blue text-sm">{percent}%</span>
        </div>
    )
}