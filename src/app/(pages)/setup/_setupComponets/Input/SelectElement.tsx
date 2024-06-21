import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FaAsterisk } from 'react-icons/fa';

interface Option {
	value: string;
	label: string;
}

interface SelectElementProps {
	id: string;
	label: string;
	options: Option[];
	required?: boolean;
	registerName: string;
	error?: string;
}

const SelectElement: React.FC<SelectElementProps> = ({
	id,
	label,
	options,
	required,
	registerName,
	error,
}) => {
	const { register } = useFormContext();

	return (
		<div className="w-full">
			<label
				htmlFor={id}
				className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
			>
				{label}
				{required && (
					<span>
						<FaAsterisk size={6} color="red" opacity={0.7} className="mb-1" />
					</span>
				)}
			</label>
			<div className="mt-[2px]">
				<select
					id={id}
					{...register(registerName)}
					className="block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600 focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6 bg-white"
				>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				{error && <p className="mt-2 text-sm text-red-400">{error}</p>}
			</div>
		</div>
	);
};

export default SelectElement;
