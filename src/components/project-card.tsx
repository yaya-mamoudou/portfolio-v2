import Link from 'next/link';
import React from 'react';
import type { Project } from '~/mock';

export default function ProjectCard(props: Project) {
	let color = '';
	switch (props.type) {
		case 'Client':
			color = '#1CCAAD';
			break;
		case 'Fun':
			color = 'pink';
		case 'Personal':
			color = 'cornflowerblue';
			break;
		case 'Work':
			color = 'orange';
			break;
	}

	return (
		<div className='space-y-2 w-full'>
			<div className='border border-border rounded-2xl bg-[#B9B9B9]/9 h-[300px]'></div>
			<div>
				<Link className='hover:underline' href={props.link}>
					<h2 className='text-black font-bold text-md'>{props.name}</h2>
				</Link>
				<p className='text-sm text-[#848484]'>{props.tools}</p>
			</div>
			<div className='border flex items-center font-semibold text-sm gap-2 w-fit px-4 border-[#E4E4E4] bg-[#B9B9B9]/9'>
				<div style={{ background: color }} className='size-[5] rounded-full'></div>
				{props.type}
			</div>

			<p className='mt-4 line-clamp-2'>{props.description}</p>
		</div>
	);
}
