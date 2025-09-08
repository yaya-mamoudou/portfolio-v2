import React, { ReactNode } from 'react';

type SectionTitleProps = {
	icon: ReactNode;
	title: string;
	description?: string;
};
export default function SectionTitle(props: SectionTitleProps) {
	return (
		<div className='mb-6'>
			<div className='flex gap-x-2 mb-2 items-center'>
				{props.icon}
				<h2 className='font-bold text-black text-xl'>{props.title}</h2>
			</div>
			<p className='w-full lg:w-2/3'>{props.description}</p>
		</div>
	);
}
