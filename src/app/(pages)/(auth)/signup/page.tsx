import NavButton from '@/components/_landingpgComponents/navButton';
import Image from 'next/image';
import React from 'react';
import { authImage, facebookicon, googleicon, logoxyz } from '../../../../../public';

export default function SignUp() {
  return (
		<section className="w-full h-full bg-foundation-white-white-400 flex justify-center items-center">
			<div className=" h-[100svh] py-14 px-16 mq750:px-6 ">
				<div>
					<div className="flex justify-start items-start ">
						<Image
							src={logoxyz}
							alt=""
							className="w-[108px] h-10 object-contain"
						/>
					</div>
					<div className="flex flex-col justify-start items-start text-start gap-[20px]">
						<h2>Create your XYZ account</h2>

						<div>
							<label className=" max-w-[350px] w-auto">
								<span className=" text-foundation-grey-grey-800">
									Email Address
								</span>
								<input
									type="email"
									placeholder="Enter your email address"
									className="px-4 py-4 placeholder:text-foundation-grey-grey-700 w-full "
								/>
							</label>
							<label className=" max-w-[350px] w-auto">
								<span className=" text-foundation-grey-grey-800">
									Email Address
								</span>
								<input
									type="password"
									placeholder="Create a password"
									className="px-4 py-4 placeholder:text-foundation-grey-grey-700 w-full "
								/>
							</label>
						</div>
						<NavButton styles="w-full">Sign Up</NavButton>
						<p className="text-base">
							If you already have an account{' '}
							<a href="" className="text-foundation-purple-purple-400">
								Login
							</a>
						</p>

						<div>
							<p>Or Sign Up using</p>
						</div>

						<div>
							<button className="bg-white">
								<Image src={googleicon} alt="" />
								Google
							</button>
							<button className="bg-white">
								<Image src={facebookicon} alt="" />
								facebook
							</button>
						</div>
					</div>
					<div>
						<h3 className="w-[293px] relative leading-[24px] text-base inline-block shrink-0 my-0 text-[#667085] whitespace-nowrap">
							© 2024 XYZ. All rights reserved.
						</h3>
					</div>
				</div>
				<div className=" bg-foundation-purple-purple-400">
					<Image
						src={authImage}
						alt=""
						className="w-fit h-fit object-contain"
					/>
				</div>
			</div>
		</section>
	);
}
