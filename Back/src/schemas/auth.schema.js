import { z } from "zod";

export const registerSchema = z.object({
    name: z.string({
        required_error: 'Nombre es requerido',
    }),
    email: z.string({
        messege: 'Email Invalido',
    }),
    password: z.string({
        required_error: 'Contraseña es Requerida',
    })
    .min(6,{
        message: 'Contraseña debe ser al menos de 6 caracteres',
    })
})

export const loginSchema = z.object({
    name: z.string({
        required_error: 'Nombre es requerido',
    }),
    password: z.string({
        required_error: 'Contraseña es Requerida',
    })
    .min(6,{
        message: 'Contraseña debe ser al menos de 6 caracteres'
    })

})