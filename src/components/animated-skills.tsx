import { skills } from '~/mock';
import Skill from './skill';

export default function AnimatedSkills() {
	return (
		<section className='w-full space-y-1'>
			<Row />
			<Row reverse />
		</section>
	);
}

function Row({ reverse = false }: { reverse?: boolean }) {
	const REPEATS = 6; // ensure track width > viewport so no gaps
	const items = Array.from({ length: REPEATS }).flatMap(() => skills);
	return (
		<div className={`marquee ${reverse ? 'marquee--reverse' : ''}`}>
			<div className='marquee__track py-1'>
				{items.map((skill, idx) => (
					<Skill key={`${skill.label}-${idx}`} label={skill.label} />
				))}
			</div>
		</div>
	);
}
