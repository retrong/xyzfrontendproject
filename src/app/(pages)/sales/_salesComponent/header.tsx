import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { alertnotificatonicon, chevrondown, profileimage } from '../../../../../public';

export default function Header() {
  return (
		<section className="self-stretch bg-foundation-grey-grey-50 flex flex-row items-center justify-between py-[14.5px] px-12 box-border max-w-full gap-[20px] text-left text-5xl text-foundation-black-black-400 font-text-xs-medium md:flex-wrap md:pl-6 md:pr-6 md:box-border mb-2">
			<div className="w-[486px] flex flex-col items-start justify-start gap-[8px] max-w-full">
				<h1 className="m-0 relative text-inherit font-normal font-inherit sm:text-lgi">
					Sales Module
				</h1>
				<div className="self-stretch flex flex-col items-start justify-start max-w-full text-base">
					<div className="self-stretch flex flex-row items-center justify-start max-w-full">
						<div className="flex-1 flex flex-row items-center justify-start gap-[8px] max-w-full md:flex-wrap">
							<Link
								href="#"
								className="m-0 hover:text-foundation-purple-purple-400 relative text-inherit font-normal font-inherit"
							>
								Admin Dashboard
							</Link>
							<Image
								className="h-6 w-6 relative overflow-hidden shrink-0 object-contain min-h-[24px]"
								loading="lazy"
								alt=""
								src={chevrondown}
							/>
							<Link
								href="#"
								className="m-0 hover:text-foundation-purple-purple-400 relative text-inherit font-normal font-inherit inline-block min-w-[102px]"
							>
								Sales Module
							</Link>
							<Image
								className="h-6 w-6 relative overflow-hidden shrink-0 object-contain min-h-[24px]"
								loading="lazy"
								alt=""
								src={chevrondown}
							/>
							<Link
								href="#"
								className="m-0 hover:text-foundation-purple-purple-400 relative text-inherit font-normal font-inherit inline-block min-w-[72px]"
							>
								Overview
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="h-8 flex flex-row items-center justify-start gap-[16px] text-base text-foundation-purple-purple-400">
				<div className="flex flex-row items-center justify-start gap-[8px]">
					<Link href="#">
						<Image
							width={500}
							height={500}
							className="h-8 w-8 relative rounded-[50%] object-cover"
							loading="lazy"
							alt=""
							src={profileimage}
						/>
					</Link>
					<Link
						href="#"
						className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[48px]"
					>{`Admin `}</Link>
				</div>
				<div className="h-8 w-8 relative min-h-[32px] flex items-center justify-center">
					<Link href="#">
                        <Image
                            width={500}
                            height={500}
                            className="h-full w-full object-contain absolute left-[0px] top-[2px] [transform:scale(1.625)]"
                            loading="lazy"
                            alt=""
                            src={alertnotificatonicon}
                        />
                    </Link> 
				</div>
			</div>
		</section>
	);
};