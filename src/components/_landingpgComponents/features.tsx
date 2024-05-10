import Image from 'next/image';
import React from 'react';
import { monday, morphesus, oracle, proton, samsung, segment, zepline } from '../../../public';

export default function Features() {
  return (
		<div className="w-full h-[239px] mq750:h-auto align-middle flex text-center px-16 mq750:px-6">
			<div className="flex flex-1 flex-col flex-wrap justify-center align-middle items-center">
                <h3 className='text-[20px] leading-[30px] font-semibold'>
                    Over 32+ software company businesses Partner with XYZ
                </h3>
				<div className="flex flex-row flex-1 flex-wrap justify-center gap-[30px] items-center mq450:py-0 py-0">
					<Image
						src={zepline}
						alt=""
						className="w-[137px] h-auto object-contain"
					/>
					<Image
						src={oracle}
						alt=""
						className="w-[137px] h-auto object-contain"
					/>
					<Image
						src={morphesus}
						alt=""
						className="w-[137px] h-auto object-contain"
					/>
					<Image
						src={samsung}
						alt=""
						className="w-[137px] h-auto object-contain"
					/>
					<Image
						src={monday}
						alt=""
						className="w-[137px] h-auto object-contain"
					/>
					<Image
						src={segment}
						alt=""
						className="w-[137px] h-auto object-contain"
					/>
					<Image
						src={proton}
						alt=""
						className="w-[137px] h-auto object-contain"
					/>
				</div>
			</div>

		</div>
	);
}
