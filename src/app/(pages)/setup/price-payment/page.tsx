import React from 'react';
import PricePaymentForm from '../_setupComponets/pricePaymentForm';

export default function PricePayment() {
	return (
		<section className="w-full text-foundation-black-black-400 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] [row-gap:5px] xl:flex-wrap container 2md:px-12 px-4 ">
			<div className="flex flex-col gap-2 mt-2">
				<h2 className=" font-[500] text-[20px] m-0">Price & Payments</h2>
				<p className="font-normal text-base text-foundation-grey-grey-700 m-0">
					Manage your Subscription Plan and User Access
				</p>
			</div>
			<PricePaymentForm />
		</section>
	);
}
