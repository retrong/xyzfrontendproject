"use client";

import React from 'react';
import ManageAccountForm from './_components/manageAccountForm';

export default function ManageYourAccount() {
	return (
		<section className="w-full text-foundation-black-black-400 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] [row-gap:5px] mq1125:flex-wrap container mq850:px-12 px-4 ">
			<div className="flex flex-col gap-2 mt-2">
				<h2 className=" font-semibold text-[20px] m-0">Manage Your Users</h2>
				<p className="font-normal text-base text-foundation-grey-grey-800 m-0">
					Invite, Edit & Delete Users
				</p>
			</div>
            <ManageAccountForm/>

			
		</section>
	);
}
