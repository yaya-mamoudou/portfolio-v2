import React from 'react';
import SectionTitle from './section-title';
import SkillsIcon from './icons/skills-icon';
import { skills } from '~/mock';
import Skill from './skill';

export default function Skills() {
	return (
		<div id='skills' className='container-2 pb-20 px-6'>
			<SectionTitle icon={<SkillsIcon />} title='Skills' />

			<div className='flex gap-2 flex-wrap'>
				{skills.map((skill, index) => (
					<Skill
						label={skill.label}
						experience={skill.experience}
						key={`${index}-${skill.label}`}
					/>
				))}
			</div>
		</div>
	);
}
