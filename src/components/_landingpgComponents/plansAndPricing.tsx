import React from 'react';
import Button from '../molecules/button';
import NavButton from './navButton';

const pricingCard = [
	{
		title: 'Free Plan',
		content:
			'Enjoy a 30-day free trial of all modules with up to 3 users. Experience the power of XYZ Business Management Applications firsthand and see how they can benefit your business.',
	},
	{
		title: 'Pay-Per-Module',
		content:
			'Select the modules you need and pay only for what you use. Whether you require sales management, purchase management, inventory management, accounting, CRM, or reporting and analytics, you can tailor your package to suit your requirements.',
	},
];


export default function PriceAndPricing() {
  return (
		<section id='pricing' className="w-full h-full py-14 px-16 mq750:px-6 flex justify-center items-center">
			<div className="item-center flex flex-col flex-wrap text-center justify-start text-foundation-black-black-500">
				<div className="max-w-[1197px] w-auto justify-center items-center flex-col flex text-center text-wrap gap-[14px] mb-12 mq750:mb-6">
					<h2 className=" font-normal text-[32px] m-0 inline-block">
						Plans & Pricing
					</h2>
					<p className="max-w-[972px] w-auto text-center text-foundation-grey-grey-900 text-base inline-block m-0">
						Choose the pricing plan that best suits your business needs. With
						XYZ Business Management Applications, you get a free 30-day trial to
						explore our products and experience their full potential. After the
						trial period, you can opt for one of our flexible pricing options
					</p>
				</div>

				<div className="bg-foundation-grey-grey-50 rounded-[26px]">
					<div className="py-10 px-10">
						<div className="flex flex-row flex-wrap justify-center mq750:justify-center items-center gap-[32px] text-[26px] my-0 mq850:my-10">
							{pricingCard.map((price) => (
								<div
									key={price.title}
									className="w-[310px] relative h-[349px] bg-foundation-grey-grey-50 hover:bg-foundation-purple-purple-900 hover:text-foundation-grey-grey-300 flex flex-col flex-wrap items-start justify-start p-6 box-border text-start text-[10px] cursor-pointer rounded-[26px] hover:shadow-[0px_42px_34px_rgba(82,_67,_194,_0.3)] hover:transform hover:translate-y-[6%]"
								>
									<div className=" flex flex-col px-2 py-2">
										<h3 className="tracking-[-0.01em] text-5xl font-normal leading-[90%] my-3">
											{price.title}
										</h3>
										<p className="text-base hover:text-foundation-grey-grey-300 inline-block">
											{price.content}
										</p>
										<div className="py-2 inline-block">
											<button className="bg-foundation-purple-purple-400 border-none hover:bg-foundation-purple-purple-100 py-4 px-4 text-foundation-white-white-400 rounded-[16px]">
												Choose Plan
											</button>
										</div>
									</div>
								</div>
							))}
							<div className="w-[292px] relative h-[349px] bg-foundation-grey-grey-50 hover:bg-foundation-purple-purple-900 hover:text-foundation-grey-grey-300 flex flex-col items-start justify-start p-6 box-border text-start text-[10px] cursor-pointer rounded-[26px] hover:shadow-[0px_42px_34px_rgba(82,_67,_194,_0.3)] hover:transform hover:translate-y-[6%]">
								<div className="w-full flex flex-col px-2 py-2">
									<div className="flex justify-end ">
										<button className="bg-foundation-purple-purple-100 border-none px-4 uppercase text-[10px] py-2 font-bold text-foundation-purple-purple-900 rounded-[28px]">
											most popular
										</button>
									</div>
									<h3 className="tracking-[-0.01em] font-normal text-5xl leading-[90%] my-3">
										Pay-Per-User
									</h3>
									<p className="text-base hover:text-foundation-grey-grey-300 inline-block">
										Choose the number of users you need for each module and pay
										per user. Whether you have a small team or a large
										workforce, our pricing is flexible to accommodate your
										business size and scale.
									</p>
									<div className="py-2 inline-block">
										<button className="bg-foundation-purple-purple-400 text-foundation-white-white-400 border-none hover:bg-foundation-purple-purple-100 py-4 px-4 rounded-2xl">
											Choose Plan
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
