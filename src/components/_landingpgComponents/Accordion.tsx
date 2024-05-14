"use client" 

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import * as React from 'react';
import { useState } from 'react';
import { minuscircle, pluscircle } from '../../../public';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
	{
		title: 'Is there a free trial available?',
		answer:
			'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call toget you up and running as soon as possible.',
	},
	{
		title: 'Can I change my plan later?',
		answer:
			'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call toget you up and running as soon as possible.',
	},
	{
		title: 'Can I change my plan later?',
		answer:
			'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call toget you up and running as soon as possible.',
	},
];

export default function AccordionExpandDefault() {

    const [toggle, setToggle] = useState(false);

	return (
		<div>
			{faqData.map((faq) => (
				<Accordion
					onClick={() => setToggle((prev) => !prev)}
					key={faq.title}
					sx={{
						border: 'none', // Removing the border
                        boxShadow: 'none'
					}}
					className=" border-b-2 border-foundation-grey-grey-800 flex flex-col mb-3 py-4"
				>
					<AccordionSummary
						expandIcon={
							<Image src={toggle ? minuscircle : pluscircle} alt="" />
						}
						aria-controls="panel1-content"
						id="panel1-header"
					>
						<Typography className='font-semibold'>{faq.title}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>{faq.answer}</Typography>
					</AccordionDetails>
				</Accordion>
			))}
			{/* <Accordion>
				<AccordionSummary
					expandIcon={<Image src={pluscircle} alt="" />}
					aria-controls="panel2-content"
					id="panel2-header"
				>
					<Typography>Header</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion> */}
		</div>
	);
}
