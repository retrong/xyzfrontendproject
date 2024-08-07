import NavButton from '@/components/_landingpgComponents/navButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
    authImage,
    logoxyz,
} from '../../../../../public';
import OtpInputField from '../../../../components/otpInput';

export default function VerifyEmail() {
	return (
		<section className="min-h-screen bg-foundation-white-white-400 flex justify-center items-center text-gray-500">
			<div className="max-w-[1400px] flex md:flex-col flex-row justify-center items-start gap-4 2md:gap-0 py-6 px-6 md:px-6 w-full">
				<div className="flex h-screen justify-between md:w-full flex-col w-1/2 items-start text-start px-6 md:px-0 py-2 md:py-0 container">
					<div className=" 2md:mb-8 mb-4">
						<Image
							src={logoxyz}
							alt=""
							className="w-[98px] h-10 object-contain"
						/>
					</div>
					<div className="flex flex-col w-full justify-center items-center text-base font-inter 2md:my-8 my-4">
						<div className="max-w-[350px] md:w-full flex flex-col justify-start text-start items-center">
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
                                        <OtpInputField />
										{/* error handler */}
										{/* {error.email && (
											<span className="error-message px-2">
												email is required
											</span>
										)} */}
									</label>
								</div>
                                <Link href="/createnewpassword">
                                    <NavButton styles="w-full mb-6 mt-8 bg-foundation-purple-purple-400 text-white hover:bg-foundation-purple-purple-200 active:bg-foundation-purple-purple-100">
                                        Submit Code
                                    </NavButton>
                                </Link>
								<p className="text-base text-gray-700 text-center my-0">
									{`Didn't`} receive the code{' '}
									<a
										href="#"
										className="text-foundation-purple-purple-400 hover:text-foundation-purple-purple-200"
									>
										Resend Code
									</a>
								</p>
							</form>
						</div>
					</div>
					<h3 className="2md:w-[293px] flex align-bottom w-full leading-[24px] text-base font-normal text-wrap my-0 text-[#d0d0d0] mt-10">
						© 2024 XYZ. All rights reserved.
					</h3>
				</div>
				<div className="2md:w-1/2 w-full h-auto flex-1 bg-foundation-purple-purple-400 rounded-xl overflow-hidden container">
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
