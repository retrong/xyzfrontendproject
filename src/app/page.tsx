import AnalyticsAndReport from '@/components/_landingpgComponents/analytics';
import Crm from '@/components/_landingpgComponents/CRM';
import Features from '@/components/_landingpgComponents/features';
import Hero from '@/components/_landingpgComponents/hero';
import Navbar from '@/components/_landingpgComponents/navbar';
import Product from '@/components/_landingpgComponents/product';
import Report from '@/components/_landingpgComponents/report';
import Image from 'next/image';
import React from 'react';
import { heroframe } from '../../public';

export default function LandingPage() {
  return (
		<section className=" bg-white w-full overflow-hidden h-full">
			<div className="bg-foundation-grey-grey-50 px-12 py-[10px] w-[100%] mq450:px-4 fixed z-[998]">
				<Navbar />
			</div>
			<div className="flex flex-wrap">
				<Image
					src={heroframe}
					alt=""
					className="absolute bottom-0 top-[650px] w-[100%] object-cover mq750:top-[500px] mq1050:h-[50%] mq750:h-[40%] mq450:h-[30%] mq450:top-[500px] h-[444px]"
				/>
				<Hero />
			</div>
			<div className="py-14 mq850:py-7 mt-24 mq850:mt-32 mq750:mt-12 mq450:mt-5">
				<Features />
			</div>
			<div className="bg-foundation-grey-grey-900 absolute z-[999] h-px w-full opacity-[0.3]" />

			<div className="py-12 mq750:py-8">
				<Product />
			</div>
			<div className="bg-foundation-grey-grey-50 w-full overflow-hidden">
				<Report />
			</div>
			<div className="w-full overflow-hidden">
				<Crm />
			</div>
			<div className="bg-foundation-grey-grey-50 w-full overflow-hidden">
				<AnalyticsAndReport />
			</div>
		</section>
	);
}
