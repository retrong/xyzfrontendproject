    import React from 'react';
import AccordionExpandDefault from './Accordion';

export default function FAQ() {
  return (
		<section id='faq' className="w-full h-full py-14 px-16 mq750:px-6 flex justify-center items-center">
			<div className="item-center flex flex-col flex-wrap text-center justify-start text-foundation-black-black-500">
				<div className="max-w-[1197px] w-auto justify-center items-center flex-col flex text-center text-wrap gap-[14px] mb-12 mq750:mb-6">
					<h2 className=" font-normal text-[32px] m-0 inline-block">
						Frequently asked questions
					</h2>
					<p className="max-w-[972px] w-auto text-center text-foundation-grey-grey-900 text-base inline-block m-0">
						Everything you need to know about the product and billing.
					</p>
				</div>
                
                <div className='flex flex-col max-w-[972px] w-auto flex-wrap text-wrap'>
                    <AccordionExpandDefault />
                </div>
			</div>
		</section>
	);
}
