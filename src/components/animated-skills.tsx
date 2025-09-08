import React from 'react';

const skills: string[] = [
	'Tailwind CSS',
	'Next.js',
	'React',
	'TypeScript',
	'Node.js',
	'Python',
	'Nest.js',
	'PostgreSQL',
	'Prisma',
	'GraphQL',
	'REST',
	'React Native',
	'Angular',
];

function Row({ reverse = false }: { reverse?: boolean }) {
	const REPEATS = 6; // ensure track width > viewport so no gaps
	const items = Array.from({ length: REPEATS }).flatMap(() => skills);
	return (
		<div className={`marquee ${reverse ? 'marquee--reverse' : ''}`}>
			<div className='marquee__track py-1'>
				{items.map((label, idx) => (
					<span
						key={`${label}-${idx}`}
						className='inline-flex bg-white shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm text-[--color-black] backdrop-blur'
					>
						{label}
					</span>
				))}
			</div>
		</div>
	);
}

export default function AnimatedSkills() {
	return (
		<section className='w-full space-y-1'>
			<Row />
			<Row reverse />
		</section>
	);
}
