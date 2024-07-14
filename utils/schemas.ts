import * as z from 'zod';
import { ZodSchema } from 'zod';

export const profileSchema = z.object({
  // firstName: z.string().max(4, { message: 'max length is 4' }), was brought up some people have 2 character names (AJ)
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters long'
  }),
  lastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters long'
  }),
  username: z.string().min(2, {
    message: 'Username name must be at least 2 characters long'
  }),
});

export function validateWithZodSchema<T>( schema: ZodSchema<T>, data: unknown) {
  const result = schema.safeParse(data)
        // console.log(validatedFields)

        if(!result.success) {
            const errors = result.error.errors.map((error) => error.message)
            throw new Error(errors.join(','))
        }
        return result.data
}