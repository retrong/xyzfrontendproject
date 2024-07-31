import Navbar from '@/components/_landingpgComponents/navbar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { aboutusImg, logoxyz } from '../../../../public';

export default function AboutUs() {
  return (
		<section className="bg-white w-full overflow-hidden h-full">
			<div className="bg-foundation-grey-grey-50 px-16 py-[10px] w-[100%] mq450:px-6 fixed z-[998]">
				<div className='flex justify-start items-center py-2 mq750:py-2'>
					<Link href="/">
						<Image
							src={logoxyz}
							alt=""
							className="mq850:w-[108px] w-[90px] h-auto object-contain"
							loading="lazy"
						/>
					</Link>
				</div>
			</div>
			<div className="w-full items-start justify-start text-foundation-black-black-400 py-[14px] mt-14 px-16 mq750:px-6">
				<div className="flex flex-col flex-wrap mq850:items-center items-start justify-start text-foundation-black-black-500 py-10 mq750:py-5">
					<h1 className="inline-block text-start font-medium text-[32px] mq750:text-[32px] my-0">
						About XYZ
					</h1>
					<p className=" inline-block text-start text-foundation-grey-grey-800 text-5xl mq750:text-[20px] flex-wrap">
						At XYZ Company, our mission is to empower businesses with
						cutting-edge technologies and exceptional services. We believe in
						delivering value to our customers by understanding their unique
						challenges and providing tailored solutions. Our core values of
						integrity, innovation, and customer satisfaction drive everything we
						do.
					</p>
				</div>
				<div className="flex flex-col flex-wrap mq850:items-center items-start justify-start text-foundation-black-black-500 py-10 mq750:py-5">
					<h2 className="inline-block text-start font-medium text-[32px] mq750:text-[32px] my-0">
						Our Mission
					</h2>
					<p className=" inline-block text-foundation-grey-grey-800 text-[20px] mq750:text-[20px] flex-wrap">
						To empower businesses with innovative solutions that drive growth,
						efficiency, and success.
					</p>
					<div className="flex justify-center items-center w-full">
						<Image
							src={aboutusImg}
							alt=""
							className="max-w-[550px] w-full h-auto rounded-2xl object-contain"
							loading="lazy"
							placeholder="blur"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
