'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import * as data from '@/data/setupData';
import { PricePaymentSchema } from '@/lib/pricePaymentSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { FaAsterisk } from 'react-icons/fa';
import { z } from 'zod';
import InputElement from './Input/InputElement';
import SelectElement from './Input/SelectElement';
import InputFileUpload from './Input/UploadInputElement';

type Inputs = z.infer<typeof PricePaymentSchema>;

const steps = [
	{
		id: 'Step 1',
		name: 'Product Information',
		fields: [
			'customerPlan',
			'numberOfUsers',
			'paymentPlan',
			'paymentMethod',
			'orderHistory',
			'renewalType',
			'currencyType',
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
		name: 'Schedule',
		fields: [''],
	},
];

export default function PricePaymentForm() {
	const [previousStep, setPreviousStep] = useState(0);
	const [currentStep, setCurrentStep] = useState(0);
	const [completedSteps, setCompletedSteps] = useState<boolean[]>(
		Array(steps.length).fill(false)
	);
	const delta = currentStep - previousStep;

	const methods = useForm<Inputs>({
		resolver: zodResolver(PricePaymentSchema),
	});

	const {
		register,
		handleSubmit,
		watch,
		reset,
		trigger,
		formState: { errors },
	} = methods;

	// const {
	// 	register,
	// 	handleSubmit,
	// 	watch,
	// 	reset,
	// 	trigger,
	// 	formState: { errors },
	// } = useForm<Inputs>({
	// 	resolver: zodResolver(FormDataSchema),
	// });

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
			setCompletedSteps((prev) => {
				const newCompletedSteps = [...prev];
				newCompletedSteps[currentStep] = true;
				return newCompletedSteps;
			});
		}
	};

	const prev = () => {
		if (currentStep > 0) {
			setPreviousStep(currentStep);
			setCurrentStep((step) => step - 1);
		}
	};

	return (
		<section className=" w-full flex flex-col mq850:flex-rowcol justify-between">
			<div className="stepper-container w-full flex-row flex gap-3">
				{steps.map((step, index) => (
					<div
						key={index}
						className={`step ${index === currentStep ? 'active' : ''} ${
							completedSteps[index] ? 'completed' : ''
						} bg-foundation-purple-purple-100`}
					></div>
				))}
			</div>

			{/* Form */}

			<FormProvider {...methods}>
				<form className=" py-2" onSubmit={handleSubmit(processForm)}>
					{currentStep === 0 && (
						<motion.div
							initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.2, ease: 'easeInOut' }}
						>
							<h2 className="text-base font-semibold leading-7 text-foundation-black-black-400 my-0">
								Product Information
							</h2>

							<div className="max-w-[450px] flex flex-row justify-between mt-2 mb-7">
								<div className="flex flex-col mq850:flex-rowcol justify-center items-start text-start gap-2">
									<h4 className="m-0 text-sm font-normal leading-5 text-foundation-black-black-400 my-0">
										Product Name
									</h4>
									<p className="m-0 ml-2 text-foundation-grey-grey-700 text-xs">
										XYZ
									</p>
								</div>
								<div className="flex flex-col mq850:flex-rowcol justify-center items-start text-start gap-2">
									<h4 className="m-0 text-sm font-normal leading-5 text-foundation-black-black-400 my-0">
										Product Number
									</h4>
									<p className="m-0 ml-2 text-foundation-grey-grey-700 text-xs">
										DES-125-1220
									</p>
								</div>
								<div className="flex flex-col mq850:flex-rowcol justify-center items-start text-start gap-2">
									<h4 className="m-0 text-sm font-normal leading-5 text-foundation-black-black-400 my-0">
										Customer ID
									</h4>
									<p className="m-0 ml-2 text-foundation-grey-grey-700 text-xs">
										CIDA10000
									</p>
								</div>
							</div>

							<div className="mt-2 grid flex-col mq850:flex-rowcols-1 gap-x-6 gap-y-4 sm:flex-col mq850:flex-rowcols-6">
								{/* Customer Plan and Number of users */}
								<div className="flex flex-col mq850:flex-rowcol mq850:flex-row w-full gap-10">
									<div className="w-full">
										<SelectElement
											id="customerPlan"
											label="Customer Plan"
											options={data.customerPlan}
											registerName="customerPlan"
											error={errors.customerPlan?.message}
										/>
									</div>
									<div className="w-full">
										<SelectElement
											id="numberOfUsers"
											label="Number of Users"
											options={data.numberOfUsers}
											registerName="numberOfUsers"
											error={errors.numberOfUsers?.message}
										/>
									</div>
								</div>

								{/* Payment plan and Payment method */}
								<div className="flex flex-col mq850:flex-row w-full gap-10">
									<div className="w-full">
										<SelectElement
											id="paymentPlan"
											label="Payment Plan"
											options={data.paymentPlan}
											registerName="paymentPlan"
											error={errors.paymentPlan?.message}
										/>
									</div>
									<div className="w-full">
										<SelectElement
											id="paymentMethod"
											label="Payment Method"
											options={data.paymentMethod}
											registerName="paymentMethod"
											error={errors.paymentMethod?.message}
										/>
									</div>
								</div>

								{/* Order History and Renewal Type */}
								<div className="flex flex-col mq850:flex-row mq850:flex-rowcol w-full gap-10">
									<div className="w-full">
										<SelectElement
											id="orderHistory"
											label="Order History"
											options={data.orderHitory}
											registerName="orderHistory"
											error={errors.orderHistory?.message}
										/>
									</div>
									<div className="w-full">
										<SelectElement
											id="renewalType"
											label="Renewal Type"
											options={data.renewalType}
											registerName="renewalType"
											error={errors.renewalType?.message}
										/>
									</div>
								</div>

								{/* Business Type and filling information */}
								<div className="flex flex-col w-full gap-10">
									<div className="w-full mq850:w-[47%]">
										<SelectElement
											id="currencyType"
											label="Currency Type"
											options={data.currencyType}
											registerName="currencyType"
											error={errors.currencyType?.message}
										/>
									</div>
								</div>
							</div>
						</motion.div>
					)}
					{currentStep === 1 && (
						<>
							<h2 className="text-base font-semibold leading-7 text-gray-900">
								Schedule
							</h2>
							<p className="mt-1 text-sm leading-6 text-gray-600">
								Schedule Component
							</p>
						</>
					)}
				</form>
			</FormProvider>

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
