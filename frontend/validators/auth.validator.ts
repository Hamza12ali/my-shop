import z from 'zod'
export const authData = z.object({
    username: z.string().min(3).max(100),
    password: z.string().min(8).max(80)
})
