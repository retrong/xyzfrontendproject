import { z } from 'zod';

const optionSchema = z.union([
    z.string(),
    z.object({
        value: z.string(),
        label: z.string()
    })
]);

export const PricePaymentSchema = z.object({
	customerPlan: optionSchema,
	numberOfUsers: optionSchema,
	paymentPlan: optionSchema,
	paymentMethod: optionSchema,
	orderHistory: optionSchema,
	renewalType: optionSchema,
	currencyType: optionSchema,
});