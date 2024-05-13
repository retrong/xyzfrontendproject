import Image from 'next/image';
import React from 'react';
import { guageChart } from '../../../public';

export default function AnalyticsAndReport() {
	return (
		<div className="justify-center flex items-center align-middle">
			<div className="flex flex-1 flex-col justify-between mq750:justify-center mq750:items-center items-center align-middle text-left text-[40px] px-16 mq1050:px-16 gap-6 mq850:flex-row mq750:px-6 py-6 max-w-[1200px]">
                <div className="flex flex-row flex-wrap justify-start items-start">
                    <div className="flex flex-col items-start justify-start gap-[4px] text-[30px]">
                        <h3 className="max-w-[480px] font-normal inline-block my-0 py-2">
                            Reporting and Analytics
                        </h3>
                        <p className="max-w-[440px] text-base text-foundation-grey-grey-800 my-0 py-2">
                            Unlock valuable insights into your business performance with our
                            reporting and analytics module. Visualize data, track key
                            metrics, and make informed decisions to drive business success.
                        </p>
                    </div>
                </div>
                <div className="max-w-[605px] mt-0 mq850:mt-5 flex justify-start items-center align-middle relative h-[365px]">
                    <Image
                        src={guageChart}
                        alt=""
                        className="w-[355px] h-[400px] object-contain"
                    />
                </div>
			</div>
		</div>
	);
}
