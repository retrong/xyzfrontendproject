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

export default function CreateNewPassword() {
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
						<div className="max-w-[350px] md:w-full flex flex-col justify-start text-start items-center">
							<h2 className=" w-full font-normal text-start text-gray-700 mb-7">
								Create a New Password
							</h2>
							<p className=" w-full font-normal text-wrap text-start text-gray-700 mb-7">
								Kindly Create a new password.
							</p>
							<form className="w-full">
								<div>
									<label className="block mb-4">
										<span className=" text-foundation-grey-grey-900">
											Password
										</span>
										<input
											type="password"
											placeholder="Create a new password"
											className="px-4 py-4 mt-2 placeholder:text-foundation-grey-grey-700 w-full rounded-lg border-[1px] border-solid border-[#d0d0d0]"
											// {...register('password', {
											// 	required: true,
											// 	pattern: '',
											// })}
										/>
										{/* error handler */}
										{/* {error.password && (
											<span className="error-message px-2">
												password is required
											</span>
										)} */}
									</label>
									<label className=" block mb-6">
										<span className=" text-foundation-grey-grey-900">
											Confrim Password
										</span>
										<input
											type="password"
											placeholder="Create a password"
											className="px-4 py-4 mt-2 placeholder:text-foundation-grey-grey-700 w-full rounded-lg border-[1px] border-solid border-[#d0d0d0] active:border-foundation-purple-purple-400 focus:border-foundation-purple-purple-400 focus:border-2 "
											// {...register('password', {
											// 	required: true,
											// 	pattern: '',
											// })}
										/>
										{/* error handler */}
										{/* {error.password && (
											<span className="error-message px-2">
												password is required
											</span>
										)} */}
									</label>
								</div>
								<NavButton styles="w-full mb-6 mt-2 bg-foundation-purple-purple-400 text-white hover:bg-foundation-purple-purple-200 active:bg-foundation-purple-purple-100">
									Submit
								</NavButton>
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
					/>
				</div>
			</div>
		</section>
	);
}
