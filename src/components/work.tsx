'use client';
import React from 'react';
import SectionTitle from './section-title';
import WorkIcon from './icons/work-icon';
import Image from 'next/image';
import Link from 'next/link';
import { workData, WorkType } from '~/mock';
import { Button } from '@heroui/react';
import DownloadIcon from './icons/download-icon';

export default function Work() {
	return (
		<div className='container-2 pt-10 pb-20 px-6'>
			<SectionTitle icon={<WorkIcon />} title='Work' />
			<div className='border border-border space-y-6 p-4 lg:w-3/5 xl:w-2/5 rounded-2xl'>
				{workData.map((work) => (
					<WorkItem {...work} key={work.company} />
				))}
				<Button
					as={Link}
					target='_blank'
					href='https://drive.google.com/file/d/1zgCO2qM0kwky_S1v4ydnrT9qy6BZKc7L/view'
					className='w-full bg-[#F0F0F0] min-h-[60]'
				>
					Download CV <DownloadIcon />
				</Button>
			</div>
		</div>
	);
}

const WorkItem = (props: WorkType) => {
	return (
		<div className='flex gap-x-4 items-center'>
			<div className='size-[40] lg:size-[60] border border-border rounded-full bg-[#EDEDED] flex items-center justify-center'>
				<Image
					className='rounded-full md:size-[40]'
					src={props.img}
					width={25}
					height={25}
					alt={props.company}
				/>
			</div>
			<div className=' sm:flex justify-between flex-1 items-end'>
				<div>
					<Link className='hover:underline' target='_blank' href={props.url}>
						<div className='text-[#4B4B4B] text-md font-semibold'>{props.company}</div>
					</Link>
					<div className='text-sm'>{props.position}</div>
				</div>
				<div className='text-sm'>{props.dates}</div>
			</div>
		</div>
	);
};
