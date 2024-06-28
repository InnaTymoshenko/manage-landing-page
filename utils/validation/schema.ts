import { z } from 'zod'

const EmailSchema = z.string().email({ message: 'Please insert a valid email' })

export const UserShema = z.object({
	email: EmailSchema
})
