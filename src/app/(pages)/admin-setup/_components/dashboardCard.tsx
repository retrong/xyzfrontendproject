import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface DashboardCardProps {
    title: string;
    icon: string;
    content: string;
    path: string;
}


export default function DashboardCard({title, icon, content, path} : DashboardCardProps) {
  return (
		<Link href={path} className='w-full'>
			<div className="bg-foundation-purple-purple-400 hover:bg-foundation-purple-purple-200 rounded-xl max-h-[200px] px-6 py-6 text-white h-full">
				<div className="flex justify-between items-center">
					<h3 className='font-medium text-[20px] leading-[20px] m-0'>{title}</h3>
					<Image
						src={icon}
						alt=""
						width={500}
						height={500}
                        loading='lazy'
						className="h-[24px] w-[24px] object-contain"
					/>
				</div>
				<p className='font-normal text-[14px] leading-[16px]'>{content}</p>
			</div>
		</Link>
	);
}
