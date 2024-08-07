import React from 'react';
import CompanyFormList from './_components/companyFormList';

export default function BusinessAccount() {
	return (
		<section className="max-w-full text-foundation-black-black-400 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] [row-gap:5px] xl:flex-wrap container 2md:px-12 px-4 mt-4 mb-8 ">
			<div className="flex flex-row items-center px-4 justify-between mb-5 md:mb-4 w-full">
				<div className="flex flex-col gap-2 mt-2">
					<h2 className=" font-[500] text-[20px] m-0">Manage Your Companies</h2>
					<p className="font-normal text-base text-foundation-grey-grey-700 m-0">
						You can add multiple companies & financial periods.
					</p>
				</div>
				<div>
					<a
						href="#"
						className="text-base text-foundation-purple-purple-400 hover:text-foundation-purple-purple-300"
					>
						<span>+</span>Add A New Company
					</a>
				</div>
			</div>
            <CompanyFormList />
		</section>
	);
}
