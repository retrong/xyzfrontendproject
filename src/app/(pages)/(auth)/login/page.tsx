import NavButton from '@/components/_landingpgComponents/navButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
    authImage,
    facebookicon,
    googleicon,
    logoxyz,
    vector102,
} from '../../../../../public';


export default function LogIn() {
	return (
		<section className="min-h-screen bg-foundation-white-white-400 flex justify-center items-center text-gray-500">
			<div className="max-w-[1400px] flex mq750:flex-col flex-row justify-center items-start gap-4 mq850:gap-0 py-6 px-6 mq750:px-6 w-full">
				<div className="flex h-auto mq750:w-full flex-col w-1/2 justify-start items-start text-start px-6 mq750:px-0 py-2 mq750:py-0 container">
					<div className=" mq850:mb-8 mb-4">
						<Link href={'/'}>
							<Image
								src={logoxyz}
								alt=""
								className="w-[98px] h-10 object-contain"
							/>
						</Link>
					</div>
					<div className="flex flex-col w-full justify-center items-center text-base font-inter mq850:my-8 my-4">
						<div className="max-w-[450px] mq750:w-full flex flex-col justify-start text-start items-center">
							<h2 className=" w-full font-normal text-start text-gray-700 mb-7">
								Login to your account
							</h2>
							<form className="w-full">
								<div>
									<label className="block mb-4">
										<span className=" text-foundation-grey-grey-900">
											Email Address
										</span>
										<input
											type="email"
											id="email"
											placeholder="Enter your email address"
											className="px-4 py-4 mt-2 placeholder:text-foundation-grey-grey-700 w-full rounded-lg border-[1px] border-solid border-[#d0d0d0]"
											// {...register('email', {
											//     required: true,
											//     pattern: emailRegex,
											// })}
										/>
										{/* error handler */}
										{/* {error.email && (
                                            <span className='error-message px-2'>email is required</span>
                                        )} */}
									</label>
									<label className=" block mb-6">
										<span className=" text-foundation-grey-grey-900">
											Password
										</span>
										<input
											type="password"
											id="password"
											placeholder="Create a password"
											className="px-4 py-4 mt-2 placeholder:text-foundation-grey-grey-700 w-full rounded-lg border-[1px] border-solid border-[#d0d0d0] active:border-foundation-purple-purple-400 focus:border-foundation-purple-purple-400 focus:border-2 "
											// {...register('password', {
											//     required: true,
											//     pattern: '',
											// })}
										/>
										{/* error handler */}
										{/* {error.password && (
                                            <span className='error-message px-2'>password is required</span>
                                        )} */}
									</label>
								</div>
								<NavButton styles="w-full mb-6 mt-2 bg-foundation-purple-purple-400 text-white hover:bg-foundation-purple-purple-200 active:bg-foundation-purple-purple-100">
									Login
								</NavButton>
								<p className="text-base text-gray-700 text-center my-0">
									If you {`don't`} have an account{' '}
									<a
										href="/signup"
										className="text-foundation-purple-purple-400 hover:text-foundation-purple-purple-200"
									>
										Sign Up
									</a>
								</p>
								<p className="text-base text-gray-700 text-center my-4">
									Forgotten password
									<Link
										href="/resetpassword"
										className="text-foundation-purple-purple-400 hover:text-foundation-purple-purple-200"
									>
										{' '}
										Click to Reset
									</Link>
								</p>

								{/* testing path to access */}
								<p className="text-base text-gray-700 text-center my-4">
									Click to direct access
									<Link
										href="/setup/business-information"
										className="text-foundation-purple-purple-400 hover:text-foundation-purple-purple-200"
									>
										{' '}
										Setup page
									</Link>
								</p>
								<div className="flex justify-center items-center">
									<div className="w-[340px] relative h-10 text-[#d0d0d0] text-base my-8 flex justify-center items-center text-center">
										<Image
											className="absolute top-[20px] left-[0px] max-h-full w-[340px] mq360:w-[300px]"
											alt=""
											src={vector102}
										/>
										<div className="absolute top-[0px] left-[100px] bg-white w-[150px] mq360:left-[70px] flex flex-row items-center justify-center p-2.5 box-border">
											<div className="relative tracking-[0.01em] leading-[140%]">
												Or Login using
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
					<h3 className="mq850:w-[293px] w-full leading-[24px] text-base font-normal text-wrap my-0 text-[#d0d0d0] mt-10">
						© 2024 XYZ. All rights reserved.
					</h3>
				</div>
				<div className="mq850:w-1/2 w-full h-auto flex-1 bg-foundation-purple-purple-400 rounded-xl overflow-hidden container">
					<Image
						src={authImage}
						alt=""
						className="max-w-[1050px] w-full h-full object-contain my-0"
					/>
				</div>
			</div>
		</section>
	);
}
