import React from 'react';

export default function CTA() {
  return (
		<section className="w-full h-full py-14 px-16 mq750:px-6 flex justify-center items-center">
			<div className="item-center flex flex-col flex-wrap text-center justify-start gap-[24px] text-foundation-white-white-400 py-10 px-10">
				<div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
					<h3 className="font-normal text-[32px] inline-block self-stretch m-0">
						Get started with our 30-days free trial
					</h3>
					<p className="max-w-[980px] w-auto text-center font-normal text-base inline-block m-0">
						Take the first step towards optimizing your business processes and
						driving growth with XYZ Business Management Applications. Contact us
						today to get started with your free trial!
					</p>
				</div>
				<div className="flex flex-col items-center justify-start pt-4 px-0 pb-0 gap-[16px] text-left text-base">
					<div className="w-[100%] mt-4 self-stretch flex flex-row flex-wrap items-center justify-center gap-[16px]">
						<input
							type="email"
							className="rounded-[16px] px-5 w-[652px] mq750:w-full py-4 placeholder:text-foundation-grey-grey-900"
							placeholder="Enter your email"
						/>
						<button className="bg-foundation-purple-purple-400 text-foundation-white-white-400 border-none hover:bg-foundation-purple-purple-100 py-4 px-6 rounded-2xl whitespace-nowrap">
							Sign Up
						</button>
					</div>
					<p className="max-w-[635px]">
						By clicking Sign Up {"you're"} confirming that you agree with our{' '}
						<span className="underline">Terms and Conditions.</span>
					</p>
				</div>
			</div>
		</section>
	);
}
