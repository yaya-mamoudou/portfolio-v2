import React from 'react';
import SectionTitle from './section-title';
import VolunteerismIcon from './icons/volunteerism-icon';

export default function Volunteerism() {
	return (
		<div className='container-2 pb-20 px-6'>
			<SectionTitle icon={<VolunteerismIcon />} title='Volunteerism' />

			<div className='grid grid-cols-12 gap-6 md:gap-10'>
				{volunteerismData.map((item, index) => (
					<div key={index} className='col-span-12 md:col-span-6 xl:col-span-4'>
						<VolunteerismItem key={index} {...item} />
					</div>
				))}
			</div>
		</div>
	);
}

type VolunteerismType = {
	name: string;
	description: string;
	dates: string;
};

const VolunteerismItem = (props: VolunteerismType) => {
	return (
		<div className='space-y-2 border border-border h-full bg-white rounded-2xl p-6'>
			<div className='text-md font-semibold text-black'>{props.name}</div>
			<p className='text-sm'>{props.description}</p>
			<div className='text-black font-semibold text-sm'>{props.dates}</div>
		</div>
	);
};

const volunteerismData: VolunteerismType[] = [
	{
		name: 'Google Developer Groups On Campus Lead',
		description:
			'Built and led a student developer community by organising workshops, events, and mentorship sessions to help peers learn Google technologies and grow their careers.',
		dates: '2021 - 2022',
	},
	{
		name: 'Google Developer Groups Buea Organizer',
		description:
			'Planned and managed tech events, workshops, and hackathons to empower developers and tech enthusiasts of all levels with hands-on experience in Google technologies.',
		dates: '2021 - Present',
	},
];
