import Image from 'next/image';
import React from 'react';
import { accountChart } from '../../../public';

export default function Report() {
  return (
		<section
			id="about"
			className="justify-center flex items-center align-middle"
		>
			<div className=" flex flex-1 flex-col justify-between md:justify-center md:items-center items-center align-middle text-left text-[40px] px-16 lg:px-16 gap-6 2md:flex-row md:px-6 py-6 max-w-[1200px]">
				<div className="flex flex-row flex-wrap justify-start items-start px-4">
					<div className="flex flex-col items-start justify-start gap-[4px] text-[30px]">
						<h3 className="max-w-[480px] text-[40px] sm:text-[28px] font-normal my-0 py-2 text-wrap">
							Accounting and Financial Management
						</h3>
						<p className="max-w-[460px] text-base text-foundation-grey-grey-800 my-0 py-2">
							Gain visibility into your financial health and streamline
							accounting processes with our accounting and financial management
							module. From invoicing to expense tracking, our system provides
							the tools you need to manage your finances efficiently.
						</p>
					</div>
				</div>
				<div className="max-w-[605px] flex justify-start items-center align-middle relative h-[365px]">
					<Image
						src={accountChart}
						alt=""
						className="w-fit md:w-[450px] sm:w-[350px] h-fit object-contain"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
}
