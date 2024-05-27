import NavButton from '@/components/_landingpgComponents/navButton';
import Image from 'next/image';
import React from 'react';
import {
    authImage,
    facebookicon,
    googleicon,
    logoxyz,
    vector102,
} from '../../../../../public';
import OtpInputField from '../_components/otpInput';

export default function SignUp() {
	return (
		<section className="min-h-screen bg-foundation-white-white-400 flex justify-center items-center text-gray-500">
			<div className="max-w-[1400px] flex mq750:flex-col flex-row justify-center items-start gap-4 mq850:gap-0 py-6 px-6 mq750:px-6 w-full">
				<div className="flex h-screen justify-between mq750:w-full flex-col w-1/2 items-start text-start px-6 mq750:px-0 py-2 mq750:py-0 container">
					<div className=" mq850:mb-8 mb-4">
						<Image
							src={logoxyz}
							alt=""
							className="w-[98px] h-10 object-contain"
						/>
					</div>
					<div className="flex flex-col w-full justify-center items-center text-base font-inter mq850:my-8 my-4">
						<div className="max-w-[350px] mq750:w-full flex flex-col justify-start text-start items-center">
							<h2 className=" w-full font-normal text-start text-gray-700 mb-2">
								Email Verification
							</h2>
							<p className=" w-full font-normal text-start text-gray-700 mb-8">
								Kindly enter the five digit verification code sent to your email
								address.
							</p>
							<form className="w-full">
								<div>
									<label className="block mb-4">
										{/* <input
											type="number"
											placeholder=""
											className="px-4 py-4 mt-2 placeholder:text-foundation-grey-grey-700 w-full rounded-lg border-[1px] border-solid border-[#d0d0d0]"
											// {...register('email', {
											// 	required: true,
											// 	pattern: emailRegex,
											// })}
										/> */}
                                        <OtpInputField />
										{/* error handler */}
										{/* {error.email && (
											<span className="error-message px-2">
												email is required
											</span>
										)} */}
									</label>
								</div>
								<NavButton styles="w-full mb-6 mt-8 bg-foundation-purple-purple-400 text-white hover:bg-foundation-purple-purple-200 active:bg-foundation-purple-purple-100">
									Submit Code
								</NavButton>
								<p className="text-base text-gray-700 text-center my-0">
									{`Didn't`} receive the code{' '}
									<a
										href="/login"
										className="text-foundation-purple-purple-400 hover:text-foundation-purple-purple-200"
									>
										Resend Code
									</a>
								</p>
							</form>
						</div>
					</div>
					<h3 className="mq850:w-[293px] flex align-bottom w-full leading-[24px] text-base font-normal text-wrap my-0 text-[#d0d0d0] mt-10">
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
