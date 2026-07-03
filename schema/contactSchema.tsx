import { z } from "zod";


export const constactSchema = z.object({
    name: z.string()
        .min(3, "Name must be at least 3 charachters"),
    email: z.string()
        .email("Please Enter a valid email address"),
    message: z.string()
        .min(10, "Message must be at least 10 characters")
})