import * as z from 'zod';
import { ZodSchema } from 'zod';

export const profileSchema = z.object({
  // firstName: z.string().max(4, { message: 'max length is 4' }),
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
});