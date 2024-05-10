import Image from 'next/image';
import React from 'react';
import { accountChart } from '../../../public';

export default function Report() {
  return (
		<div className="w-full flex justify-between mq750:justify-center mq750:items-center items-center align-middle text-left text-[40px] px-32 mq750:px-6 py-6">
			<div className="flex flex-row flex-wrap justify-start items-start">
				<div className="flex flex-col items-start justify-start gap-[4px] text-[30px]">
					<h3 className="max-w-[480px] font-normal inline-block my-0 py-2">
						Accounting and Financial Management
					</h3>
					<p className="max-w-[460px] text-base text-foundation-grey-grey-800 my-0 py-2">
						Gain visibility into your financial health and streamline accounting
						processes with our accounting and financial management module. From
						invoicing to expense tracking, our system provides the tools you
						need to manage your finances efficiently.
					</p>
				</div>
			</div>
            <div className='max-w-[605px] flex justify-start items-center align-middle relative h-[365px]'>
                <Image src={accountChart} alt='' />
            </div>
		</div>
	);
}
