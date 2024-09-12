import { z } from "zod"

export const todoSchema = z.object({
    title: z.string().min(3, 'Titulo obligatorio'),
    description: z.string().min(1, 'La descripcion es obligatoria')
});

export type TodoSchema = z.infer<typeof todoSchema>