import { ReactNode } from 'react';

type SkillProps = {
	label: string;
	icon?: ReactNode;
	experience?: number;
};
const Skill = (props: SkillProps) => {
	return (
		<span className='inline-flex gap-x-2 bg-white shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm text-[--color-black] backdrop-blur'>
			{props.icon}
			<span className='font-bold'>{props.label}</span>
			{props.experience && (
				<span>
					| {props.experience} year{props.experience > 1 ? 's' : ''}
				</span>
			)}
		</span>
	);
};

export default Skill;
