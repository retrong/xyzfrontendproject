import Button from '@/components/molecules/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { cart, cashMultiple, gift, linkimg } from '../../../../../public';

export default function SalesCalculationSection() {
  return (
		<div className="w-full !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[27px] max-w-full mq1050:flex-wrap">
			<div className="flex-[0.8929] shadow-[0px_2px_10px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-white flex flex-col items-start justify-start pt-[18px] px-[27px] pb-[4.6px] box-border gap-[12px] min-w-[209px] mq450:flex-1">
				<div className="w-[279px] h-[132px] relative shadow-[0px_2px_10px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-white hidden" />
				<div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
					<Image
						className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
						loading="lazy"
						alt=""
						src={cashMultiple}
					/>
					<Link href="#">
						<Image
							className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
							loading="lazy"
							alt=""
							src={linkimg}
						/>
					</Link>
				</div>
				<h2 className="m-0 relative text-inherit font-normal font-inherit z-[1]">
					Total Revenue
				</h2>
				<div className="flex flex-col items-start justify-start gap-[5.8px] text-5xl text-foundation-grey-grey-800">
					<div className="relative shrink-0 whitespace-nowrap z-[1] mq450:text-lgi">
						$ 50,000,000
					</div>
					<div className="flex flex-row items-start justify-start py-0 pr-[62px] pl-[66px] text-xs text-white"></div>
				</div>
			</div>
			<div className="flex-[0.8929] shadow-[0px_2px_10px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-white flex flex-col items-start justify-start pt-[18px] px-[27px] pb-[4.6px] box-border gap-[12px] min-w-[209px] mq450:flex-1">
				<div className="w-[279px] h-[132px] relative shadow-[0px_2px_10px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-white hidden" />
				<div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
					<Image
						className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
						loading="lazy"
						alt=""
						src={cart}
					/>
					<Link href="#">
						<Image
							className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
							loading="lazy"
							alt=""
							src={linkimg}
						/>
					</Link>
				</div>
				<h2 className="m-0 relative text-inherit font-normal font-inherit z-[1]">
					Number of Orders
				</h2>
				<div className="flex flex-col items-start justify-start gap-[5.8px] text-5xl text-foundation-grey-grey-800">
					<div className="relative shrink-0 whitespace-nowrap z-[1] mq450:text-lgi">
						$ 50,000,000
					</div>
					<div className="flex flex-row items-start justify-start py-0 pr-[62px] pl-[66px] text-xs text-white"></div>
				</div>
			</div>
			<div className="flex-[0.8929] shadow-[0px_2px_10px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-white flex flex-col items-start justify-start pt-[18px] px-[27px] pb-[4.6px] box-border gap-[12px] min-w-[209px] mq450:flex-1">
				<div className="w-[279px] h-[132px] relative shadow-[0px_2px_10px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-white hidden" />
				<div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
					<Image
						className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
						loading="lazy"
						alt=""
						src={cart}
					/>
					<Link href="#">
						<Image
							className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
							loading="lazy"
							alt=""
							src={linkimg}
						/>
					</Link>
				</div>
				<h2 className="m-0 relative text-inherit font-normal font-inherit z-[1]">
					Top Selling Product
				</h2>
				<div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-foundation-grey-grey-800">
					<Button styles=''>Plastics</Button>
					<div className="relative inline-block min-w-[125px]">
						10000 units sold
					</div>
				</div>
			</div>
		</div>
	);
}
