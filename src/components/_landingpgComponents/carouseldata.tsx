import Image from 'next/image';
import React from 'react';
import {
    apostrophy,
    ellipse,
    group269,
    imagetes,
    stars,
    vector,
    wave,
} from '../../../public';


export default function CarouselData() {
  return (
		<div className="flex w-full justify-center h-full items-center">
			<div className="flex flex-row w-[1058px] h-auto items-center align-middle justify-between">
				<div className="container">
					{/* <Image
						src={group269}
						alt=""
						className="w-24 h-[98.2px] left-0 top-[10px] object-contain "
					/> */}
					<Image
						src={imagetes}
						alt=""
						className="w-[396px] h-auto object-contain"
					/>
					{/* <Image
						src={vector}
						alt=""
						className="w-[396px] h-auto object-contain"
					/>
					<Image
						src={wave}
						alt=""
						className="w-[396px] h-auto object-contain"
					/>
					<Image
						src={ellipse}
						alt=""
						className="w-[396px] h-auto object-contain"
					/> */}
				</div>
				<div className="flex flex-col justify-start items-start text-start align-middle">
					<div className='gap-3 flex flex-col'>
						<Image
							src={apostrophy}
							alt="apostrophy"
							className="w-[31px] h-[27px] object-contain"
						/>
						<Image
							src={stars}
							alt="apostrophy"
							className="w-[145px] h-[29px] object-contain"
						/>
					</div>
					<div className="w-[379px] inline-block text-foundation-black-black-500 text-[24px] mb-8 mt-3">
						<p className='inline-block my-0'>{`"XYZ has been a game-changer for our business. We've
                        seen a significant increase in project efficiency and
                        team collabora-tion since we started using it."`}</p>
					</div>
					<div className="w-[133px] h-[50px] text-[16px] text-start flex flex-col gap-[6px]">
						<h4 className="font-semibold m-0">Sarah Lee</h4>
						<p className=" text-[#757095] m-0">Ceo of Acme inc.</p>
					</div>
				</div>
			</div>
			
		</div>
	);
}
