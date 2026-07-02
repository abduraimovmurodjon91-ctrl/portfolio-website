interface ButtonProps {
    btnText: string,
    onClick?: () => void
    variant: "primary" | "outline"
}
const Button = ({ btnText, onClick, variant }: ButtonProps) => {
    return (
        <button className={variant === "primary" ? "bg-blue text-background px-6 py-2 rounded-lg" : "border border-blue text-blue px-6 py-2 rounded-lg"}>{btnText}</button>
    )
}

export default Button