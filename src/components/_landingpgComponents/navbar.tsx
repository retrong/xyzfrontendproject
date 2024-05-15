import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { logoxyz } from '../../../public';
import NavButton from './navButton';
import SideBar from './sideBar';

export const navLinks = [
	{
		title: 'Home',
		link: '#',
		id: '',
	},
	{
		title: 'Features',
		link: '',
		id: 'features',
	},
	{
		title: 'About Us',
		link: '#about',
		id: 'about',
	},
	{
		title: 'Pricing',
		link: '',
        id: "pricing",
	},
	{
		title: 'FAQ',
		link: '',
        id: "faq",
	},
];

export default function Navbar() {
  return (
		<div className="w-full h-auto max-w-[1400px] justify-center items-center flex flex-wrap flex-1 align-middle text-left">
			<div className="flex flex-row items-center align-middle justify-between w-[1200px]">
				<Image
					src={logoxyz}
					alt=""
					className="mq850:w-[108px] w-[90px] h-auto object-contain"
					loading="lazy"
				/>
				<div className="hidden flex-row justify-center item-center mq850:flex">
					<ul className=" font-normal flex-row list-none w-full flex gap-[32px]">
						{navLinks.map((nav, index) => (
							<li
								key={nav.title}
								className="gap-[32px] flex hover:text-foundation-black-black-400 hover:font-bold text-foundation-black-black-400 cursor-pointer"
							>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
				<div className="mq850:flex hidden items-center justify-center text-white font-normal gap-[16px] ">
					<NavButton styles="bg-foundation-purple-purple-400 text-white hover:bg-foundation-purple-purple-200 active:hover:bg-foundation-purple-purple-100">
						Sign Up
					</NavButton>
					<NavButton styles=" hover:bg-foundation-purple-purple-200 bg-white hover:text-white text-foundation-purple-purple-400 active:hover:bg-foundation-purple-purple-100">
						Login
					</NavButton>
				</div>
				<div className=" mq850:hidden flex">
					<SideBar />
				</div>
			</div>
		</div>
	);
}
