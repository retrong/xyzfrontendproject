import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
    setupLogo
} from '../../../../../public';

export default function SetupHeader() {
	return (
		<section className="self-stretch bg-foundation-grey-grey-50 flex flex-row  justify-start align-middle items-center py-[14.5px] px-12 box-border max-w-full text-left text-5xl gap-[20px] text-foundation-black-black-400 font-text-xs-medium mq750:flex-wrap mq750:pl-6 mq750:pr-6 mq750:box-border mb-2">
			<div className="max-w-full">
				<Image src={setupLogo} alt="Setup logo" className='w-[90px] h-[90px] object-contain'/>
			</div>
            <div className='flex flex-col gap-1 m-0 max-w-[650px]'>
                <h1 className='m-0 text-[32px] text-foundation-black-black-400 font-normal'>Welcome to XYZ</h1>
                <p className='m-0 text-foundation-grey-grey-800 text-base'>{"Let's"} get started with basic information about your business and preferences to make organizing your business easy for you.</p>
            </div>
			
		</section>
	);
}
