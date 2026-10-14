import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to receive marketing emails' }),
  }),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
