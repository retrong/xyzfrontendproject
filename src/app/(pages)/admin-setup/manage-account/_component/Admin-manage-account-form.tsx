import { motion } from 'framer-motion';
import { useState } from 'react';

import InputElement from '@/app/(pages)/setup/_setupComponets/Input/InputElement';
import SelectElement from '@/app/(pages)/setup/_setupComponets/Input/SelectElement';
import InputFileUpload from '@/app/(pages)/setup/_setupComponets/Input/UploadInputElement';
import ExampleWithProviders from '@/app/(pages)/setup/_setupComponets/userManagementTable';
import PermissionTable from '@/app/(pages)/setup/manage-account/_components/permissionTable';
import { PricePaymentSchema } from '@/lib/pricePaymentSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { FaAsterisk } from 'react-icons/fa';
import { z } from 'zod';

type Inputs = z.infer<typeof PricePaymentSchema>;

const steps = [
	{
		id: 'Step 1',
		name: 'Product Information',
		fields: [],
	},
	{
		id: 'Step 2',
		name: 'Legal Information',
		fields: [],
	},
	{
		id: 'Step 3',
		// name: 'Schedule',
		fields: [],
	},
	{
		id: 'Step 4',
		// name: 'Schedule',
		fields: [],
	},
	{
		id: 'Step 5',
		// name: 'Schedule',
		fields: [],
	},
	{
		id: 'Step 6',
		// name: 'Schedule',
		fields: [],
	},
	{
		id: 'Step 7',
		// name: 'Schedule',
		fields: [],
	},
];

export const gender = [
	{ value: '', label: 'Select Gender' },
	{ value: 'male', label: 'Male' },
	{ value: 'female', label: 'Female' },
	{ value: 'choose not to specify', label: 'choose not to specify' },
];

export const department = [
	{ value: '', label: 'Select your Department' },
	{ value: 'management', label: 'Management' },
	{ value: 'sales', label: 'Sales' },
	{ value: 'information', label: 'Information' },
];

export const maritalStatus = [
	{ value: '', label: 'Select your marital Status' },
	{ value: 'single', label: 'Single' },
	{ value: 'married', label: 'Married' },
	{ value: 'divorced', label: 'Divorced' },
	{ value: 'choose not to specify', label: 'choose not to specify' },
];

export default function AdminManageAccountForm() {
	const [previousStep, setPreviousStep] = useState(0);
	const [currentStep, setCurrentStep] = useState(0);
	const [completedSteps, setCompletedSteps] = useState<boolean[]>(
		Array(steps.length).fill(false)
	);
	const delta = currentStep - previousStep;

	// for the permission component
	const [isOpen, setIsOpen] = useState(true);
	const handleClick = () => {
		setIsOpen(!isOpen);
	};
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
		<section className="w-full flex flex-col mq850:flex-col justify-between">
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
							<ExampleWithProviders />
						</motion.div>
					)}
					{currentStep === 1 && (
						<motion.div
							initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.2, ease: 'easeInOut' }}
						>
							<ExampleWithProviders />
						</motion.div>
					)}
					{currentStep === 2 && (
						<motion.div
							initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.2, ease: 'easeInOut' }}
						>
							<div>
								<div>
									<h2 className="text-base m-0 font-semibold leading-7 text-foundation-black-black-400">
										Manage Permissions
									</h2>
									<p className="mt-1 m-0 text-sm leading-6 text-foundation-grey-grey-800">
										Manage Permissions for each role created.
									</p>
								</div>
								<div className="flex justify-between items-center mt-2">
									<h3 className="text-sm m-0 font-semibold leading-7 text-foundation-black-black-400">
										Modules
									</h3>
									<p className="bg-foundation-purple-purple-100 px-[10px] py-1 rounded-full text-sm font-normal text-foundation-black-black-400">
										Role: Admin
									</p>
								</div>
								<div
									className="flex flex-row justify-between items-center cursor-pointer"
									onClick={handleClick}
								>
									<div className="flex items-center gap-[6px] text-center align-middle">
										<div className="block rounded-full text-[30px] text-foundation-purple-purple-300">
											{isOpen ? '-' : '+'}
										</div>
										<p className="text-sm font-normal text-foundation-black-black-400">
											Customer Management
										</p>
									</div>
									<div className="flex gap-16">
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> Full
											Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" />{' '}
											Partial Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> No
											Permission
										</label>
									</div>
								</div>
								{isOpen && <PermissionTable />}
								<div className="flex flex-row justify-between items-center cursor-pointer">
									<div className="flex items-center gap-[6px] text-center align-middle">
										<div className="block rounded-full text-[30px] text-foundation-purple-purple-300">
											+
										</div>
										<p className="text-sm font-normal text-foundation-black-black-400">
											Product Management
										</p>
									</div>
									<div className="flex gap-16">
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> Full
											Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" />{' '}
											Partial Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> No
											Permission
										</label>
									</div>
								</div>
								<div
									className="flex flex-row justify-between items-center cursor-pointer"
									onClick={handleClick}
								>
									<div className="flex items-center gap-[6px] text-center align-middle">
										<div className="block rounded-full text-[30px] text-foundation-purple-purple-300">
											+
										</div>
										<p className="text-sm font-normal text-foundation-black-black-400">
											Supplier Management
										</p>
									</div>
									<div className="flex gap-16">
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> Full
											Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" />{' '}
											Partial Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> No
											Permission
										</label>
									</div>
								</div>
								<div
									className="flex flex-row justify-between items-center cursor-pointer"
									onClick={handleClick}
								>
									<div className="flex items-center gap-[6px] text-center align-middle">
										<div className="block rounded-full text-[30px] text-foundation-purple-purple-300">
											+
										</div>
										<p className="text-sm font-normal text-foundation-black-black-400">
											Warehouse Management
										</p>
									</div>
									<div className="flex gap-16">
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> Full
											Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" />{' '}
											Partial Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> No
											Permission
										</label>
									</div>
								</div>
								<div
									className="flex flex-row justify-between items-center cursor-pointer"
									onClick={handleClick}
								>
									<div className="flex items-center gap-[6px] text-center align-middle">
										<div className="block rounded-full text-[30px] text-foundation-purple-purple-300">
											+
										</div>
										<p className="text-sm font-normal text-foundation-black-black-400">
											Sales Management
										</p>
									</div>
									<div className="flex gap-16">
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> Full
											Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" />{' '}
											Partial Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> No
											Permission
										</label>
									</div>
								</div>
								<div
									className="flex flex-row justify-between items-center cursor-pointer"
									onClick={handleClick}
								>
									<div className="flex items-center gap-[6px] text-center align-middle">
										<div className="block rounded-full text-[30px] text-foundation-purple-purple-300">
											+
										</div>
										<p className="text-sm font-normal text-foundation-black-black-400">
											Account Management
										</p>
									</div>
									<div className="flex gap-16">
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> Full
											Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" />{' '}
											Partial Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> No
											Permission
										</label>
									</div>
								</div>
								<div
									className="flex flex-row justify-between items-center cursor-pointer"
									onClick={handleClick}
								>
									<div className="flex items-center gap-[6px] text-center align-middle">
										<div className="block rounded-full text-[30px] text-foundation-purple-purple-300">
											+
										</div>
										<p className="text-sm font-normal text-foundation-black-black-400">
											Finance Management
										</p>
									</div>
									<div className="flex gap-16">
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> Full
											Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" />{' '}
											Partial Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> No
											Permission
										</label>
									</div>
								</div>
								<div
									className="flex flex-row justify-between items-center cursor-pointer"
									onClick={handleClick}
								>
									<div className="flex items-center gap-[6px] text-center align-middle">
										<div className="block rounded-full text-[30px] text-foundation-purple-purple-300">
											+
										</div>
										<p className="text-sm font-normal text-foundation-black-black-400">
											Delivery Management
										</p>
									</div>
									<div className="flex gap-16">
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> Full
											Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" />{' '}
											Partial Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> No
											Permission
										</label>
									</div>
								</div>
								<div
									className="flex flex-row justify-between items-center cursor-pointer"
									onClick={handleClick}
								>
									<div className="flex items-center gap-[6px] text-center align-middle">
										<div className="block rounded-full text-[30px] text-foundation-purple-purple-300">
											+
										</div>
										<p className="text-sm font-normal text-foundation-black-black-400">
											HRM Management
										</p>
									</div>
									<div className="flex gap-16">
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> Full
											Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" />{' '}
											Partial Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> No
											Permission
										</label>
									</div>
								</div>
								<div
									className="flex flex-row justify-between items-center cursor-pointer"
									onClick={handleClick}
								>
									<div className="flex items-center gap-[6px] text-center align-middle">
										<div className="block rounded-full text-[30px] text-foundation-purple-purple-300">
											+
										</div>
										<p className="text-sm font-normal text-foundation-black-black-400">
											Payroll Management
										</p>
									</div>
									<div className="flex gap-16">
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> Full
											Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" />{' '}
											Partial Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> No
											Permission
										</label>
									</div>
								</div>
								<div
									className="flex flex-row justify-between items-center cursor-pointer"
									onClick={handleClick}
								>
									<div className="flex items-center gap-[6px] text-center align-middle">
										<div className="block rounded-full text-[30px] text-foundation-purple-purple-300">
											+
										</div>
										<p className="text-sm font-normal text-foundation-black-black-400">
											Production Management
										</p>
									</div>
									<div className="flex gap-16">
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> Full
											Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" />{' '}
											Partial Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> No
											Permission
										</label>
									</div>
								</div>
								<div
									className="flex flex-row justify-between items-center cursor-pointer"
									onClick={handleClick}
								>
									<div className="flex items-center gap-[6px] text-center align-middle">
										<div className="block rounded-full text-[30px] text-foundation-purple-purple-300">
											+
										</div>
										<p className="text-sm font-normal text-foundation-black-black-400">
											order Management
										</p>
									</div>
									<div className="flex gap-16">
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> Full
											Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" />{' '}
											Partial Permission
										</label>
										<label
											htmlFor=""
											className="flex items-center text-base gap-1"
										>
											<input type="checkbox" className="custom-checkbox" /> No
											Permission
										</label>
									</div>
								</div>
							</div>
						</motion.div>
					)}
					{currentStep === 3 && (
						<motion.div
							initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.2, ease: 'easeInOut' }}
						>
							<ExampleWithProviders />
						</motion.div>
					)}
					{currentStep === 4 && (
						<motion.div
							initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
						>
							<h2 className="text-base font-semibold leading-7 text-foundation-black-black-400 my-0 mt-1">
								Profile Information
							</h2>
							<p className="text-sm font-normal text-foundation-black-black-400 my-0 mt-2">
								Create your work profile as a professional in the company
							</p>
							<div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
								<div className="flex mq850:flex-row flex-col w-full gap-10">
									<InputElement
										id="userFirstName"
										label="First Name"
										type="text"
										required
										placeholder="What is your First Name?"
										registerName="userFirstName"
										// error={errors.taxConsultantName?.message}
									/>
									<InputElement
										id="userLastName"
										label="LastName"
										type="text"
										required
										placeholder="What is your Last Name?"
										registerName="userLastName"
										// error={errors.contactPerson?.message}
									/>
								</div>

								{/*middle name and mother name */}
								<div className="flex mq850:flex-row flex-col w-full gap-10">
									<InputElement
										id="userMiddleName"
										label="Middle Name"
										type="text"
										placeholder="What is your middle name?"
										registerName="userMiddleName"
										// error={errors.taxConsultantAddress?.message}
									/>
									<InputElement
										id="userMotherName"
										label="Mother Name"
										type="text"
										placeholder="What is your mother's name"
										registerName="userMotherName"
										// error={errors.taxConsultantAddress?.message}
									/>
								</div>

								{/* Staff ID no and role*/}
								<div className="flex mq850:flex-row flex-col w-full gap-10">
									<InputElement
										id="userStaffId"
										label="Staff I.D No."
										type="text"
										placeholder="Enter your Staff ID. No"
										registerName="userStaffId"
										// error={errors.auditorName?.message}
									/>
									<InputElement
										id="userRole"
										label="Role"
										required
										type="text"
										placeholder="What is your role?"
										registerName="userRole"
										// error={errors.contactPerson?.message}
									/>
								</div>

								{/* Email Adddress and gender*/}
								<div className="flex mq850:flex-row flex-col w-full gap-10">
									<InputElement
										id="userEmailAddress"
										label="Email Address"
										required
										type="text"
										placeholder="Enter Your Email Address"
										registerName="userEmailAddress"
										// error={errors.auditorAddress?.message}
									/>
									<SelectElement
										id="userGender"
										label="Gender"
										options={gender}
										required
										registerName="filingInformation"
										// error={errors.userGender?.message}
									/>
								</div>

								{/* Phone number and emergency number  */}

								<div className="flex mq850:flex-row flex-col w-full gap-10">
									<InputElement
										id="userPhoneNumber"
										label="Phone Number"
										type="text"
										placeholder="Enter your phone number"
										registerName="legalConsultantName"
										// error={errors.legalConsultantName?.message}
									/>
									<InputElement
										id="userEmergencyNumber"
										label="Emergency Contact Number"
										type="text"
										placeholder="Enter your emergency contact number"
										registerName="userEmergencyNumber"
										// error={errors.contactPerson?.message}
									/>
								</div>

								{/* Current address */}

								<div className="flex mq850:flex-row flex-col w-full gap-10">
									<InputElement
										id="userAddress"
										label="Current Address"
										type="text"
										placeholder="Enter your current address"
										registerName="userAddress"
										// error={errors.legalConsultantAddress?.message}
									/>
								</div>
							</div>
						</motion.div>
					)}
					{currentStep === 5 && (
						<motion.div
							initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
						>
							<h2 className="text-base font-semibold leading-7 text-foundation-black-black-400 my-0 mt-1">
								Profile Information
							</h2>
							<p className="text-sm font-normal text-foundation-black-black-400 my-0 mt-2">
								Create your work profile as a professional in the company
							</p>
							<div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
								{/* Tax consultant Name and Contact person */}
								<div className="flex mq850:flex-row flex-col w-full gap-10">
									<SelectElement
										id="userDepartment"
										label="Department"
										options={department}
										required
										registerName="userDepartment"
										// error={errors.userGender?.message}
									/>
									<InputElement
										id="userDesignation"
										label="Your Designation"
										type="text"
										required
										placeholder="What's your position in the compant?"
										registerName="userDesignation"
										// error={errors.contactPerson?.message}
									/>
								</div>

								{/*middle name and mother name */}
								<div className="flex mq850:flex-row flex-col w-full gap-10">
									<div className=" w-full">
										<label
											htmlFor="DateOfBirth"
											className="w-fit h-fit font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
										>
											Date of Birth{' '}
											<span>
												<FaAsterisk
													size={6}
													color="red"
													opacity={0.7}
													className="mb-1"
												/>
											</span>
											<input
												type="date"
												id="DateOfBirth"
												className="block w-full rounded-md border border-solid py-3 px-3 mt-1 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                                focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
												// {...register('fiscalYear')}
											/>
											{/* {errors.fiscalYear?.message && (
												<p className="mt-2 text-sm text-red-400">
													{errors.fiscalYear.message}
												</p>
											)} */}
										</label>
									</div>
									<div className=" w-full">
										<label
											htmlFor="DateOfEmployment"
											className="w-fit h-fit font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]"
										>
											Date of Employment{' '}
											<input
												type="date"
												id="DateOfEmployment"
												className="block w-full rounded-md border border-solid py-3 px-3 mt-1 text-foundation-grey-grey-900 shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600
                                                focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
												// {...register('fiscalYear')}
											/>
											{/* {errors.fiscalYear?.message && (
												<p className="mt-2 text-sm text-red-400">
													{errors.fiscalYear.message}
												</p>
											)} */}
										</label>
									</div>
								</div>

								{/* Staff ID no and role*/}
								<div className="flex mq850:flex-row flex-col w-full gap-10">
									<SelectElement
										id="maritalStatus"
										label="Marital Status"
										options={maritalStatus}
										required
										registerName="maritalStatus"
										// error={errors.userGender?.message}
									/>
									<InputFileUpload id="Profile-picture" register={register} />
								</div>

								{/* Email Adddress and gender*/}
								<div className="flex mq850:flex-row flex-col w-full gap-10">
									<InputElement
										id="userPermanentAddress"
										label="Permananet Address"
										required
										type="text"
										placeholder="Enter your Permananet Address"
										registerName="userPermanentAddress"
										// error={errors.auditorAddress?.message}
									/>
								</div>

								{/* Phone number and emergency number  */}

								<div className="flex mq850:flex-row flex-col w-full gap-10">
									<InputElement
										id="userQualification"
										label="Qualification"
										type="text"
										placeholder="Enter your highest qualification"
										registerName="userQualification"
										// error={errors.legalConsultantName?.message}
									/>
									<InputElement
										id="relavantExperience"
										label="Relevant Work Experience"
										type="text"
										placeholder="Enter a relevant work qualification"
										registerName="relavantExperience"
										// error={errors.contactPerson?.message}
									/>
								</div>

								{/* Current address */}

								<div className="flex mq850:flex-row flex-col w-full gap-10">
									<InputElement
										id="otherInformation"
										label="Other Information"
										type="text"
										placeholder="Enter any relevant information for profile."
										registerName="otherInformation"
										// error={errors.legalConsultantAddress?.message}
									/>
								</div>
							</div>
						</motion.div>
					)}
					{currentStep === 6 && (
						<motion.div
							initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
						>
							<h2 className="text-base font-semibold leading-7 text-foundation-black-black-400 my-0 mt-1">
								Next of Kin Details
							</h2>
							<p className="text-sm font-normal text-foundation-black-black-400 my-0 mt-2">
								Enter the necessary details for your Next of Kin
							</p>
							<div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
								<div className="flex mq850:flex-row flex-col w-full gap-10">
									<InputElement
										id="nameOfKin"
										label="Name of Next of Kin"
										type="text"
										required
										placeholder="What is the name of your Next of Kin?"
										registerName="nameOfKin"
										// error={errors.legalConsultantName?.message}
									/>
									<InputElement
										id="kinRelationship"
										label="Relationship"
										type="text"
										placeholder="What is your relationship with this person"
										registerName="kinRelationship"
										// error={errors.contactPerson?.message}
									/>
								</div>
								{/* Email Adddress and gender*/}
								<div className="flex mq850:flex-row flex-col w-full gap-10">
									<InputElement
										id="kinPermanentAddress"
										label="Address of Next of Kin"
										required
										type="text"
										placeholder="Enter your Permananet Address"
										registerName="kinPermanentAddress"
										// error={errors.auditorAddress?.message}
									/>
								</div>

								{/* Phone number and emergency number  */}

								<div className="flex mq850:flex-row flex-col w-full gap-10">
									<InputElement
										id="kinEmail"
										label="Email Address"
										type="text"
										placeholder="What is your Next of Kin email address"
										registerName="kinEmail"
										// error={errors.legalConsultantName?.message}
									/>
									<InputElement
										id="kinPhoneNumber"
										label="Phone Number"
										type="text"
										required
										placeholder="Enter Your Next of Kin phone number"
										registerName="kinPhoneNumber"
										// error={errors.contactPerson?.message}
									/>
								</div>
							</div>
						</motion.div>
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
						className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-foundation-purple-purple-500 shadow-sm border-solid border-foundation-purple-purple-500 border-2 hover:bg-foundation-purple-purple-400 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
					>
						Prev
					</button>
					<button
						type="button"
						onClick={next}
						disabled={currentStep === steps.length - 1}
						className="rounded-xl px-4 py-3 text-sm font-semibold shadow-sm border border-solid border-foundation-purple-purple-400 bg-foundation-purple-purple-400 hover:bg-foundation-purple-purple-300 text-white disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
					>
						Next
					</button>
				</div>
			</div>
		</section>
	);
}
