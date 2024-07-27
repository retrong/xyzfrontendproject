import React from 'react';
import AdminCompanyForm from './admin-company-form';

export default function AdminCompanyFormList() {
	return (
		<>
			<AdminCompanyForm companyName="Gfams" />
			<AdminCompanyForm companyName="ASAP" />
			<div className="flex flex-row w-full justify-between mt-1 pb-5 px-4">
				<button
					type="button"
					className="rounded-xl bg-white px-4 py-3 text-sm font-normal text-foundation-purple-purple-300 shadow-sm border-solid border-foundation-purple-purple-200 border-2 hover:bg-foundation-purple-purple-400 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
				>
					Prev
				</button>
				<button
					type="button"
					className="rounded-xl px-4 py-3 text-sm font-normal shadow-sm border border-solid border-foundation-purple-purple-400 bg-foundation-purple-purple-400 hover:bg-foundation-purple-purple-300 text-white disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
				>
					Save & Proceed
				</button>
			</div>
		</>
	);
}
