import React from 'react';
import SectionTitle from './section-title';
import ProjectsIcon from './icons/projects-icon';
import { projects } from '~/mock';
import ProjectCard from './project-card';

export default function Projects() {
	return (
		<div id='projects' className='container-2 py-20 px-6'>
			<SectionTitle
				icon={<ProjectsIcon />}
				description='These are a mix of projects I’ve worked on at previous jobs and for clients. They showcase my ability to build user-friendly interfaces and reliable backend systems while solving real-world problems.'
				title='Projects'
			/>

			<div className='grid gap-20 mt-10 grid-cols-12 flex-wrap'>
				{projects.map((project, index) => (
					<div key={index} className=' col-span-12 md:col-span-6 xl:col-span-4'>
						<ProjectCard {...project} key={`${index}-${project.name}`} />
					</div>
				))}
			</div>
		</div>
	);
}
