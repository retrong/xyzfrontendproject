import Navbar from '@/components/_landingpgComponents/navbar';
import React from 'react';

export default function LandingPage() {
  return (
		<section className=" bg-white w-full overflow-hidden h-full">
			<div className="bg-foundation-grey-grey-50 px-12 py-[10px] mq450:px-4">
				<Navbar />
			</div>
		</section>
	);
}
