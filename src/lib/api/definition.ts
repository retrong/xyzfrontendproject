import { z } from 'zod';

export const signUpFormSchema = z.object({
	email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
	password: z.string()
		.min(8, { message: 'Be at least 8 characters long' })
		.regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
		.regex(/[0-9]/, { message: 'Contain at least one number.' })
		.regex(/[^a-zA-Z0-9]/, {message: 'Contain at least one special character'}),
    confirmPassword: z.string()
        .min(8, {message: 'Confirm password must be at least 8 characters long'}),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ['confirmPassword']
})

export const loginFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
})

export type FormState =
{
    errors?: {
        email?: string[];
        password?: string[];
        confirmPassword?: string[];
    };
    message?: string;
}