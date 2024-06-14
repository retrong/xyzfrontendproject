import React from 'react';
import { FieldError, UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';

interface FormFieldProps {
	id: string;
	label: string;
	placeholder: string;
	autoComplete?: string;
	register: UseFormRegister<any>;
	errors: Record<string, FieldError | undefined>;
	type: string;
}

const FormField = ({
	id,
	label,
	placeholder,
	autoComplete = 'off',
	register,
	errors,
	type = 'text',
} : FormFieldProps ) => {
	return (
		<div className="w-full">
			<label
				htmlFor={id}
				className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
			>
				{label}
				<span className="font-inter text-foundation-grey-grey-300">
					(Optional)
				</span>
			</label>
			<div className="mt-[2px]">
				{type === 'textarea' ? (
					<textarea
						id={id}
						placeholder={placeholder}
						autoComplete={autoComplete}
						className="block w-full rounded-md border border-solid py-4 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600 focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6 h-[100px]"
						{...register(id)}
					/>
				) : (
					<input
						id={id}
						placeholder={placeholder}
						autoComplete={autoComplete}
						type={type}
						className="block w-full rounded-md border border-solid py-4 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600 focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
						{...register(id)}
					/>
				)}
				{errors[id]?.message && (
					<p className="mt-2 text-sm text-red-400">{errors[id].message}</p>
				)}
			</div>
		</div>
	);
};

export default FormField;
