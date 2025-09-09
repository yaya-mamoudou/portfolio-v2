import React from 'react';
import SectionTitle from './section-title';
import EducationIcon from './icons/education-icon';
import { education, type Education } from '~/mock';

export default function Education() {
	return (
		<div id='education' className='container-2 px-6 pb-20'>
			<SectionTitle icon={<EducationIcon />} title='Education' />
			<div>
				{education.map((item, index) => (
					<EducationItem key={index} {...item} />
				))}
			</div>
		</div>
	);
}

const EducationItem = (props: Education) => {
	return (
		<div className='border border-border bg-white rounded-2xl p-6 w-fit h-fit'>
			<div className='text-md font-semibold text-black'>
				{props.degree} in {props.major}
			</div>
			<p className='text-sm'>{props.university}</p>
			<div className='text-black text-sm'>GPA: {props.gpa}</div>
		</div>
	);
};
