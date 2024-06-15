'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { FormDataSchema } from '@/lib/setupSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaAsterisk } from 'react-icons/fa';
import { z } from 'zod';

type Inputs = z.infer<typeof FormDataSchema>;

const steps = [
	{
		id: 'Step 1',
		name: 'Personal Information',
		fields: [
			'businessName',
			'businessAddress',
			'businessPhoneNumber',
			'businessCountry',
			'language',
		],
	},
	{
		id: 'Step 2',
		name: 'Legal Information',
		fields: [
			'legalBusinessName',
			'rcNumber',
			'tinNumber',
			'eiNumber',
			'businessCountry',
			'businessAddress',
			'businessState',
		],
	},
	{
		id: 'Step 3',
		name: 'Address',
		fields: ['country', 'state', 'city', 'street', 'zip'],
	},
	{ id: 'Step 4', name: 'Complete' },
	// {
	// 	id: 'Step 5',
	// 	name: 'Address',
	// 	fields: ['country', 'state', 'city', 'street', 'zip'],
	// },
];

export default function Form() {
	const [previousStep, setPreviousStep] = useState(0);
	const [currentStep, setCurrentStep] = useState(0);
	const delta = currentStep - previousStep;

	const {
		register,
		handleSubmit,
		watch,
		reset,
		trigger,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: zodResolver(FormDataSchema),
	});

	const processForm: SubmitHandler<Inputs> = (data) => {
		console.log(data);
		reset();
	};

	type FieldName = keyof Inputs;

	const next = async () => {
		const fields = steps[currentStep].fields;
		const output = await trigger(fields as FieldName[], { shouldFocus: true });

		if (!output) return;

		if (currentStep < steps.length - 1) {
			if (currentStep === steps.length - 2) {
				await handleSubmit(processForm)();
			}
			setPreviousStep(currentStep);
			setCurrentStep((step) => step + 1);
		}
	};

	const prev = () => {
		if (currentStep > 0) {
			setPreviousStep(currentStep);
			setCurrentStep((step) => step - 1);
		}
	};

    const progressWidth = ((currentStep + 1) / steps.length) * 100;


	return (
		<section className=" w-full flex flex-col justify-between">
			<div className="stepper-container w-full flex-row flex gap-3">
				{steps.map((step, index) => (
					<div
						key={index}
						className={`step ${
							index === currentStep
								? 'active'
								: 'bg-foundation-purple-purple-100'
						}`}
					></div>
				))}
			</div>
			{/* steps */}
			{/* <nav aria-label="Progress">
				<ul role="list" className="space-y-4 flex md:space-y-0">
					{steps.map((step, index) => (
						<li key={step.name} className="flex flex-col w-full">
							{currentStep > index ? (
								<div className="group flex flex-col border-l-4 border-black py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
									<span className="text-sm font-medium text-sky-600 transition-colors ">
										{step.id}
									</span>
									<span className="text-sm font-medium">{step.name}</span>
								</div>
							) : currentStep === index ? (
								<div
									className="flex flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
									aria-current="step"
								>
									<span className="text-sm font-medium text-sky-600">
										{step.id}
									</span>
									<span className="text-sm font-medium">{step.name}</span>
								</div>
							) : (
								<div className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
									<span className="text-sm font-medium text-gray-500 transition-colors">
										{step.id}
									</span>
									<span className="text-sm font-medium">{step.name}</span>
								</div>
							)}
						</li>
					))}
				</ul>
			</nav> */}

			{/* Form */}
			<form className=" py-2" onSubmit={handleSubmit(processForm)}>
				{currentStep === 0 && (
					<motion.div
						initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.2, ease: 'easeInOut' }}
					>
						<h2 className="text-base font-semibold leading-7 text-foundation-black-black-400 my-0">
							General Information
						</h2>
						<div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
							{/* Business name and description */}
							<div className="flex flex-row w-full gap-10">
								<div className=" w-full">
									<label
										htmlFor="businessName"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										Business Name{' '}
										<span>
											<FaAsterisk
												size={6}
												color="red"
												opacity={0.7}
												className="mb-1"
											/>
										</span>
									</label>
									<div className="mt-[2px]">
										<input
											type="text"
											id="businessName"
											autoComplete="organization-title"
											placeholder="What is your business name?"
											className="block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
											{...register('businessName')}
										/>
										{errors.businessName?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.businessName.message}
											</p>
										)}
									</div>
								</div>
								<div className="w-full">
									<label
										htmlFor="businessDescription"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										Business Description{' '}
										<span className="font-inter text-foundation-grey-grey-300">
											(Optional)
										</span>
									</label>
									<div className="mt-[2px]">
										<textarea
											id="businessDescription"
											placeholder="Write a brief description of your business"
											autoComplete="off"
											className=" block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6 h-[100px]"
											{...register('businessDescription')}
										/>
										{errors.businessDescription?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.businessDescription.message}
											</p>
										)}
									</div>
								</div>
							</div>

							{/* website and email address */}
							<div className="flex flex-row w-full gap-10">
								<div className=" w-full">
									<label
										htmlFor="businessName"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										Website
									</label>
									<div className="mt-[2px]">
										<input
											type="text"
											id="businessWebsite"
											autoComplete="off"
											placeholder="e.g yourcompany.com"
											className="block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
											{...register('businessWebsite')}
										/>
										{errors.businessWebsite?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.businessWebsite.message}
											</p>
										)}
									</div>
								</div>
								<div className="w-full">
									<label
										htmlFor="businessEmail"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										Email Address
									</label>
									<div className="mt-[2px]">
										<input
											type="email"
											id="businessEmail"
											placeholder="Write a brief description of your business"
											autoComplete="email"
											className=" block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
											{...register('businessEmail')}
										/>
										{errors.businessEmail?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.businessEmail.message}
											</p>
										)}
									</div>
								</div>
							</div>

							{/* business address and country */}
							<div className="flex flex-row w-full gap-10">
								<div className=" w-full">
									<label
										htmlFor="businessAddress"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										Address
										<span>
											<FaAsterisk
												size={6}
												color="red"
												opacity={0.7}
												className="mb-1"
											/>
										</span>
									</label>
									<div className="mt-[2px]">
										<input
											type="text"
											id="businessAddress"
											autoComplete="given-name"
											placeholder="What is your business address"
											className="block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
											{...register('businessAddress')}
										/>
										{errors.businessAddress?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.businessAddress.message}
											</p>
										)}
									</div>
								</div>
								<div className="w-full">
									<label
										htmlFor="businessCountry"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										Country
										<span>
											<FaAsterisk
												size={6}
												color="red"
												opacity={0.7}
												className="mb-1"
											/>
										</span>
									</label>
									<div className="mt-[2px]">
										<select
											id="businessCountry"
											{...register('businessCountry')}
											autoComplete="country-name"
											className="block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6 bg-white"
										>
											<option>Select Country</option>
											<option>United States</option>
											<option>Canada</option>
											<option>Mexico</option>
										</select>
										{errors.businessCountry?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.businessCountry.message}
											</p>
										)}
									</div>
								</div>
							</div>

							{/* Phone number and alternative phone number */}
							<div className="flex flex-row w-full gap-10">
								<div className=" w-full">
									<label
										htmlFor="businessPhoneNumber"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										Phone Number
										<span>
											<FaAsterisk
												size={6}
												color="red"
												opacity={0.7}
												className="mb-1"
											/>
										</span>
									</label>
									<div className="mt-[2px]">
										<input
											type="number"
											id="businessPhoneNumber"
											autoComplete="off"
											placeholder="Enter your business Phone number"
											className="block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
											{...register('businessPhoneNumber')}
										/>
										{errors.businessPhoneNumber?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.businessPhoneNumber.message}
											</p>
										)}
									</div>
								</div>
								<div className="w-full">
									<label
										htmlFor="alternativeNumber"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										Alternative Phone Number
									</label>
									<div className="mt-[2px]">
										<input
											type="number"
											id="alternativeNumber"
											placeholder="Enter your alternative business phone number"
											autoComplete="tel"
											className=" block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
											{...register('alternativeNumber')}
										/>
										{errors.alternativeNumber?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.alternativeNumber.message}
											</p>
										)}
									</div>
								</div>
							</div>

							{/* Fax number and language  */}

							<div className="flex flex-row w-full gap-10">
								<div className=" w-full">
									<label
										htmlFor="faxNumber"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										Fax Number
									</label>
									<div className="mt-[2px]">
										<input
											type="number"
											id="faxNumber"
											autoComplete="off"
											placeholder="Enter your Fax Number"
											className="block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
											{...register('faxNumber')}
										/>
										{errors.faxNumber?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.faxNumber.message}
											</p>
										)}
									</div>
								</div>
								<div className="w-full">
									<label
										htmlFor="language"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										Laungage
										<span>
											<FaAsterisk
												size={6}
												color="red"
												opacity={0.7}
												className="mb-1"
											/>
										</span>
									</label>
									<div className="mt-[2px]">
										<select
											id="language"
											{...register('language')}
											autoComplete="off"
											className="block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
										>
											<option value="null">Select Preferred Language</option>
											<option>English</option>
											<option>Spanish</option>
											<option>French</option>
										</select>
										{errors.language?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.language.message}
											</p>
										)}
									</div>
								</div>
							</div>

							{/* Facebook and Instagram handle */}

							<div className="flex flex-row w-full gap-10">
								<div className=" w-full">
									<label
										htmlFor="businessFacebook"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										Facebook Handle
									</label>
									<div className="mt-[2px]">
										<input
											type="text"
											id="businessFacebook"
											autoComplete="off"
											placeholder="What is your business facebook username"
											className="block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
											{...register('businessFacebook')}
										/>
										{errors.businessFacebook?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.businessFacebook.message}
											</p>
										)}
									</div>
								</div>
								<div className="w-full">
									<label
										htmlFor="businessInstagram"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										Instagram Handle
									</label>
									<div className="mt-[2px]">
										<input
											type="text"
											id="businessInstagram"
											placeholder="What is your business instagram username"
											autoComplete="text"
											className=" block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
											{...register('businessInstagram')}
										/>
										{errors.businessInstagram?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.businessInstagram.message}
											</p>
										)}
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				)}

				{currentStep === 1 && (
					<motion.div
						initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
					>
						<h2 className="text-base font-semibold leading-7 text-foundation-black-black-400 my-0">
							Legal Information
						</h2>

						<div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
							{/* legal Business name and description */}
							<div className="flex flex-row w-full gap-10">
								<div className=" w-full">
									<label
										htmlFor="legalBusinessName"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										Legal Business Name{' '}
										<span>
											<FaAsterisk
												size={6}
												color="red"
												opacity={0.7}
												className="mb-1"
											/>
										</span>
									</label>
									<div className="mt-[2px]">
										<input
											type="text"
											id="legalBusinessName"
											autoComplete="organization-title"
											placeholder="Enter your business name on Govt document"
											className="block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
											{...register('legalBusinessName')}
										/>
										{errors.legalBusinessName?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.legalBusinessName.message}
											</p>
										)}
									</div>
								</div>
								<div className="w-full">
									<label
										htmlFor="businessDescription"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										Business Description{' '}
										<span className="font-inter text-foundation-grey-grey-300">
											(Optional)
										</span>
									</label>
									<div className="mt-[2px]">
										<textarea
											id="businessDescription"
											placeholder="Write a brief description of your business"
											autoComplete="off"
											className=" block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6 h-[100px]"
											{...register('businessDescription')}
										/>
										{errors.businessDescription?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.businessDescription.message}
											</p>
										)}
									</div>
								</div>
							</div>

							{/* Rc Number and Tax ID Number */}
							<div className="flex flex-row w-full gap-10">
								<div className=" w-full">
									<label
										htmlFor="rcNumber"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										RC Number
										<span>
											<FaAsterisk
												size={6}
												color="red"
												opacity={0.7}
												className="mb-1"
											/>
										</span>
									</label>
									<div className="mt-[2px]">
										<input
											type="text"
											id="rcNumber"
											autoComplete="off"
											placeholder="Enter your Registered Company Number"
											className="block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
											{...register('rcNumber')}
										/>
										{errors.rcNumber?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.rcNumber.message}
											</p>
										)}
									</div>
								</div>
								<div className="w-full">
									<label
										htmlFor="tinNumber"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										TIN No
										<span>
											<FaAsterisk
												size={6}
												color="red"
												opacity={0.7}
												className="mb-1"
											/>
										</span>
									</label>
									<div className="mt-[2px]">
										<input
											type="text"
											id="tinNumber"
											autoComplete="given-name"
											placeholder="Enter your Tax identification No"
											className="block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
											{...register('tinNumber')}
										/>
										{errors.tinNumber?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.tinNumber.message}
											</p>
										)}
									</div>
								</div>
							</div>

							{/* business address and country */}
							<div className="flex flex-row w-full gap-10">
								<div className=" w-full">
									<label
										htmlFor="businessAddress"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										Address
										<span>
											<FaAsterisk
												size={6}
												color="red"
												opacity={0.7}
												className="mb-1"
											/>
										</span>
									</label>
									<div className="mt-[2px]">
										<input
											type="text"
											id="businessAddress"
											autoComplete="off"
											placeholder="What is your business address"
											className="block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
											{...register('businessAddress')}
										/>
										{errors.businessAddress?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.businessAddress.message}
											</p>
										)}
									</div>
								</div>
								<div className="w-full">
									<label
										htmlFor="businessCountry"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										Country
										<span>
											<FaAsterisk
												size={6}
												color="red"
												opacity={0.7}
												className="mb-1"
											/>
										</span>
									</label>
									<div className="mt-[2px]">
										<select
											id="businessCountry"
											{...register('businessCountry')}
											autoComplete="country-name"
											className="block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
										>
											<option>Select Country</option>
											<option>United States</option>
											<option>Canada</option>
											<option>Mexico</option>
										</select>
										{errors.businessCountry?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.businessCountry.message}
											</p>
										)}
									</div>
								</div>
							</div>

							{/* Legal State */}
							<div className="flex flex-row w-full gap-10">
								<div className=" mq850:w-[47.5%] w-full">
									<label
										htmlFor="businessState"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										State
										<span>
											<FaAsterisk
												size={6}
												color="red"
												opacity={0.7}
												className="mb-1"
											/>
										</span>
									</label>
									<div className="mt-[2px]">
										<select
											id="businessState"
											{...register('businessState')}
											autoComplete="country-name"
											className="block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
										>
											<option>Select State</option>
											<option>Ohio</option>
											<option>Florida</option>
											<option>Washington</option>
										</select>
										{errors.businessState?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.businessState.message}
											</p>
										)}
									</div>
								</div>
							</div>

							{/* EIN for payroll and SSN */}
							<div className="flex flex-row w-full gap-10">
								<div className=" w-full">
									<label
										htmlFor="eiNumber"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										EIN for Payroll{' '}
										<span>
											<FaAsterisk
												size={6}
												color="red"
												opacity={0.7}
												className="mb-1"
											/>
										</span>
									</label>
									<div className="mt-[2px]">
										<input
											type="text"
											id="eiNumber"
											autoComplete="organization-title"
											placeholder="Enter Employee Identification Number"
											className="block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
											{...register('eiNumber')}
										/>
										{errors.eiNumber?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.eiNumber.message}
											</p>
										)}
									</div>
								</div>
								<div className="w-full">
									<label
										htmlFor="snNumber"
										className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
									>
										SSN{' '}
									</label>
									<div className="mt-[2px]">
										<input
											type="number"
											id="snNumber"
											placeholder="Write a brief description of your business"
											autoComplete="off"
											className=" block w-full rounded-md border border-solid py-3 px-3 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                             focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
											{...register('snNumber')}
										/>
										{errors.snNumber?.message && (
											<p className="mt-2 text-sm text-red-400">
												{errors.snNumber.message}
											</p>
										)}
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				)}

				{currentStep === 2 && (
					<>
						<h2 className="text-base font-semibold leading-7 text-gray-900">
							Complete
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							Thank you for your submission.
						</p>
					</>
				)}
			</form>

			{/* Navigation */}
			<div className="py-5">
				<div className="flex justify-between">
					<button
						type="button"
						onClick={prev}
						disabled={currentStep === 0}
						className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-foundation-grey-grey-900 shadow-sm border border-solid border-foundation-grey-grey-900 hover:bg-foundation-purple-purple-400 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
					>
						Prev
					</button>
					<button
						type="button"
						onClick={next}
						disabled={currentStep === steps.length - 1}
						className="rounded-xl hover:bg-white px-4 py-3 text-sm font-semibold hover:text-foundation-grey-grey-900 shadow-sm border border-solid border-foundation-grey-grey-900 bg-foundation-purple-purple-400 text-white disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
					>
						Next
					</button>
				</div>
			</div>
		</section>
	);
}
