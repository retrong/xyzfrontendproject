import { z } from 'zod';

export const FormDataSchema = z.object({
	firstName: z.string().min(1, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
	email: z.string().min(1, 'Email is required').email('Invalid email address'),
	country: z.string().min(1, 'Country is required'),
	street: z.string().min(1, 'Street is required'),
	city: z.string().min(1, 'City is required'),
	state: z.string().min(1, 'State is required'),
	zip: z.string().min(1, 'Zip is required'),

	businessName: z.string().min(2, 'Business Name is required'),
	businessDescription: z.string().optional(),
	businessWebsite: z.string().optional(),
	businessAddress: z.string().min(1, 'Address is required'),
	businessCountry: z.string().min(1, 'Country is required'),
	businessEmail: z
		.string()
		.email({ message: 'please enter a valid email' })
		.trim()
		.optional(),
	businessPhoneNumber: z.coerce.number().min(9, 'Phone Number is required'),
	alternativeNumber: z.coerce.number().min(1).optional(),
	faxNumber: z.string().min(1).optional(),
	language: z.string().min(1, 'Language is required'),
	businessFacebook: z.string().optional(),
	businessInstagram: z.string().optional(),

	legalBusinessName: z.string().min(2, 'Legal Business Name is required'),
	rcNumber: z.string().min(1, 'Enter a valid RC Number'),
	tinNumber: z.string().min(1, 'Enter a valid Tax ID Number'),
	businessState: z.string().min(1, 'State is required'),
	eiNumber: z.string().min(1, 'Enter a valid Employee ID Number'),
	snNumber: z.coerce.number().min(9, 'Enter a valid Social security Number').optional(),
});