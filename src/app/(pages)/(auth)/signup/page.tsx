"use client"

import NavButton from '@/components/_landingpgComponents/navButton';
import { signUpFormSchema } from '@/lib/api/definition';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TypeOf } from 'zod';
import { authImage, facebookicon, googleicon, logoxyz, vector102 } from '../../../../../public';
import * as signup from '../../../../lib/api/signupApi';
import PasswordInput from '../_components/passwordInput';
import { emailRegex } from '../RegexFile';

export type SignupData = TypeOf<typeof signUpFormSchema>;

export default function SignUp() {

    const router = useRouter();

    const {handleSubmit, register, reset, formState: {errors}} = useForm<SignupData>({
        resolver: zodResolver(signUpFormSchema),
    });

    const mutation = useMutation({
        mutationFn: (data: SignupData) => {
            return signup.store(data);
        },
        onSuccess: (data) => {
            console.log("data submitted", data)
        },
        onError: (error) => {
            console.error('Error signing up', error)
        }
    });

    const onSubmit: SubmitHandler<SignupData> = data => {
        mutation.mutate(data);
        console.log(data, "data sent")
        alert("data submitted")
        reset()
    }
    
  return (
		<section className="min-h-screen bg-foundation-white-white-400 flex justify-center items-center text-gray-500">
			<div className="max-w-[1400px] flex md:flex-col flex-row gap-4 2md:gap-0 justify-center items-start py-6 px-6 md:px-6 w-full">
				<div className="flex h-auto md:w-full flex-col w-1/2 justify-between items-start text-start px-6 md:px-0 py-2 md:py-0 container">
					<div className=" 2md:mb-8 mb-4">
						<Link href={'/'}>
							<Image
								src={logoxyz}
								alt=""
								className="w-[98px] h-10 object-contain"
							/>
						</Link>
					</div>
					<div className="flex flex-col w-full justify-center items-center text-base font-inter 2md:my-8 my-4">
						<div className="max-w-[450px] md:w-full flex flex-col justify-start text-start items-center">
							<h2 className=" w-full font-normal text-start text-gray-700 mb-7">
								Create your XYZ account
							</h2>
							<form method='post' className="w-full" onSubmit={handleSubmit(onSubmit)}>
								<div>
									<label htmlFor="email" className="block mb-4">
										<span className=" text-foundation-grey-grey-900">
											Email Address
										</span>
										<input
											type="email"
											id="email"
											placeholder="Enter your email address"
											className="px-4 py-4 mt-2 placeholder:text-foundation-grey-grey-700 w-full rounded-lg border-[1px] border-solid border-[#d0d0d0]"
											{...register('email', {
												required: true,
												pattern: emailRegex,
											})}
										/>
										{/* error handler */}
										{errors.email && (
											<span
												role="alert"
												className="error-message px-2 text-[14px] text-red-400"
											>
												{errors.email.message}
											</span>
										)}
									</label>
									<label htmlFor="password" className=" block mb-6">
										<span className=" text-foundation-grey-grey-900">
											Password
										</span>
										<PasswordInput
											id="password"
											placeholder="Create password"
											register={register('password')}
											error={errors.password?.message}
										/>
										{/* error handler */}
										{errors.password && (
											<span
												role="alert"
												className="error-message px-2 text-[14px] text-red-400"
											>
												{errors.password.message}
											</span>
										)}
									</label>
									<label htmlFor="confirmPassword" className=" block mb-6">
										<span className=" text-foundation-grey-grey-900">
											Confirm Password
										</span>
										<PasswordInput
											id="password"
											placeholder="Confirm password"
											register={register('confirmPassword')}
											error={errors.password?.message}
										/>
										{/* error handler */}
										{errors.confirmPassword && (
											<span
												role="alert"
												className="error-message px-2 text-[14px] text-red-400"
											>
												{errors.confirmPassword.message}
											</span>
										)}
									</label>
								</div>
								<NavButton
									styles="w-full mb-6 mt-2 bg-foundation-purple-purple-400 text-white hover:bg-foundation-purple-purple-200 active:bg-foundation-purple-purple-100"
								>
									Sign Up
								</NavButton>
								<p className="text-base text-gray-700 text-center my-0">
									If you already have an account{' '}
									<a
										href="/login"
										className="text-foundation-purple-purple-400 hover:text-foundation-purple-purple-200"
									>
										Login
									</a>
								</p>
								<div className="flex justify-center items-center">
									<div className="w-[340px] relative h-10 text-[#d0d0d0] text-base my-8 flex justify-center items-center text-center">
										<Image
											className="absolute top-[20px] left-[0px] max-h-full w-[340px] ss:w-[300px]"
											alt=""
											src={vector102}
										/>
										<div className="absolute top-[0px] left-[100px] bg-white w-[150px] ss:left-[70px] flex flex-row items-center justify-center p-2.5 box-border">
											<div className="relative tracking-[0.01em] leading-[140%]">
												Or Sign Up using
											</div>
										</div>
									</div>
								</div>

								<div className="flex flex-col justify-center mb-8 gap-4 text-gray-700 text-[18px]">
									<button className="bg-white hover:bg-foundation-grey-grey-200 rounded-2xl border-2 outline-none border-foundation-grey-grey-300 border-solid cursor-pointer flex items-center justify-center font-semibold py-4 px-6 gap-[10px] text-center align-middle">
										<Image src={googleicon} alt="" />
										Google
									</button>
									<button className="bg-white hover:bg-foundation-grey-grey-200 rounded-2xl border-2 outline-none border-foundation-grey-grey-300 border-solid cursor-pointer flex items-center justify-center font-semibold py-4 px-6 gap-[10px] text-center align-middle">
										<Image src={facebookicon} alt="" />
										Facebook
									</button>
								</div>
							</form>
						</div>
					</div>
					<h3 className="2md:w-[293px] w-full leading-[24px] text-base font-normal text-wrap my-0 text-[#d0d0d0] mt-10">
						© 2024 XYZ. All rights reserved.
					</h3>
				</div>
				<div className="2md:w-1/2 w-full h-auto flex-1 bg-foundation-purple-purple-400 rounded-xl overflow-hidden container">
					<Image
						src={authImage}
						alt=""
						className="max-w-[1050px] w-full h-full object-contain my-0"
						// layout="responsive"
					/>
				</div>
			</div>
		</section>
	);
}
