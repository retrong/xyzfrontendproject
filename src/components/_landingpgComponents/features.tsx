import Image from 'next/image';
import React from 'react';
import { monday, morphesus, oracle, proton, samsung, segment, zepline } from '../../../public';

export default function Features() {
  return (
		<section
			id="features"
			className="w-full h-[239px] md:h-auto align-middle flex text-center px-16 md:px-6"
		>
			<div className="flex flex-1 flex-col flex-wrap justify-center align-middle items-center">
				<h3 className="text-[20px] leading-[30px] font-semibold">
					Over 32+ software company businesses Partner with XYZ
				</h3>
				<div className="flex flex-row flex-1 flex-wrap justify-center gap-[30px] items-center sm:py-0 py-0">
					<Image
						src={zepline}
						alt=""
						className="w-[137px] h-auto object-contain"
						loading="lazy"
					/>
					<Image
						src={oracle}
						alt=""
						className="w-[137px] h-auto object-contain"
						loading="lazy"
					/>
					<Image
						src={morphesus}
						alt=""
						className="w-[137px] h-auto object-contain"
						loading="lazy"
					/>
					<Image
						src={samsung}
						alt=""
						className="w-[137px] h-auto object-contain"
						loading="lazy"
					/>
					<Image
						src={monday}
						alt=""
						className="w-[137px] h-auto object-contain"
						loading="lazy"
					/>
					<Image
						src={segment}
						alt=""
						className="w-[137px] h-auto object-contain"
						loading="lazy"
					/>
					<Image
						src={proton}
						alt=""
						className="w-[137px] h-auto object-contain"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
}
