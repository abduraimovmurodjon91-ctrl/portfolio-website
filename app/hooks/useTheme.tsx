"use client"
import { useState, useEffect } from "react"

const useTheme = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light")

    useEffect(() => {
        const saved = localStorage.getItem("theme")
        if (saved === "dark" || saved === "light") {
            setTheme(saved)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("theme", theme)

        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        }
        else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return { theme, toggleTheme }
}

export default useTheme